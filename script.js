// script.js
document.getElementById("toggleGallery").addEventListener("click", function () {
    const gallery = document.querySelector(".images");
    gallery.classList.toggle("show");
});

document.getElementById("toggleAnimation").addEventListener("click", function () {
    const animation = document.querySelector(".animation");
    animation.classList.toggle("show");
});

function scrollCarousel(direction) {
    const carousel = document.querySelector(".carousel");
    const scrollAmount = 220; // Ajusta según el ancho de las imágenes + el espacio
    carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth"
    });
}