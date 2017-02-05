class Tile {
  constructor(pos, size) {
    this.pos = pos;
    this.tile_size = size;
    this.grass = 20;
  }

  getColor() {
    if (this.grass === 0) {
      //Dead Color
    } else if (this.grass <= 10) {
      //Light Green
    } else if (this.grass <= 20) {
      return "#00ff00";
    } else if (this.grass <= 30) {
      //Dark Green
    }
  }

  draw(ctx) {
    ctx.fillStyle = this.getColor();

    const startPos = [this.pos[0]*this.tile_size, this.pos[1]*this.tile_size];

    ctx.rect(startPos[0], startPos[1], this.tile_size - 1, this.tile_size - 1);
    ctx.fill();
  }

  eaten() {
    this.grass -= 10;
    if (this.grass < 0) {
      this.grass = 0;
    }
  }

  grow() {
    if (this.grass < 30) this.grass += 1;
  }
}

module.exports = Tile;
