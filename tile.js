class Tile {
  constructor(pos, size) {
    this.pos = pos;
    this.tile_size = size;
    this.grass = 15;
    this.markedForUpdate = true;

    this.startPos = [this.pos[0]*this.tile_size, this.pos[1]*this.tile_size];
  }

  getColor() {
    return "#d3d3d3";
    // if (this.grass === 0) {
    //   return "#ffcc99";
    // } else if (this.grass <= 10) {
    //   return "#ccff99";
    // } else if (this.grass <= 20) {
    //   return "#00ff00";
    // } else if (this.grass <= 30) {
    //   return "#006600";
    // }
  }

  eaten() {
    this.grass -= 10;
    if (this.grass < 0) {
      this.grass = 0;
    }
  }

  grow() {
    if (this.grass < 30) this.grass += 1;
    if (this.grass === 10 || this.grass === 20) {
      this.markedForUpdate = true;
    }
  }

  update() {
    this.grow();
  }
}

module.exports = Tile;
