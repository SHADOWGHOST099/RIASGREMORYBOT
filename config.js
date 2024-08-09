//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Ghana";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/e07fa9dfd176ce3a2886a.jpg";
global.devs = "233597087405";
global.sudo = process.env.SUDO || "233597087405";
global.owner = process.env.OWNER_NUMBER || "233597087405";
global.style = process.env.STYLE || "5";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/e07fa9dfd176ce3a2886a.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://toxic-session-id.onrender.com/pair";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0FQQndQTXJmdnBmVkYxbGN5aExxOWZWVzZCaXlNWXVFU2dTUFE2MCsxZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYzJmaXFJM2psNnBuaWhVVmdUc0hBSHF2NGxOcHoyMDBHdmdqWTlUZHp5VT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0RFFMaTFKTXJOeWtzWi9tMThJWDQ0V2VLY1FHY2hqdEFMa3N0c1kvZjBZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxZjBhVVdWOHBBRnBrdytvNE5LOWYxZWc3cFkvUjV2VTArUVFOeVdUYmlBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFQZlV3Y3FhYmFPOE9qTTJqWWpQWnlLVm9yYVhNMGZFbmthY3BVZ0tPR0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZJdGlLbm44L2srWDlzZVFTUjFyUEJrNVkrNWZwNnkzTDA3UFVnYm1iaHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQURoYU5neDRJYnhzRHNLNnB4WDF5N3k1UWVvVnBYcS84dnZBYWZMdmxGOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWHpNRE9mRkJ1ZmlyZEFSekd5cGZGbzNOYSttaHRvcG5jMmRWdjZhVHRDST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZvcFNTcjJEWEpIQkFvUHZXT2lOczRkNDB0TDlOcG9Sb2ErRWJHVzlxY3pTR2pPT2FuT3hNbGRiTHFBWkdDS214RzZnNGhDOVVjamI3NlRGRDJxS2dnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI0LCJhZHZTZWNyZXRLZXkiOiJaN24vbWFQUzJqM0hHK3JpNUo0Zlg5NFQ4aTlkZjdXVDFENUxXVVZIMlNZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJhUVBTZTgzUFRPMkpMVnowTV9KNlBnIiwicGhvbmVJZCI6IjQzYjY2NDQzLTBkNWUtNDAwZC04ZGU5LTlkYmFjNTA1OWI0NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHVXFIcDJzSnVjZHFVaHUzQXdtbmhabm5jdkU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibFBLdk91anRLb2E4NjBqN20zS2pvL3VMdit3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkFBWjlLWVZBIiwibWUiOnsiaWQiOiIyMzM1OTcwODc0MDU6MzdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0o3WHNwRUhFT2ZpMUxVR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkRBL3FtdDJ0YSs2YjhPTmJWY3NqQno0TE5LOVJJYU1HWWkwTVEvZnFYVVU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjhlaHlRN2FFdmdySXdVTUtDbjZURFFEVzhEUnZld3U3aFk4UnRJRUNoRERVdk9tVHFRR29LZno1WURydWlpRjBMZEJNK1ZkWVpGNzVFTTd0dFd2M0F3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJDUDB0eU45TDFLL3FWSXJqei90ZVI4eXhkcm1HZjNtU05HNnBmNVRCcDNZSk92RmZ4NFpsQ3pOM0ZoL0hEcHU3ckw3TGpKaUg2NEhGMzV0dFpCZ1dqQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzMzU5NzA4NzQwNTozN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRd1A2cHJkcld2dW0vRGpXMVhMSXdjK0N6U3ZVU0dqQm1JdERFUDM2bDFGIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzMTUwNzA4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9ENCJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 S͓̽M͓̽A͓̽L͓̽L͓̽ B͓̽O͓̽Y͓̽ O͓̽F͓̽F͓̽I͓̽9𝗬",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "GHOST 𝗠𝗗",
  botname: process.env.BOT_NAME || "ᏀᎻϴՏͲ ᏴϴͲ",
  ownername: process.env.OWNER_NAME || "S͓̽M͓̽A͓̽L͓̽L͓̽ B͓̽O͓̽Y͓̽ O͓̽F͓̽F͓̽I͓̽9",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "pulbic",
  LANG: (process.env.THEME || "GHOST-BOT™").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
