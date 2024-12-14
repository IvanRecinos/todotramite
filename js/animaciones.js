// Selecciona todos los elementos que quieres animar
const animatedElements = document.querySelectorAll('.animacion1');
const circulos = document.querySelectorAll('.circulos');
const serv_izq = document.querySelectorAll('.serv_izq');
const serv_der = document.querySelectorAll('.serv_der');
const btn_1 = document.querySelectorAll('.btn_1');

function handleScroll() {
    // Manejo de animación para los círculos
    circulos.forEach(cir => {
        const rect = cir.getBoundingClientRect(); // Obtiene la posición del elemento
        const inView = rect.top < 700 && rect.bottom > 500; // Comprueba si está en la vista

        if (inView) {
            //cir.classList.add('animate__animated', 'animate__fadeInLeftBig'); // Agrega la clase para activar la animación
        } else {
          //  cir.classList.remove('animate__fadeInLeftBig'); // Elimina la clase de animación
        } 
    });

    // Manejo de animación para los elementos animados
    animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect(); // Obtiene la posición del elemento
        const inView = rect.top <= 500 && rect.bottom >= 150; // Comprueba si está en la vista

        if (inView) {
            el.classList.add('animate__animated', 'animate__fadeInDown'); // Agrega la clase para activar la animación
            el.classList.remove('animate__fadeOutDown'); // Asegura que no tenga la clase de salida
        } else {
            el.classList.add('animate__fadeOutDown'); // Agrega la clase para salida
            el.classList.remove('animate__fadeInDown'); // Asegura que no tenga la clase de entrada
        }
    });

    // Manejo de animación para los serv_izq
    serv_izq.forEach(izq => {
        const rect = izq.getBoundingClientRect(); // Obtiene la posición del elemento
        const inView = rect.top < 800 //&& rect.bottom > 500; // Comprueba si está en la vista

        if (inView) {
            izq.classList.add('animate__animated', 'animate__fadeInLeftBig'); // Agrega la clase para activar la animación
        } else {
            izq.classList.remove('animate__fadeInLeftBig'); // Elimina la clase de animación
        } 
    });

    // Manejo de animación para los serv_der
    serv_der.forEach(der => {
        const rect = der.getBoundingClientRect(); // Obtiene la posición del elemento
        const inView = rect.top < 800 //&& rect.bottom > 500; // Comprueba si está en la vista

        if (inView) {
            der.classList.add('animate__animated', 'animate__fadeInRightBig'); // Agrega la clase para activar la animación
        } else {
            der.classList.remove('animate__fadeInRightBig'); // Elimina la clase de animación
        } 
    });

}


// Escucha el evento de scroll
window.addEventListener('scroll', handleScroll);

// Llama a la función una vez al cargar la página para manejar elementos visibles desde el inicio
handleScroll();


// Función para manejar el hover
function btnHover() {
    btn.classList.remove('animate__animated', 'animate__bounce'); // Elimina la clase de animación
  }
  
  // Función para manejar cuando el puntero sale
  function btnLeave() {
    btn.classList.add('animate__animated', 'animate__bounce'); // Agrega la clase de animación
  }
  
  // Agregar eventos al botón
  btn.addEventListener('mouseenter', btnHover); // Al pasar el puntero
  btn.addEventListener('mouseleave', btnLeave); // Al salir el puntero