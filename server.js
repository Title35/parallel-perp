const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('I am ready!');
     client.user.setActivity("The Hanout™", {type: "WATCHING"});
});


client.on('message', message => {
    if (message.content === '=ping') {
    	message.channel.send('Pong')
  	}
});
client.on('message', message=> {
    if (message.isMentioned(client.user)) {
    message.channel.send('I am Awake!');

        
}
});

client.on('message', message => {
    if (message.content === '=help') {
    	message.channel.send("You've got mail! :mailbox_with_mail:")
  	message.author.send({embed: {
  color: 3447003,
  description: "Help coming soon!"

    }
});}}); 

client.on('message', message => {
    if (message.content === '=Help') {
    	message.channel.send("You've got mail! :mailbox_with_mail:")
  	message.author.send({embed: {
  color: 3447003,
  description: "Help coming soon!"

    }
});}}); 
client.on('message', message => {
    if (message.content === '=Ping') {
    	message.channel.send('Pong')
  	}
});
client.on('message', message => {
    if (message.content === '=Author') {
    	message.channel.send(":fire: BitJSDevs :fire:")
  	}
});
client.on('message', message => {
    if (message.content === '=author') {
    	message.channel.send(":fire: BitJSDevs :fire:")
  	}
});
client.on('message', message => {
    if (message.content === '=coinflip') {
function doRandHT() {
var rand = ['HEADS!','TAILS!'];

return rand[Math.floor(Math.random()*rand.length)];
}

 const embed = {
"title": `Here is the winner!`,
"description": doRandHT(),
"color": 7584788,
};
message.channel.send({ embed });

    }
});

client.on('message', message => {
    if (message.content === '=creator') {
    	message.channel.send('**Server Creator:** YourUniversal_Salad')
  	}
});

client.on('message', message => {
    if (message.content === '=Creator') {
    	message.channel.send('Server Creator: YourUniversal_Salad')
  	}
});
    
    client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'welcome');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome ${member} to The Hangout!™ Please look at #rules-info before doing anything in the server. If you need any help, say -new in #bot-commands! Have fun!`);
});

client.on('message', message => {
    if (message.content === '=profile') {
    	message.channel.send('Your Profile:')
        client.fetchUser(message.author).then(myUser => {
    message.channel.send(myUser.avatarURL); // My user's avatar is here!

 })}});
client.on("message", message => {
     var member = message.mentions.members.first();
    if (message.content.startsWith("=kick")) {
        // Easy way to get member object though mentions.
     if(message.author.roles.some(r=>["Staff Members"].includes(r.name)) ) {
      return message.reply("Sorry, you don't have permissions to use this!"); 
     } else { 
        // Kick
        member.kick().then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
        }).catch(() => {
             // Failmessage
            message.channel.send("Access Denied");
        }
    }
});

    if(!message.member.roles.some(r=>["Staff Members"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
