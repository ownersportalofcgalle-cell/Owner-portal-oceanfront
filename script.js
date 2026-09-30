(() => {
  const menuToggle = document.querySelector('.menu-toggle');
  const siteNav = document.querySelector('#site-nav');
  const year = document.querySelector('#year');

  const closeMenu = () => {
    document.body.classList.remove('menu-open');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
  };

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const open = document.body.classList.toggle('menu-open');
      menuToggle.setAttribute('aria-expanded', String(open));
    });
  }

  if (siteNav) siteNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  if (year) year.textContent = new Date().getFullYear();
})();
