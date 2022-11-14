/** @type {HTMLCanvasElement} */

import {
  forestBg1,
  forestBg2,
  forestBg3,
  forestBg4,
  forestBg5,
} from "./Assets.js";

const bgHeight = 500,
  bgWidth = 1667;

class Background {
  constructor(image, speed) {
    this.image = image;
    this.speed = speed;
    this.dx = 0;
    this.dy = 0;
  }

  update() {
    this.dx += this.speed;
    if (this.dx > bgWidth) {
      this.dx = 0;
    }
  }

  draw(context) {
    context.drawImage(this.image, -this.dx, 0);

    if (this.dx > bgWidth - window.width) {
      context.drawImage(this.image, -this.dx + bgWidth, 0);
    }
  }
}

const backgrounds = [forestBg1, forestBg2, forestBg3, forestBg4, forestBg5].map(
  (bg, i) => new Background(bg, i + 1)
);

export function updateBg() {
  backgrounds.forEach((bg) => {
    bg.update();
  });
}

export function drawBg(context) {
  backgrounds.forEach((bg) => {
    bg.draw(context);
  });
}
