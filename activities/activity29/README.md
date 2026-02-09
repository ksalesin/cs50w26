# Activity: Bit Packing & Masking

Copy the file `rgb.c` from our examples directory into your home directory on plink.

Turn in your group's completed `rgb.c` to Canvas for this activity.

## Activity

As you may know, it is common to digitally represent a color using RGB format: Red, Green, and Blue. Each channel is typically represented with a single integer from 0 to 255. The RGB value can also be combined into a single hex code: for example, a pure red color with RGB values (255, 0, 0) could also be represented with the hex code 0xFF0000, a pure green (0, 255, 0) would be 0x00FF00, and a pure blue (0, 0, 255) would be 0x0000FF.

While we could represent a color using a struct that holds three separate integers for Red, Green, and Blue, this would be a waste of space since we can assume that each value will always be in [0, 255]. Instead, we will use a *single* integer to contain all three RGB values (which is often done in practice). This is called **bit packing**: storing multiple pieces of information in a single variable by segmenting its bits into chunks.

Fill in `rgb.c` such that you can set and get each component of an RGB color stored in a single integer variable.

For the 3 `set` functions, remember to practice *defensive programming* – verify that the input value is in [0, 255]. If it is not, print an error message and `exit(1)`.

As always, test your functions as you write them!

**Hint**: how many bits do you need to represent the full range [0, 255]?

**Hint \#2**: aside from printing and input validation, all of the functions should be simple one-liners involving `&`, `|`, `<<`, and `>>`.

**Hint \#3**: you will likely want to utilize **bit masks** that resemble the hex codes above.