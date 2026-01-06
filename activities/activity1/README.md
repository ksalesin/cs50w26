# Groups and pipelines

Create a markdown (.md) file to record your group's responses to the questions below -- one of you will submit this summary on Canvas at the end of class. Put the names of your group mates at the top of the file.

## Billboard Hot 100

Let's play with the [Billboard Hot 100](https://www.billboard.com/charts/hot-100), which I extracted into a text file [`billboard.tsv`](/activities/activity1/billboard.tsv) in 2021.
(`tsv` stands for *tab-separated values*).
You can copy this file directly on plink into your current working directory to make this a little easier:

```
cp /home/cs50/shared/examples/billboard.tsv .
```

Use `less` to display the first 10 lines of the file. It begins with a title line followed by a separator line.
The next 100 lines are in the form:

```
#\tSong title\tArtist
```

where:

* '#' is a number between 1 and 100, inclusive
* '\t' is a single tab character
* 'Song title' is a string, possibly including blanks, which is the song title
* '\t' is a single tab character
* 'Artist' is a string representing a list of one or more artists who made the recording. Here, "artist" refers to the
full string of names; don't worry about picking apart lists of names.

Now, **working in your group (perhaps one person sharing screen)**, write pipelines to accomplish the following. Add your group answers to a markdown file (`activity1.md`) and upload it to Canvas for this activity.

1. Print the list to the screen without the header lines
2. Sort the list to start at 100 and countdown to 1
3. Print only the list of artists to the screen
4. How many times does "Justin" appear?
5. How many artists are in the top 100?
6. Which artist had the most hits in top 100?
7. Print only the list of titles to the screen
8. What's the most common word in a title? (much trickier)

Some useful commands: `cut`, `head`, `tail`, `sed`, `sort`, `grep`, `tr`, `uniq`, `wc`

Remember you can use `man <command>` to see what each of these commands does and its options.

**Don't forget to upload your answers to Activity 1 on Canvas! Only one of you needs to upload.**

## If you finish early, here's a challenge:

Given two files `a` and `b`, create a two command pipeline (i.e., only one `|` symbol) between 
two Bash commands (not `awk`) and redirect their output to an output file `c` such that ...

9.  c is a union b
10. c is a intersect b

<!-- ---

## Where did I get that file? 

I used this great [open-source package](https://github.com/guoguo12/billboard-charts);
on my Mac, I followed its instructions to install the package, then

```bash
$ python3
Python 3.9.2 (default, Feb 24 2021, 13:30:36) 
[Clang 12.0.0 (clang-1200.0.32.29)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> import sys
>>> import billboard
>>> sys.stdout = open('billboard.txt','w')
>>> chart = billboard.ChartData('hot-100')
>>> print(chart)
>>> ^D
$ sed -e "s/\. '/\t/" -e "s/' by /\t/" billboard.txt > billboard.tsv
```

That last line uses `sed` to convert the "dot space quote" into a tab, and the "quote space by space" into a tab.
The result is a three-column file (with a two-line header), which should be easier to parse.


***Don't forget to upload your markdown file of answers to Activity 1 on Canvas.*** -->
