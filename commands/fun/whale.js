const {
    RichEmbed
  } = require('discord.js');
  const fetch = require("node-fetch");
  
  module.exports = {
    name: "whale",
    description: "shows server info",
    run: async (client, message, args) => {

        const res = await fetch("https://some-random-api.ml/img/whale")
        .then(res => res.json())
        .then(json => {
          return json
        });
      

      
      
      const embed = new RichEmbed()
        .setColor("RANDOM")
 
        .setImage(res.link);
      
      message.channel.send(embed);
      }

}



 