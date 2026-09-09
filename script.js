const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
const closeButton = document.querySelector(".lightbox-close");
const galleryImages = document.querySelectorAll(".lightbox-trigger");

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;

    const photoCard = image.closest(".photo-card");
    const caption = photoCard.querySelector(".photo-caption");

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

const filterButtons = document.querySelectorAll(".filter-button");
const photoCards = document.querySelectorAll(".photo-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((item) => {
      const isSelected = item === button;

      item.classList.toggle("active", isSelected);
      item.setAttribute("aria-pressed", String(isSelected));
    });

    photoCards.forEach((card) => {
      const photoCategory = card.dataset.category;
      const shouldShow =
        selectedFilter === "all" || photoCategory === selectedFilter;

      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});