const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('I am ready!');
});
//client.user.setActivity("The Hangout™", {type: "WATCHING"}); 
client.user.setActivity("The Hangout™", {
  type: "WATCHING",
});
client.on('message', message => {
    if (message.content === '`ping') {
    	message.channel.send('Pong')
  	}
});
client.on('message', message=> {
    if (message.isMentioned(client.user)) {
    message.channel.send('I am Awake!');

        
}
});

client.on('message', message => {
    if (message.content === '`help') {
    	message.channel.send("You've got mail! :mailbox_with_mail:")
  	message.author.send({embed: {
  color: 3447003,
  description: "Help coming soon!"

    }
});}}); 

client.on('message', message => {
    if (message.content === '`Help') {
    	message.channel.send("You've got mail! :mailbox_with_mail:")
  	message.author.send({embed: {
  color: 3447003,
  description: "Help coming soon!"

    }
});}}); 
client.on('message', message => {
    if (message.content === '`Ping') {
    	message.channel.send('Pong')
  	}
});
client.on('message', message => {
    if (message.content === '`Author') {
    	message.channel.send(":fire: BitJSDevs :fire:")
  	}
});
client.on('message', message => {
    if (message.content === '`author') {
    	message.channel.send(":fire: BitJSDevs :fire:")
  	}
});
  	

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
