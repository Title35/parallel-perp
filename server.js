const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.username}!`);
   bot.user.setActivity('Made By BitJSDevs');
});
bot.on("message", (message) => { 
 // if (!message.content.startsWith(config.prefix) || message.author.bot) return;
  if (message.content.startsWith(config.prefix + "author")) {
    message.reply('BitJSDevs');
    
    bot.login(process.env.BOT_TOKEN);
