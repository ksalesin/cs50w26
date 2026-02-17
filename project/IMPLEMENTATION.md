# Nuggets: Implementation Hints

Consider these thoughts while you develop your implementation spec.

### Iterative development

I cannot emphasize this point enough: write, test, and commit a minimal program, then incrementally add capabilities, bit by bit.
(Indeed, when following the git-flow approach, your *main* branch should always contain a clean, submittable, runnable program.)
My first server did little more than parse its arguments and exit zero on success, non-zero with error messages on an invalid command-line. *Commit.*
Then I added code to initialize a grid, print it out, and exit. *Commit.*
Then I added a loop to read a line from stdin, and handle it as if it were a message from a client; at first, it could handle only "QUIT". *Commit.*
Later I added networking.
And so forth.

*I made 97 commits on my solution before the project was released to students.*

Each one provided a bit more functionality, or improved unit tests, or improved commenting, or refactored some function that had grown too large.
In a few cases, I started down some path and then decided it was a bad direction... so I used `git checkout` to revert to the prior commit, and start over.

As you plan your implementation, think about this *iterative development* approach.
What features will you add first?
What can be added later?
How will you be sure to always have a clean, tested, runnable, submittable, project?
(use git-flow.)

### Comment (and log) as you go

I could have written my solution faster.

But I chose to keep my code fully commented, as I wrote;
 to keep those comments up to date, as I made changes;
 to add logging outputs at all critical points in the code;
 to add defensive checks for every function argument, as I wrote the function;
 and
 to add defensive checks for every function that could return an error.

This choice made a huge difference, even though I was the sole developer and even though I never stepped away from coding for more than 24 hours.
The act of writing comments (for an imaginary reader to see) helped me to think more clearly about what the code was supposed to do, and helped me later remember what each piece of code was doing.
The comments actually helped me remember the "contract" between caller and function.
The defensive checks actually helped catch bugs that would otherwise have led to obscure incorrect behavior or to segmentation faults.

It's worth writing the comments and defensive code *as you write the functional code.*

### Break down big functions

