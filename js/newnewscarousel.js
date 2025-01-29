document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".news-slide");
    let currentSlide = 0;
    const slideInterval = 5000; // Change slides every 5 seconds

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? "block" : "none";
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Initial slide
    showSlide(currentSlide);

    // Auto-slide every 5 seconds
    setInterval(nextSlide, slideInterval);

    // Manual Navigation
    document.querySelector(".next-btn").addEventListener("click", nextSlide);
    document.querySelector(".prev-btn").addEventListener("click", prevSlide);
});
