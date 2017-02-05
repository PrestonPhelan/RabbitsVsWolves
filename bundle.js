/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const Game = __webpack_require__(1);
	const GameView = __webpack_require__(5);
	
	document.addEventListener("DOMContentLoaded", () => {
	  const canvas = document.getElementById("game-canvas");
	  canvas.width = Game.DIM_X;
	  canvas.height = Game.DIM_Y;
	
	  const ctx = canvas.getContext("2d");
	  const game = new Game(7, 3);
	  new GameView(game, ctx);
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const Prey = __webpack_require__(2);
	const Predator = __webpack_require__(4);
	
	class Game {
	  constructor(prey, predators) {
	    this.prey = [];
	    this.predators = [];
	    this.tiles = [];
	
	    this.addAnimals(prey, predators);
	    console.log(this.prey);
	    console.log(this.predators);
	  }
	
	  addAnimals(prey, predators) {
	    for (let i = 0; i < prey; i++) {
	      this.prey.push(new Prey({ game: this}));
	    }
	
	    for (let j = 0; j < predators; j++) {
	      this.predators.push(new Predator({ game: this}));
	    }
	  }
	
	  allObjects() {
	    return this.prey.concat(this.predators);
	  }
	
	  draw(ctx) {
	    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
	    ctx.fillStyle = Game.BG_COLOR;
	    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
	
	    this.allObjects().forEach((object) => {
	      object.draw(ctx);
	    });
	  }
	
	}
	
	Game.BG_COLOR = "#000000";
	Game.DIM_X = 1000;
	Game.DIM_Y = 600;
	Game.FPS = 32;
	Game.NUM_ASTEROIDS = 10;
	
	module.exports = Game;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	const Animal = __webpack_require__(3);
	
	class Prey extends Animal {
	  constructor(options = {}) {
	    super(options);
	    this.speed = 3;
	    this.radius = 10;
	    this.color = "#228B22";
	  }
	}
	
	module.exports = Prey;


/***/ },
/* 3 */
/***/ function(module, exports) {

	class Animal {
	  constructor(options) {
	    this.pos = [0, 0];
	    this.food = 5;
	    this.alive = true;
	  }
	
	  draw(ctx) {
	    ctx.fillStyle = this.color;
	
	    ctx.beginPath();
	    ctx.arc(
	      this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
	    );
	    ctx.fill();
	  }
	}
	
	module.exports = Animal;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	const Animal = __webpack_require__(3);
	
	class Predator extends Animal {
	  constructor(options = {}) {
	    super(options);
	    this.speed = 2;
	    this.radius = 25;
	    this.color = "#ff0000";
	  }
	}
	
	module.exports = Predator;


/***/ },
/* 5 */
/***/ function(module, exports) {

	class GameView {
	  constructor(game, ctx) {
	    this.ctx = ctx;
	    this.game = game;
	
	    this.game.draw(this.ctx);
	  }
	}
	
	module.exports = GameView;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map