* Animal
  - Holds basic Animal properties
  - Has death functions
  - Has reproduction method
  - Tracks food
  - Tracks reproduction cooldowns

* Rabbit & Wolf Subclasses (inherit from Animal)
  - Speed Variables
    - Make linear speed the same, but slower turn speed for wolf
    - ?Berserk-like state, faster move speed when close to death?
  - Differences in Eat methods

* Tile
  - Tracks amount of grass in its location

* Game
  - Tracks game state
    - Where all animals are
    - Removes dead animals from board
    - Triggers eat methods on appropriate targets
    - Triggers reproduction methods on appropriate targets
  - Updates all moves, draws game

* GameView
  - Stores instance of game
  - Stores canvas context to draw game into
  - Timer for moves on animals
  - Key Listeners for user controls
