const Animal = require("./animal");

class Predator extends Animal {
  constructor(options = {}) {
    super(options);
    this.speed = 2;
    this.radius = 10;
    this.color = "#ff0000";

    this.prevMove = [0, 0];
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
  }

  //AI on Deciding Move
    //Sniff?
    //Starving?

  //Check if previous move is same direction as current

}

module.exports = Predator;
