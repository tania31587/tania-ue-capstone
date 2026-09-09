export default function decorate(block) {
  const rows = [...block.children];

  if (rows.length < 6) {
    return;
  }

  const imageRow = rows[0];
  const eyebrowRow = rows[1];
  const titleRow = rows[2];
  const descRow = rows[3];
  const cta1Row = rows[4];
  const cta2Row = rows[5];

  const content = document.createElement('div');
  content.className = 'hero-content';

  const eyebrow = document.createElement('div');
  eyebrow.className = 'hero-eyebrow';
  eyebrow.innerHTML = eyebrowRow.innerHTML;

  const title = document.createElement('div');
  title.className = 'hero-title';
  title.innerHTML = titleRow.innerHTML;

  const description = document.createElement('div');
  description.className = 'hero-description';
  description.innerHTML = descRow.innerHTML;

  const actions = document.createElement('div');
  actions.className = 'hero-actions';

  const btn1 = document.createElement('div');
  btn1.className = 'hero-btn';
  btn1.innerHTML = cta1Row.innerHTML;

  const btn2 = document.createElement('div');
  btn2.className = 'hero-btn';
  btn2.innerHTML = cta2Row.innerHTML;

  actions.append(btn1, btn2);

  content.append(
    eyebrow,
    title,
    description,
    actions,
  );

  block.innerHTML = '';

  block.append(
    imageRow,
    content,
  );
}
