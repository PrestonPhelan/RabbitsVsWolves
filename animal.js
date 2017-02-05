class Animal {
  constructor(options) {
    this.pos = [0, 0];
    this.food = 5;
    this.alive = true;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;

    ctx.beginPath();
    ctx.arc(
      this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
    );
    ctx.fill();
  }
}

module.exports = Animal;
