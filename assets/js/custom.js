// Escucha el evento "DOMContentLoaded" para asegurarse de que el script se ejecute solo cuando se haya cargado completamente el DOM.
document.addEventListener("DOMContentLoaded", function() {

    // REFERENCIAS A ELEMENTOS DEL DOM
    // Obtiene todas las imágenes de los cursos en una NodeList
    const courseImages = document.querySelectorAll('.course-image');
    
    // Obtiene el botón de cerrar del modal
    const closeModal = document.getElementById('close-modal');

    // MANEJADORES DE EVENTOS
    // Cierra el modal cuando se hace clic en el botón de cierre
    closeModal.addEventListener('click', function() {
        const customModal = document.getElementById('custom-modal');
        const youtubeIframe = document.getElementById('youtube-iframe');
        
        // Detiene la reproducción del video al cerrar el modal
        youtubeIframe.src = "";
        
        // Oculta el modal añadiendo la clase 'd-none'
        customModal.classList.add('d-none'); 
    });

    // Recorre todas las imágenes de los cursos y añade manejadores de eventos
    courseImages.forEach((img) => {
        
        // Declara la variable hoverTimer que se usará para el setTimeout
        let hoverTimer;

        // Muestra el spinner y el modal cuando el cursor pasa sobre una imagen del curso
        img.addEventListener('mouseenter', function(e) {

            // Obtiene el contenedor del spinner
            const cardBody = img.closest('.card').querySelector('.card-body');
            const spinnerContainer = cardBody.querySelector('.spinner-container');

            // Muestra el spinner
            spinnerContainer.classList.remove('d-none'); 
            spinnerContainer.classList.add('d-flex');
            
            // Configura un temporizador para mostrar el modal después de un tiempo
            hoverTimer = setTimeout(() => {

                // Oculta el spinner
                spinnerContainer.classList.add('d-none');
                spinnerContainer.classList.remove('d-flex');

                // Prepara el modal y el iframe de YouTube
                const customModal = document.getElementById('custom-modal');
                const youtubeIframe = document.getElementById('youtube-iframe');
                
                // Establece el video de YouTube para que se reproduzca automáticamente
                youtubeIframe.src = "https://www.youtube.com/embed/t8k71QcArnk?autoplay=1"; 

                // Ajusta la posición del modal en base a la posición de la imagen
                const rect = img.getBoundingClientRect();
                let left = rect.left + window.scrollX + rect.width - 100;
                let top = rect.top + window.scrollY - 100;
                
                if (left + 600 > window.innerWidth) {
                    left = rect.left + window.scrollX - 300;
                }
                
                customModal.style.left = `${left}px`;
                customModal.style.top = `${top}px`;
                
                // Muestra el modal
                customModal.classList.remove('d-none'); 

            }, 1000); // Tiempo antes de mostrar el modal: 1 segundo
        });

        // Cancela el temporizador y oculta el spinner si el cursor se retira antes de que el modal aparezca
        img.addEventListener('mouseleave', function(e) {

            // Cancela el temporizador
            clearTimeout(hoverTimer);  
            
            // Oculta el spinner
            const cardBody = img.closest('.card').querySelector('.card-body');
            const spinnerContainer = cardBody.querySelector('.spinner-container');
            spinnerContainer.classList.add('d-none');
            spinnerContainer.classList.remove('d-flex');
        });
    });
});
