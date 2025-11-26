function toggleMenu() {
  document.querySelector('.nav-menu').classList.toggle('active');
}

// Cerrar menú al hacer clic en enlace (móvil)
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.remove('active');
  });
});