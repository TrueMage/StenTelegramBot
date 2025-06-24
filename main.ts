const { Bot } = require("grammy");
const TOKEN = require("./token.ts");
const handleRequest = require("./handleRequest.ts");

const bot = new Bot(TOKEN);

// Register listeners to handle messages
//bot.on("message:text", (ctx) => ctxs.reply("Echo: " + ctx.message.text));

bot.catch((err : string) => {
    console.error("Error in bot:", err)
});

bot.on("message:text", async (ctx : any) => 
{
    await ctx.replyWithChatAction("upload_video"); // Shows "uploading video..." status
    const videoUrl = await handleRequest(ctx.message.text);
    await ctx.replyWithVideo(videoUrl);
});

bot.start();