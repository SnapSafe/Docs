---
title: "Fork the Repo"
section: "Setup"
---

> [!IMPORTANT]
> Make sure you have completed the [prerequisites](/docs/prerequisites) first.

# Creating a Fork of the SnapSafe Repo

Create a fork of the [SnapSafe GitHub repo](https://github.com/SnapSafe/SnapSafe) and clone the new forked repo to your computer.

> [!TIP]
> For a tutorial on creating a fork with GitHub, [click here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo).
> For a tutorial on cloning a repo [click here](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

# Installing the Dependencies

SnapSafe uses [npm](https://www.npmjs.com/) for dependency management. Open a terminal and navigate to the root project directory and run the command `npm install`.

# Creating a dotenv File

Create a file named `.env` in the root project directory and past the following in it.

```
SITE_URL = "http://localhost:5173";
```
