const Animal = require("./animal");

class Predator extends Animal {
  constructor(options = {}) {
    super(options);
    this.speed = 2;
    this.radius = 25;
    this.color = "#ff0000";
  }
}

module.exports = Predator;
