(() => {
  const body = document.body;
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const siteNav = document.querySelector('#site-nav');
  const searchInput = document.querySelector('#document-search');
  const filterButtons = [...document.querySelectorAll('.filter-btn')];
  const cards = [...document.querySelectorAll('.resource-card')];
  const resultCount = document.querySelector('#result-count');
  const emptyState = document.querySelector('#empty-state');
  const resetButton = document.querySelector('#reset-search');
  const year = document.querySelector('#year');

  let activeFilter = 'all';

  const updateHeader = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 24);
  };

  const updateCards = () => {
    const query = searchInput.value.trim().toLowerCase();
    let visible = 0;

    cards.forEach((card) => {
      const categoryMatch = activeFilter === 'all' || card.dataset.category === activeFilter;
      const searchable = `${card.dataset.search || ''} ${card.textContent}`.toLowerCase();
      const searchMatch = !query || searchable.includes(query);
      const show = categoryMatch && searchMatch;
      card.hidden = !show;
      if (show) visible += 1;
    });

    resultCount.textContent = `${visible} ${visible === 1 ? 'collection' : 'collections'}`;
    emptyState.hidden = visible !== 0;
  };

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.filter;
      filterButtons.forEach((item) => item.classList.toggle('is-active', item === button));
      updateCards();
    });
  });

  searchInput.addEventListener('input', updateCards);

  resetButton.addEventListener('click', () => {
    searchInput.value = '';
    activeFilter = 'all';
    filterButtons.forEach((button) => button.classList.toggle('is-active', button.dataset.filter === 'all'));
    updateCards();
    searchInput.focus();
  });

  const closeMenu = () => {
    body.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = body.classList.toggle('menu-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  window.addEventListener('scroll', updateHeader, { passive: true });

  updateHeader();
  year.textContent = new Date().getFullYear();
})();
