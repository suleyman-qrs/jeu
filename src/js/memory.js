const board = document.querySelector("#board");

const sfxUrl = new URL("../assets/audio/sfx.mp3", import.meta.url);
const musicUrl = new URL("../assets/audio/music.mp3", import.meta.url);
const tarotUrl = new URL(
  "../assets/audio/elden_ring_you_died.mp3",
  import.meta.url,
);

const sfx = new Audio(sfxUrl);
const music = new Audio(musicUrl);
const tarot = new Audio(tarotUrl);

let musicStarted = false;
function startMusicOnce() {
  if (musicStarted) return;
  musicStarted = true;
  music.play();
}

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
  "1 - coins",
  "2 - coins",
  "3 - coins",
  "4 - coins",
  "5 - coins",
  "6 - coins",
  "7 - coins",
  "8 - coins",
  "9 - coins",
  "1 - glyphs",
  "2 - glyphs",
  "3 - glyphs",
  "4 - glyphs",
  "5 - glyphs",
  "6 - glyphs",
  "7 - glyphs",
  "8 - glyphs",
  "9 - glyphs",
  "1 - stars",
  "2 - stars",
  "3 - stars",
  "4 - stars",
  "5 - stars",
  "6 - stars",
  "7 - stars",
  "8 - stars",
  "9 - stars",
  "1 - swords",
  "2 - swords",
  "3 - swords",
  "4 - swords",
  "5 - swords",
  "6 - swords",
  "7 - swords",
  "8 - swords",
  "9 - swords",
];

