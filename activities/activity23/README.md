# Activity: Git with the Flow

Practice setting up and running a team project using Git Flow on GitHub.

*Based on the excellent example assignment at `https://github.com/ISP21/ku-cafe`.*

## Overview

<!-- ![greengoblinmascot](media/gg.jpeg) -->

Each member of the team is chair of a different department at Green State University (*"Go Goblins!"*). Your goal is to produce a course listing for the upcoming Summer session. The usual courses aren't offered then, so your job is to come up with some new courses your department will offer.

Each course listing must have:

- 3-character department code & course number (000-999)
- title (up to 30 chars)
- description (up to 80 chars)

The courses should be listed in the associated department files (e.g. `math.md`, `english.md`) which are linked in the `catalog.md` file.

For example, the English department file `english.md` might contain the following classes:

---

**ENGL007** _Poetry of Ian Fleming_
> Study of verse from the spy master.

**ENGL042** _Don't Panic People!_
> Societal commentaries of Douglas Adams.

---

You can produce this layout using the following:

```markdown
---
**ENGL007** _Poetry of Ian Fleming_
> Study of verse from the spy master.  
**ENGL042** _Don't Panic People!_
> Social commentaries of Douglas Adams.  
---
```

Humor is encouraged, but keep it clean.

When finished, the `main` branch of your repository will contain the complete Summer session catalog.

> [!IMPORTANT]
> This is the only activity where we **don't** want you to talk **directly** to other members of your team. After the initial set up, pretend you are working remotely!

## Steps

1. One team member is chosen as the "Project Lead" who then accepts the [activity assignment](https://classroom.github.com/a/7ycx4mNu) from GitHub Classroom as usual.  

    a. go to the new repository **on GitHub**  
    b. make sure the new repo is private.  
    c. set GitHub to [protect the main branch](https://www.spongium.org/unit/protect-main).  
    d. invite other team members to join the repo with the Maintain role:  

    ```  
    Settings -> Collaborators and teams -> ...  
    ```  

2. Team decides which member will handle which department.

3. Each team member does the following:
	- Clone the repo and `cd` into the cloned repo.
	- Create a local feature branch for your work, with a name indicating the department you are handling, e.g. 
        `git branch english`
	- Switch to that new feature branch. 
        `git checkout english` or `git switch english`
	- Add at least 4 classes to your department's `.md` file (see above).
	- Edit the `catalog.md` file to add your name in the department chair slot of the department you selected.
	- Commit your changes and push your branch to GitHub.
		`git push -u origin english`
	- Preview your branch on GitHub. Is content correct? Does the formatting meet the requirements? Are any words spelled incorrectly?
	- If everything is correct, open a Pull Request for your branch.  

4. Respond to Pull Requests (everyone)
    - When you see a Pull Request from a team member, review their
        branch on GitHub.
    - Comment on their Pull Request.
        - Formatting or spelling problems? Are the course numbers in order?
        - Do you approve the merge into main?  If so, then do it.

5. Merge & Close Pull Request (feature author)
    - Respond to comments to your Pull Request. If problems, fix them
        & push again.
    - After your team approves your work, merge your branch into `main`.
    - If GitHub cannot do an automatic merge, it probably means that `main` has changed since you cloned it. In that case do the following:
        1. Within your local repo, run: 
        ```
        git checkout main        # switch to your local main branch
        git fetch origin main    # fetch the remote version of main
        git merge origin/main    # merge the remote main into your local main
        ```
        2. If there are any merge conflicts, fix them and commit.
        2. Merge your feature branch into `main` locally on your machine (e.g. from your `main` branch, run `git merge english`). If there are any merge conflicts, fix them and commit.
        3. Push your (merged) main to GitHub. This time it should succeed. If you made any changes to your feature branch, push those, too.

> [!TIP]
> Using Pull Requests is useful for reviewing each other's work for a team project, but if you are working on a repo on your own, you can create and merge your own feature branches without bothering with Pull Requests.

### **Upload the URL of your github repository as your submission to Canvas for this activity.**
