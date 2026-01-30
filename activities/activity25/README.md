# Memory & pointers review

Put your team's answers in a Markdown file and upload it and your `matrix.c` to Canvas for this activity.

The point of this activity is to practice pointer arithmetic. Therefore...

### I do not want to see *any* square brackets in your matrix.c!

I don't mean this as a general rule, as in "square brackets are bad." You could write the following code with either array syntax (square brackets) or pointer arithmetic and both would be equally valid, but today we are practicing pointer arithmetic. When you use square brackets, the compiler is just doing pointer arithmetic underneath the hood for you.

## Activity

First, copy the file `matrix.c` from our examples directory into your home directory on plink.

1. Read through `matrix.c`. Fill in all of the function stubs.
  * It may be useful to write `printMatrix` first, as that will help you test your other functions.
  * Slight exception to the above rule, you can print out square brackets in `printMatrix` since that is how I ask you to format the printing.
  * Remember to practice *defensive programming* – check that all row and column parameters are valid and not out of bounds.
  * Test each function as you go by writing a few tests in `main`.

2. Print `sizeof(matrix)` – why is it the size that it is?

3. Why do we need to free `diag` but not `matrix.nums` or `matrix`?

4. Print out `diag` in `main` just after the line `diagonal(&matrix, diag);` without writing a helper function. How do you avoid a memory problem when `free(diag)` is called afterward? (I can think of at least 2 possible solutions – can you?)

5. In these two lines,
  ```
  printf("%p\n", (void*)matrices);
  printf("%p\n", (void*)++matrices);
  ```
  why does the `matrices` pointer change by the amount that it does?

6. Why did I write `++matrices` in the second line and not `matrices++`?

7. Fix the memory leak of `matrices`.