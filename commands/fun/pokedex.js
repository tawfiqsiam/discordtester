const {
    RichEmbed
  } = require('discord.js');
  const fetch = require("node-fetch");
  
  module.exports = {
    name: "pokedex",
    description: "shows server info",
    run: async (client, message, args) => {
        let rreason = args.join(" ");

        const res = await fetch("https://some-random-api.ml/pokedex?pokemon=" + rreason)
        .then(res => res.json())
        .then(json => {
          return json
        });
      

        let s = await fetch("https://pokeapi.co/api/v2/pokemon/" + rreason)
        let json = await s.json()
        
        console.log(json)

      console.log(res)
      
      const embed = new RichEmbed()
        .setColor("RANDOM")
        .setDescription(`Type: ${res.type}\n`+
        `:pencil:Abilities: ${res.abilities.join(", ")}\n`+
          `:heart:Health: ${res.stats.hp}\n`+
          `:crossed_swords:Attack: ${res.stats.attack}\n`+
          `:shield:Defense: ${res.stats.defense}\n\n\n\n`+
          `description: ${res.description}`)
        .setTitle(res.name)
        .setThumbnail(json.sprites.back_default);
      
      message.channel.send(embed);
      }

}



 