# CS 50 Final Project: Nuggets

![pile of gold nuggets](/images/project/nuggets500.png)

[Discovery of gold in the tunnels under Dartmouth.](https://dartmouth.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=8a39c7da-7208-46b4-9c8d-ad2101450924)

## The game

Your team will develop the code for the *Nuggets* game, according to the [Requirements Spec](/project/REQUIREMENTS.html).

* All teams shall implement the game server and the game client.
* We provide a starter kit via GitHub Classroom.
* Your team shall follow the [Git Flow](https://www.spongium.org/unit/git-flow) style of git management.
* Your team shall use the [Scrum](/project/scrum.html) style of project management.
* Good design, good style, good documentation, and good testing are expected.
* Consider the characteristics of a successful team that we've discussed all term.

### **Watch This [Demo Video](https://dartmouth.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=dbece9b4-30f1-49ab-8669-ad220160f0f0)**

* [Requirements Spec](/project/REQUIREMENTS.html)
* [Design Hints](/project/DESIGN.html)
* [Implementation Hints](/project/IMPLEMENTATION.html)

## Starter kit

Have **one member of your team** accept the invitation link on Canvas for the final project. Follow the instructions on Canvas to add the other members of your team.
**Change the repo name** to `nuggets-` your team's name!

One member should **immediately** configure your repo to [protect the main branch](https://www.spongium.org/unit/protect-main).
All members of the team should then clone the team's new repository, which includes the starter kit.

## Submissions

* **Design spec**: due Friday, February 27th at 11:59 pm
* **Implementation spec**: due Friday, February 27th at 11:59 pm
* **Final submission**: due Friday, March 13th **at noon**
* **Final presentation**: Friday, March 13th somewhere in 3 to 6 pm
* **Group survey**: due Friday, March 13th at 11:59 pm

## Sprint timeline

We suggest the following timeline.

### Sprint 1 (Feb 23–Mar 2) <!-- @CHANGEME date -->

* **Monday:** Project Board and Sprint Planning
* **Wednesday:** Daily Scrum

**Goals:**

* `DESIGN.md` complete, submitted by Fri
* `IMPLEMENTATION.md` complete, submitted by Fri
* Server: allows players and spectators to join and quit.
* Client: joins as player or spectator.

### Sprint 2 (Mar 2–9) <!-- @CHANGEME date -->

* **Monday:** Sprint Retrospective + Review + Planning
* **Wednesday:** Daily Scrum

**Goals:**

* Server: allows players to move, creates gold piles, allows players to collect gold, detects end of game, produces *Game Over* list.
* Client: handles all message types from server.
* Update documentation to track changes in design, implementation, or testing plan.

### Sprint 3 (Mar 9–13) <!-- @CHANGEME date -->

* **Monday:** Sprint Retrospective + Review + Planning
* **Wednesday:** (no class)

**Goals:**

* Server: add 'knows' and 'sees' functionality.
* Complete any other missing functionality.
* Write tools to assist in testing.
* Extensive testing to ensure all code meets spec.
* Complete all required documentation.

**Once you are "finished"**:

* Review the Final submission checklist.
* Clean up your repository.
* Touch up all documentation.
* Touch up comments.
* Regression test, on the servers.
* Commit and push well before the deadline.
* Prepare your presentation.

## Design spec

**Read the [Design Hints](/project/DESIGN.html)**

Your design document (written in Markdown) shall describe the major design decisions, plan for testing, and the roles of each member of your group.
*For each of the two programs,* the document should describe the

* User interface (including command-line parameters and stdin/stdout/graphical interface);
* Inputs and outputs;
* Functional decomposition into functions/modules;
* Major data structures;
* High-level pseudocode (plain English-like language) for logic/algorithmic flow;
* Testing plan, including unit tests, integration tests, system tests.

Recall the unit about Design; it has a section about [design specs](https://www.spongium.org/unit/design).
As examples, see the design specs provided as part of the TSE.
**Do *not* repeat elements of the [Requirements Spec](/project/REQUIREMENTS.html)**; just refer to it as needed.

**How to submit:**
Commit a file `DESIGN.md` and any associated files.
Your spec may include diagrams; be sure to commit them.
Before the deadline, **push your final file to a branch called `specs`**.
*Make sure your Markdown renders properly on GitHub!*

### Design review

At a time and place to be announced, your group will present your design to the us (professor and TA).
You have 10 minutes to present, and then we have 10 minutes for Q&A.
If you are late for your presentation, you have less time to present to us.
(Don't be late.)

In 10 minutes you must present an *overview* of your design decisions and how your group will divide the work; the design document provides more detail.
Be prepared to answer questions and receive feedback.

<!-- ***Bring two printed copies of your design with you to the meeting.*** -->

## Implementation spec

**Read the [Implementation Hints](/project/IMPLEMENTATION.html)**

You must submit an Implementation spec (written in Markdown): a summary of your approach to implementing the server and client and any modules, providing the prototype and brief description of each function, and specifics of the data structure(s) you plan to use.
You do not need to describe the `support` library or, if you use it, `libcs50`.

Recall the lecture unit about Design; it has a section about [Implementation specs](https://www.spongium.org/unit/design).
Of those details, your implementation spec should describe all of your implementation's units (other than those we provide), provide pseudocode for each unit's functions (including prototypes and their parameters), describe every major data structure, and briefly describe a testing plan.
When describing data structures, we recommend pasting in a C-language `struct` declaration, with comments describing each member.
When describing the testing plan, consider unit testing of each module, integration testing = client alone or server alone, system testing = client + server together.

**How to submit:**
Commit a file `IMPLEMENTATION.md` and any associated files.
Your spec may include diagrams; be sure to commit them.
Before the deadline, **push your final file to a branch called `specs`**.
*Make sure your Markdown renders properly on GitHub!*

## Final submission

Everything – all code and documentation – must be pushed to GitHub by the deadline.
***Do not wait to the final minutes before the deadline;***
you are far more likely to make a mistake, and have no time to correct it.
Plan to submit everything several hours before the deadline.

**How to submit:**
Commit all necessary files to the `main` branch of your Git repo.

We will grade the version of the code in `main` at the time of the deadline; if there are any commits pushed after this time, **we will deduct 10 points per hour after the deadline**.

**No extensions will be permitted.** Late is late, no exceptions.

**What:** Your GitHub project shall include all necessary source and documentation files.

 1. Your code should be well-organized with sensible filenames and subdirectories.

 2. There shall be a Makefile for each library (if any), and a top-level Makefile to build the client and server and (recursively) any necessary libraries.
We must be able to `make clean` and `make all` from the top-level directory and result in a complete compilation.

 3. All code must compile (with no warnings) on plink with the usual CFLAGS.
The programs must run without segfaults.
They must not have memory leaks as determined with `valgrind` (exception: leaks directly attributable to ncurses).
They must not output anything to stdout, other than what is required to play the game, though they may use the `log` module and send that output to either `stderr` or to a file.
There can be at most *one* global variable in each program as described [below](#global-variables).

 4. There shall be a `README.md` file in each subdirectory (explaining the purpose of that subdirectory and its contents), and a `README.md` file in the top directory (naming all group members and summarizing the purpose of each subdirectory).

 5. There shall be documentation, with (at least)
    * `README.md` files, as noted above.
    * `DESIGN.md`, optionally updated from the version you submitted earlier.
    * `IMPLEMENTATION.md`, optionally updated from the version you submitted earlier.
    * any images or files needed to render the above documents; we recommend keeping such files in an `images/` subdirectory.
    * any other documentation you find it useful to include.

 6. There shall be at least one new, non-trivial, map in the `maps/` directory.
We'd like to play on a map of your design!

 7. The GitHub repository shall be 'clean'.
That is, it should not contain any 'derived files' (those built by `make` and removed by `make clean`), any 'scratch files' (including editor backup and autosave files), any core dumps, etc.

## Grading

Your final project will be graded out of 100 according to the [grading rubric](/project/rubric.html).

Furthermore, immediately after the project you will each complete a confidential online survey in which you comment on your contribution to the project, and the contributions from members of your group; the Professor uses the information in that survey to set part of your overall course grade.

