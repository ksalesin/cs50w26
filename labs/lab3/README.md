# Lab 3: C programming

In this lab you will develop some general-purpose data structures that, with modular design, can be re-used for other labs - most notably, the Tiny Search Engine.

*Point breakdown:*

  * (25 points) set
  * (25 points) counters
  * (40 points) hashtable
  * (10 points) overall, including git behavior

## Reminders

Grading will focus on [CS 50 coding style](/style.html) – including consistent formatting, selection of identifier names, and use of meaningful comments – in addition to correctness and testing.

**Your C code must compile without producing any compiler warnings.**
You will lose points if the compiler produces warnings when using our CS50-standard compiler flags (i.e. when compiled with `mygcc`).

**If your submitted code fails to compile, or triggers a segmentation fault**, you will fail all/some of our correctness tests, and lose points for correctness on those test cases. Write defensive code: each function should check its pointer parameters for NULL, and take some appropriate (safe) action. Write solid unit tests, test drivers, and use regression testing as your development proceeds.

## Preparation

### Accept the GitHub Classroom assignment
- Click the invitation link in the Canvas assignment for Lab 3.
- Accept the assignment in GitHub (see <a href="/labs/lab2/README.html">Lab 2</a> for additional instructions).

### Preliminaries
- Clone this repo to a `lab3` folder on plink.
- Create a `README.md` and a `.gitignore` file. As always, add all executable files and all object files (`*.o`) to your `.gitignore`.
- Add the header `# Lab 3` and your name to the README. You can add any notes about your implementation or notes to the grader in the README (but it can be empty otherwise if you have none).

## Assignment

The starter repository implements the **bag**, **file**, and **mem** modules (**file** and **mem** are within the `lib` directory).

You will implement the **set**, **counters**, and **hashtable** modules, each of which defines a different data structure.

### About the data structures

The specific data structures are defined in the sections below.

In the table below, we compare the behavior of these data structures. Most of these data structures allow you to store a collection of "items". Both the **set** and **hashtable** are examples of an abstract data structure called a *dictionary*, which provide methods like `insert(key, item)` and `item = retrieve(key)`, where the key allows the structure to distinguish among the items it stores.

| Behavior  | list  | bag  | set  | counters  | hashtable |
| --- | --- | --- | --- | --- | --- |
| stores an item | yes | yes | yes | no | yes |
| uses a key | no | no | yes | yes | yes |
| keeps items in order | yes | no | no | no | no |
| retrieval | first item | any item | by key | by key | by key |
| insertion of duplicates | allowed | allowed | error | increment count | error |

Notice that:
  * a **list** keeps items in order, but a **bag** or a **set** does not.
  * a **set** and **hashtable** allow you to retrieve a specific item (indicated by its key) whereas a **bag** might return any item.
  * because the **bag** and **list** don't distinguish among items they store, they can hold duplicates; the others cannot.
  * the **counters** data structure maintains a set of counters, each identified by a key, but it stores no items. Instead, it keeps a counter for each key. Attempting to insert a duplicate key results in an increment of the counter.

### bag

A **bag** is an unordered collection of items. The bag starts empty, grows as the caller adds one item at a time, and shrinks as the caller extracts one item at a time. It could be empty, or could contain hundreds of items. Items are indistinguishable, so the extract function is free to return any item from the bag.

The starter kit includes our **bag** module, in which `bag.c` implements a bag of `void*`, and exports the following functions through `bag.h` (see that file for more detailed documentation comments):

```
bag_t* bag_new(void);
void bag_insert(bag_t* bag, void* item);
void* bag_extract(bag_t* bag);
void bag_print(bag_t* bag, FILE* fp, void (*itemprint)(FILE* fp, void* item));
void bag_iterate(bag_t* bag, void* arg, void (*itemfunc)(void* arg, void* item) );
void bag_delete(bag_t* bag, void (*itemdelete)(void* item) );
```

### set

A **set** maintains an unordered collection of *(key, item)* pairs; any given key can only occur in the set once. It starts out empty and grows as the caller inserts new (key,item) pairs. The caller can retrieve items by asking for their key, but cannot remove or update pairs. Items are distinguished by their key.

