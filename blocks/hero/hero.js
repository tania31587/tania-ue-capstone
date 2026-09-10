export default function decorate(block) {
    const rows = [...block.children];

    const titleRow = rows.find((row) => row.querySelector('h1'));
    const descriptionRow = rows.find((row) => row.querySelector('h5'));
    const eyebrowRow = rows.find(
        (row) => row.textContent.trim() === 'WKND ADVENTURES',
    );

    if (eyebrowRow) {
        eyebrowRow.classList.add('hero-eyebrow');
    }

    if (titleRow) {
        titleRow.classList.add('hero-title');
    }

    if (descriptionRow) {
        descriptionRow.classList.add('hero-description');
    }

    const labelRows = rows.filter((row) => {
        const txt = row.textContent.trim().toUpperCase();

        return txt === 'AMERICAS' || txt === 'EUROPE';
    });

    const linkRows = rows.filter(
        (row) => row.textContent.trim().startsWith('http'),
    );

    let actions;

    if (labelRows.length === 2 && linkRows.length === 2) {
        actions = document.createElement('div');
        actions.className = 'hero-actions';

        const primaryBtn = document.createElement('a');
        primaryBtn.className = 'hero-button';
        primaryBtn.textContent = labelRows[0].textContent.trim();
        primaryBtn.href = linkRows[0].textContent.trim();

        const secondaryBtn = document.createElement('a');
        secondaryBtn.className = 'hero-button';
        secondaryBtn.textContent = labelRows[1].textContent.trim();
        secondaryBtn.href = linkRows[1].textContent.trim();

        actions.append(primaryBtn);
        actions.append(secondaryBtn);

        labelRows.forEach((row) => row.remove());
        linkRows.forEach((row) => row.remove());

        block.append(actions);
    }

    [...block.children].forEach((el) => {
        if (
            el !== actions &&
            !el.textContent.trim() &&
            !el.querySelector('img') &&
            !el.querySelector('picture') &&
            !el.querySelector('h1') &&
            !el.querySelector('h5')
        ) {
            el.remove();
        }
    });
}