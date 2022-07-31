const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
let krizyn = `
•·––––––––––––––––––––––––––·•
👤 ɴᴀᴍᴇ : ᴍ.ʀʏᴀɴ ᴀᴅɪᴛʏᴀ ᴘ
📆 ᴅᴀᴛᴇ ᴏғ ʙɪʀᴅ : 12 ᴀᴜɢᴜsᴛ 1997
🎓 ʟᴀsᴛ ᴇᴅᴜᴄᴀᴛɪᴏɴ : ʙᴀᴄʜᴇʟᴏʀ 1 
🧪 ᴍᴀᴊᴏʀ : ᴄʜᴇᴍɪᴄᴀʟ / ᴘʜʏsɪᴄs
🎗️ sᴛᴀᴛᴜs : ᴍᴀʀʀɪᴇᴅ
💼 ᴏᴄᴄᴜᴘᴀᴛɪᴏɴ : ᴛᴇᴀᴄʜɪɴɢ
🔅 ʜᴏʙʙɪᴇs : ᴄᴏᴅɪɴɢ

🥏 ᴡᴏʀᴋ ᴀᴅᴅʀᴇs : Jl. Sultan Adam No.76, Surgi Mufti, Kec. Banjarmasin Utara, Kota Banjarmasin, Kalimantan Selatan 70122

🥏 ʙɪᴏ : ɪɴᴛᴇʀᴇsᴛᴇᴅ ɪɴ ᴍᴀᴄʜɪɴᴇ ʟᴇᴀʀɴɪɴɢ (ᴄᴏᴍᴘᴜᴛᴇʀ ᴠɪsɪᴏɴ,ɴᴀᴛᴜʀᴀʟ ʟᴀɴɢᴜᴀɴɢᴇ ᴘʀᴏᴄᴇssɪɴɢ,ᴅᴇᴇᴘ ʟᴇᴀʀɴɪɴɢ),ɴᴏᴅᴇ.ᴊs (ɴᴇᴛᴡᴏʀᴋ,ʙᴏᴛs,ᴡᴇʙ),ᴀɴᴅ ᴘʀᴏɢʀᴀᴍᴍɪɴɢ ɪɴ ɢᴇɴᴇʀᴀʟ.

❗const hidup = require('ibadah')❗
•·––––––––––––––––––––––––––·•
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya7)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: krizyn,
                imageMessage: message.imageMessage, 
           hydratedFooterText: 'salam kenal bang👋',
           hydratedButtons: [{
             urlButton: {
               displayText: 'GroupBot 🐈',
               url: gc
             }

           },
                {
               urlButton: {
               displayText: '🌍 Link Instagram 🌍',
               url: web
             }

           },
               {
             quickReplyButton: {
               displayText: 'Sewa Bot',
               id: '.sewa',
             }
             
           },
               {
             quickReplyButton: {
               displayText: 'Menu',
               id: '.menu',
             }
             
             },
               {
             quickReplyButton: {
               displayText: 'Donasi bang',
               id: '.donasi',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.tags = ['main', 'info']
handler.command = /^(biodata)$/i
handler.help = ['biodata']
module.exports = handler
