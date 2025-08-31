function showSection(sectionId, clickedLink) {
    // Oculta todas las secciones
    const sections = document.querySelectorAll("main section");
    sections.forEach(sec => sec.classList.remove("active"));

    // Muestra la sección seleccionada
    document.getElementById(sectionId).classList.add("active");

    // Quita la clase 'active' de todos los enlaces
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => link.classList.remove("active"));

    // Agrega la clase 'active' solo al enlace clicado
    clickedLink.classList.add("active");
}

document.addEventListener('DOMContentLoaded', (event) => {
    const sections = document.querySelectorAll('.activity-container');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Activa la animación cuando el 10% del elemento es visible
    });

    sections.forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sliderTrack = document.querySelector('.slider-track');
    const images = document.querySelectorAll('.slider-track img');
    let currentIndex = 0;
    const intervalTime = 4000; // 4 segundos

    function showNextSlide() {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0; // Vuelve al inicio si llega al final
        }
        const offset = -currentIndex * 100;
        sliderTrack.style.transform = `translateX(${offset}%)`;
    }

    // Inicia el carrusel automático
    setInterval(showNextSlide, intervalTime);
});

// Añade este script a tu archivo JS o en tu HTML antes de </body>
function toggleMenu() {
    const nav = document.getElementById('main-nav');
    nav.classList.toggle('active');
}



