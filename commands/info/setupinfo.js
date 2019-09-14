const Discord = require("discord.js");

module.exports = {
    name: "serversetupinfo",
    description: "serversetupinfo",
    run: async (client, message, args) => {
    let botembed = new Discord.RichEmbed()
    .setDescription("setup bot Information")
    .addField("for report to work make a channle called reports")
    .addField("for kick to work make a channle called incidents")
    .setColor("#15f153")



    message.channel.send(botembed);
}

}
