const Discord = require("discord.js");

module.exports = {
    name: "purge",
    description: "deletes messages",
    run: async (client, message, args) => {

        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No.");
        if(!args[0]) return message.channel.send("no");
        message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(2000));
      });
}

}
