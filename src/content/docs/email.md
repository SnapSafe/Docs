---
title: "Email"
section: "Setup"
order: 4
prevSlug: "storage-providers"
nextSlug: "authentication"
---

SnapSafe uses email for user authentication and album sharing. Email is sent via SMTP by [Nodemailer](https://www.nodemailer.com/). You will need a service to use as an SMTP transport provider and the following set in your `.env` file.

```
SMTP_HOST="YOUR-VALUE"
SMTP_PORT="YOUR-VALUE"
SMTP_USER="YOUR-VALUE"
SMTP_PASS="YOUR-VALUE"
FROM_EMAIL_ADDRESS="YOUR-VALUE"
```

# SMPT Transport Providers

### Gmail

If you have a Gmail account, you configure it to be used an SMTP transport. This is not necessarily the best choice, but it probably the easiest to get started with. You can view a detailed tutorial on this [here](https://miracleio.me/snippets/use-gmail-with-nodemailer/).

> [!NOTE]
> The Nodemailer documentation provides more detail on the pitfalls and workarounds necessary to use Gmail. Check that out [here](https://www.nodemailer.com/usage/using-gmail/).

### SendGrid

[SendGrid](https://sendgrid.com/en-us) is a very popular email as a service provider. It can be used as an SMTP transport and has a free tier of (at the time of writing) 100 emails a day, which for a personal project, should be plenty.

You can follow along with [this tutorial](https://www.twilio.com/en-us/blog/send-smtp-emails-node-js-sendgrid) to see how to get SendGrid up and running with Nodemailer.
