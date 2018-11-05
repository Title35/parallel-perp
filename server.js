const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('I am ready!');
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
client.on('message', message => {  
if(message.content === "=kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.some(r=>["Staff Members"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    
    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