Your `set.c` should implement a set of `void*` items with `char*` keys, and export exactly the following functions through `set.h` (see that file for more detailed documentation comments):

```
set_t* set_new(void);
bool set_insert(set_t* set, const char* key, void* item);
void* set_find(set_t* set, const char* key);
void set_print(set_t* set, FILE* fp, void (*itemprint)(FILE* fp, const char* key, void* item) );
void set_iterate(set_t* set, void* arg, void (*itemfunc)(void* arg, const char* key, void* item) );
void set_delete(set_t* set, void (*itemdelete)(void* item) );
```

### counters

A **counters** is a set of counters, each distinguished by an integer key. It's a set – each key can only occur once in the set – and it tracks a counter for each key. It starts empty. Each time `counters_add` is called on a given key, the corresponding counter is incremented. The current counter value can be retrieved by asking for the relevant key.

Your `counters.c` should implement a set of integer counters with `int` keys (where keys must be non-negative) and export exactly the following functions through `counters.h` (see that file for more detailed documentation comments):

```
counters_t* counters_new(void);
int counters_add(counters_t* ctrs, const int key);
int counters_get(counters_t* ctrs, const int key);
bool counters_set(counters_t* ctrs, const int key, const int count);
void counters_print(counters_t* ctrs, FILE* fp);
void counters_iterate(counters_t* ctrs, void* arg, void (*itemfunc)(void* arg, const int key, const int count));
void counters_delete(counters_t* ctrs);
```

### hashtable

A **hashtable** is a set of *(key, item)* pairs. It acts just like a set, but is far more efficient for large collections.

Your `hashtable.c` should implement a set of `void*` with `char*` keys, and export exactly the following functions through `hashtable.h` (see that file for more detailed documentation comments):

```
hashtable_t* hashtable_new(const int num_slots);
bool hashtable_insert(hashtable_t* ht, const char* key, void* item);
void* hashtable_find(hashtable_t* ht, const char* key);
void hashtable_print(hashtable_t* ht, FILE* fp, void (*itemprint)(FILE* fp, const char* key, void* item));
void hashtable_iterate(hashtable_t* ht, void* arg, void (*itemfunc)(void* arg, const char* key, void* item) );
void hashtable_delete(hashtable_t* ht, void (*itemdelete)(void* item) );
```

The starter kit provides code for the hash function.

## Testing

Each of your modules must have a unit-test mechanism, either included within the module code (see, for example, the bottom of `file.c` in the **file** module) or as a test driver (see, for example, `bagtest.c` in the **bag** module).

Your modules must each have a `Makefile` to compile and test the module code. See the **bag** module for an example.

* Your `Makefile` must have a `make test` target that runs your unit test.
* Your `Makefile` should have a `make clean` target that cleans up the directory of any files created by `make` or `make test`.

## General notes

