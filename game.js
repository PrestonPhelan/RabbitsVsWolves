const Prey = require('./prey');
const Predator = require('./predator');

class Game {
  constructor(prey, predators) {
    this.prey = [];
    this.predators = [];
    this.tiles = [];

    this.addAnimals(prey, predators);
    console.log(this.prey);
    console.log(this.predators);
  }

  addAnimals(prey, predators) {
    for (let i = 0; i < prey; i++) {
      this.prey.push(new Prey({ game: this}));
    }

    for (let j = 0; j < predators; j++) {
      this.predators.push(new Predator({ game: this}));
    }
  }

  allObjects() {
    return this.prey.concat(this.predators);
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.allObjects().forEach((object) => {
      object.draw(ctx);
    });
  }

}

Game.BG_COLOR = "#000000";
Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.FPS = 32;
Game.NUM_ASTEROIDS = 10;

module.exports = Game;
