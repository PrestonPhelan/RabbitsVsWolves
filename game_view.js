class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;

    this.game.draw(this.ctx);
  }
}

module.exports = GameView;
