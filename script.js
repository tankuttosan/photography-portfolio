const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
const closeButton = document.querySelector(".lightbox-close");
const galleryImages = document.querySelectorAll(".lightbox-trigger");

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;

    const caption = image.closest(".photo-card").querySelector(".photo-caption");
    lightboxCaption.textContent = caption.textContent.trim();

    lightbox.showModal();
  });
});

closeButton.addEventListener("click", () => {
  lightbox.close();
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});