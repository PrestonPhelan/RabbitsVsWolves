const Animal = require("./animal");
const Util = require("./util");
const Options = require("./options");

class Prey extends Animal {
  constructor(options = {}) {
    super(options);
    this.speed = 4;
    this.radius = 10;
    this.color = "#228B22";
  }

  getMove(prey, predators) {
    //Run from wolf if necessary
    let closestDistance;
    let closestPredator;
    predators.forEach( predator => {
      if (!predator.alive) { return; }
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
          if (this.pos[0] <= this.radius && this.movement[0] < 0) { this.movement[0] = 0; }
          else if (this.pos[0] >= Options.DIM_X - this.radius && this.movement[0] > 0) { this.movement[0] = 0; }
          if (this.pos[1] <= this.radius && this.movement[1] < 0) { this.movement[1] = 0; }
          else if (this.pos[1] >= Options.DIM_Y - this.radius && this.movement[1] > 0) { this.movement[1] = 0; }
      return;
    } else {
      //Else look for closest mate
      closestDistance = null;
      let closestMate;
      prey.forEach( mate => {
        if (mate === this || !mate.alive || mate.onReproductionCooldown) {
          return;
        }
        let distance = Util.calcDistance(mate.pos, this.pos);
        if (!closestDistance || distance < closestDistance) {
          closestDistance = distance;
          closestMate = mate;
        }
      });

      if (closestDistance <= this.radius && !closestMate.onReproductionCooldown) {
        console.log("Mating");
        this.mate();
      }

      this.movement =
        Util.pursuitAngle(this.pos, closestMate.pos, closestMate.movement);

      //Prevent leaving screen
      if (this.pos[0] <= this.radius && this.movement[0] < 0) { this.movement[0] = 0; }
      else if (this.pos[0] >= Options.DIM_X - this.radius && this.movement[0] > 0) { this.movement[0] = 0; }
      if (this.pos[1] <= this.radius && this.movement[1] < 0) { this.movement[1] = 0; }
      else if (this.pos[1] >= Options.DIM_Y - this.radius && this.movement[1] > 0) { this.movement[1] = 0; }
    }
  }

  eaten() {
    this.death();
    // this.movement = [0, 0];
    this.color = "#000000";
  }

  mate() {
    if (this.onReproductionCooldown) { return; }
    this.onReproductionCooldown = true;
    debugger;
    console.log(this.onReproductionCooldown);
    this.game.prey.push(new Prey({game: this.game}));
  }

  update(prey, predators) {
    if (this.removed) { return; }
    if (!this.alive) {
      this.deathCounter();
      return;
    }

    if (this.starved()) {
      this.death();
      return;
    }

    if (this.onReproductionCooldown) {
      this.ReproductionCooldownCounter += 1;
      if (this.ReproductionCooldownCounter === 250) {
        this.onReproductionCooldown = false;
        this.ReproductionCooldownCounter = 0;
      }
    }

    this.getMove(prey, predators);

    this.move();
  }
}

module.exports = Prey;
