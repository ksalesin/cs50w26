# Lab 5: TSE Indexer

In this lab you'll continue the Tiny Search Engine (TSE) by coding the *Indexer* and a test program that saves and loads index files, according to the specs in this directory:

* [Requirements Spec](REQUIREMENTS.html)
* [Design Spec](DESIGN.html)

You will also write the Implementation Spec.

Grading will focus on [CS 50 coding style](/style.html) - including consistent formatting, selection of identifier names, and use of meaningful comments - in addition to correctness, testing, and documentation.

***Your C code must compile without producing any compiler warnings.***  You will lose points if the compiler produces warnings when using our CS50-standard compiler flags.

***If your submitted code fails to compile, or triggers a segmentation fault,*** you will fail some or all of our correctness tests.
Write defensive code: each function should check its pointer parameters for NULL, and take some appropriate (safe) action.
Write solid unit tests, test drivers, and use regression testing as your development proceeds.

<!-- If your submitted version has *known bugs*, that is, cases where it fails your own test cases, *and you describe those cases in your README file*, we will halve the number of points you lose for those cases.
In short, it is far better for you to demonstrate you *know* about the bug than to submit and hope we won't find it. -->

***Valgrind should report no memory errors or memory leaks, when crawler exits normally.***
You will lose points for memory errors and leaks reported by valgrind on our tests.

## Preparation

