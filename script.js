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

  /* ---------- Content from portal-data.js ---------- */
  const data = window.PORTAL_DATA || {};
  const clean = (v) => (typeof v === 'string' ? v.trim() : '');

  const parseDate = (value) => {
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(clean(value));
    if (!m) return null;
    const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
    return Number.isNaN(d.getTime()) ? null : d;
  };
  const formatDate = (d) => d.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
  const safeUrl = (url) => /^https?:\/\//i.test(clean(url)) ? clean(url) : '';

  // Last updated stamps
  const updated = data.lastUpdated || {};
  document.querySelectorAll('[data-updated]').forEach((el) => {
    const d = parseDate(updated[el.dataset.updated]);
    if (d) { el.textContent = `Updated ${formatDate(d)}`; el.hidden = false; }
  });

  // Direct document links
  const docs = data.documents || {};
  document.querySelectorAll('[data-doc]').forEach((el) => {
    const url = safeUrl(docs[el.dataset.doc]);
    if (url) { el.href = url; el.hidden = false; }
  });

  // Council office-bearers
  const members = (Array.isArray(data.councilMembers) ? data.councilMembers : [])
    .filter((m) => m && clean(m.name) && clean(m.role));
  const membersPanel = document.querySelector('#council-members');
  if (membersPanel && members.length) {
    const list = membersPanel.querySelector('.members-list');
    members.forEach((m) => {
      const li = document.createElement('li');
      const role = document.createElement('span');
      const name = document.createElement('strong');
      role.textContent = clean(m.role);
      name.textContent = clean(m.name);
      li.append(role, name);
      list.append(li);
    });
    membersPanel.hidden = false;
  }

  // Office hours
  const hours = clean(data.officeHours);
  if (hours) {
    document.querySelector('#office-hours').textContent = hours;
    document.querySelector('#office-hours-row').hidden = false;
  }

  // Notices: hide expired, newest first
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const notices = (Array.isArray(data.notices) ? data.notices : [])
    .filter((n) => n && clean(n.title))
    .filter((n) => { const exp = parseDate(n.expires); return !exp || exp >= today; })
    .sort((a, b) => (parseDate(b.date) || 0) - (parseDate(a.date) || 0));

  const noticeList = document.querySelector('#notice-list');
  const noticesEmpty = document.querySelector('#notices-empty');
  if (noticeList && notices.length) {
    notices.forEach((n) => {
      const li = document.createElement('li');
      li.className = 'notice-item';
      const d = parseDate(n.date);
      if (d) {
        const time = document.createElement('time');
        time.dateTime = clean(n.date);
        time.textContent = formatDate(d);
        li.append(time);
      }
      const title = document.createElement('h3');
      title.textContent = clean(n.title);
      li.append(title);
      if (clean(n.body)) {
        const body = document.createElement('p');
        body.textContent = clean(n.body);
        li.append(body);
      }
      const url = safeUrl(n.link);
      if (url) {
        const a = document.createElement('a');
        a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer';
        a.innerHTML = 'View details <span aria-hidden="true">↗</span>';
        li.append(a);
      }
      noticeList.append(li);
    });
    noticeList.hidden = false;
    if (noticesEmpty) noticesEmpty.hidden = true;
  }
})();
