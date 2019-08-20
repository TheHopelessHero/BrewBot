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
    channel.send(`Welcome to Café Brü!

    Dearest, ${member} feel free to make your way over to the <#608487490671869976> area for Animal Crossing: New Leaf Mayors or grab your <#608487294097162241> for our Animal Crossing: Pocket Camp Campers.
    If you get lost, the <#608502431034245175> center has a map and information navigating the channels. 
    If you need any advice or help please get in touch with one of our <#608512994585870337> members.
    
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
