import fetch from 'node-fetch'
import { generateWAMessageFromContent } from '@adiwajshing/baileys'
import { tiktokdl, tiktokdlv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command, args }) => {
if (!text) throw `*[βππππβ] π΄π½π»π°π²π΄ π³π΄ ππΈπΊππΎπΊ π΅π°π»ππ°π½ππ΄, πΏπΎπ π΅π°ππΎπ πΈπ½πΆππ΄ππ΄ π΄π½ π΄π½π»π°π²π΄/π»πΈπ½πΊ π³π΄ π°π»πΆππ½ ππΈπ³π΄πΎ π³π΄ ππΈπΊππΎπΊ*\n\n*ββ π΄πΉπ΄πΌπΏπ»πΎ:*\n*${usedPrefix + command}* https://vm.tiktok.com/ZMFb4BXVd/`
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) throw `*[βππππβ] π΄π½π»π°π²π΄ π³π΄ ππΈπΊππΎπΊ πΈπ½π²πΎπππ΄π²ππΎ, πΏπΎπ π΅π°ππΎπ πΈπ½πΆππ΄ππ΄ π΄π½ π΄π½π»π°π²π΄/π»πΈπ½πΊ π³π΄ π°π»πΆππ½ ππΈπ³π΄πΎ π³π΄ ππΈπΊππΎπΊ*\n\n*ββ π΄πΉπ΄πΌπΏπ»πΎ:*\n*${usedPrefix + command}* https://vm.tiktok.com/ZMFb4BXVd/`
let texto = `*[β] @${m.sender.split`@`[0]} π°πΆππ°ππ³π΄ ππ½ πΌπΎπΌπ΄π½ππΎ π΄π½ π»πΎ πππ΄ π΄π½ππΈπΎ ππ ππΈπ³π΄πΎ π³π΄ ππΈπΊππΎπΊ*`
try {
let aa = { quoted: m, userJid: conn.user.jid }
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: texto, contextInfo: { externalAdReply: { title: 'α΄Κα΄ α΄Κsα΄Ιͺα΄ - Κα΄α΄', body: null, thumbnail: imagen1, sourceUrl: 'https://github.com/BrunoSobrino/TheMystic-Bot-MD' }, mentionedJid: [m.sender]}}}, aa)
const { author: { nickname }, video, description } = await tiktokdl(args[0]).catch(async _ => await tiktokdlv2(args[0]))
const url = video.no_watermark_raw || video.no_watermark || video.no_watermark_hd || video.with_watermark
await conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })
let buttons = [{ buttonText: { displayText: 'π°ππ³πΈπΎ' }, buttonId: `${usedPrefix}tomp3` }]
let shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${url}`)).text()
conn.sendMessage(m.chat, { video: { url: url}, caption: '_α΄Κα΄ α΄Κsα΄Ιͺα΄ οΉ£ Κα΄α΄_', footer: await shortUrl, buttons }, { quoted: m })
} catch {
await m.reply('*[βππππβ] π»πΎ π»π°πΌπ΄π½ππΎ, πΎπ²ππππΈπΎ ππ½ π΄πππΎπ π°π» π³π΄ππ²π°ππΆπ°π ππ ππΈπ³π΄πΎ, πΏπΎπ π΅π°ππΎπ πππ΄π»ππ° π° πΈπ½ππ΄π½ππ°ππ»πΎ*')  
}}
handler.help = ['tiktok']
handler.tags = ['downloader']
handler.alias = ['tiktok', 'tikdl', 'tiktokdl', 'tiktoknowm']
handler.command = /^(tt|tiktok)(dl|nowm)?$/i
export default handler
