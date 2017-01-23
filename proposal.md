# Wolf vs. Rabbit

## Background

Wolf vs. Rabbit is a game based on population dynamics.  Players play as
a single rabbit on a board with grass, other rabbits, and wolves.  They
move around the board trying to eat grass, escape the wolves, and find mates.

Players score a point every time their rabbit reproduces.  The game is over
if they are caught by a wolf or starve by not eating enough grass.

Reproduce too fast, and your offspring will eat all the food.  Reproduce
too slowly, and the wolves will have no choice but to come for you!


## Functionality & MVP

The Wolf vs. Rabbit game will have the following functionality:

[] Short how to play

[] Start, pause, and reset buttons

[] Arrow key controls

[] Live game board that tracks movement of the animals, and grass at each square.

[] Inviting Start & Game Over screens


## Wireframes

[Link]


## Architecture & Technologies

- board.js will track the status of the current board; where everything is.

- tile.js will track the amount of grass left on a tile.

- wolf.js will track a wolf's hunger level, location.

- rabbit.js will track a rabbit's hunger level & location.

- game.js tracks score turn logic.


This game will be simple enough to run with vanilla JavaScript with a Canvas
implementation.



## Implementation

**Day 1:** Write simulation backend.  Create components for the board, squares,
rabbits & wolves.  Bind controls.  Make game design decisions about size
of grid, number of starting animals, food spending rate, etc.

**Day 2:** Render Canvas, find artistic components to use.

**Day 3:** Get board moving.  Connect user controls and allow for start/pause.
Display score.

**Day 4:** Final styling.  Make things look nice.  Possibly add music/sound.


## Bonus Features

[] Music & Sound Effects

[] Adjusting Game Start Settings

[] Playing as Wolf
