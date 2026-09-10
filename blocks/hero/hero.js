export default function decorate(block) {
    const rows = [...block.children];

    const titleRow = rows.find((row) => row.querySelector('h1'));
    const descriptionRow = rows.find((row) => row.querySelector('h5'));

    const ctas = rows.filter((row) => {
        const text = row.textContent.trim();

        return [
            'AMERICAS',
            'EUROPE',
        ].includes(text.toUpperCase());
    });

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

    if (ctas.length) {
        const actions = document.createElement('div');
        actions.className = 'hero-actions';

        ctas.forEach((cta) => actions.append(cta));

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
