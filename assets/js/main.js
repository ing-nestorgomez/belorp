// Efecto de scroll en el header
window.addEventListener('scroll', function() {
  const header = document.querySelector('.top-bar');
  if (window.scrollY > 50) {
    header.style.background = 'rgba(255, 255, 255, 0.98)';
  } else {
    header.style.background = 'rgba(255, 255, 255, 0.85)';
  }
});

// (Opcional) Si quieres que las franjas tengan interacción al pasar el mouse
document.querySelector('.animated-stripes')?.addEventListener('mouseenter', function() {
  this.style.transform = 'scale(1.05)';
});
document.querySelector('.animated-stripes')?.addEventListener('mouseleave', function() {
  this.style.transform = 'scale(1)';
});
