const btn = document.querySelector(".main-button");
const cards = document.querySelector(".main-cards");

btn.addEventListener("click", function () {
  cards.classList.toggle("is-hidden");
});
