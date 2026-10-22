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

const facultyButtons = document.querySelectorAll(".faculty-button");

facultyButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    facultyButtons.forEach(function (item) {
      item.classList.remove("active");
    });
    button.classList.add("active");
  });
});

const cards = document.querySelectorAll(".student-card, .teacher-card");

fetch("https://hp-api.onrender.com/api/characters")
  .then((response) => response.json())
  .then((characters) => {
    cards.forEach((card) => {
      const title = card.querySelector(
        ".student-card-title, .teacher-card-title",
      );

      const name = title.textContent.trim();

      const character = characters.find((item) => item.name === name);

      if (!character) {
        console.log("Персонажа не знайдено:", name);
        return;
      }

      const image = card.querySelector(
        ".student-card-image, .teacher-card-image",
      );

      if (character.image) {
        image.src = character.image;
      }

      const info = card.querySelector(".card-info");
      if (!info) {
        return;
      }

      info.innerHTML = `
        <p>Name: <span>${character.name}</span></p>
        <p>Alternate names: <span>${character.alternate_names.join(", ") || "Unknown"}</span></p>
        <p>Species: <span>${character.species}</span></p>
        <p>Gender: <span>${character.gender}</span></p>
        <p>House: <span>${character.house || "Unknown"}</span></p>
        <p>Date of birth: <span>${character.dateOfBirth || "Unknown"}</span></p>
        <p>Year of birth: <span>${character.yearOfBirth ?? "Unknown"}</span></p>
        <p>Wizard: <span>${character.wizard}</span></p>
        <p>Ancestry: <span>${character.ancestry || "Unknown"}</span></p>
        <p>Eye colour: <span>${character.eyeColour || "Unknown"}</span></p>
        <p>Hair colour: <span>${character.hairColour || "Unknown"}</span></p>
        <p>Wand: <span>${character.wand.wood || "Unknown"}</span></p>
        <p>Patronus: <span>${character.patronus || "Unknown"}</span></p>
        <p>Hogwarts student: <span>${character.hogwartsStudent}</span></p>
        <p>Hogwarts staff: <span>${character.hogwartsStaff}</span></p>
        <p>Actor: <span>${character.actor || "Unknown"}</span></p>
        <p>Alive: <span>${character.alive}</span></p>
      `;
    });
  })
  .catch((error) => {
    console.error("Помилка API:", error);
  });
