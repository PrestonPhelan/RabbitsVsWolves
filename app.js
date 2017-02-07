const Game = require('./game');
const GameView = require('./game_view');
const Options = require('./options');

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game-canvas");
  canvas.width = Options.DIM_X;
  canvas.height = Options.DIM_Y;

  const ctx = canvas.getContext("2d");
  const game = new Game(1, 1);
  const gameView = new GameView(game, ctx);
  gameView.start();
});
