# Activity: Let's get modular!

Put your team's answers into a Markdown file and upload it to Canvas for this activity. Also upload your team's extended `bag.h` and `bag.c` for Part 1.

## Part 1

1. On plink, copy the following files from the examples directory into a new directory that you can play in:

- `bag8.c`
- `bag8.h`

Extend the *bag* module so it keeps track of the number of items 
in the bag. Also implement a `bag_count()` method that returns the current number of items in the bag.
Hint: you would need to modify:

* `struct bag`  (to include a counter)
* `bag_new`     (to initialize the counter)
* `bag_insert`  (to increment the counter)
* `bag_extract` (to decrement the counter)
* `bag_print`   (so you can also print the counter!)
* `bag.h`       (to include the method signature for `bag_count()`)
* `bag.c`       (to include the implementation of `bag_count()`)
<!-- * `bag8.c`      to add testing code to the `main()` function to verify the new feature works! -->

## Part 2

2. How would you **design** (not code) a `tree` module? Things to consider:
    - what kind of tree (e.g., binary tree, B-tree, weighted decision tree, ... ) ?
      - should you have specialized `tree` modules for each of them, or can they share some code?
    - what data structure(s) would be best (i.e., clearest, fastest, etc.) ?
    - what functions would be useful?
    - unlike bag, insertion and deletion of tree nodes is tricky. How would you do it? 
    - what static functions (i.e., hidden functions, for tree use only) would be helpful in implementing the public functions?
    - how would you implement a `print` iterator for `tree` ?
    - how would you implement a generic `map` iterator that applies a user-supplied function to each item in the tree?
    - outline a test procedure to unit-test the new `tree` module.

## Part 3

3. How would you **design** (not code) a generic `graph` module? Things to consider:
    - what kind of graph (directed/undirected, acyclic, tree (subset of graph), etc.)
    - what would you use as the underlying data structures? (Hint: likely more than one!)
    - what "getter/setter" functions will you need?
    - functions to traverse a graph, to perform a search for example? 
        - Breadth-first and Depth-First algorithms for graphs exist - what would it take to implement 
          those?
        - This traversal is needed for a `print` or `map` interator
   - what about graph functions like `isAdjacentTo`, `numberOfHopsBetween` two graph nodes, `shortestPathBetween` two graph nodes, etc.     
   
   [Reference on graphs.](https://www.geeksforgeeks.org/graph-types-and-applications/?ref=lbp)
