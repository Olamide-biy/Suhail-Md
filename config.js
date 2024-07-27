Iconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347038883615";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_19_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA5NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDM5LFxuICAgICAgICA2OCxcbiAgICAgICAgMixcbiAgICAgICAgOTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjUzLFxuICAgICAgICA0OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAzNixcbiAgICAgICAgNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2LFxuICAgICAgICAzOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ0LFxuICAgICAgICA3NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTU2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTM1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTY2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjI1LFxuICAgICAgICA3NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzOSxcbiAgICAgICAgODYsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICA1NixcbiAgICAgICAgMTM4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyOCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDcxLFxuICAgICAgICA0NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE2LFxuICAgICAgICA1MixcbiAgICAgICAgMTc0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDg3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAzMixcbiAgICAgICAgMjA4LFxuICAgICAgICA3MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTIsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQwLFxuICAgICAgICA2NixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDY0LFxuICAgICAgICAxNyxcbiAgICAgICAgOSxcbiAgICAgICAgODAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDUwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm90aEZNTitqUk5qNzAvc0tkcGpQM0ZaVHNkbEc4b0dwUG12NUsrNGFVQU09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlppcDRJN0JaUzNhQ1VTYXlMNHdnd3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDBhYTliNTctMTZiZi00OTIyLWEzNTItM2RjNzk5Y2QzZWFkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg4LFxuICAgICAgMTU2LFxuICAgICAgMTc5LFxuICAgICAgMTg4LFxuICAgICAgNDcsXG4gICAgICA5MixcbiAgICAgIDIzNCxcbiAgICAgIDczLFxuICAgICAgMixcbiAgICAgIDE2OCxcbiAgICAgIDIyNyxcbiAgICAgIDk4LFxuICAgICAgNjEsXG4gICAgICAyMTAsXG4gICAgICAyMDQsXG4gICAgICA5NSxcbiAgICAgIDc0LFxuICAgICAgMjQ3LFxuICAgICAgNTAsXG4gICAgICAyMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ1LFxuICAgICAgMjM4LFxuICAgICAgMTExLFxuICAgICAgMjMzLFxuICAgICAgMjU1LFxuICAgICAgOTgsXG4gICAgICAzOSxcbiAgICAgIDcwLFxuICAgICAgMjIwLFxuICAgICAgMTA1LFxuICAgICAgNTMsXG4gICAgICA2LFxuICAgICAgOTIsXG4gICAgICA2MixcbiAgICAgIDE1MSxcbiAgICAgIDkxLFxuICAgICAgNDcsXG4gICAgICAxMjYsXG4gICAgICA1LFxuICAgICAgMTc4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlNWSldSTTJOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDM4ODgzNjE1OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1Nzk3ODE4MzAxMjUxODoxNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKblV0TGdGRUtyTGs3VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjIydk9pb1VESTBMM3MrS3lhT1VTRmZuQWliazZnYXJJazJNcnhoOWd0eUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOXdydXgwUUd5K1F3dC9XZnZlbTFtNmdFUjNuV1oxRzJiVGdsTFBtZTVRWWRQUGtzZFAvZTBzVWdGSjhySFhURjVCTnRiaUtWd2E0OFAvRVcvaTBXQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwid0JjUmpKSEN3ZnUzK25DeENuQWE5Z29NYkpJalBIeTFGL0VTRDltSmRJbHdNZUF2VkFwMkdxMTUxUDFic3RRb1Juc3dkcGJqSC9DbDdxcFM1OG1Canc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAzODg4MzYxNToxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjA4MjczM1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
