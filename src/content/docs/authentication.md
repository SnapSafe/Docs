---
title: "Authentication"
section: "Setup"
prevSlug: "email"
nextSlug: "database"
order: 5
---

# Email Authentication

Once you have email sending set up, the only thing you need to do to enable email authentication is add the following to your `.env` file

```
EMAIL_AUTH="on"
```

> [!NOTE]
> For local development you can log emails to the console instead of sending them by setting the environment variable `EMAIL_DEBUG="on"`.

# Google Authentication

You can enable Sign in with Google by creating an OAuth app in the Google console adding the following to your `.env` file.

```
GOOGLE_AUTH="on"
GOOGLE_CLIENT_ID="YOUR-VALUE"
GOOGLE_CLIENT_SECRET="YOUR-VALUE"
GOOGLE_REDIRECT_URI="/YOUR-VALUE" // Do not put the full URL. Put the page path with a leading `/`
```

> [!NOTE]
> For a very thorough tutorial on create a Google OAuth app, click [here](https://www.balbooa.com/help/gridbox-documentation/integrations/other/google-client-id)
