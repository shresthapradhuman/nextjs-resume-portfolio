---
title: "Git Basic Command CheatSheet"
date: "14 Feb, 2022"
excerpt: "List of basic Git command for developer daily use."
cover_image: "/images/posts/gitcheatsheet.webp"
category: ["GIT"]
---

## Introduction

Git is a free and open-source distributed version control system, was developed by Linus Torvalds in 2005 and today, it is very popular among developer.

## List of basic Git command for developer daily use.

- git config

   This command is used to set user-specific configuration values. For Example, the following command is used to setup email.

    ```
    git config --global user.email root@example.com
    ```
 
- git init

    This command is used to initialized a new GIT repository to the local working directory. Example

    ```
    git init
    ```
- git clone

    This command is used to clone the repository from remote server to working directory. Example

    ```
    git clone https://github.com/ryanmcdermott/clean-code-javascript.git
    ```

- git add 

    This command is used to add the file changes to the repository. For example command will index the  README.md located in the local directory.

    ```
    git add README.md
    ```

- git commit

    This command is used to commit the changes to the file. It is way to comment your changes so that you can use that commit or comment Id later to track your changes. Example 

    ```
    git commit -m "Comment for your changes like Added, Update, Deleted "
    ```
- git status
 
    Status will show current status of repository, like in which file changes are made, changes are commited or not, etc. Example

    ```
    git status
    ```
- git push 

    This command is used to push changes from your working directory to remote repository. But before push one should add and commit the changed file. while pushing one should provide the branch where the changes will be pushed. Example here changes are pushed to master branch.
    ```
    git push origin master
    ```

- git pull 

    This command is used to pull and merge all the changes found in the remote repository into the working directory. Example
    ```
    git pull origin master
    ```
- git checkout 

    Checkout command is used to create or switch the branches. Example

    - Create new branches from main
        ```
        git checkout -b <branch name>  <main branch name>
        ```
    - Switch the branches
        ```
        git checkout <branch>
        ```

- git remote 

    This command is used to connect to a remote repository. Example

    - Lists currently configured remote repositories.
        ```
        git remote -v
        ```
    - Mount the local directory to a remote directory
        ```
        git remote add origin
        ```
 
- git branch 

    This command is use to list, create, and delete the branches. 

    - List the branch
        ```
        git branch
        ```
    - Create branch
        ```
        git branch <branch name>
        ```
    - Delete branch
        ```
        git branch -d <branch name>
        ```

- git merge 

    This command is used to merge a branch into the active branch. Example
    ```
    git merge
    ```

- git diff 

    This command is used to list conflicts. 
    - To view conflicts with the base file
        ```
        git diff --base
        ```
    - view conflicts between branchs to be merged before merging
        ```
        git diff
        ```

- git tag 

    Tagging is used to mark specific commits into simple parts.

    ```
    git tag 1.1.0
    ```

- git log 

    This command is used to see the list of commits on branch with details. Example
    ```
    git log
    commit 11f4b6c43b3c8241caasraq9e4be13246e21sewd
    Author: Author name
    Date: Mon Nov 8 12:56:29 2021 -0600
    ```

- git reset 

    This command is used to reset the repository and workind directory to last commit state.

    ```
    git reset --hard HEAD
    ```

- git rm 

    This command is used to remove the change files from working directory. and repository.

    ```
    git rm filename.txt
    ```


- git stash 
    This command helps to temporarily save changes that will not be processed immediately.

    ```
    git stash
    ```

- git show

    This command is used to show the information about any changes. 

    ```
    git show
    ```

- git fetch

    This is command is use to fetch the repositories from remote server currently that is not available in the local working directory.
    ```
    git fetch origin
    ```

- git ls-tree

    This command to view a tree object, along with the name and mode of each item, and the blob’s SHA-1 value.

    ```
    git ls-tree HEAD
    ```

- git catfile 

    Display the type of an object using the git cat-file command, with the SHA-1 value.

    ```
    git cat-file –p d674467b4b4aefe5322caf5c28d12f510a9he3e4
    ```

- git grep

    git grep allows users to find sentences and/or words through content trees. 

    ```
    git grep "search words or sentences"
    ```


- git gc

    To optimize the repository by cleaning junk files, through garbage collection, use the following:

    ```
    git gc
    ```

- git archive

    The git archive command allows a user to create a zip or tar file containing the components of a single directory tree.

    ```
    git archive --format=tar master
    ```

- git prune
    Via the git prune command, objects that do not have incoming pointers are deleted.

    ```
    git prune
    ```

- git fsck

    Use the git fsck command to check the integrity of the GIT filesystem. Corrupt objects are identified:

    ```
    git fsck
    ```

- git rebase

    git rebase command is used to reimplement commits from another branch. 

    ```
    git rebase master
    ```