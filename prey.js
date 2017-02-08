const Animal = require("./animal");
const Util = require("./util");

class Prey extends Animal {
  constructor(options = {}) {
    super(options);
    this.speed = 3;
    this.radius = 10;
    this.color = "#228B22";
  }

  getMove(prey, predators) {
    //Run from wolf if necessary
    let closestDistance;
    let closestPredator;
    predators.forEach( predator => {
      let distance = Util.calcDistance(predator.pos, this.pos);
      if (!closestDistance || distance < closestDistance) {
        closestDistance = distance;
        closestPredator = predator;
      }
    });

    this.movement =
      Util.escapeAngle(this.pos, closestPredator.pos, closestPredator.movement);
    //If wolf is close enough, run away

    //Else look for closest mate
  }

  update(prey, predators) {
    if (this.starved()) {
      this.death();
      return;
    }

    if (!this.alive) {
      this.deathCounter();
    }
    this.getMove(prey, predators);

    //TODO Death Counter check, remove

    this.move();
  }
}

module.exports = Prey;
