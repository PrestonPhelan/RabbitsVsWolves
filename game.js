const Prey = require('./prey');
const Predator = require('./predator');
const Tile = require('./tile');
const Options = require('./options');

class Game {
  constructor(prey, predators) {
    this.prey = [];
    this.predators = [];
    this.tiles = [];

    this.createTiles();
    this.addAnimals(prey, predators);
    console.log(this.prey);
    console.log(this.predators);
    console.log(this.tiles);
  }

  createTiles() {
    for (let i = 0; i < Options.DIM_X / Options.TILE_SIZE; i++) {
      for(let j = 0; j < Options.DIM_Y / Options.TILE_SIZE; j++) {
        this.tiles.push(new Tile([i, j], Options.TILE_SIZE));
      }
    }
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
    return this.tiles.concat(this.prey).concat(this.predators);
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Options.DIM_X, Options.DIM_Y);
    // ctx.fillStyle = Game.BG_COLOR;
    // ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.allObjects().forEach((object) => {
      object.draw(ctx);
    });
  }

}

// Game.BG_COLOR = "#000000";
// Game.DIM_X = 1000;
// Game.DIM_Y = 600;
// Game.TILE_SIZE = 20;
// Game.FPS = 32;

module.exports = Game;
