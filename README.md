# Next.js + Airtable Soundbox

This is a fully customizable soundboard app built with Next.js and Airtable. 
It's mobile friendly and support SSG with Next.js 14.

The content is stored in Airtable and can be edited remotely in the Airtable UI.

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Setup your Airtable project

This app use two tables :

- One for the application content
- One for the application configuration

### Sounds table

The table containing sounds must have the following columns:

```
title: string
audio: Attachment
image: Attachment
```

If multiples files are uploaded in the same cell, only the first one will be used.

### Configuration table

This table is optional. If it's not present, the app will use the default values.

The table must have the following columns :

```
key: string
value: string
image: Attachment
```

See [the customization section](#customization) for more details.

### Linking the app to your airtable project

You must provide your Airtable PAT, Project URL and Tables IDs in environment variables.

Check the .env.example file for more details.

## Customization

Your soundbox can be fully customized without any code modification. 
You can change the colors, the logo, the favicon, the title and the description in the Airtable UI.

The following keys are available in the configuration table :

| name           | type       | default value                   |
|----------------|------------|---------------------------------|
| name           | string     | My soundbox                     |
| description    | string     | A soundbox to make some noise.  |
| footerText     | string     | Made with ❤️ by Franck G.        |
| backgroundColor| string     | #006198                         |
| footerColor    | string     | #FE000B                         |
| titleColor     | string     | #ffffff                         |
| appUrl         | string     |                                 |
| footerTextColor| string     | #ffffff                         |
| favicon        | Attachment | "/favicon.ico"                  |
| ogImage        | Attachment | "/soundbox-og.png"              |
| icon512        | Attachment | "/icons/soundbox-512.png"       |
| icon384        | Attachment | "/icons/soundbox-384.png"       |
| icon192        | Attachment | "/icons/soundbox-192.png"       |


## About caching

Unfortunately, Airtable webhooks are not available in the free plan. This means that we have no way to trigger the revalidate route when the content is updated in Airtable.

To ensure that the content is up to date, we use a cache with a TTL of only 30 seconds for the sounds table.

The configuration table has a TTL of 1 hour, since Airtable files URL are only for approximately 2 hours.

To revalidate the cache to get the latest content & configuration instantly, you can send a GET request to <your app url>/api/relidate.
