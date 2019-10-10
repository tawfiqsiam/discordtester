const {
    RichEmbed
  } = require('discord.js');
  const fetch = require("node-fetch");
  
  module.exports = {
    name: "cat",
    description: "shows server info",
    run: async (client, message, args) => {

        const res = await fetch("https://and-here-is-my-code.glitch.me/img/cat")
        .then(res => res.json())
        .then(json => {
          return json
        });
      
      console.log(res);
      
      const embed = new RichEmbed()
        .setColor("RANDOM")
        .setImage(res.link);
      
      message.channel.send(embed);
      }

}



 
