---
layout: layout.html
title: CS 50 | VS Code
permalink: /vscode.html
---

# VS Code SSH setup

This page walks you through how to use VS Code over a remote connection.

1. Click on the "Extensions" icon in the left sidebar (the four squares where one is slightly rotated). Search for the "Remote - SSH" extension and click Install.

2. Once installed, click on the yellow angle brackets icon in the very bottom-left corner of the VS Code window (if you hover over it, it says "Open a Remote Connection").

3. Select "Connect Current Window to Host..."

4. In the text field, enter your plink username and the plink address like so: `<username>@plink.cs.dartmouth.edu`. Hit Enter (do *not* add the `ssh` command before your username).

5. Enter your plink password when prompted.

6. It will probably take a couple seconds, but the connection will be set up (remember you must be on eduroam or the Dartmouth VPN in order to connect to plink). Once connected you can click Open... or File->Open... and you should see all the files and directories within your plink home directory. Click whichever file or directory you want to open and hit OK.

7. When you open a .h or .c file it will probably prompt you to install the C/C++ Extension. *Do not install this*. While in the future it may be helpful, for this class we want you to practice compiling and running code using the command line and the commands we have taught you.

## Tip

If you are a Mac or Linux user, you can reduce typing by adding the following to your laptop's `~/.ssh/config` file; then you can click `cs50` in the prompt that opens in Step 4 above and only have to enter your password to login.

Create the file `~/.ssh/config` on your laptop (*not* plink) if it does not already exist and add the following lines:
```
Host cs50
   Hostname plink.cs.dartmouth.edu
   User <username>
```