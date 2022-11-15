/** @type {HTMLCanvasElement} */

import { InputHandler } from "./inputHandler.js";
import { Player } from "./player.js";
import { updateBg, drawBg } from "./background.js";

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.width = 500;
canvas.height = window.height = 500;
const layerHeight = 60;

class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.player = new Player(this, "stand", layerHeight);
    this.input = new InputHandler();
  }

  update() {
    this.player.update(this.input.keys);
    if (this.player.playerType !== "sit") updateBg();
  }

  draw(context) {
    drawBg(context);
    this.player.draw(context);
  }
}

const game = new Game(canvas.width, canvas.height);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  game.draw(ctx);
  game.update();

  requestAnimationFrame(animate);
}

animate();
