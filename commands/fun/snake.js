
const {
    RichEmbed
  } = require('discord.js');
  const fetch = require("node-fetch");
  
  module.exports = {
    name: "snake",
    description: "shows server info",
    run: async (client, message, args) => {

        const res = await fetch("https://and-here-is-my-code.glitch.me/img/snakes")
        .then(res => res.json())
        .then(json => {
          return json
        });
      

      
      
      const embed = new RichEmbed()
        .setColor("RANDOM")
 
        .setImage(res.Link);
      
      message.channel.send(embed);
      }

}
