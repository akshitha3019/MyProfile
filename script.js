document.addEventListener('DOMContentLoaded', function () {
  // Tabs (Menu page)
  const tabs = document.querySelectorAll('.tab-btn');
  const panes = document.querySelectorAll('.tab-pane');
  if (tabs.length && panes.length) {
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        panes.forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        const id = tab.dataset.tab;
        const pane = document.getElementById(id);
        if (pane) pane.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
      });
    });
  }

  // Reservation form (demo)
  const form = document.getElementById('reservationForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const msg = document.getElementById('formMessage');
      const name = form.elements['name']?.value?.trim();
      const email = form.elements['email']?.value?.trim();
      if (!name || !email) {
        msg.textContent = 'Please provide name and email.';
        msg.style.color = 'crimson';
        return;
      }
      msg.style.color = '';
      msg.textContent = '✅ Thank you! Your reservation request has been received.';
      form.reset();
    });
  }

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      const expanded = navLinks.classList.contains('show');
      navToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  }

  // Highlight current nav link based on URL
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href')?.split('/').pop();
    if (!href) return;
    if (href === currentPath || (href === 'index.html' && currentPath === '')) {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });
});
