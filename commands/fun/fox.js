const {
    RichEmbed
  } = require('discord.js');
  const fetch = require("node-fetch");
  
  module.exports = {
    name: "fox",
    description: "shows server info",
    run: async (client, message, args) => {

        const res = await fetch("https://some-random-api.ml/animal/fox")
        .then(res => res.json())
        .then(json => {
          return json
        });

        
       
      
      console.log(res);
  
      const embed = new RichEmbed()
        .setColor("RANDOM")

        .setImage(res.image);
        
      
      message.channel.send(embed);
      }

}



 