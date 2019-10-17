const {
    RichEmbed
  } = require('discord.js');
  const fetch = require("node-fetch");
  
  module.exports = {
    name: "trigger",
    description: "shows server info",
    run: async (client, message, args) => {

        const res = await fetch("https://some-random-api.ml/img/koala")
        .then(res => res.json())
        .then(json => {
          return json
        });
      

      
      
      const embed = new RichEmbed()
        .setColor("RANDOM")
 
        .attachFile(res.link);
      
      message.channel.send(embed);
      }

}
