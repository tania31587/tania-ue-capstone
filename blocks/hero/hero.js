export default function decorate(block) {
    const rows = [...block.children];

    const titleRow = rows.find((row) => row.querySelector('h1'));
    const descriptionRow = rows.find((row) => row.querySelector('h5'));

    const ctas = rows.filter((row) => row.querySelector('a'));

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

    let actions;

    if (ctas.length) {
        actions = document.createElement('div');
        actions.className = 'hero-actions';

        ctas.forEach((cta) => {
            const link = cta.querySelector('a');

            if (!link) return;

            const button = document.createElement('a');

            button.href = link.href;
            button.textContent = link.textContent.trim();
            button.className = 'hero-button';

            actions.append(button);

            cta.remove();
        });

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
