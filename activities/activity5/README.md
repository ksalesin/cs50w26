# Activity: Mad Libs

Some of you may have encountered a book of [*Mad Libs*](https://www.madlibs.com); on each page is a brief story with some words left blank.
One player sees the story and asks the other player, who cannot see the story, to fill in the blanks; each blank is labeled simply *noun*, *verb*, or perhaps something more explicit like *fruit* or *color*.
After all the blanks are filled, the first player reads the story aloud, which can be pretty funny!

Let's look at a program that allows you to play Mad Libs!
All the files you need are in the examples directory, `/home/cs50/shared/examples/` on plink.

Answer the following in a Markdown file and one team member should upload it to Canvas for Activity 5 when you are finished.


## Prep: getting the files
1. Create an `activity5` folder as a subdirectory of your home folder on plink.
2. Copy the files `madlib.c`, `readline.c`, `readline.h`, `madlib1.txt`, and `madlib2.txt` from `examples` into your `activity5` directory. (_Challenge_: can you copy all those files with a single `cp` command?)

## Playing the game
1. Compile the example `madlib.c` and `readline.c` files together with a single `mygcc` command, producing the `madlib` executable file.
2. Play it once on your own, using the example input `madlib1.txt`; afterward, look at the input and output files.
3. Play again as a team; one person run it on `madlib2.txt`—don't peek at the file!—and all teammates can call out the words to input.  Read the output file aloud!

## The code
1. Study the code for `madlib.c`.
Try to answer these questions:
2. Notice the "global constants" at the top of the file; why are they defined there? Why are they defined at all?
3. Why is `const` applied to the parameters of `main` and its three string variables?
2. Indeed, those three string variables are not strictly necessary – so why does the code define them?
3. Notice that two `fopen` calls occur within the conditional expression of an `if` statement – why and how does that work?
4. Notice that `main` does none of the actual program logic, which is deferred to a function `fillTemplate()`; why?
5. Notice that the return value of `fillTemplate()` is captured in a variable, rather than being tested directly/immediately by an `if` statement; why?
6. Inside `fillTemplate()`, notice how the `while` loop scans the whole file – and is another example of an assignment statement within a conditional expression.
7. How does the code detect and extract `<code>` from the input?
8. Why is this comment true? (n.b. means *note bene*, Latin for "please note") `n.b., this also implies i == codeLength`
9. What is `'\0'` and why is it used?
10. Why does the code need to truncate an over-long substitution provided by the human player? Why is that not a fatal error?
11. Notice the calls to `fputs()` and `fputc()`, and the code checking for error returns; why?
12. The final line of code calls `feof()`, a function that returns an `int` (read the man page), and returns its value directly as the result of our function `fillTemplate()`.  But our function returns `bool`, not `int`; why does this work?
13. **If you have extra time**, extend a copy of `madlib.c` to print out the resulting story when translation is finished (and successful).
It might be nice to print a blank line and a row of dashes so the story is nicely set off from the prompts & answers in the first phase of the program.
You should write a new function `printFile(FILE *fp)` that simply copies characters from that file (already open for reading as `fp`) to stdout.
`main` can thus open the outputFileName (for reading) and call this function.
I anticipate this function will be only 2-3 lines long!
  
**Don't forget to upload your answers to Canvas!**
