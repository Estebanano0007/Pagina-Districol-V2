document.addEventListener("DOMContentLoaded", function() {
    // Configuramos el observador para las animaciones de scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añade la clase 'visible' cuando el elemento entra en pantalla
                entry.target.classList.add('visible');
                // Deja de observar el elemento una vez que ya apareció (para que no parpadee)
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.15, // Se activa cuando el 15% del elemento es visible
        rootMargin: "0px 0px -50px 0px" // Un pequeño margen para que se sienta natural
    });

    // Selecciona todos los elementos con la clase 'fade-in-up' y los observa
    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
});