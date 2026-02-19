# Nuggets: Design Hints

Consider these thoughts while you develop your design spec.

### Client/server

**All game logic is handled in the server,** as noted in the spec.
The client only provides a user interface; it has no role in tracking gold, determining visibility, handling moves, or even checking the validity of user's keystrokes.
Indeed, the network protocol makes it impossible for the client to be anything other than pass keystrokes to the server and display the maps that come back.

### Grid

The game is played on an *NR x NC* grid of gridpoints.
How will you represent the grid?
How will the client and/or server use the grid?
What functions must a "grid" support?
This is a critical design decision, and one I spent a lot of time considering before I started writing code.
I started one approach to the representation and implementation of a grid, and later switched to another approach... but because I'd wrapped the entire approach in an abstract `grid` module, *none of the code that used the grid needed to change.*

The right representation of a grid can make your code vastly simpler than it would be if you choose other representations.
Consider:

* What information must the *spectator* keep about the state of the game?
* What information must the *player* keep about the state of the game?
* What information must the *server* keep about the state of the game?
* What information does the string below record about the state of the game?
* What information does the string below **not** record about the state of the game?
* How much gold is in each pile... and does any player know until they step on a pile?
* Do these questions give you ideas about how to store game state?

```c
char* grid = ...;   // a string variable
puts(grid);         // produces the output below
```
```
  +----------+
  |..........|                 +---------+
  |..........###################.........|
  |..........|                 +-----#---+
  +---------#+                       #
            #                        #
            #  +-----------+         #
            ####...........##############
               |...........|
               +-----------+
```

### Keep it simple

As I mulled over design choices, and implementation choices, a question frequently appeared in my head: *but won't that approach be inefficient, in either time or memory? what about this other approach, that would be more efficient?*
I always opted for the simpler approach.  Always.
This philosophy meant I was able to write the code faster, debug it more easily,  test it more reliably, and reach a correct outcome sooner.
And, my code is shorter and easier to read than it would be in a complex approach.

Later, if I discovered the inefficient approach was too slow, or too bloated, for the game's purposes, I could make a branch and explore an optimization of some component or algorithm.
But I've not had the need, or the time, to do so.

### Keyboard input

The client needs to read and react to keystrokes immediately... but all of the code we've seen in CS50 cannot read any input from stdin (when it is a keyboard) until the user hits Return.
In other words, the keyboard is normally in "line-oriented mode".
Your client program needs it in "character-oriented mode", technically called "cbreak" mode.

No problem.
The *ncurses* library provides that feature ([see Knowledge Unit about ncurses](https://www.spongium.org/unit/ncurses)).
As a design hint, just be confident that you can read one character from the keyboard when told that stdin has input ready, and know that your program will not block (get stuck) waiting for the user to hit a key.

The message module (part of the starter kit) provides you a way of looping forever, waiting for input to be ready on stdin or on the network, and calling you when either occurs.
Thus, you need not worry about how to know when to read stdin, or how to know when a message arrives.
