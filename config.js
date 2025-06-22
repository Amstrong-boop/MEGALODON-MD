// Powered by DybyTech

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID || "MEGALODON~MD~RJAnCBTS#Y404vQxZBASf8omC19wtcXMnDBJE5SAbaJsi2aJHAGI",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STICKER: process.env.AUTO_STICKER || "true",
 //make true if you want auto sticker   
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY MEGALODON-MD 🤍*",
// set the auto reply massage on status reply  
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/nzc6xk.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "LONE WOLF",
// add bot name here for menu
STICKER_NAME: process.env.STICKER_NAME || "ŁØÑĒ♟️ŴsØŁF🐺🧛🏾",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custom emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "🐺,🧛🏾,🍆,🐜,🎮,♟️",
// choose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links without removing member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "17176446093",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ŁØÑĒ♟️ŴØŁF🐺ÐØÑŤ PŁĀŸ🧛🏾",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴇɢᴀʟᴏᴅᴏɴ ᴍᴅ*",
// bot description    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/nzc6xk.jpg",
// image for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> *MEGALODON-MD*⚡",
// alive msg content
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// anti bad words  
MODE: process.env.MODE || "public",
// public/private/inbox/group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
// kick user if share link 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// auto voice messages
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// auto stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// false if want private mode
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// show typing status   
READ_CMD: process.env.READ_CMD || "false",
// mark commands as read 
DEV: process.env.DEV || "17176446093",
// your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// anti view once 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// auto recording status 
};
case 'play':
  if (!text) return m.reply('Please provide a song name.');
  m.reply('Searching...');
  let yts = require('yt-search');
  let search = await yts(text);
  let video = search.videos[0];
  if (!video) return m.reply('No results found.');
  let info = `🎶 Title: ${video.title}\n⏱ Duration: ${video.timestamp}\n👀 Views: ${video.views}\n📎 URL: ${video.url}`;
  conn.sendMessage(m.chat, { text: info });
  // Optional: download and send audio
  break;
case 'kick':
  if (!isAdmin) return m.reply("You must be an admin to use this.");
  if (!isBotAdmin) return m.reply("I'm not an admin in this group.");
  if (!m.mentionedJid[0]) return m.reply("Tag the person you want to kick.");
  await conn.groupParticipantsUpdate(m.chat, [m.mentionedJid[0]], 'remove');
  m.reply("User has been removed.");
  break;
case 'tagall':
  if (!isAdmin) return m.reply("Admins only.");
  let tagMsg = "📢 Tagging everyone:\n\n";
  participants.forEach(p => tagMsg += `@${p.id.split('@')[0]}\n`);
  conn.sendMessage(m.chat, { text: tagMsg, mentions: participants.map(p => p.id) });
  break;
case 'block':
  if (!isOwner) return m.reply("Only owner can block.");
  if (!m.mentionedJid[0]) return m.reply("Mention the person to block.");
  await conn.updateBlockStatus(m.mentionedJid[0], "block");
  m.reply("User has been blocked.");
  break;
case 'unblock':
  if (!isOwner) return m.reply("Only owner can unblock.");
  if (!m.mentionedJid[0]) return m.reply("Mention the person to unblock.");
  await conn.updateBlockStatus(m.mentionedJid[0], "unblock");
  m.reply("User has been unblocked.");
  break;
