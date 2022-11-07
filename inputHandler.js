export class InputHandler {
  constructor() {
    this.keys = [];
    window.addEventListener("keydown", (e) => {
      if (e.key.includes("Arrow")) this.keys.push(e.key);
    });
  }

  getKey() {
    return this.keys.pop();
  }
}
