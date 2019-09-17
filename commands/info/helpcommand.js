const Discord = require("discord.js");

module.exports = {
    name: "help",
    description: "shows server info",
    run: async (client, message, args) => {
        
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("random images"+
    "random images  "+
    "• whale | sends image of a whale \n"+
    "• bird | sends a random image of a bird\n"+
    "• cat | sends a random image of a cat\n"+
    "• dog | sends a random image of a dog \n"+
    "• fox | sends a random image of a fox \n"+
    "• koala | sends a random image of a koala \n"+
    "• panda | sends a random image of a panda \n"+
    "• hug | sends a random gif of a people hugging\n "+
    "• meme | sends a random meme \n"+
    " Other commands \n"+
    "• 8ball | wana know an awnser ask away \n"+
    "• serverinfo | Post info about the server \n"+
    "• hug | sends a random gif of a people hugging \n"+
    "• wink | sends a random gif of someone winking \n"+
    "• pat | sends a random gif of someone pating \n"+
    "admin commands\n"+
    "• kick | kick a user \n"+
    "• ban | ban a user \n"+
    "• purge | purge messages"
  );


    message.channel.send(serverembed);
   

}

}