* You should have no need to edit the header (`.h`) files we provide. Do not modify the function prototypes.
* If you need helper data types (likely `struct` types), those should be defined within your module's source file (`set.c`, etc.) so they are not visible to users of the module.
* If your module needs helper functions, those should be defined within that module's source file and marked `static` so they are not visible to users of the module.
* Your modules must print nothing (except, of course, in the `xxx_print()` function). If you want to add debugging prints, they must be protected by something like `#ifdef DEBUG` or `#ifdef TEST`. (You can see some examples in `bag.c` where we've protected some debugging code with `#ifdef MEMTEST`, and a spot in the `bag/Makefile` that controls that flag from the compiler command line.)
* Your modules must have no global variables.
* Your modules must have no `main()` function (*except* if you are creating unit-test code hidden by `#ifdef`); as modules, they are meant to be used by other programs.
* Your modules **set** and **hashtable**, like **bag**, store `void*` items; this type is C's way of describing a "pointer to anything".
    * The caller (user of your module) must pass a pointer (address of some item) to your code; your data structure holds that pointer, and later returns it to the caller in response to an 'extract' or 'find' operation.
    * Your module doesn't know, or doesn't care, what kind of things the items are. Your module doesn't allocate memory for items, free memory for items, or copy items – it just tracks the pointer to the item.
    * The caller is responsible for the item pointer, which must be allocated (somehow) by the caller. The modules' `_delete` function (like a destructor) allows the caller to provide a custom `itemdelete` function that knows how to free any memory consumed by an item.
    * For this reason, the caller must avoid inserting the same item (same address) multiple times; later, the `itemdelete` method would be called multiple times on that item... which could lead to trouble.
* Both **set** and **hashtable** work with string-type keys. When adding a new item with `set_insert()` or `hashtable_insert()`, both modules make their own copy of the string – presumably in memory allocated by `malloc()`.
    * The module is then responsible for this memory – and later freeing it – just like any other memory it allocates. This 'copy' semantic is convenient for the caller, who need not worry about how to allocate and manage the key string after inserting it into the set or hashtable.
    * You may assume that a non-NULL key is a proper C string; that is, it is null-terminated.
* Your code must have no memory leaks. We will check!
    * You may find the <a href="https://github.com/CS50DartmouthFA2025/home/blob/main/knowledge/units/lab3-mem.md">mem module</a> (provided) useful – or use the native malloc and free.
    * You may find <a href=
    "https://github.com/CS50DartmouthFA2025/home/blob/main/knowledge/units/valgrind.md">valgrind</a> useful.

## Hints

You are encouraged to follow the style and layout of the **bag** module when developing new modules.

You can also learn a lot from our binary tree examples in the `trees` directory within the examples on plink. You are welcome to copy snippets of code from this (or any other) CS 50 example code as long as you add a comment indicating you've done so.

We suggest implementing the **set** and **counters** as simplified linked lists, much like we did for **bag**. Each should be an independent implementation because they differ in detail and semantics.

Your **hashtable** module, on the other hand, should make use of the **set** data structure. Indeed, your hashtable should likely be an array of pointers to sets. Allocating an array of pointers can be tricky; recall the unit about <a href="https://github.com/CS50DartmouthFA2025/home/blob/main/knowledge/units/c-arrays.md">C arrays</a>.

**Linked lists** are demonstrated in the `sorter4.c` through `sorter7.c` files in the examples on plink, although you will need to generalize. They were also covered in CS 10; see <a href="https://www.cs.dartmouth.edu/~tjp/cs10/notes6.html">notes</a>.

Hashtables were also covered in CS10; see <a href="https://www.cs.dartmouth.edu/~tjp/cs10/notes12.html">notes</a>.

## What to submit

When finished, your `lab3` directory should contain the following, plus any programs, scripts, or data files you need for running your tests:

```
.
|-- .gitignore			# provided by starter kit
|-- Makefile			# provided by starter kit
|-- README.md			# be sure to include your name
|-- bag
|   |-- .gitignore		# provided by starter kit
|   |-- Makefile		# provided by starter kit
|   |-- README.md		# provided by starter kit
|   |-- bag.c			# provided by starter kit
|   |-- bag.h			# provided by starter kit
|   |-- bagtest.c		# provided by starter kit
|   |-- test.names		# provided by starter kit
|   `-- testing.out		# provided by starter kit
|-- counters
|   |-- Makefile
|   |-- counters.c
|   `-- counters.h		# provided by starter kit
|-- hashtable
|   |-- Makefile
|   |-- hash.c			# provided by starter kit
|   |-- hash.h			# provided by starter kit
|   |-- hashtable.c
|   `-- hashtable.h		# provided by starter kit
|-- lib
|   |-- Makefile		# provided by starter kit
|   |-- README.md		# provided by starter kit
|   |-- file.c			# provided by starter kit
|   |-- file.h			# provided by starter kit
|   |-- mem.c			# provided by starter kit
|   `-- mem.h			# provided by starter kit
`-- set
    |-- Makefile
    |-- set.c
    `-- set.h			# provided by starter kit
```

Do not commit any compiled C programs or object files (`*.o`).

> [!IMPORTANT]
> Your final push to your private `lab3` repo before the assignment deadline (Wed, Feb 4th at 11:59 pm) will serve as your submission for Lab 3. Do not push any changes after the deadline (unless you are using one of your extensions). You do not need to submit anything to Canvas. The TAs have access to your repos through GitHub Classroom and will clone each of your repos to plink for grading and testing.
