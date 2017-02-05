const Animal = require("./animal");

class Prey extends Animal {
  constructor(options = {}) {
    super(options);
    this.speed = 3;
    this.radius = 10;
    this.color = "#228B22";
  }
}

module.exports = Prey;