Review the [unit](https://www.spongium.org/unit/cohesion) about *cohesion* and *coupling*, and think about the content and role of each function you write.
If a function starts to get large, break it down into smaller functions.
I found this to be particularly important for my `handleMessage` functions, because there are multiple message types and every message needs to be handled in a different way.
Thus, my `handleMessage()` became a really short `if... then... else if... else if... else` structure, wherein each "then" and "else" block was a single statement: calling a `handleXYZ()` function that was specifically focused on handling only that `XYZ` type of message.
Those functions were sometimes really short - just one or two lines - but the code was much easier to read.
(They also make great breakpoints in gdb!)

### Encapsulate message detail

Where possible, use functions to encapsulate the details involved in sending a message.
I found it helpful to write a small function `sendXYZ()` for each type of message `XYZ`, to allow that function to check parameters, construct the message, log about it, and send the message.
These functions were often short, and (in some cases) called from multiple points in my program, avoiding the risky practice of repeating the code.
They also provide an explicit counterpart to the `handleXYZ()` calls in the other program.
(They also make great breakpoints in gdb!)

### Use good Makefiles

Your code must build (and clean) from the top-level Makefile.
The top-level Makefile provided as part of the TSE starter kit is a good example of the use of `make -C` to build a multi-directory project.

### Use the logging module

Although use of the logging module is optional, you will find it helpful.
Insert calls to `log_x()` at critical points in your code, and you'll be able to study a logfile after (or during!) a particularly confusing or buggy run, to see what happened.

[Video demo](https://dartmouth.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=c5c70b23-d618-44bb-93f6-ad2e0159e0ed)

### Unit testing

As I noted above, the [grid](#grid) is an incredibly important design and implementation choice.
I wrote my grid module first, before writing a single line of code for the server or client.
And, I wrote a glass-box unit test for the grid module in parallel with writing the module itself.
This decision took time - but saved me a ton of time later.
Once I had a solid, working grid module I was able to write the server and client without having to think about how the grid worked (or whether it worked!).
Sure, I occasionally had to go back and extend my grid module with a new parameter here or a new function there, to better fit the needs of the server, but I was able to incrementally test those additions with my unit test.

Consider the same approach for any unit you develop.

### Style

As noted in under the [grading](#grading) heading, a substantial portion of your project grade rests on style.
Some things to consider:

* Follow [CS 50 style guidelines](style.html), including naming conventions.
* Use a consistent naming scheme: choose function and variable names that follow a consistent pattern, recalling the naming tips from a [recent unit](https://www.spongium.org/unit/cohesion).
* Use consistent terminology across all specs and code comments: the Requirements Spec gives precise definitions for certain terms (like *gridpoint*, *player*, *purse*, *visible*, and more); use those terms rather than making up new terms, and use those terms consistent with their definitions.
* Use a consistent coordinate system: the Requirement Spec refers to *rows* and *columns* of the grid and of the display; your two specs, and your implementation, should follow that lead. If you choose to refer to (x,y) instead of (col,row), do it consistently... do not mix the two notations, which leads to confusion.
* Avoid sprinkling char literals throughout code: define some global named constants, e.g., `static const char roomSpot = '.';`  your code will be much more readable and maintainable!
* Peruse this [list of the most common style-related comments applied to final projects in recent years](style.md).

### Global variables

In the [unit](https://www.spongium.org/unit/cohesion) about *cohesion* and *coupling*, we noted that global *variables* are a bad form of coupling.
Global *constants* are a good thing, and fairly common.
Declare them as `static const ...` to ensure they cannot be changed, and ensure they are local to this particular file.

There are, however, some occasions when a judicious use of global *variables* can make the code cleaner and easier to read.

I found it useful to declare a *single* global variable, a `struct` called `game`, in my client and in my server.
(Again, I declared it `static` so it would be global to this file, but not visible to other source files.)
I could thus refer to the members of that struct in various points throughout the server or client code, e.g., `game.goldRemaining`.
The presence of `game.` makes it clear to the reader that this variable is global, not some variable local to the function.

The alternative - and actually, my initial approach - was to allocate a `struct` called `game` in my `main()` function, and then pass it around through every function call in the program.
Yes, that avoided the use of the global variable, but it meant every function had to have a parameter `game_t *game` and to check `if (game==NULL)` before proceeding.
That code was much less readable, so I ripped it all out and made that `game` a global.

**Your code can have at most *one* global variable in each program.**
The above `struct {...} game` approach counts as one variable.
(You can have multiple global constants, but only one global variable.)

### Message module

The core of our provided support library is the `message` module, provided in the `support` directory of the starter kit.
It enables applications to send and receive network messages and also handle keyboard input, without dealing with gory details of sockets and without need for threads.

[Video walk-through](https://dartmouth.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=f8811bb1-0fec-4c05-8a46-ad2201693f7f).

> Note: the Requirements Spec makes no mention of timeouts, either in the client or in the server, so neither your client nor server should be implementing a `handleTimeout` function.
>
> Note: the *message* module provides an opaque type `addr_t` to represent the network address of a correspondent.
> This address is not an "IP address" or a "hostname"; it is not a string or an int.
> You should just refer to it as an "address".
> (TL;DR: it is actually an encoded form of the combination of IP address and port number, both of which are required to send and receive messages.)

### nCurses

The client shall use the *ncurses* library to arrange its interactive display; see the [unit about ncurses](https://www.spongium.org/unit/ncurses).
Note:

* ncurses has ["still reachable" memory leaks](https://invisible-island.net/ncurses/ncurses.faq.html#config_leaks); ignore them.
* if the user starts with a window too small for the grid size, your client shall prompt the user to increase the window to a size big enough for the grid - repeatedly if necessary.
* if the user later shrinks the window too small for the grid, your client need not discover this change nor deal with it.
* while it is unlikely for `getch()` to return the `EOF` character, it can; as noted in the spec, you should handle it as if the user hit `Q`, and then exit the message loop.

### Parsing messages

Your server and client will need to parse messages it receives from the *message* module.
All messages start with a word; in most cases, that word is followed by a space or newline.
I found it convenient to use `strncmp` and `strlen`, like this:

```c
  if (strncmp(message, "PLAY ", strlen("PLAY ")) == 0) {
    const char* content = message + strlen("PLAY ");
    ... work with content...
  } else...
```

See `man strncmp`; notice that the above compares only the first five characters of the `message` with the constant string `"PLAY "`.
Notice also that I include the space in that string, to ensure I'm catching the entire word, and not considering, for example, `"PLAYER"` to match `"PLAY"`.
Notice also that it's easy to create a string pointer that points into the middle of the message, i.e., to the start of the content after `"PLAY "`.

Some message types (`OK`,`GRID`, `GOLD`, `KEY`) include one or more arguments.
I found it convenient to use `sscanf` to parse those, recalling that the format string provided to `sscanf` can include literal characters.
For example, the format string `GRID %d %d` matches successfully only when the string begins with "GRID " and is followed by two integers.
*There is no need to 'tokenize' these message strings before interpreting them.*

### Random numbers

See the [unit](https://www.spongium.org/unit/random) about random numbers.

### libcs50

Although my solution does not use anything from libcs50, you are welcome to use it in your solution.
Copy whatever you need from the TSE starter kit into your nuggets repo.

### Converting from letters to numbers, and back

It's worth remembering that computers represent characters, as with everything else, as numbers.
All modern computers use the [ASCII standard code](http://www.asciitable.com) for encoding common characters.
Notice that the capital letters are a contiguous range of codes from 65 to 90.
In C, we can do arithmetic on characters; thus

```c
int playerNumber = 2;  // i.e., the third player
char playerLetter = 'A' + playerNumber; // i.e., 'C'
```

or, if you start with a letter,

```c
char playerLetter = 'D';
int playerNumber = playerLetter - 'A';  // i.e., 4
```

I found it useful to write little inline functions to convert from a player number to a player letter, and vice versa.

### The switch statement

See the [unit](https://www.spongium.org/unit/c-flow) about the `switch` statement, which is particularly useful when you have a long list of cases that can be described by a simple comparison.
For example,

```c
char letter = ...;
switch (letter) {
case 'A': ... code for letter=='A'; break;
case 'B': ... code for letter=='B'; break;
case 'C': ... code for letter=='C'; break;
default:  ... code for letter not matching any case above.
}
```

The above is equivalent to (but more readable than)

```c
char letter = ...;
if (letter == 'A') {
    code for letter=='A';
} else if (letter == 'B') {
    code for letter=='B';
} else if (letter == 'C') {
    code for letter=='C';
} else if
    code for letter not matching any case above.
}
```

Switch can be used with any ordinal type (at least: `int` and `char`).

If you take this approach, I strongly recommend keeping the code for each case really short, perhaps even just one statement like a function call.

### Lines of code

My solution is not really all that big; you code will likely be shorter because my solution supports features (like 'bot' mode) that yours will not.

**All code specific to Nuggets:**
    `cloc *.[ch] support/{log,message}.[ch]`

Language|files|blank|comment|code
:-------|-------:|-------:|-------:|-------:
C|6|361|855|1944
C Header|4|62|310|90
SUM:|10|423|1165|2034

**Nuggets, excluding the support code:**
    `cloc *.[ch]`

Language|files|blank|comment|code
:-------|-------:|-------:|-------:|-------:
C|4|294|606|1544
C Header|2|35|120|48
SUM:|6|329|726|1592


**For reference, my Tiny Search Engine (without libcs50):**
    `cloc common/*.[ch] crawler/crawler.c indexer/index*.c querier/querier.c`

Language|files|blank|comment|code
:-------|-------:|-------:|-------:|-------:
C|8|251|440|980
C Header|3|23|77|30
SUM:|11|274|517|1010

As you can see, my code is heavily commented: about half the lines of code are comments!

These reports come from the excellent [cloc](https://github.com/AlDanial/cloc) tool, installed on plink.


### Testing and tools

You may run your `client` or `server` on any Linux server in the Thayer collection simply by giving the server's hostname on the client's commandline.
Run a server on `babylon5` and a client on `plink`, and you're playing over the real network!

We installed four programs in the shared directory `~/cs50-dev/shared/nuggets/`:

* `client` - our client.
* `server` - our server (which goes beyond spec to validate mapfile).
* `padmap` - a tool to pad all lines of a mapfile so they have the same length.
* `checkmap` - a tool to validate whether a mapfile is 'valid'.

Thus, you can test your server with our client, or your client with our server.
You can run them directly by giving their pathname; for example,

```bash
~/cs50-dev/shared/nuggets/linux/server ...
~/cs50-dev/shared/nuggets/linux/client ...
~/cs50-dev/shared/nuggets/linux/checkmap maps/main.txt
~/cs50-dev/shared/nuggets/linux/padmap maps/draft.txt > maps/new.txt
```

but it is convenient to create a symlink:

```bash
# create a convenience symlink:
ln -s ~/cs50-dev/shared/nuggets/linux prof
# then you can run our binaries with less typing, e.g.,
prof/padmap maps/draft.txt > maps/new.txt
```

The starter kit includes a small `miniclient` program that can be useful for feeding messages to your server -- either from the keyboard or from an input file.
This approach allows you to test your server's response to malformatted messages.

#### Notes

Our server sends two GOLD messages to a player that steps on a gold pile; although not required, it is harmless and is a result of the way our server's code is structured.

Our client (`client`) has a special capability: it can run as a *bot*, that is, as an automated player.
This capability goes 'beyond the spec' but I found it useful for testing the server, and also a lot of fun to watch.
If you give the name `bot` as the `playerName`, it will periodically send random movement keystrokes to the server; you can just sit and watch the bot play the game!
If you give the name `botbg` as the `playerName`, it will play as a bot but *not display anything*, which makes it suitable to run in the background.
I demonstrate both types of bot in the video below. 

[Video demo of 26 bots and a spectator](https://dartmouth.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a04097c4-1b8e-4147-b525-ad26017d839f)
