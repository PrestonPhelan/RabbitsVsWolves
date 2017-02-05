class Animal {
  constructor(options) {
    this.pos = [100, 100];
    this.food = 5;
    this.alive = true;

    this.onReproductionCooldown = false;
    this.ReproductionCooldownCounter = 0;
  }

  eat(val) {
    this.food += val;
  }

  starved() {
    this.food === 0;
  }

  death() {
    this.alive = false;
    this.counter = 0;
  }

  deathCounter() {
    this.counter += 1;
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
