const Discord = require("discord.js")
  
  module.exports = {
    name: "help",
    description: "shows you all the commands",
    run: async (client, message, args) => {
        let helpembed = new Discord.RichEmbed()
        .setDescription("Help menu")
        .addField("Member Commands", "help, serverinfo, botinfo, setupinfo, report.");

        message.author.send(helpembed);
        if(message.member.hasPermission("MANAGE_MESSAGES")){

        
    

        let modeembed = new Discord.RichEmbed()
        .setDescription("Mod help info")
        .addField("purge, ban, kick, tempmute, addrole.")

        try{
            await message.author.send(modeembed);
            await msg.react(`👍`);

      }catch(e){
          message.reply("your dms are locked. i cant send you the mod commands.")

      }
}
}
  }