# Lab 6: TSE Querier
## Design Spec

According to the [Querier Requirements Spec](/labs/tse/querier/REQUIREMENTS.html), the TSE *querier* is a standalone program that reads the index file produced by the TSE Indexer, and page files produced by the TSE Querier, and answers search queries submitted via stdin.


### User interface

The querier has two command-line arguments.

```
querier pageDirectory indexFilename
```

For example:

``` bash
$ querier ../data/ ../index
```

Once started, the querier prompts for queries on stdin, and accepts queries according to the query syntax.

It exits when it reaches EOF on stdin.

### Inputs and outputs

**Input**: the querier reads an index file using the format described in the Requirements.

The querier also reads URLs from webpage files in a directory by constructing file pathnames from the `pageDirectory` parameter followed by a numeric document ID (as described in the Requirements).

The querier also reads queries from stdin according to the query syntax.

**Output**: for each query the querier prints a list of matching documents (listing each document's URL), in ranked order, where the ranking is determined by the document's score.
Document score is computed according to the requirements.

### Functional decomposition into modules

We anticipate the following modules or functions:

 1. *main*, which parses arguments and initializes other modules;
 2. *query_loop*, which loops over queries from stdin and processes each one in turn.

And some helper modules that provide data structures:

 1. *index*, a module providing the data structure to represent the in-memory index, and functions to read and write index files;
 1. *webpage*, a module providing the data structure to represent webpages;
 1. *pagedir*, a module providing functions to load webpages from files in the pageDirectory;
 1. *word*, a module providing a function to normalize a word.

### Pseudo code for logic/algorithmic flow

The querier will run as follows:

1. execute from a command line as shown in the User Interface
1. parse the command line, validate parameters, initialize other modules
1. call *query_loop*, with `index` and `pageDirectory`

where *query_loop* will 
1. read a line from stdin
1. parse the query into an array of words
1. print the query for user reference
1. validate the query syntax
1. if valid, call *answer_query*

where *answer_query* 

1. calls *match_query* to find the set of matching documents and their scores
1. loops while there are documents in the set with score > 0
	* find the top-scoring document
	* print that document
	* set that document's score to 0

where *match_query*

1. treats the query as an "or sequence" of "and sequences".
1. initializes the orSequence as empty.
1. steps throught the words of the query, constructing a set of documents (with scores) for a current andSequence, until it hits "or" or the end of the line; 
1. then it merges the current andSequence into the ongoing orSequence result,
1. and resets the andSequence to begin anew.
1. at end of line, return the orSequence.

### Dataflow through modules

 1. *main* parses parameters and passes them to other functions.
 1. *index_load* receives the index file and returns an index.
 1. *answer_query* loops over queries from stdin.
 1. *match_query* computes the matching docs for each query. 
 1. *index* (module) includes functions that implement the *index* data structure, notably, *index_load* to load the index from indexFile. 

### Major data structures

The *index* module provides the key data structure, *index*, mapping from *word* to (docID, #occurrences) pairs.

### Testing plan

*Unit testing*. No unit tests. It would have been smart to develop a unit test for the parsing functions.

*Integration testing*.  The *querier*, as a complete program, will be tested by loading an index produced by the indexer, then pushing a bunch of queries through it.

1. Test `querier` with various invalid arguments.
	1. no arguments
	2. one argument
	3. three or more arguments
	4. invalid `pageDirectory` (non-existent path)
	5. invalid `pageDirectory` (not a crawler directory)
	6. invalid `indexFile` (non-existent path)
	7. invalid `indexFile` (existing, unreadable file)
2. Test `querier` with various uninteresting or invalid queries.
	1. empty line
	2. blank line
	3. illegal characters
	4. and/or at beginning
	5. and/or at end
	6. and/or adjacent to and/or
3. Test `querier` with real queries.
4. Test `querier` with fuzzquery-produced queries.
5. Test `querier` for memory leaks by running it under `valgrind`.

