# Activity 12: Fix memory bugs with valgrind (and maybe gdb)

Add the following alias to your `.bashrc` file:
```bash
alias myvalgrind='valgrind --leak-check=full --show-leak-kinds=all'
```
so that we can run valgrind on a program `labx` like so: 

```bash
myvalgrind labx arg1 arg2 ...
```
Note that unlike `gdb`, you _do_ provide the arguments to the program under test when starting `valgrind`.

Here's a handy [quick reference for valgrind](https://bytes.usc.edu/cs103/wiki/valgrind.html) from USC.

Remember that the `~/.bashrc` file is run when you log in to plink, so you can either log out and log back in for the changes to take effect, or you can run `source ~/.bashrc` to re-run it manually.

## Activity

You can find the examples for this activity in the `valgrindit` directory within our examples.
Copy these to your own directory on plink.

Remember to upload your markdown to Canvas for this activity.

*Some of the examples for this activity come from the RedHat education group.*

### Part A

Each of the example programs v1, v2, v3 compile with no errors or warnings.
However, some have memory leaks and don't quite work as we
expect. Use the `valgrind` tool to investigate why and add your findings to your markdown file.

<!-- - v1
- v2
- v3
- v4
- v5 hint: try an eight character username and a three character nickname. -->

### Part B 

You may find both gdb and valgrind useful for this part.

Now `cd bagbugs` and run `make`. The `bugs` executable is generated from `bagbugstest.c`, which is a test program for `bagbugs`.
Look in `bagbugstest.c` to see what it's testing.

If you run `bugs`, you will see that the first few tests run smoothly. However, on `bag_insert` the test program has a problem. Figure out the problem, describe it in your markdown file, and fix it.

Repeat for all problems until all the tests pass.