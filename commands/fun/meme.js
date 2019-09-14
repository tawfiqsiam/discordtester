const {
    RichEmbed
  } = require('discord.js');
  const fetch = require("node-fetch");
  
  module.exports = {
    name: "meme",
    description: "sends a random meme",
    run: async (client, message, args) => {

        const res = await fetch("https://some-random-api.ml/meme")
        .then(res => res.json())
        .then(json => {
          return json
        });

        
       
      
      console.log(res);
  
      const embed = new RichEmbed()
        .setColor("RANDOM")
        .setTitle(res.caption)
        .setImage(res.image);
        
      
      message.channel.send(embed);
      }

}



 