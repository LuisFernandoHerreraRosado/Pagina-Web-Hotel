bars = document.querySelector(".bars");
bars.onclick = function () {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("nav-bar__active");
};
let currentIndex = 0;
const images = document.querySelectorAll(".seccion-1__image-slider__image");
const totalImages = images.length;

function changeImage() {
  images.forEach((image) => {
    image.classList.remove("seccion-1__image-slider__image--active");
  });
  images[currentIndex].classList.add("seccion-1__image-slider__image--active");
  // Actualizar siguiente imagen
  currentIndex = (currentIndex + 1) % totalImages;
}
setInterval(changeImage, 4000);
changeImage();
