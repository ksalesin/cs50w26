# Activity: C programming with structs and pointers

## Goals

1. to use `structs`, arrays of `structs`
2. to better understand use of pointers for allocated memory, and function parameters

## Prepare

1. Log into plink
2. Copy the directory `activity7` located in `/home/cs50/shared/examples/activity7` into your home directory.
```
cd ~
cp -r /home/cs50/shared/examples/activity7 .
```
3. `cd` into `activity7`
4. Copy the file `covid-blank.c` to `covid.c`. Open up `covid.c`. Things to notice:
* a long-ish `main()` function (because of extensive error checking) but good section-header comments to indicate overall flow.
* use of the `file` module 
* a big `struct` for holding each row of data from the csv file
* a `typedef` to define a new type for that struct
* character pointers (for strings) inside the struct; where do they point?
* an array of structs - how do you allocate memory for it?
* extensive error-checking code throughout
* detailed 'contract' for the `csvBurst` and `extractData` function (read about [function contracts](https://github.com/CS50DartmouthFA2025/home/blob/main/knowledge/units/contracts.md))
* in the `csvBurst` function, a 'moving pointer' approach to parsing the csv string
* chopping the csv string by dropping in null characters
* creating an array of pointers into the csv string
5. One member of the team share screen and edit that file, filling in all the BLANKs.
* Hint: open up the `file.h` header file to see what useful functions are available.
6. Compile the program by running the `make` command within the `activity7` directory. (We will talk more about `make` next week, but for now just know that the `make` command reads the instructions in the Makefile to compile a complex project. You can open and read the Makefile if you like.)

# Test file

- You can test your code by running `./covid` on the `vaccine_data_us.csv` file that you used for Lab 1 (which you made a symbolic link to).

# Submission

- Submit your group's `covid.c` file for this activity to Canvas.

