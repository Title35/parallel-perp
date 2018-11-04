const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '`ping') {
    	message.channel.send('Pong')
  	}
});
client.on('message', message=> {
    if (message.isMentioned(client.user)) {
    message.reply('I am Awake!');
}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
