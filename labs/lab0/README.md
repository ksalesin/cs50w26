# Lab 0: Setup

This first assignment is simple but essential.
It's not graded, but is **required** for you to participate in the course.

## Part 1: Team Formation

Visit [Canvas](https://canvas.dartmouth.edu/courses/76733) and click *Team Formation* link on the left side.
Answer its questions **by midnight tonight** ([Instructions](https://services.dartmouth.edu/TDClient/1806/Portal/KB/ArticleDet?ID=128042)).
It should take you less than five minutes.

This form provides us with the information we need to:

- form learning groups (project teams),
- learn more about your background, and
- help support you through the term.

## Part 2: Log in to the Knowledge Base
We are trying out a new tool to access the readings for CS 50 this term, developed by a former CS 50 student & TA! Please test that you can access the [Knowledge Base](http://plink.cs.dartmouth.edu:3000) (you will need to be on eduroam or the Dartmouth VPN). Click the profile button at top right to sign in with your Dartmouth email and be able to track your progress.

## Part 3: Create a GitHub account (or provide your ID)
If you don't have a GitHub account, please create one ([Instructions](/github.html)).

**Please submit your GitHub ID as the text submission for this assignment on Canvas.**

## Part 4: Test SSH access
In this class, we will use two servers:

`plink.cs.dartmouth.edu` as our main server  
`babylon1.thayer.dartmouth.edu` as our backup server  

In order to be able to connect to either of these machines, you need to be on the eduroam network. It will NOT work from Dartmouth Public. If you are outside of Dartmouth, you will need to use the [Dartmouth VPN](https://services.dartmouth.edu/TDClient/1806/Portal/KB/ArticleDet?ID=66806) to be able to connect.

> [!NOTE] 
> **Windows users**
> 
> You can use ssh and generate ssh keys directly on Windows >=11 (using the powershell)
> 
> If you use an older version of Windows, OR if you want to have a full Linux environment locally on your machine, you may be interested in installing WSL (Windows Subsystem for Linux), which essentially provides you with a built-in Linux VM accessible right from your own environment: https://learn.microsoft.com/en-us/windows/wsl/install.
> 
> **Linking the WSL environment to your Windows environment:**
> 
> In order to easily access your Windows files from the WSL, you can create a symbolic link to the Windows home folder from within the WSL as follows:
> 
> ```ln -s /mnt/c/Users/your_windows_username windows_home```
> 
> Replace "your_windows_username" with whatever your Windows username is.
> 
> You will now have a "windows_home" symbolic link pointing to your Windows home and can perform file operations directly. Example, you can list your Windows files using "ls windows_home".

### babylon1
You can access babylon1 directly with your Dartmouth credentials.
Open the terminal app (on either your Windows >=11, Mac or Linux laptop, all are supported) and type the following command:

```ssh <netid>@babylon1.thayer.dartmouth.edu```

where \<netid\> is your Dartmouth NetID and the password is your Dartmouth password.

Congratulations, you now have a shell on babylon1!

### Plink
Plink is a TrustLab machine. It is not managed by Dartmouth, therefore, your Dartmouth NetID will not be recognized there.

Open the terminal app and type the following command:

```ssh <username>@plink.cs.dartmouth.edu```

where \<username\> is of the form "w26\<netid\>" (\<netid\> is again your Dartmouth NetID, e.g. "w26f003jkc") and the password is `Salesin50`.

**Change the password** to a secure password of your choice: while logged in to plink, enter the ``passwd`` command and it will prompt you to set a new password.

<!-- Plink also uses a more secure form of authentication relying on cryptography (we're a security lab after all!)

You will need to setup a new SSH keyring in order to access plink. Note: the SSH keyring is to be generated locally on your own machine. Do not generate SSH keyrings on either babylon or plink!

1. If you have ever used SSH, you may have a keyring already. To check if you already have one, look if you have a ~/.ssh folder with a file called id_rsa.pub in it AND a file called id_rsa (or some variant of it, it can also be id_something and id_something.pub). If you have both of these (i.e.. a file and another file with the same name + .pub), you can reuse them this term.  Here "pub" means public -- the other one is private. Just like a password, keep the private key to yourselves! This relies on asymmetric cryptography (this concept is explored in more detail in CS 55).

2. If you don't have this folder or files, please run: ssh-keygen on your local machine and follow the instructions (and please do not leave the password blank when prompted!)

3. Check access to plink:

Type the following command:
 ssh <username>@plink.cs.dartmouth.edu
where <username> is of the following form: "w26netid" where netid is your Dartmouth netID, e.g. "w26f003jkc".

To determine your password, you will need solve the following challenge: your password is the sha256 hash of your username. The command to obtain the sha256 hash of a given value is sha256sum. Note however that this command will issue a trailing '-' character preceded by whitespace characters. You may want to think about how to trim those out! For the sake of this exercise, we will use the echo command, the pipe and the sha256sum commands. We ignore the fact that echo adds a '\n' to the end of its output (technically, in order to get the hash of just the username, you would normally use echo -n).
Generate your password using the aforementioned command (hint: use pipes) and ensure that you can successfully login
Logout with the 'logout' command, or by pressing ctrl+d
At some point (you do not need to do this right now), change your password while logged into plink using the 'passwd' command.
4. On your local machine, run the following command to copy your public key over to plink:

ssh-copy-id <username>@plink.cs.dartmouth.edu
5. If everything worked well, you should now be able to ssh to plink without having to type your password every time (though you may be prompted to unlock you private key the first time in a session). 

6. Please upload your SSH public key as response to this assignment! -->

## Part 5: Resources
Read through the [Resources](/resources.html) page for resources you can use for help on the various systems and tools we will use throughout the term.