// Așteptăm ca pagina să se încarce complet
document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 1;
    showSlides(slideIndex);

    // Facem funcțiile accesibile global pentru butoanele onclick din HTML
    window.changeSlide = function(n) {
        showSlides(slideIndex += n);
    };

    window.currentSlide = function(n) {
        showSlides(slideIndex = n);
    };

    function showSlides(n) {
        let i;
        let slides = document.querySelectorAll(".carousel-images img");
        let dots = document.querySelectorAll(".dot");

        // Verificăm dacă există poze, ca să nu primim erori
        if (slides.length === 0) return;

        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }

        // Ascundem toate imaginile
        for (i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
            slides[i].style.display = "none";
        }

        // Resetăm punctele
        for (i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active-dot");
            // Stil fallback dacă nu folosești clasa active-dot
            dots[i].style.backgroundColor = "#555"; 
        }

        // Afișăm imaginea curentă
        if (slides[slideIndex - 1]) {
            slides[slideIndex - 1].style.display = "block";
            slides[slideIndex - 1].classList.add("active");
        }

        // Activăm punctul curent
        if (dots.length > 0 && dots[slideIndex - 1]) {
            dots[slideIndex - 1].classList.add("active-dot");
            dots[slideIndex - 1].style.backgroundColor = "#fff";
        }
    }
});
