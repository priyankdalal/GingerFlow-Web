const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#site-menu');

menuToggle.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('.flow-node').forEach((node) => {
  node.addEventListener('click', () => {
    document.querySelectorAll('.flow-node').forEach((item) => item.classList.remove('selected'));
    node.classList.add('selected');
    node.setAttribute('aria-label', `${node.dataset.node} node selected`);
  });
});

document.querySelectorAll('.capability').forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.capability').forEach((capability) => capability.classList.remove('active'));
    item.classList.add('active');
  });
});
