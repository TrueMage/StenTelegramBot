const downloadTikTok = require("./downloadTikTok.ts");
module.exports = async function (message_text) {
    console.log("Received message:", message_text);
    return await downloadTikTok(message_text);
};
