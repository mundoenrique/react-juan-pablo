// Eventos del DOM - Clicks https://developer.mozilla.org/es/docs/Web/API/Element
const heading = document.querySelector('.heading');
const enlaces = document.querySelectorAll('.navegacion a');

heading.addEventListener('mouseenter', () => {
  heading.textContent = 'Nuevo heading...';
});
heading.addEventListener('mouseleave', () => {
  heading.textContent = 'Saliendo...';
});

enlaces.forEach((enlace, index) => {
  enlace.addEventListener('click', (e) => {
    e.preventDefault();
    e.target.textContent = 'Diste click... ' + (index + 1);
  });
});
