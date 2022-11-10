export class InputHandler {
  constructor() {
    this.keys = new Set();
    window.addEventListener("keydown", (e) => {
      if (e.key.includes("Arrow")) this.keys.add(e.key);
      // console.log(this.keys);
    });

    window.addEventListener("keyup", (e) => {
      if (this.keys.has(e.key)) this.keys.delete(e.key);
      // console.log(this.keys);
    });
  }
}
