const Animal = require("./animal");

class Predator extends Animal {
  constructor(options = {}) {
    super(options);
    this.speed = 2;
    this.radius = 25;
    this.color = "#ff0000";

    this.prevMove = [0, 0];
  }

  //AI on Deciding Move
    //Sniff?
    //Starving?

  //Check if previous move is same direction as current

}

module.exports = Predator;
