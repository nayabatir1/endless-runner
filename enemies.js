class Enemy {
  constructor() {
    this.frameX = 0;
    this.frameY = 0;
    this.fps = 20;
    this.frameInterval = 1000 / this.fps;
    this.frameTimer = 0;
  }

  udpate() {}

  draw() {}
}

class FlyingEnemy extends Enemy {
  constructor() {}
}

class GroundEnemy extends Enemy {
  constructor() {}
}

class ClimbingEnemy extends Enemy {
  constructor() {}
}
