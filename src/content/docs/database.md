---
title: "Database"
section: "Setup"
order: 6
prevSlug: "authentication"
nextSlug: "running-locally"
---

# SQLite

SnapSafe uses [SQLite](https://www.sqlite.org) as a database. All you need for this to work in when running the app locally is to add the following to your `.env` file.

```
DB_URL = "file:./db.sqlite"
```

For deployment, we recommend [Turso](https://turso.tech/), a hosted SQLite provider with an extremely generous free tier that should be more than enough to power the app. It is easy to integrate with, simply create a database, get the database URL and an auth token and add the following to your `.env` file.

```
DB_URL="YOUR-VALUE"
DB_TOKEN="YOUR-VALUE"
```
