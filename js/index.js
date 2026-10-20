const buttons = document.querySelectorAll(".faculty-button");
const cardsFacult = document.querySelectorAll(".student-card, .teacher-card");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    cardsFacult.forEach(function (card) {
      if (card.classList.contains(button.id)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
