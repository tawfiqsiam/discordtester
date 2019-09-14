const Discord = require("discord.js")
  
  module.exports = {
    name: "invite",
    description: "shows you all the commands",
    run: async (client, message, args) => {
    
        let invite = await message.channel.createInvite();
        
          message.reply(`Here's your invite: ${invite}`);
    
    }
  }