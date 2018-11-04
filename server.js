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
  color: 3447003,
  description: "A very simple Embed!"

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
    		message.author.send({{"embed":{
          "image":{"url":"https://cdn.discordapp.com/attachments/496703299672735756/508658340625383444/Hangout2.jpg"},
        "footer":{"text":"The Hangout™"},
        "color":3553598,
        "fields":[{"name":"Supreme Leader","value":"YourUniversal_Salad","inline":false},{"name":"Hangout Overseer","value":"UnderPerfection","inline":false},{"name":"President","value":"YourGerman_Salad","inline":false},{"name":"Vice President","value":"Bitmona","inline":false
           }]}}
 
    }
});
  	

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
