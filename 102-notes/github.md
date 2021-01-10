# GitHub and the Cloud

---

## What is GitHub?

Git is a distributed version control system that stores data in a file system made up of snapshots. At it's core, it allows coders to save previous versions through snapshots, share files with other coders and store your files in a single place called a repository.

## How does GitHub Work?

There are a few ways you can use GitHub but the most common way is to use your local code editor to make cahnges to your file and then syncronize the files in GitHub, keeping a full copy in your repository. **Terminal** is used as the tool to push the updates from your local computer to GitHub.

## Commands in Terminal

- `git clone + https...` will pull your files from GitHub to your local computer
- `code .` will open your files in the code editor, in my case VS Code
- `git status` will show if any of your files need to be updated
- `git add + filename` will track files in a repository
    - `git add .` will add all files in the directory
- `git commit -m "..."` will commit a new snapshot to the repository. Add change notes in the quotes.
    - `git commit -a` will commit a new snapshot for all files being tracked in the working directory
- `git push origin main` will push the changes from the local "branch" to the remote branch

---

[Back to Read Me](../README.md)
