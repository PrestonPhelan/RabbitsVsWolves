const Animal = require("./animal");

class Prey extends Animal {
  constructor(options = {}) {
    super(options);
    this.speed = 3;
    this.radius = 10;
    this.color = "#228B22";
  }

  update() {
    if (this.starved()) {
      this.death();
      return;
    }

    if (!this.alive) {
      this.deathCounter();
    }

    //TODO Death Counter check, remove

    this.move();
    console.log("Hit Prey Update");
  }
}

module.exports = Prey;
