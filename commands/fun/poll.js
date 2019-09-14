const Discord = require("discord.js");

  
  module.exports = {
    name: "poll",
    description: "shows server info",
    run: async (client, message, args) => {

        let reward = args.slice(0).join(" ");

        if (!reward) return message.reply(`Provide a question`);

        let embed = new Discord.RichEmbed()
        .setDescription(`question ${reward}`)

        message.channel.send(embed).then(msg =>{
            msg.react(`✅`)
            msg.react(`❌`)
        });

      }

}



 