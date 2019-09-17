
const {
    RichEmbed
  } = require('discord.js');
  const fetch = require("node-fetch");
  
  module.exports = {
    name: "koala",
    description: "shows server info",
    run: async (client, message, args) => {

        const res = await fetch("https://some-random-api.ml/img/snakes")
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
