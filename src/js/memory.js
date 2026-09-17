const board = document.querySelector("#board");

const cardNames = [
  "Artifact",
  "Beast",
  "Broken-One",
  "Dark-Lord",
  "Donjon",
  "Executioner",
  "Ghost",
  "Horseman",
  "Innocent",
  "Marionette",
  "Mists",
  "Priest",
  "Raven",
  "Rogue",
  "Seer",
  "Tempter",
  "Warrior",
  "Wizard",
];

const cardImages = {
  Artifact: new URL("../assets/img/Artifact.webp", import.meta.url),
  Beast: new URL("../assets/img/Beast.webp", import.meta.url),
  "Broken-One": new URL("../assets/img/Broken-One.webp", import.meta.url),
  "Dark-Lord": new URL("../assets/img/Dark-Lord.webp", import.meta.url),
  Donjon: new URL("../assets/img/Donjon.webp", import.meta.url),
  Executioner: new URL("../assets/img/Executioner.webp", import.meta.url),
  Ghost: new URL("../assets/img/Ghost.webp", import.meta.url),
  Horseman: new URL("../assets/img/Horseman.webp", import.meta.url),
  Innocent: new URL("../assets/img/Innocent.webp", import.meta.url),
  Marionette: new URL("../assets/img/Marionette.webp", import.meta.url),
  Mists: new URL("../assets/img/Mists.webp", import.meta.url),
  Priest: new URL("../assets/img/Priest.webp", import.meta.url),
  Raven: new URL("../assets/img/Raven.webp", import.meta.url),
  Rogue: new URL("../assets/img/Rogue.webp", import.meta.url),
  Seer: new URL("../assets/img/Seer.webp", import.meta.url),
  Tempter: new URL("../assets/img/Tempter.webp", import.meta.url),
  Warrior: new URL("../assets/img/Warrior.webp", import.meta.url),
  Wizard: new URL("../assets/img/Wizard.webp", import.meta.url),
};

function cardImageUrl(name) {
  return cardImages[name];
}

const coverImageUrl = new URL("../assets/img/cover.png", import.meta.url);

const doubledCardNumbers = [...cardNames, ...cardNames];

shuffleArray(doubledCardNumbers);

let firstChoice = null;
let secondChoice = null;
let lockboard = false;

doubledCardNumbers.forEach((card) => {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");
  cardElement.style.backgroundImage = `url(${coverImageUrl})`;

  cardElement.addEventListener("click", () => {
    if (lockboard) {
      return;
    }
    if (firstChoice === null) {
      firstChoice = cardElement;
      cardElement.style.backgroundImage = `url(${cardImageUrl(card)})`;

      return;
    }

    if (cardElement === firstChoice) {
      return;
    }

    secondChoice = cardElement;
    cardElement.style.backgroundImage = `url(${cardImageUrl(card)})`;
    lockboard = true;

    if (
      firstChoice.style.backgroundImage === secondChoice.style.backgroundImage
    ) {
      firstChoice = null;
      secondChoice = null;
      lockboard = false;
      return;
    }

    setTimeout(() => {
      firstChoice.style.backgroundImage = `url(${coverImageUrl})`;
      secondChoice.style.backgroundImage = `url(${coverImageUrl})`;
      firstChoice = null;
      secondChoice = null;
      lockboard = false;
    }, 1000);
  });

  board.appendChild(cardElement);
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const { matches: motionOK } = window.matchMedia(
  "(prefers-reduced-motion: no-preference)",
);

const getAngles = (card, clientX, clientY) => {
  const { x, y, width, height } = card.getBoundingClientRect();

  const dx = clientX - (x + 0.5 * width);
  const dy = clientY - (y + 0.5 * height);

  return { dx, dy };
};

if (motionOK) {
  board.addEventListener("mousemove", ({ target, clientX, clientY }) => {
    const card = target.closest(".card");
    if (!card) return;

    const { dx, dy } = getAngles(card, clientX, clientY);

    card.style.setProperty("--x", `${dy / 20}deg`);
    card.style.setProperty("--y", `${dx / 20}deg`);
  });
}

const boardRect = board.getBoundingClientRect();

if (motionOK) {
  window.addEventListener("mousemove", ({ clientX, clientY }) => {
    const { x, y, width, height } = boardRect;
    const dx = clientX - (x + 0.5 * width);
    const dy = clientY - (y + 0.5 * height);

    board.style.setProperty("--x", `${dy / 40}deg`);
    board.style.setProperty("--y", `${dx / 40}deg`);
  });
}
