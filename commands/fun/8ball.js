const Discord = require("discord.js");
  const fetch = require("node-fetch");
  
  module.exports = {
    name: "8ball",
    description: "shows server info",
    run: async (client, message, args) => {
        if (!args[2]) return message.reply("Please ask a full question")
        let replies = ["Yes", "No", "I Dont Know", "Ask again later", "god knows", "let me think about that"];
     
        let result = Math.floor((Math.random() * replies.length));

        let question = args.slice(0).join(" ");
        let embed = new Discord.RichEmbed()
    

        .setDescription(`you asked ${question} \n My answer: ${replies[result]}`)

        message.channel.send(embed);






      }

}



 