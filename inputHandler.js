export class InputHandler {
  constructor() {
    this.keys = [];
    window.addEventListener("keydown", (e) => {
      if (e.key.includes("Arrow") && !this.keys.includes(e.key))
        this.keys.push(e.key);
      console.log(this.keys);
    });
    window.addEventListener("keyup", (e) => {
      if (e.key.includes("Arrow"))
        this.keys.splice(this.keys.indexOf(e.key), 1);
      console.log(this.keys);
    });
  }
}
