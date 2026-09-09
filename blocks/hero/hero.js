export default function decorate(block) {
  const rows = [...block.children];

  if (rows.length < 6) return;

  const content = document.createElement('div');
  content.className = 'hero-content';

  rows[1].classList.add('hero-eyebrow');
  rows[2].classList.add('hero-title');
  rows[3].classList.add('hero-description');

  const actions = document.createElement('div');
  actions.className = 'hero-actions';

  rows[4].classList.add('hero-btn');
  rows[5].classList.add('hero-btn');

  actions.append(rows[4], rows[5]);

  content.append(
    rows[1],
    rows[2],
    rows[3],
    actions,
  );

  block.innerHTML = '';
  block.append(rows[0], content);
}