const cardDescriptions = {
  Artifact:
    "The importance of some physical object that must be obtained, protected, or destroyed at all costs",
  Beast:
    "Great rage or passion; something bestial or malevolent hiding in plain sight or lurking just below the surface",
  "Broken-One":
    "Defeat, failure, and despair; the loss of something or someone important, without which one feels incomplete",
  "Dark-Lord":
    "A single, powerful individual of an evil nature, one whose goals have enormous and far-reaching consequences",
  Donjon:
    "Isolation and imprisonment; being so conservative in thinking as to be a prisoner of one's own beliefs",
  Executioner:
    "The imminent death of one rightly or wrongly convicted of a crime; false accusations and unjust prosecution",
  Ghost:
    "The looming past; the return of an old enemy or the discovery of a secret buried long ago",
  Horseman:
    "Death; disaster in the form of the loss of wealth or property, a horrible defeat, or the end of a bloodline",
  Innocent:
    "A being of great importance whose life is in danger (who might be helpless or simply unaware of the peril)",
  Marionette:
    "The presence of a spy or a minion of some greater power; an encounter with a puppet or an underling",
  Mists:
    "Something unexpected or mysterious that can't be avoided; a great quest or journey that will try one's spirit",
  Priest:
    "Enlightenment; those who follow a deity, a system of values, or a higher purpose",
  Raven:
    "A hidden source of information; a fortunate turn of events; a secret potential for good",
  Rogue:
    "Anyone for whom money is important; those who believe money is the key to their success",
  Seer: "Inspiration and keen intellect; a future event, the outcome of which will hinge on a clever mind",
  Tempter:
    "One who has been compromised or led astray by temptation or foolishness; one who tempts others for evil ends",
  Warrior:
    "Strength and force personified; violence; those who use force to accomplish their goals",
  Wizard:
    "Mystery and riddles; the unknown; those who crave magical power and great knowledge",
  "1 - coins":
    "Those who like money yet give it up freely; likable rogues and rapscallions",
  "2 - coins":
    "Charity and giving on a grand scale; those who use wealth to fight evil and sickness",
  "3 - coins":
    "Commerce; smuggling and black markets; fair and equitable trades",
  "4 - coins":
    "A rare commodity or business opportunity; deceitful or dangerous business transactions",
  "5 - coins":
    "Like-minded individuals joined together in a common goal; pride in one's work",
  "6 - coins": "Sudden change in economic status or fortune",
  "7 - coins":
    "Those who steal or burgle; a loss of property, beauty, innocence, friendship, or reputation",
  "8 - coins":
    "Corruption; honesty in an otherwise corrupt government or organization",
  "9 - coins":
    "Hoarded wealth; those who are irreversibly unhappy or who think money is meaningless",
  "1 - glyphs":
    "Serenity; inner strength and self-reliance; supreme confidence bereft of arrogance",
  "2 - glyphs":
    "Those who spread wisdom and faith to others; warnings of the spread of fear and ignorance",
  "3 - glyphs":
    "Healing; a contagious illness, disease, or curse; those who practice the healing arts",
  "4 - glyphs":
    "Those who protect others; one who bears a burden far too great to be shouldered alone",
  "5 - glyphs":
    "The ambivalence and cruelty of nature and those who feel drawn to it; inner turmoil",
  "6 - glyphs":
    "A fundamental change brought on by one whose beliefs are being put to the test",
  "7 - glyphs":
    "Liars; those who profess to believe one thing but actually believe another",
  "8 - glyphs":
    "Strict adherence to a code or a belief; those who plot, plan, and scheme",
  "9 - glyphs":
    "Betrayal by someone close and trusted; a weakening or loss of faith",
  "1 - stars":
    "A new discovery; the coming of unexpected things; unforeseen consequences and chaos",
  "2 - stars":
    "The pursuit of knowledge tempered by wisdom; truth and honesty; sages and prophecy",
  "3 - stars":
    "Inner turmoil that comes from confusion, fear of failure, or false information",
  "4 - stars":
    "Those guided by logic and reasoning; warns of an overlooked clue or piece of information",
  "5 - stars":
    "The triumph of nature over civilization; natural disasters and bountiful harvests",
  "6 - stars":
    "Magical or supernatural power that can't be controlled; magic for destructive ends",
  "7 - stars":
    "Lies and deceit; grand conspiracies; secret societies; the presence of a dupe or a saboteur",
  "8 - stars":
    "Unnatural events and unhealthy obsessions; those who follow a destructive path",
  "9 - stars":
    "The coming of an unexpected supernatural threat; those who think of themselves as gods",
  "1 - swords":
    "Justice and revenge for great wrongs; those on a quest to rid the world of great evil",
  "2 - swords":
    "Just and noble warriors; those who live by a code of honor and integrity",
  "3 - swords": "War and sacrifice; the stamina to endure great hardship",
  "4 - swords":
    "Inner strength and fortitude; those who fight for power or wealth",
  "5 - swords":
    "Great heroes; a sudden reversal of fate; the triumph of the underdog over a mighty enemy",
  "6 - swords":
    "The brutal and barbaric side of warfare; bloodlust; those with a bestial nature",
  "7 - swords":
    "Bigotry, intolerance, and xenophobia; a mysterious presence or newcomer",
  "8 - swords":
    "All that is wrong with government and leadership; those who rule through fear and violence",
  "9 - swords":
    "The coming of suffering or merciless cruelty; one who is irredeemably evil or sadistic",
};

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
  "1 - coins": new URL("../assets/img/1 - coins.webp", import.meta.url),
  "2 - coins": new URL("../assets/img/2 - coins.webp", import.meta.url),
  "3 - coins": new URL("../assets/img/3 - coins.webp", import.meta.url),
  "4 - coins": new URL("../assets/img/4 - coins.webp", import.meta.url),
  "5 - coins": new URL("../assets/img/5 - coins.webp", import.meta.url),
  "6 - coins": new URL("../assets/img/6 - coins.webp", import.meta.url),
  "7 - coins": new URL("../assets/img/7 - coins.webp", import.meta.url),
  "8 - coins": new URL("../assets/img/8 - coins.webp", import.meta.url),
  "9 - coins": new URL("../assets/img/9 - coins.webp", import.meta.url),
  "1 - glyphs": new URL("../assets/img/1 - glyphs.webp", import.meta.url),
  "2 - glyphs": new URL("../assets/img/2 - glyphs.webp", import.meta.url),
  "3 - glyphs": new URL("../assets/img/3 - glyphs.webp", import.meta.url),
  "4 - glyphs": new URL("../assets/img/4 - glyphs.webp", import.meta.url),
  "5 - glyphs": new URL("../assets/img/5 - glyphs.webp", import.meta.url),
  "6 - glyphs": new URL("../assets/img/6 - glyphs.webp", import.meta.url),
  "7 - glyphs": new URL("../assets/img/7 - glyphs.webp", import.meta.url),
  "8 - glyphs": new URL("../assets/img/8 - glyphs.webp", import.meta.url),
  "9 - glyphs": new URL("../assets/img/9 - glyphs.webp", import.meta.url),
  "1 - stars": new URL("../assets/img/1 - stars.webp", import.meta.url),
  "2 - stars": new URL("../assets/img/2 - stars.webp", import.meta.url),
  "3 - stars": new URL("../assets/img/3 - stars.webp", import.meta.url),
  "4 - stars": new URL("../assets/img/4 - stars.webp", import.meta.url),
  "5 - stars": new URL("../assets/img/5 - stars.webp", import.meta.url),
  "6 - stars": new URL("../assets/img/6 - stars.webp", import.meta.url),
  "7 - stars": new URL("../assets/img/7 - stars.webp", import.meta.url),
  "8 - stars": new URL("../assets/img/8 - stars.webp", import.meta.url),
  "9 - stars": new URL("../assets/img/9 - stars.webp", import.meta.url),
  "1 - swords": new URL("../assets/img/1 - swords.webp", import.meta.url),
  "2 - swords": new URL("../assets/img/2 - swords.webp", import.meta.url),
  "3 - swords": new URL("../assets/img/3 - swords.webp", import.meta.url),
  "4 - swords": new URL("../assets/img/4 - swords.webp", import.meta.url),
  "5 - swords": new URL("../assets/img/5 - swords.webp", import.meta.url),
  "6 - swords": new URL("../assets/img/6 - swords.webp", import.meta.url),
  "7 - swords": new URL("../assets/img/7 - swords.webp", import.meta.url),
  "8 - swords": new URL("../assets/img/8 - swords.webp", import.meta.url),
  "9 - swords": new URL("../assets/img/9 - swords.webp", import.meta.url),
};

