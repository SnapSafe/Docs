---
title: "Quick Start"
section: "Getting Started"
order: 3
prevSlug: "introduction"
nextSlug: null
---

### 1. Fork and clone the [GitHub Repo](https://github.com/SnapSafe/SnapSafe)

Then run `npm install`.

### 2. Create a `.env` file

### 3. Create a [Cloudflare R2](https://developers.cloudflare.com/r2/) bucket.

Then and add the following environment variables

```
STORAGE_ACCESS_KEY="..."
STORAGE_SECRET_KEY="..."
STORAGE_ENDPOINT="..."
```

### 4. Create a [SendGrid](https://sendgrid.com/en-us) account.

Follow along with [this tutorial](https://www.twilio.com/en-us/blog/send-smtp-emails-node-js-sendgrid) until you get your API key, then add the following variables

```
EMAIL_AUTH="on"
SMTP_HOST="smtp.sendgrid.net"
SMTP_PORT="587"
SMTP_USER="YOUR-VALUE"
SMTP_PASS="YOUR-VALUE"
FROM_EMAIL_ADDRESS="YOUR-VALUE"
```

### 5. Create a [Turso](https://turso.tech/) account

Then create a database, get the URL and a token and add the following

```
DB_URL="YOUR-VALUE"
DB_TOKEN="YOUR-VALUE"
```

### 6. Run `npm run dev`

Your local instance of SnapSafe is ready to go!
