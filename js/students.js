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
        <p>Name: ${character.name}</p>
        <p>Alternate names: ${character.alternate_names.join(", ") || "Unknown"}</p>
        <p>Species: ${character.species}</p>
        <p>Gender: ${character.gender}</p>
        <p>House: ${character.house || "Unknown"}</p>
        <p>Date of birth: ${character.dateOfBirth || "Unknown"}</p>
        <p>Year of birth: ${character.yearOfBirth ?? "Unknown"}</p>
        <p>Wizard: ${character.wizard}</p>
        <p>Ancestry: ${character.ancestry || "Unknown"}</p>
        <p>Eye colour: ${character.eyeColour || "Unknown"}</p>
        <p>Hair colour: ${character.hairColour || "Unknown"}</p>
        <p>Wand: ${character.wand.wood || "Unknown"}</p>
        <p>Patronus: ${character.patronus || "Unknown"}</p>
        <p>Hogwarts student: ${character.hogwartsStudent}</p>
        <p>Hogwarts staff: ${character.hogwartsStaff}</p>
        <p>Actor: ${character.actor || "Unknown"}</p>
        <p>Alive: ${character.alive}</p>
      `;
    });
  })
  .catch((error) => {
    console.error("Помилка API:", error);
  });