function cardImageUrl(name) {
  return cardImages[name];
}

const coverImageUrl = new URL("../assets/img/cover.png", import.meta.url);

const maxCards = 30;
const pairsNeeded = maxCards / 2;

shuffleArray(cardNames);
const chosenCards = cardNames.slice(0, pairsNeeded);
const doubledCardNumbers = [...chosenCards, ...chosenCards];

const totalCards = doubledCardNumbers.length;

const columns = Math.ceil(Math.sqrt(totalCards));
const row = Math.ceil(totalCards / columns);

board.style.setProperty("--columns", columns);
board.style.setProperty("--rows", row);

shuffleArray(doubledCardNumbers);

const players = [
  { name: "Player 1", score: 0 },
  { name: "Player 2", score: 0 },
];
let currentPlayerIndex = 0;

const playerElements = document.querySelectorAll("#player-list .player");

const pairBanner = document.querySelector("#pair-banner");
const pairBannerText = document.querySelector("#pair-banner-text");
const inspect = document.querySelector("#inspect");
const inspectName = document.querySelector("#inspect-name");
const inspectText = document.querySelector("#inspect-text");
const inspectImg = document.querySelector("#inspect-img");
const inspectClose = document.querySelector("#inspect-close");

inspectClose.addEventListener("click", () => {
  inspect.classList.remove("open");
});

function showPairBanner(card) {
  pairBannerText.textContent = cardDescriptions[card];

  pairBanner.classList.remove("show");
  void pairBanner.offsetWidth;
  pairBanner.classList.add("show");
}

let firstChoice = null;
let secondChoice = null;
let lockboard = false;

doubledCardNumbers.forEach((card) => {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");
  cardElement.dataset.name = card;
  const cardBack = document.createElement("div");
  const cardFront = document.createElement("div");
  cardFront.classList.add("card-front");
  cardBack.classList.add("card-back");
  cardElement.appendChild(cardFront);
  cardElement.appendChild(cardBack);
  cardBack.style.backgroundImage = `url(${coverImageUrl})`;
  cardFront.style.backgroundImage = `url(${cardImageUrl(card)})`;
  startMusicOnce();

  cardElement.addEventListener("click", () => {
    if (lockboard) {
      return;
    }
    if (firstChoice === null) {
      firstChoice = cardElement;
      cardElement.classList.add("flipped");
      function playSfx() {
        sfx.currentTime = 0;
        sfx.play();
      }
      playSfx();

      return;
    }

    if (cardElement === firstChoice) {
      return;
    }

    secondChoice = cardElement;
    cardElement.classList.add("flipped");
    lockboard = true;
    function playSfx() {
      sfx.currentTime = 0;
      sfx.play();
    }
    playSfx();

    if (firstChoice.dataset.name === secondChoice.dataset.name) {
      firstChoice = null;
      secondChoice = null;
      lockboard = false;
      players[currentPlayerIndex].score++;
      updateScore();
      showPairBanner(card);
      inspectName.textContent = card;
      inspectText.textContent = cardDescriptions[card];
      inspectImg.src = cardImageUrl(card);
      inspect.classList.add("open");
      function playTarot() {
        tarot.currentTime = 0;
        tarot.play();
      }
      playTarot();
      return;
    }

    setTimeout(() => {
      firstChoice.classList.remove("flipped");
      secondChoice.classList.remove("flipped");
      firstChoice = null;
      secondChoice = null;
      lockboard = false;
      currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
      updateScore();
    }, 1000);
  });

  function updateScore() {
    players.forEach((player, index) => {
      playerElements[index].querySelector(".player-score").textContent =
        player.score;
      playerElements[index].classList.toggle(
        "active",
        index === currentPlayerIndex,
      );
    });
  }

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

  inspect.addEventListener("mousemove", ({ clientX, clientY }) => {
    const { dx, dy } = getAngles(inspectImg, clientX, clientY);

    inspectImg.style.setProperty("--ry", `${dx / 20}deg`);
    inspectImg.style.setProperty("--rx", `${dy / 20}deg`);
  });
}

music.loop = true;
music.volume = 0.0;
sfx.volume = 0.1;
