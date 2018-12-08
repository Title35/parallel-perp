const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('I am ready to go to work!');
    client.user.setPresence({ game: { name: "on The LifeLineRP™ Server!" }, status: 'dnd' }).catch(console.error)
});


client.on('message', message => {
    if (message.content === '-ping') {
    	message.channel.send("Pong :ping_pong:")
  	}
    
});
/*client.on('message', message => {
    if (message.content === '-remove') {
    	message.channel.send("Bye Bye!")
        client.guilds.find(g => g.name === "San Andreas Independence RP™").leave()
  	}
  */  
});
client.on('message', message=> {
    if (message.isMentioned(client.user)) {
    message.channel.send('I am Awake!');

        
}
});

client.on('message', async message => {
    if (message.content === '-help') {
    	message.channel.send("You've got mail! :mailbox_with_mail:")
  const embed = {
  "title": "Bot Help",
  "description": "The help section for The Official LifeLineRP™ Bot.",
  "color": 8993666,
  "timestamp": "2018-11-08T01:16:53.026Z",
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/501094270724341760/513415109490638879/20181111_160544_0001.png",
    "text": "Server Help"
  },
  "author": {
    "name": "LifeLineRP™ Bot",
    "icon_url": "https://cdn.discordapp.com/attachments/501094270724341760/513415109490638879/20181111_160544_0001.png"
  },
  "fields": [
    {
      "name": "Fun Commands",
      "value": "Profile - '-profile' Shows Your profile picture! \nCoinFlip - '-coinflip' Flips a coin! "
    },
    {
      "name": "Info Commands",
      "value": "Creator - '-creator' Tells you server creator! \nAuthor - '-author' Tells you bot author! \nLeaders - '-leaders' Sends you server leader list in DM's! (Temp Down!) \nHelp - '-help' Sends you Hangout™ Bot help in DM's! "
    },
    {
      "name": "Other",
      "value": "Ping - '-ping' Bot responds with pong! \n@Mention - Mention the bot to see if it's online!"
    },
    {
      "name": "Notes",
      "value": "Please keep an :eye: on the bot help to see new info! \nThe Bot will be frequently updated so stay alert for updates!"
    }
  ]
};
message.author.send({ embed });	
    }
});

client.on('message', async message => {
    if (message.content === '-Help') {
    	message.channel.send("You've got mail! :mailbox_with_mail:")
  	const embed = {
  "title": "Bot Help",
  "description": "The help section for The Official LifeLineRP™ Bot.",
  "color": 8993666,
  "timestamp": "2018-11-08T01:16:53.026Z",
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/501094270724341760/513415109490638879/20181111_160544_0001.png",
    "text": "Server Help"
  },
  "author": {
    "name": "LifeLineRP™ Bot",
    "icon_url": "https://cdn.discordapp.com/attachments/501094270724341760/513415109490638879/20181111_160544_0001.png"
  },
  "fields": [
    {
      "name": "Fun Commands",
      "value": "Profile - '-profile' Shows Your profile picture! \nCoinFlip - '-coinflip' Flips a coin! "
    },
    {
      "name": "Info Commands",
      "value": "Creator - '-creator' Tells you server creator! \nAuthor - '-author' Tells you bot author! \nLeaders - '-leaders' Sends you server leader list in DM's! (Temp Down!) \nHelp - '=help' Sends you LifeLineRP™ Bot help in DM's! "
    },
    
    {
      "name": "Other",
      "value": "Ping - '-ping' Bot responds with pong! \n@Mention - Mention the bot to see if it's online!"
    },
    {
      "name": "Notes",
      "value": "Please keep an :eye: on the bot help to see new info! \nThe Bot will be frequently updated so stay alert for updates!"
    }
  ]
};
message.author.send({ embed });

    }
});
client.on('message', message => {
    if (message.content === '-Ping') {
    	message.channel.send("Pong :ping_pong:")
  	}
});
client.on('message', message => {
    if (message.content === '-Author') {
    	message.channel.send(":fire: BitJSDevs :fire:")
  	}
});
client.on('message', message => {
    if (message.content === '-author') {
    	message.channel.send(":fire: BitJSDevs :fire:")
  	}
});
client.on('message', message => {
    if (message.content === '-coinflip') {
function doRandHT() {
var rand = ['HEADS!','TAILS!'];

return rand[Math.floor(Math.random()*rand.length)];
}

 const embed = {
"title": `Here is the winner!`,
"description": doRandHT(),
"color": 8993652,
};
message.channel.send({ embed });

    }
});

client.on('message', message => {
    if (message.content === '-creator') {
    	message.channel.send('**Server Creator:**  iiShouthern_Law#9799')
  	}
});

client.on('message', message => {
    if (message.content === '-Creator') {
    	message.channel.send('Server Creator: iiShouthern_Law#9799')
  	}
});
    
    client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'welcome');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send({embed: {
  color: 8993652,
  description: `Welcome ${member} to LifeLine Roleplay Community! If you are looking to be a part of the department, join their server or contact a department employer for a job! `,
  "image": {
                "url": "https://cdn.discordapp.com/attachments/501094270724341760/513415109490638879/20181111_160544_0001.png",
                }      
}});
    });

client.on('message', message => {
    if (message.content === '-profile') {
    	message.channel.send('Your Profile:')
        client.fetchUser(message.author).then(myUser => {
    message.channel.send(myUser.avatarURL); // My user's avatar is here!

 })}});

/*client.on('message', message => {
    if (message.content === '=') {
    	message.channel.send('Server Creator: iiShouthern_Law#9799')
  	} 
}); */
/*client.on('message', message => {
     var memberg = message.mentions.members.first();
    if (message.content.startsWith("-kick")) {
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
  let role = message.guild.roles.find(r => r.name === "LifeLineRP Members"); 
  if(message.content.startsWith('=verify')) { 
    if(message.member.roles.has("Unverified")) { 
      message.member.addRole(role) 
    } 
  } 
});
*/    
  /*
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
  
*/
/*
client.on('message', message => {
    if (message.content === '-leaders') {
      Message.author.send("👑 **__LifeLine RP Leaders__** 👑 \n **Founder:** iiShouthern_Law \n **Assistants:** \n `-` Anthony V. \n `-` YourUniversal_Salad \n `-` KillCam \n `-` Blue_Lawzz \n `-` Deputy Rouge")
        message.channel.send("Check your inbox! 📧")
          	}
}); 
*/
client.on('message', message => {
    if (message.content === '?help') {
    	message.channel.send("**Don't you dare use that nasty bot! How could you betray me? Also Dyno is a little __]left__ sided.**")
  	}
    
});
client.on('message', message => {
    if (message.content === '-secret') {
    	message.channel.send("**Nope, you tried though! Heres a __Hint__ though: Its not that hard to find with a __Hint__!**")
  	}
    
});
client.on('message', message => {
    if (message.content === '-hint') {
    	message.channel.send("**Good try! Maybe ask Dyno for some __Help__!**")
  	}
    
});
client.on('message', message => {
    if (message.content === ']left') {
    	message.channel.send("**You found the secret command! Congrats!**")
  	}
    
});

    client.on('message', message => {
        if (message.content === '-bye') {
      message.channel.send("@everyone, it has been fun watching over the server. I am sad to see the server shoutdown. My bot development team is shutting me down sadly. I wish everyone luck in the future. Sincerely, SAIRP Bot. ")
  	}
    });
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
