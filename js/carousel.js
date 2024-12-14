const carousel = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let currentIndex = 0;
let intervalId;

// Función para actualizar el carrusel
function updateCarousel() {
  const offset = -currentIndex * 100; // Mover al porcentaje correcto
  carousel.style.transform = `translateX(${offset}%)`;
}

// Función para ir al siguiente elemento
function goToNext() {
  currentIndex = (currentIndex + 1) % images.length; // Ir al siguiente o regresar al inicio
  updateCarousel();
}

// Función para ir al anterior elemento
function goToPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Ir al anterior o al último
  updateCarousel();
}

// Configurar movimiento automático
function startAutoSlide() {
  intervalId = setInterval(goToNext, 3000); // Cambia cada 3 segundos
}

// Detener movimiento automático
function stopAutoSlide() {
  clearInterval(intervalId);
}

// Eventos para botones
nextButton.addEventListener('click', () => {
  stopAutoSlide();
  goToNext();
  startAutoSlide();
});

prevButton.addEventListener('click', () => {
  stopAutoSlide();
  goToPrev();
  startAutoSlide();
});

// Iniciar el carrusel con movimiento automático
startAutoSlide();
