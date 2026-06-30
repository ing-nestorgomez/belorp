// ============================================
// REINICIAR ANIMACIÓN DE FRANJAS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  const stripes = document.querySelectorAll('.stripe');
  
  // Forzar reinicio de la animación
  stripes.forEach((stripe) => {
    stripe.style.animation = 'none';
    stripe.offsetHeight; // Forzar reflow
    stripe.style.animation = '';
  });
});

// ============================================
// MENÚ DESPLEGABLE - Toggle al hacer clic en el logo
// ============================================

const logoTrigger = document.getElementById('logoTrigger');
const dropdownMenu = document.getElementById('dropdownMenu');
let menuOpen = false;

// Crear overlay para cerrar al hacer clic fuera
const overlay = document.createElement('div');
overlay.className = 'menu-overlay';
document.body.appendChild(overlay);

// Función para abrir/cerrar el menú
function toggleMenu(e) {
  e.stopPropagation();
  menuOpen = !menuOpen;
  
  if (menuOpen) {
    dropdownMenu.classList.add('active');
    overlay.classList.add('active');
    logoTrigger.style.backgroundColor = '#f0f4ff';
  } else {
    dropdownMenu.classList.remove('active');
    overlay.classList.remove('active');
    logoTrigger.style.backgroundColor = 'transparent';
  }
}

// Evento: clic en el logo
logoTrigger.addEventListener('click', toggleMenu);

// Evento: clic en el overlay (cierra el menú)
overlay.addEventListener('click', function() {
  if (menuOpen) {
    toggleMenu(new Event('click'));
  }
});

// Evento: tecla ESC para cerrar el menú
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && menuOpen) {
    toggleMenu(new Event('click'));
  }
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.dropdown-menu ul li a').forEach(link => {
  link.addEventListener('click', function() {
    if (menuOpen) {
      toggleMenu(new Event('click'));
    }
  });
});

// ============================================
// EFECTO DE SCROLL EN EL HEADER
// ============================================

window.addEventListener('scroll', function() {
  const header = document.querySelector('.top-bar');
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)';
  } else {
    header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
  }
});
