const {
    RichEmbed
  } = require('discord.js');
  const fetch = require("node-fetch");
  
  module.exports = {
    name: "cflip",
    description: "shows server info",
    run: async (client, message, args) => {
        let replies = ["heads", "tails"];
        let result = Math.floor((Math.random() * replies.length));
        const embed = new RichEmbed()
        .setDescription(` ${replies[result]}`);

        message.channel.send(embed);

    




      }

}



 