const Tiktok = require("@tobyg74/tiktok-api-dl");

async function download(link)
{
    const result = await Tiktok.Downloader(link);
    console.log(result)
    return result.result.video.playAddr[0];
}

module.exports = download;