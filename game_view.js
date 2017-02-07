class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.gameOver = false;

    this.game.draw(this.ctx);
    // this.start();
  }

  start() {
    requestAnimationFrame(this.animate.bind(this));
  }

  animate() {
    this.game.updateObjects();
    this.game.draw(this.ctx);

    requestAnimationFrame(this.animate.bind(this));
  }
}

module.exports = GameView;
