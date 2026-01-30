# Testing

1. In `matrix.c`, add input validation to all the functions you wrote – check that the row and column parameters are within an acceptable range for each function, and if not, print an error message and return.

2. In a new `matrix-test.c` file, write a full test suite for `matrix.c`. For each function you wrote (except for `printMatrix`), write a function `testX`, where `X` is the function name. Call each of these test functions from the `main` function.