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
	const GameView = __webpack_require__(7);
	const Options = __webpack_require__(4);
	
	document.addEventListener("DOMContentLoaded", () => {
	  const canvas = document.getElementById("game-canvas");
	  canvas.width = Options.DIM_X;
	  canvas.height = Options.DIM_Y;
	
	  const ctx = canvas.getContext("2d");
	  const game = new Game(7, 3);
	  const gameView = new GameView(game, ctx);
	  gameView.start();
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const Prey = __webpack_require__(2);
	const Predator = __webpack_require__(5);
	const Options = __webpack_require__(4);
	const Board = __webpack_require__(8);
	
	class Game {
	  constructor(prey, predators) {
	    this.prey = [];
	    this.predators = [];
	    this.board = new Board();
	
	    this.addAnimals(prey, predators);
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
	    return [this.board].concat(this.prey).concat(this.predators);
	  }
	
	  draw(ctx) {
	    ctx.clearRect(0, 0, Options.DIM_X, Options.DIM_Y);
	
	    this.allObjects().forEach((object) => {
	      object.draw(ctx);
	    });
	  }
	
	  updateObjects(ctx) {
	    this.allObjects().forEach( object => object.update() );
	  }
	}
	
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
	
	  update() {
	    if (this.starved()) {
	      this.death();
	      return;
	    }
	
	    if (!this.alive) {
	      this.deathCounter();
	    }
	
	    //TODO Death Counter check, remove
	
	    this.move();
	    console.log("Hit Prey Update");
	  }
	}
	
	module.exports = Prey;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	const Options = __webpack_require__(4);
	
	const getRandomInt = size => Math.floor(Math.random() * size);
	
	class Animal {
	  constructor(options) {
	    this.pos = [getRandomInt(Options.DIM_X), getRandomInt(Options.DIM_Y)];
	    this.food = 5;
	    this.alive = true;
	
	    this.onReproductionCooldown = false;
	    this.ReproductionCooldownCounter = 0;
	
	    //TODO Remove this
	    this.movement = [1, 1];
	  }
	
	  move() {
	    this.pos[0] += this.movement[0] * this.speed;
	    this.pos[1] += this.movement[1] * this.speed;
	  }
	
	  eat(val) {
	    this.food += val;
	  }
	
	  starved() {
	    return this.food === 0;
	  }
	
	  death() {
	    this.alive = false;
	    this.counter = 0;
	  }
	
	  deathCounter() {
	    this.counter += 1;
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
/***/ function(module, exports) {

	const Options = {
	  DIM_X: 1000,
	  DIM_Y: 600,
	  TILE_SIZE: 20,
	  FPS: 32
	};
	
	module.exports = Options;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	const Animal = __webpack_require__(3);
	
	class Predator extends Animal {
	  constructor(options = {}) {
	    super(options);
	    this.speed = 2;
	    this.radius = 10;
	    this.color = "#ff0000";
	
	    this.prevMove = [0, 0];
	  }
	
	  update() {
	    if (this.starved()) {
	      this.death();
	      return;
	    }
	
	    if (!this.alive) {
	      this.deathCounter();
	    }
	
	    //TODO Death Counter check, remove
	
	    this.move();
	  }
	
	  //AI on Deciding Move
	    //Sniff?
	    //Starving?
	
	  //Check if previous move is same direction as current
	
	}
	
	module.exports = Predator;


/***/ },
/* 6 */
/***/ function(module, exports) {

	class Tile {
	  constructor(pos, size) {
	    this.pos = pos;
	    this.tile_size = size;
	    this.grass = 15;
	    this.markedForUpdate = true;
	
	    this.startPos = [this.pos[0]*this.tile_size, this.pos[1]*this.tile_size];
	  }
	
	  getColor() {
	    if (this.grass === 0) {
	      return "#ffcc99";
	    } else if (this.grass <= 10) {
	      return "#ccff99";
	    } else if (this.grass <= 20) {
	      return "#00ff00";
	    } else if (this.grass <= 30) {
	      return "#006600";
	    }
	  }
	
	  draw(ctx) {
	
	      ctx.fillStyle = this.getColor();
	
	      ctx.rect(this.startPos[0], this.startPos[1], this.tile_size - 1, this.tile_size - 1);
	      ctx.fill();
	
	  }
	
	  eaten() {
	    this.grass -= 10;
	    if (this.grass < 0) {
	      this.grass = 0;
	    }
	  }
	
	  grow() {
	    if (this.grass < 30) this.grass += 1;
	    if (this.grass === 10 || this.grass === 20) {
	      this.markedForUpdate = true;
	    }
	  }
	
	  update() {
	    this.grow();
	  }
	}
	
	module.exports = Tile;


/***/ },
/* 7 */
/***/ function(module, exports) {

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
	    console.log("Updated");
	
	    requestAnimationFrame(this.animate.bind(this));
	  }
	}
	
	module.exports = GameView;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	const Tile = __webpack_require__(6);
	const Options = __webpack_require__(4);
	
	class Board {
	  constructor() {
	    this.tiles = [];
	
	    this.createTiles(0);
	  }
	
	  createTiles() {
	    for (let i = 0; i < Options.DIM_X / Options.TILE_SIZE; i++) {
	      for(let j = 0; j < Options.DIM_Y / Options.TILE_SIZE; j++) {
	        this.tiles.push(new Tile([i, j], Options.TILE_SIZE));
	      }
	    }
	  }
	
	  draw(ctx) {
	    this.tiles.forEach( tile => {
	      ctx.fillStyle = tile.getColor();
	      ctx.fillRect(tile.startPos[0], tile.startPos[1], Options.TILE_SIZE -1, Options.TILE_SIZE - 1);
	    });
	  }
	
	  update() {
	    this.tiles.forEach( tile => tile.update() );
	  }
	}
	
	module.exports = Board;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map