// script.js

document.addEventListener("DOMContentLoaded", () => {

  console.log("Página Colombia 5.0 cargada correctamente");

  // Animación sencilla
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";

    setTimeout(() => {
      card.style.transition = "0.5s";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 100);
  });

});