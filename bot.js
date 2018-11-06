const discord = require('discord.js');
const Client = new discord.Client();

Client.on("ready", () => {
    console.log("Order Up!");
  });

// Create an event listener for new guild members
Client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find(ch => ch.name === '☕-welcome');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Welcome to the The Roost Café, 
    Dearest, ${member} feel free to make your way over to the <#507890532949688321> or <#507890270801756163> channels to register your fc and fill out our membership details.
    After that, head on over to the <#507893227635081226> library to brush up on our policies and get information on navigating the channels. 
    If you're feeling eager, you can check out the 
    <#507894142278303771> hall to see the on-going events.
    
    I'll go brew a fresh pot of coffee. Let me know when you'd like another...
    Coo. ☕~`);
  });

Client.on('message', (message) => {

    if(message.content == 'Another please!') {
        message.reply('Coo! ☕~');
    } else
    if(message.content == 'another please!') {
        message.reply('Coo! ☕~');
    }
    if(message.content == 'another please') {
        message.reply('Coo! ☕~');
    } else
    if(message.content == 'Hey, BrewBot?') {
        message.reply('Coo?');
    }
    if(message.content == 'Can i have another?') {
        message.reply('Coo! ☕~');
    } else
    if(message.content == 'can i have another?') {
        message.reply('Coo! ☕~');
    }
    if(message.content == 'Coffee please!') {
        message.reply('Coo! ☕~');
    } else
    if(message.content == 'coffee please!') {
        message.reply('Coo! ☕~');
    }
    if(message.content == 'Can I have one more?') {
        message.reply('Coo! ☕~');
    } else
    if(message.content == 'can i have one more?') {
        message.reply('Coo! ☕~');
    }
    
});
Client.login(process.env.BOT_TOKEN);
