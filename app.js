// --- Lógica para el Menú Móvil (Hamburguesa) ---

// Espera a que todo el contenido HTML se cargue antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarMenu');

    if (navbarToggle && navbarMenu) {
        navbarToggle.addEventListener('click', () => {
            // Alterna la clase 'active' para mostrar/ocultar el menú
            navbarMenu.classList.toggle('active');
            
            // Cambia el ícono de hamburguesa a 'X' y viceversa
            const icon = navbarToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                navbarToggle.setAttribute('aria-label', 'Cerrar menú');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                navbarToggle.setAttribute('aria-label', 'Abrir menú');
            }
        });
    }
    
    // --- Lógica para el Slider Básico ---
    let currentSlide = 0;
    const slides = document.querySelectorAll('#slider .slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    // Iniciar el slider si existe
    if (slides.length > 0) {
        // Muestra el primer slide al cargar
        showSlide(currentSlide);
        
        // Cambia de slide cada 5 segundos (5000 milisegundos)
        setInterval(nextSlide, 5000);
    }

});