
  const screens = [
    { id: 'clinical', title: 'Clinical Management', image: 'assets/products/admin.png' },
    { id: 'billing', title: 'Billing & Invoicing', image: 'assets/products/billing.png' },
    { id: 'pharmacy', title: 'Pharmacy', image: 'assets/products/pharmacy.png' },
    { id: 'radiology', title: 'Radiology Management', image: 'assets/products/lab.png' },
    { id: 'pathology', title: 'Pathology Lab', image: 'assets/products/procedure.png' },
    { id: 'inpatient', title: 'In-Patient Care', image: 'assets/products/messaging.png' },
    { id: 'reports', title: 'Reporting & Analytics', image: 'assets/products/reports.png' }
  ];

  let activeScreen = screens[0];

  function renderMockupNav() {
    const nav = document.getElementById('mockup-nav');
    if (!nav) return;
    nav.innerHTML = screens.map(screen => `
      <button
        onclick="setScreen('${screen.id}')"
        class="${screen.id === activeScreen.id ? 'active' : ''}">
        ${screen.title}
      </button>
    `).join('');
  }

  function setScreen(id) {
    const screen = screens.find(s => s.id === id);
    if (!screen) return;

    activeScreen = screen;

    // Update title
    const titleEl = document.getElementById('preview-title');
    if (titleEl) titleEl.innerText = screen.title;

    // Update image with fade effect
    const img = document.getElementById('preview-image');
    if (img) {
      img.classList.add('opacity-0');

      setTimeout(() => {
        img.src = screen.image;
        img.classList.remove('opacity-0');
      }, 150);
    }

    renderMockupNav();
  }

  // INIT
  if (document.getElementById('mockup-nav')) {
    renderMockupNav();
    setScreen(screens[0].id);
  }

  // Menu - Hamburger
  function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const openIcon = document.getElementById('menu-open');
    const closeIcon = document.getElementById('menu-close');

    const isOpen = !menu.classList.contains('hidden');

    if (isOpen) {
      menu.classList.add('hidden');
      openIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    } else {
      menu.classList.remove('hidden');
      openIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    }
  }

  function closeMenu() {
    document.getElementById('mobile-menu').classList.add('hidden');
    document.getElementById('menu-open').classList.remove('hidden');
    document.getElementById('menu-close').classList.add('hidden');
  }
