export default function decorate(block) {
  const rows = [...block.children];

  if (rows.length < 9) return;

  const eyebrow = rows[2];
  const title = rows[3];
  const description = rows[4];

  eyebrow.classList.add('hero-eyebrow');
  title.classList.add('hero-title');
  description.classList.add('hero-description');

  const primaryLabel = rows[5]?.textContent.trim();
  const primaryLink = rows[6]?.textContent.trim();

  const secondaryLabel = rows[7]?.textContent.trim();
  const secondaryLink = rows[8]?.textContent.trim();

  const actions = document.createElement('div');
  actions.className = 'hero-actions';

  if (primaryLabel && primaryLink) {
    const btn = document.createElement('a');
    btn.className = 'hero-button';
    btn.textContent = primaryLabel;
    btn.href = primaryLink;
    actions.append(btn);
  }

  if (secondaryLabel && secondaryLink) {
    const btn = document.createElement('a');
    btn.className = 'hero-button';
    btn.textContent = secondaryLabel;
    btn.href = secondaryLink;
    actions.append(btn);
  }

  block.append(actions);

  /* remove imageAlt + CTA/link rows */
  [rows[1], rows[5], rows[6], rows[7], rows[8]]
    .filter(Boolean)
    .forEach((el) => el.remove());

  /* remove empty rows */
  [...block.children].forEach((el) => {
    if (
      !el.textContent.trim() &&
      !el.querySelector('img') &&
      !el.querySelector('picture') &&
      !el.querySelector('h1') &&
      !el.querySelector('h2') &&
      !el.querySelector('h3') &&
      !el.querySelector('h4') &&
      !el.querySelector('h5')
    ) {
      el.remove();
    }
  });
}
