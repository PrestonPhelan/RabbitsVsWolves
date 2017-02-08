const Options = require('./options');

const getRandomInt = size => Math.floor(Math.random() * size);

class Animal {
  constructor(options) {
    this.pos = [getRandomInt(Options.DIM_X), getRandomInt(Options.DIM_Y)];
    this.food = 5;
    this.alive = true;

    this.onReproductionCooldown = false;
    this.ReproductionCooldownCounter = 0;

    //TODO Remove this
    this.movement = [0, 0];
  }

  move() {
    this.pos[0] += this.movement[0] * this.speed;
    this.pos[1] += this.movement[1] * this.speed;
  }

  eat(val) {
    this.food += val;
  }

  starved() {
    return this.food === 0;
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
