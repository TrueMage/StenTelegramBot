# Sten Telegram Bot

A simple Telegram bot built with [grammY](https://grammy.dev/) that downloads TikTok videos and sends them to users.

## Features

- Accepts TikTok video links from users
- Downloads the video using a TikTok downloader API
- Sends the video back to the user in chat
- Shows "uploading video..." status while processing

## Requirements

- Node.js (v16 or newer recommended)
- Telegram Bot Token ([How to get one](https://core.telegram.org/bots#6-botfather))

## Setup

1. **Clone the repository**

   ```
   git clone <your-repo-url>
   cd StenTelegram
   ```

2. **Install dependencies**

   ```
   npm install
   ```

3. **Add your Telegram Bot Token**

   Edit `token.ts` and paste your bot token:

   ```typescript
   // token.ts
   module.exports = "YOUR_BOT_TOKEN_HERE";
   ```

## Usage

- Send a TikTok video link to your bot in Telegram.
- The bot will process the link and reply with the downloaded video.

## Project Structure

```
.
├── main.ts              # Bot entry point
├── token.ts             # Telegram bot token
├── handleRequest.ts     # Handles incoming messages and video download requests
├── downloadTikTok.ts    # TikTok video downloader logic
├── package.json         # Project metadata and dependencies
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project documentation
```

## License

MIT