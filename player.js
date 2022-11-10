import { PlayerImg } from "./Assets.js";

const FRAMES = {
  stand: { index: 0, frames: 6 },
  jump: { index: 1, frames: 6 },
  fall: { index: 2, frames: 6 },
  run: { index: 3, frames: 8 },
  hit: { index: 4, frames: 10 },
  sit: { index: 5, frames: 4 },
  roll: { index: 6, frames: 6 },
  bite: { index: 7, frames: 6 },
  die: { index: 8, frames: 11 },
  howl: { index: 9, frames: 3 },
};

export class Player {
  constructor(game, playerType, layerHeight) {
    this.layerHeight = layerHeight;
    this.playerType = playerType; // will traverse along y in player image
    this.frame = 0; // will traverse along x in player image
    this.game = game;
    this.width = 100;
    this.height = 91.3;
    this.dx = 0; // destination x
    this.dy = this.game.height - this.height - this.layerHeight; // destination y
    this.vy = 0;
    this.speed = 10;
    this.frameRate = 4;
    this.counter = 0;
    this.weight = 1;
  }

  update(keys) {
    if (this.frame >= FRAMES[this.playerType].frames) this.frame = 0;
    this.counter++;

    if (this.counter === this.frameRate) {
      this.frame++;
      this.counter = 0;
    }

    this.dy += this.vy;

    if (keys.has("ArrowLeft") && this.playerType !== "sit" && this.dx > 0)
      this.dx -= this.speed;

    if (
      keys.has("ArrowRight") &&
      this.playerType !== "sit" &&
      this.dx < window.width - this.width
    )
      this.dx += this.speed;

    if (keys.has("ArrowUp") && this.isOnGround()) {
      this.up();
    }

    if (keys.has("ArrowDown") && this.isOnGround()) this.playerType = "sit";

    if (!this.isOnGround()) this.vy += this.weight;
    else this.vy = 0;

    if (this.isOnGround() && this.playerType === "jump")
      this.playerType = "run";

    if (this.vy < 0) this.playerType = "jump";
    if (this.vy > 0) this.playerType = "fall";
    if (!this.vy && this.isOnGround() && this.playerType !== "sit")
      this.playerType = "run";
  }

  draw(context) {
    context.drawImage(
      PlayerImg,
      this.frame * this.width,
      FRAMES[this.playerType].index * this.height,
      this.width,
      this.height,
      this.dx,
      this.dy,
      this.width,
      this.height
    );
  }

  isOnGround() {
    return this.dy >= this.game.height - this.height - this.layerHeight;
  }

  up() {
    this.vy -= 20;
    this.dy += this.vy;
  }
}
