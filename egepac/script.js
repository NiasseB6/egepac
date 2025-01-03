
document
.querySelector(".nav-toggle")
.addEventListener("click", function () {
  document.querySelector("nav ul").classList.toggle("active");
});

// Fermer le menu mobile lors du clic sur un lien
document.querySelectorAll("nav a").forEach((link) => {
link.addEventListener("click", function () {
  document.querySelector("nav ul").classList.remove("active");
});
});

document.querySelector(".nav-toggle").addEventListener("click", function () {
  document.querySelector("nav ul").classList.toggle("active");
});