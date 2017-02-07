const Tile = require('./tile');
const Options = require('./options');

class Board {
  constructor() {
    this.tiles = [];

    this.createTiles(0);
  }

  createTiles() {
    for (let i = 0; i < Options.DIM_X / Options.TILE_SIZE; i++) {
      for(let j = 0; j < Options.DIM_Y / Options.TILE_SIZE; j++) {
        this.tiles.push(new Tile([i, j], Options.TILE_SIZE));
      }
    }
  }

  draw(ctx) {
    this.tiles.forEach( tile => {
      ctx.fillStyle = tile.getColor();
      ctx.fillRect(tile.startPos[0], tile.startPos[1], Options.TILE_SIZE -1, Options.TILE_SIZE - 1);
    });
  }

  update() {
    this.tiles.forEach( tile => tile.update() );
  }
}

module.exports = Board;
