const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('I am ready!');
});
let cont = message.content.slice(prefix.length).split(“ “)
let args = cont.slice(1);
//client.user.setActivity("The Hangout™", {type: "WATCHING"}); 

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
client.on('message', message => {
    if (message.content === '`coinflip') {
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
    if (message.content === '`creator') {
    	message.channel.send('Server Creator: YourUniversal_Salad')
  	}
});

client.on('message', message => {
    if (message.content === '`Creator') {
    	message.channel.send('Server Creator: YourUniversal_Salad')
  	}
});
let messagecount = parseInt(numberofmessages);


client.on('message', message => {
    if (message.content === '`purge') {
    message.channel.fetchMessages({ limit: messagecount })
  .then(messages => message.channel.bulkDelete(messages));
    message.channel.send('Succesfully purged!')	
    }
});
client.on('message', message => {
    if (msg.startsWith('`purge')) {         
async function purge() {
            message.delete(); 
            
            if (!message.member.roles.find("name", “Staff Member”)) { 
                message.channel.send('You need the \`Staff Member\` role to use this command.'); 
            }

            
            if (isNaN(args[0])) {
               
                message.channel.send('Please use a number as your arguments. \n Usage: ' + prefix + 'purge <amount>');               
  return;
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]}); 
            console.log(fetched.size + ' messages found, deleting...'); 
           
            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`)); // If it finds an error, it posts it into the channel.

        }

       
        purge(); 

    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
