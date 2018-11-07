const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('I am ready to go to work!');
    client.user.setPresence({ game: { name: "on The Hangout™ Server!" }, status: 'dnd' })
    .catch(console.error);
   const channel = client.channels.find(ch => ch.name === 'bot-spam');
    //channel.send("I am ready to go to work! :spongebob:")
    channel.send({embed: {
  color: 8993652,
  description: "I'm ready, I'm ready! To go to work!",
  "image": {
                "url": "https://cdn.discordapp.com/attachments/420986851005038592/509377696271171586/sticker-6-112.png",
                }      
}});
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
  channel.send({embed: {
  color: 10765745,
  description: `🎉Welcome ${member} to The Hangout!™ Please look at #rules-info before doing anything in the server. If you need any help, say -new in #bot-commands! Have fun!🎉`,
  "image": {
                "url": "https://cdn.discordapp.com/attachments/499263085270401048/509543124683456512/Hangout2.jpg",
                }      
}});
    });

client.on('message', message => {
    if (message.content === '=profile') {
    	message.channel.send('Your Profile:')
        client.fetchUser(message.author).then(myUser => {
    message.channel.send(myUser.avatarURL); // My user's avatar is here!

 })}});

client.on('message', message => {
    if (message.content === '=') {
    	message.channel.send('Server Creator: YourUniversal_Salad')
  	}
});
/*client.on('message', message => {
     var memberg = message.mentions.members.first();
    if (message.content.startsWith("=kick")) {
        // Easy way to get member object through mentions.
     if(!message.member.roles.has.some(r=>["Staff Members"].includes(r.name)) ) {
      return message.reply("Sorry, you don't have permissions to use this!"); 
     } 
     else { 
        // Kick
        memberg.kick().then((member) => {
            // Successmessage
            message.channel.send(":wave: " + memberg.displayName + " has been successfully kicked :point_right: ");
        }).catch(() => {
             // Failmessage
            message.channel.send("Access Denied");
        })}    
    }
});

    client.on('message', message => { 
  let role = message.guild.roles.find(r => r.name === "Hangout Members"); 
  if(message.content.startsWith('=verify')) { 
    if(message.member.roles.has("Unverified")) { 
      message.member.addRole(role) 
    } 
  } 
});
*/    
    client.on('message', message => {
    if (message.content === '=meme1') {
    	 message.channel.send("**Here is meme 1:**", {files: ["https://cdn.discordapp.com/attachments/289908213413838859/509547440399974421/4912651.jpg"]});
  	}
});
  client.on('message', message => {
    if (message.content === '=meme2') {
    	 message.channel.send("**Here is meme 2:**", {files: ["https://cdn.discordapp.com/attachments/289908213413838859/509547445949300737/4912655.jpg"]});
  	}
});
  client.on('message', message => {
    if (message.content === '=meme3') {
    	 message.channel.send("**Here is meme 3:**", {files: ["https://cdn.discordapp.com/attachments/289908213413838859/509547443621330954/4912653.jpg"]});
  	}
});
  
client.on('message', message => {
    if (message.content === '=leaders') {
        

const embed = {
  "title": "**Server Leaders**",
  "description": "The Leaders Of The Hangout™",
  "color": 5134148,
  "timestamp": "2018-11-07T23:32:42.204Z",
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/499263085270401048/509457397979283490/Hangout2.jpg",
    "text": "Server Leaders"
  },
  "author": {
    "name": "Hangout™ Bot",
    "icon_url": "https://cdn.discordapp.com/attachments/499263085270401048/509457397979283490/Hangout2.jpg"
  },
  "fields": [
    {
      "name": "🌟Supreme Leader🌟",
      "value": "YourUniversal_Salas"
    },
    {
      "name": "⭐Hangout Overseer⭐",
      "value": "UnderPerfection"
    },
    {
      "name": "💥President💥",
      "value": "YourGerman_Salad"
    },
    {
      "name": "⚡Vice President⚡",
      "value": "Bitmona"
    }
  ]
};
message.author.send({ embed });
        message.channel.send("Check your inbox!📧")
          	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
