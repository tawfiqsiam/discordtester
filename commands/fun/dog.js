const {
    RichEmbed
  } = require('discord.js');
  const fetch = require("node-fetch");
  
  module.exports = {
    name: "dog",
    description: "shows server info",
    run: async (client, message, args) => {

        const res = await fetch("https://and-here-is-my-code.glitch.me/dog")
        .then(res => res.json())
        .then(json => {
          return json
        });
      
      console.log(res);
      
      const embed = new RichEmbed()
        .setColor("RANDOM")
        .setImage(res.status == "success" ? res.message : "https://i.gyazo.com/4e7a4b6834400626ecf0a45d370e1f20.png");
      
      message.channel.send(embed);
      }

}



 
