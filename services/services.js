// services.js
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.testimonial-slider');
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    const visibleCount = window.innerWidth <= 600 ? 1 : 3; // 1 on mobile, 3 on desktop
    const maxIndex = Math.ceil(testimonials.length / visibleCount) - 1;

    function updateSlider() {
        const slideWidth = 100 / visibleCount; // Percentage per slide
        slider.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
    }

    prevBtn.addEventListener('click', function() {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex;
        updateSlider();
    });

    nextBtn.addEventListener('click', function() {
        currentIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
        updateSlider();
    });

    // Adjust on window resize
    window.addEventListener('resize', function() {
        const newVisibleCount = window.innerWidth <= 600 ? 1 : 3;
        if (newVisibleCount !== visibleCount) {
            location.reload(); // Simple reload to recalculate
        }
    });

    // Initial position
    updateSlider();
});