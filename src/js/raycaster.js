const game = document.querySelector("#game");

const canvas = game;
const ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;
ctx.fillStyle = "grey";

const map = [
  [1, 1, 1, 0, 0, 1, 1, 1],
  [1, 1, 1, 0, 0, 1, 1, 1],
  [1, 1, 1, 2, 2, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
];
for (let row = 0; row < map.length; row++) {
  for (let col = 0; col < map[0].length; col++) {
    if (map[row][col] === 1) {
      ctx.fillStyle = "grey";
    } else {
      ctx.fillStyle = "black";
    }
    ctx.fillRect(col * 40, row * 40, 40, 40);
  }
}