1. Start with the same repository you used for Lab 4. Make sure your `main` branch is up to date from `lab4` (you merged it properly), then from `main` make a new `lab5` branch and switch to it.
1. Create a new subdirectory `indexer`.
1. Review Section 4 in *[Searching the Web](https://www.spongium.org/unit/search)*, the paper about search engines.

## Assignment

Design and code the second subsystem of the Tiny Search Engine, the *Indexer*.
Your implementation must follow the [Requirements Spec](REQUIREMENTS.html) and [Design Spec](DESIGN.html), and make good use of our abstract data structures.

**In the top directory,**

 1. Uncomment the commands for indexer, so `make` and `make clean` work to build (or clean) the libraries, crawler, and indexer.

**In the `indexer` subdirectory,**

1. Add a file `IMPLEMENTATION.md` to provide the Implementation Spec for *indexer* (not for index tester) and the testing plan for *indexer*.
1. Add a file `README.md` to describe any assumptions you made while writing the indexer, any ways in which your implementation differs from the Specs, or any ways in which you know your implementation fails to work.
1. Write a program `indexer.c` according to the Specs.
1. Write a program `indextest.c` according to the Specs.
1. Write a `Makefile` that will, by default, build the `indexer` and `indextest` executable programs.
1. Add a `make clean` target that removes files produced by Make or your tests.
1. Add a `make test` target that tests your indexer.
1. Write a `testing.sh` bash script that can be run by `make test`.
 This script must include good comments describing your tests.
 For best results, `make test` should run `bash -v testing.sh`.
1. Save the output of your tests with `make test &> testing.out`.
1. Add a `.gitignore` file telling Git to ignore the binary files (like `indexer` and `indextest`) and other unnecessary files in this directory.

**In the `common` subdirectory,**

1. Extend a module `pagedir.c` (common to the Crawler, Indexer, and Querier) to support any new operations on pageDirectories.
1. Add a module `index.c` (common between the Indexer, Querier, and indextest) to support saving and loading index files.
1. Add a module `word.c` (common between the Indexer and Querier) that implements `normalizeWord`.
1. Extend `Makefile` to include all three modules in `common.a`.

### Submission

Add/commit all the code and ancillary files required to build and test your solution; at a minimum your **indexer** directory should include the following files:
* .gitignore 
* README\.md 
* IMPLEMENTATION\.md 
* Makefile 
* indexer.c 
* indextest.c 
* testing\.sh
* testing.out

and your **common** directory should contain the following files:
* Makefile 
* index.h 
* index.c 
* pagedir.h 
* pagedir.c 
* word.h 
* word.c

*Do not commit any data files produced by the crawler or indexer, any binary/object files produced by the compiler, backup files, core dumps, etc.*

**If you finish Lab 5 early, we encourage you to begin work on Lab 6.**
Your Lab 5 submission may contain a partly-completed querier; the graders will ignore those files, but must be able to build your libraries and programs *from the top-level directory* without compilation errors and test your indexer without run-time errors.

> [!IMPORTANT]
> Your final push to your `lab5` branch before the assignment deadline (Wed, Feb 18th at 11:59 pm) will serve as your submission for Lab 5. Do not push any changes to this branch after the deadline (unless you are using one of your extensions).

After you are done with Lab 5, **pull all the commits from your `lab5` branch to your `main` branch** like so:
```
git checkout main
git merge lab5
```

You will now be ready to work on Lab 6.

## Hints and tips

Many of the [Lab 4 hints](../crawler/README.html) are still relevant, and there are more tips in the [knowledge unit](https://www.spongium.org/unit/indexer).

### Testing

If your crawler never quite worked, never fear!
You do not need a working crawler to write or test your indexer.
Try your indexer on our crawler's output, which we provide in `~/home/cs50/shared/tse/output`.
Our indexer's output is in that same directory.

It can be tricky to compare two index files for equivalence - because the lines of an index file can be in any order, and the docIDs within a line can be in any order - so a simple run of `diff` won't always be sufficient.
Try using our `indexcmp` program; you can run it directly from the shared copy we installed:

```bash
$ /home/cs50/shared/tse/indexcmp
usage: /home/cs50/shared/tse/indexcmp indexFilenameA indexFilenameB
```

It takes two arguments, each a pathname to an index file; it will print out any apparent differences.

### Hashtable

"How big should the hashtable be?"

In the indexer/querier, we use a hashtable to store an inverted index (words –> documents), and thus the hashtable is keyed by words.
The answer to the above question, then, depends on how many words will be in the index.

When building the inverted index, it's impossible to know in advance how many words you will find in all those pages encountered by the crawler.
Pick a reasonable size, perhaps something in the range of 200 to 900 slots.

When loading an inverted index from a file, though, you *can* know how many words... because there is one word per line in the index file, and it's easy to count the number of lines (see `file.h`).
Once your code can obtain the number of words, think about how it can compute a good size for your hashtable.

### pageDirectory

The pageDirectory stores pages fetched and saved by the Crawler.
In Lab 4 you wrote functions `pagedir_init` (to mark a directory as a Crawler directory) and `pagedir_save` (to save a page into a file in that directory).
You may now need to write functions like `pagedir_validate(dir)` to verify whether `dir` is indeed a Crawler-produced directory,
and `pagedir_load` to load a page from a file in that directory.
Detail these (or other) functions in your Implementation spec.

### Index

We strongly recommend you add an `index` module to the `common` library – a module to implement an abstract `index_t` type that represents an index in memory, and supports functions like `index_new()`, `index_delete()`, `index_save()`, and so forth.
Tip: much of it is a wrapper for a hashtable.

To write the index file, use the `_iterate` methods built into your data structures.
(Indeed you may need to have iterators call iterators!)
Do *not* use your `_print` methods for this purpose; those methods are meant for producing pretty human-readable output for debugging purposes.

To read each line of the index file, it works well to read the word, then loop calling `fscanf` with format `"%d %d "` to pull off one pair at a time, checking the return value of `fscanf`.
The specs allow your code to be optimistic about index files being in the correct format.

The functions found in `file.h` should be helpful.

### Makefile

Your `indexer/Makefile` needs to build both `indexer` and `indextest` by default.
We recommend you add a phony top-most target:

```make
all: indexer indextest
```

so that `make` or `make all` will build both programs; if you want to build just one, run `make indexer` or `make indextest`.
