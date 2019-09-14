const {
    RichEmbed
  } = require('discord.js');
  const fetch = require("node-fetch");
  
  module.exports = {
    name: "person",
    description: "shows server info",
    run: async (client, message, args) => {

        const res = await fetch("https://randomuser.me/api/?&nat=US")
        .then(res => res.json())
        .then(json => {
          return json
        });

        
       
      
      console.log(res);
  
      const embed = new RichEmbed()
        .setColor("RANDOM")

        .setImage(res.picture.join(", "));
        
      
      message.channel.send(embed);
      }

}



 