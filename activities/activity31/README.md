# Activity: Volcano Resort Scrum

![eruptia](/images/eruptia.jpeg)

The small volcanic island nation of Clang is soliciting proposals for a team to have the *exclusive* right to build a vacation resort there (it *is* a small island). The submission for this activity is a proposal for the resort in the form of a Markdown file. You are competing with all the other teams for your proposal to be chosen!

The activity is to come up with ideas for your team's resort and write up a proposal as a single Markdown file. The proposal should describe the resort's amenities and should be aimed at a desired set of clients (families, singles, retirees, gourmands, professors, bureaucrats, volcanologists, distillers, Swifties, zookeepers, etc.).

## Step 0: Preparation

On our <a href="/project/scrum.html">Scrum page</a>, read through everything up until "GitHub Project Board".

## Step 1: Define Tasks

First, let's plan a Sprint for putting together your proposal. Your **Sprint Goal** is to create a final proposal document, `proposal.md`.

Write up a detailed list of tasks that you need to accomplish to complete the proposal. Your proposal should include several sections, text, and images.

For example, these tasks might include selecting your unique resort idea, resort activities, pricing goals (luxury, rustic, all-inclusive, ...), pictures needed, prose needed, special equipment needed, and accommodations style, among others. The tasks may be workable in parallel or might need to be serialized (one depends upon another).

Aim for at least 10 tasks. **Spend no more than 10 minutes on this step.** Keep in mind your team will actually need to complete these tasks later within a roughly 30-40 min timeframe.

## Step 2: Set Up in GitHub

We have set up a GitHub repository for each team to use. You do not need to clone these repositories locally – we will just use the web UI for today.

One person on your team (while sharing their screen) should follow the instructions under <a href="/project/scrum.html">"GitHub Project Board"</a> to set up your team's Project Board and one Milestone for your Sprint (only make one Sprint here, not three).

**Create a single `proposal.md` in the `main` branch for your team to work on together.** To do this in the web UI, go to your repository's Code, then Add File (to the left of green Code), then Create New File. Give the new file the name `proposal.md`, initialize it however you like, then Commit changes.

## Step 3: Create and Assign Issues

Decide which team member will do each task. Each team member should create a new Issue for each task they were assigned. Assign yourself under "Assignees" and choose the Project and Milestone that were just created. 

Note how once each issue is created, it automatically shows up in the "Todo" column of the Project Board.

## Step 4: Do the Work!

Each team member should complete the issues they were assigned! Do the writing, find the images online, etc. *If you link to images, please link to a full `http://...` image url, not a local image.*

In the Project Board, click and drag the Issue item from "Todo" to "In Progress" once you have started to work on it (this is the only transition that is not automatic).

As with any code project, create a new branch before starting your work. You can do this in the web UI by going to your repository's Code, go to Branches (next to `main`), and then New Branch (at top right). Then click the new branch to switch to it. It would make sense to give this branch a name similar to the issue it is associated with.

## Step 5: Create a Pull Request

Once you have completed work on an Issue, create a new Pull Request (follow the instructions under <a href="/project/scrum.html">"Needs Review"</a>). **Remember to link the Issue that the Pull Request is associated with.** Assign all of your team members as reviewers.

You might see the message "Can’t automatically merge. Don’t worry, you can still create the pull request." This is because you are all working on the same file and there will be merge conflicts; this is ok, create the Pull Request anyway.

Note how once the Pull Request is created and linked to an Issue, it shows up in the Needs Review column of your Project Board.

## Step 6: Close All Pull Requests and Issues

Team members should review each other's Pull Requests, look at the work done, comment if there are any problems, and Merge into `main` once done. This should also automatically close the Issue that the Pull Request is associated with.

If there is a merge conflict with `main`, there will be a message that says "This branch has conflicts that must be resolved." Click Resolve Conflicts and resolve the merge conflict. Delete the `<<<<<<<` and `=======` that GitHub inserts to mark the conflict and modify the file as needed to combine the changes, then click Mark as Resolved, then Commit Merge.

Note how once the Pull Request is merged, the PR and its Issue are moved to the Done column of your Project Board.

## Step 7: Submit Your Proposal!

Submit your final `proposal.md` to Canvas!

