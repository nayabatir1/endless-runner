/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;

const playerImg = new Image();
const playerImgSrc = "./image/player.png";

function LoadImage(url, elem) {
  return new Promise((res, rej) => {
    elem.onload = () => res(elem);

    elem.onerror = rej;

    elem.src = url;
  });
}

async function LoadingAssets() {
  await LoadImage(playerImgSrc, playerImg);
}

// actual logic
async function begin() {
  await LoadingAssets();

  ctx.drawImage(playerImg, 0, 0);
}

begin();

class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  update() {}

  draw() {}
}
