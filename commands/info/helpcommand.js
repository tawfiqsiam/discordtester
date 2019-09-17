const Discord = require("discord.js");

module.exports = {
    name: "help",
    description: "shows server info",
    run: async (client, message, args) => {
        
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("random images"+
    "random images  "+
    "• whale | sends image of a whale"+
    "• bird | sends a random image of a bird"+
    "• cat | sends a random image of a cat"+
    "• dog | sends a random image of a dog "+
    "• fox | sends a random image of a fox"+
    "• koala | sends a random image of a koala"+
    "• panda | sends a random image of a panda"+
    "• hug | sends a random gif of a people hugging "+
    "• meme | sends a random meme"+
    " Other commands "+
    "• 8ball | wana know an awnser ask away "+
    "• serverinfo | Post info about the server"+
    "• hug | sends a random gif of a people hugging "+
    "• wink | sends a random gif of someone winking "+
    "• pat | sends a random gif of someone pating "+
    "admin commands"+
    "• kick | kick a user "+
    "• ban | ban a user "+
    "• purge | purge messages"
  );


    message.channel.send(serverembed);
   

}

}
