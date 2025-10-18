// === Menú móvil ===
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuLinks = mobileMenu?.querySelectorAll('a');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden');

      mobileMenu.classList.add('transition-all', 'duration-300', 'ease-in-out');
      mobileMenu.classList.toggle('opacity-100');
      mobileMenu.classList.toggle('opacity-0');

      menuToggle.textContent = isOpen ? '☰' : '✕';
    });

    menuLinks?.forEach(link =>
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuToggle.textContent = '☰';
      })
    );
  }

  // === Footer dinámico ===
  const year = new Date().getFullYear();
  const copyright = document.getElementById('copyright');
  if (copyright) {
    copyright.innerHTML = `&copy; ${year} <span>Aitor Maestre</span>. Todos los derechos reservados.`;
  }
});
