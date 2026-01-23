# Activity: Can you make it?

Reminder: you can use `make -n` to see what make will do without actually doing it,  and use `touch` to make specific files out of date.

Upload your final Makefile to Canvas for this activity.

---

1. On plink, copy the following files from the examples directory into your home directory:

```
cd ~
cp -r /home/cs50/shared/examples/activity8 .
```

1. Build an initial makefile based on the dependency diagram below. Be sure to use variables (like `$(OBJS)`) when you can. 

![dependency tree](/images/MakeDependencyTree.png)

1. add macros for `gcc`,  `-Wall -pedantic -std=c11 -ggdb`, and library flags (e.g., `-lm`).
1. At this point, test your `Makefile` by running the `make` command. 
    - It should run without errors and create the `diningHallApp` executable.
    - `touch meal.h` to modify its timestamp and then `make` and you should only see `menu.c` and `meal.c` recompiled.
1. add target `clean:` that erases the app, `.o`, and other files that could result from a run of `make`. Test this by running `make clean`.
1. add a target `test:` that runs the supplied `testing.sh` (you should also add the executable `diningHallApp` as a dependency so it will be recompiled first if out of date).
1. add target `backup`: target that makes `clean` and then creates a backup tarfile of your .c and .h files (e.g., `tar -cvf backup.tar *.c *.h`).
1. add a target `submit:` that depends on the `clean` target and then rebuilds the app _without_ the `-ggdb` option as its "recipe".
1. You can see that for each target, `make` prints each command as it runs; sometimes this is desirable, sometimes not. Modify the `clean:` target so that it runs the same commands but does not print them.

## Challenge

How would you modify the `Makefile` if each individual `.c` file was in its own directory?  Hint: read about the `-C` option of `make` in its man page (i.e., `man make`).
