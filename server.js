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
    message.channel.send('I am Awake!');
        client.login(process.env.BOT_TOKEN);

        
}
});

client.on('message', message => {
    if (message.content === '`help') {
    	message.channel.send("You've got mail! :mailbox_with_mail:")
  	message.author.send({embed: {
  _embed #channel title=Leaders | description=The leaders of The Hangout™ | thumbnail=https://cdn.discordapp.com/attachments/496703299672735756/508652160939065344/Hangout2.jpg | field=name=Supreme Leader - value=YourUniversal_Salad | field=name=Hangout Overseer value=UnderPerfection inline=no | field=name=President value=YourGerman_Salad inline=no | field=name=Vice President value=Bitmona inline=no | color=#7e77ff
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
client.on('message', message => {
    if (message.content === '`Leaders') {
    	
  	}

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
