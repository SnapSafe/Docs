---
title: "File Storage"
section: "Setup"
prevSlug: "repo-setup"
nextSlug: "email"
order: 3
---

# S3 Compatibility

SnapSafe uses the lightweight and [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) based [aws4fetch](https://github.com/mhart/aws4fetch) library to interact with the storage service. Any object storage service that is compatible with the S3 API and supports [presigned URLs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-presigned-url.html) should work. We recommend [Cloudflare R2](https://www.cloudflare.com/developer-platform/r2) because of its S3 compatibility, generous free tier, and no egress fees.

# Add the Environment Variables

Once you have created an account, put the following in your `.env` file.

```
STORAGE_ACCESS_KEY="..."
STORAGE_SECRET_KEY="..."
STORAGE_ENDPOINT="..."
```
