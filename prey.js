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
    //If wolf is close enough, run away
    if (closestDistance <= 100) {
      this.movement =
        Util.escapeAngle(
          this.pos,
          closestPredator.pos,
          closestPredator.movement);
      return;
    } else {
      //Else look for closest mate
      closestDistance = null;
      let closestMate;
      prey.forEach( mate => {
        if (mate === this) {
          return;
        }
        let distance = Util.calcDistance(mate.pos, this.pos);
        if (!closestDistance || distance < closestDistance) {
          closestDistance = distance;
          closestMate = mate;
        }
      });

      this.movement =
        Util.pursuitAngle(this.pos, closestMate.pos, closestMate.movement);
    }
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
