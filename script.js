const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#site-menu');

if (menuToggle && menu) {
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
}

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

const docsLinks = document.querySelectorAll('.docs-nav a');
const docsSections = document.querySelectorAll('.docs-body section');

if (docsLinks.length && docsSections.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        docsLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: '-100px 0px -70% 0px' }
  );

  docsSections.forEach((section) => observer.observe(section));
}
