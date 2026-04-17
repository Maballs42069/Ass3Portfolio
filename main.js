DOMContentLoaded{
    // Move Carousel Slides
function moveSlide(carouselId, direction) {
    const track = document.getElementById(carouselId);
    const slideWidth = track.children[0].offsetWidth + 20;

    track.scrollBy({
        left: direction * slideWidth * 2,
        behavior: "smooth"
    });
}

// Fade Non-Centered Carousel Items
function updateCarouselFade() {
    const carousels = document.querySelectorAll(".carousel-track");

    carousels.forEach(track => {
        const items = track.querySelectorAll(".carousel-item");
        const trackRect = track.getBoundingClientRect();
        const trackCenter = trackRect.left + trackRect.width / 2;

        items.forEach(item => {
            const rect = item.getBoundingClientRect();
            const itemCenter = rect.left + rect.width / 2;
            const distance = Math.abs(trackCenter - itemCenter);
            const maxDistance = trackRect.width / 2;

            let opacity = 1 - (distance / maxDistance);
            opacity = Math.max(0.3, opacity);

            item.style.opacity = opacity;
            item.style.transform = "scale(0.9)";
        });
    });
}

// Initialize Fade Effect
window.addEventListener("load", updateCarouselFade);
window.addEventListener("resize", updateCarouselFade);

document.querySelectorAll(".carousel-track").forEach(track => {
    track.addEventListener("scroll", updateCarouselFade);
});
}
