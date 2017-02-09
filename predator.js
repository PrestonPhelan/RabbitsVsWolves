const Animal = require("./animal");
const Util = require('./util');

class Predator extends Animal {
  constructor(options = {}) {
    super(options);
    this.speed = 3;
    this.radius = 10;
    this.color = "#ff0000";

    this.prevMove = [0, 0];
    this.destination = null;
  }

  eating() {

  }

  getMove(prey, predators) {
    let closestDistance;
    let closestAnimal;

    prey.forEach( food => {
      if (!food.alive) { return; }
      let distance = Util.calcDistance(food.pos, this.pos);
      if (!closestDistance || distance < closestDistance) {
        closestDistance = distance;
        closestAnimal = food;
      }
    });

    if (closestDistance <= this.radius) {
      console.log("Eat");
      this.eating();
      closestAnimal.eaten();
      this.movement = [0, 0];
      return;
    }

    if (this.food > 1) {
      //TODO adjust food as appropriate
      predators.forEach( mate => {
        if (mate === this || !mate.alive ) {
          return;
        }
        let distance = Util.calcDistance(mate.pos, this.pos);
        if (!closestDistance || distance < closestDistance) {
          closestDistance = distance;
          closestAnimal = mate;
        }
      });
    }
    //Get target's current position & movement

    this.movement =
      Util.pursuitAngle(this.pos, closestAnimal.pos, closestAnimal.movement);
  }

  update(prey, predators) {
    if (this.removed) { return; }
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

  //AI on Deciding Move
    //Sniff?
    //Starving?

  //Check if previous move is same direction as current

}

module.exports = Predator;
