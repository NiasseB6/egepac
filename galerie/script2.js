const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Mise à jour des boutons actifs
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    // Filtrage des éléments
    const filter = button.getAttribute("data-filter");
    galleryItems.forEach((item) => {
      if (
        filter === "all" ||
        item.getAttribute("data-category") === filter
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Gestion du modal
const modal = document.querySelector(".modal");
const modalImg = modal.querySelector("img");
const modalClose = modal.querySelector(".modal-close");

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    const imgSrc = item.querySelector("img").src;
    modalImg.src = imgSrc;
    modal.classList.add("active");
  });
});

modalClose.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});