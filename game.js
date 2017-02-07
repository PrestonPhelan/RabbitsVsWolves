const Prey = require('./prey');
const Predator = require('./predator');
const Options = require('./options');
const Board = require('./board');

class Game {
  constructor(prey, predators) {
    this.prey = [];
    this.predators = [];
    this.board = new Board();

    this.addAnimals(prey, predators);
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
    return [this.board].concat(this.prey).concat(this.predators);
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Options.DIM_X, Options.DIM_Y);

    this.allObjects().forEach((object) => {
      object.draw(ctx);
    });
  }

  updateObjects(ctx) {
    this.allObjects().forEach( object => object.update() );
  }
}

module.exports = Game;
