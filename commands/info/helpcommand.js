const Discord = require("discord.js");

module.exports = {
    name: "help",
    description: "shows server info",
    run: async (client, message, args) => {

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("random images\n"+
  "• whale | sends image of a whale \n"+
  "• bird | sends a random image of a bird\n"+
  "• giraffe | sends a random image of a giraffe\n"+
  "• elephant | sends a random image of a elephant\n"+
  "• turtle | sends a random image of a turtle\n"+
   "• horse | sends image of a horse \n"+                 
  "• killerwhale | sends a random image of a killerwhale\n"+
  "• koala | sends a random image of a koala \n"+
  "• dog | sends a random image of a dog \n"+
  "• fox | sends a random image of a fox \n"+
  "• koala | sends a random image of a koala \n"+
  "• panda | sends a random image of a panda \n"+
   "• dolphin | sends a random image of a dolphin \n"+
   "• bear | sends a random image of a bear \n"+     
  "• shark | sends image of a shark \n"+
  "• fish | sends image of a spider \n"+ 
  "• lizard | sends image of a lizard \n"+                  
   "• spider | sends image of a shark \n"+                 
  "• car | sends image of a car \n"+
  "• rocket | sends image of a rocket \n"+
  "• hug | sends a random gif of a people hugging\n "+
  "• meme | sends a random meme \n"+
  "• trump | sends image of trump \n"+
  " Other commands \n"+
  "• 8ball | wana know an awnser ask away \n"+
  "• serverinfo | Post info about the server \n"+
  "• hug | sends a random gif of a people hugging \n"+
  "• wink | sends a random gif of someone winking \n"+
  "• pat | sends a random gif of someone pating \n"+
  "• coinflip | heads or tails what will it be \n"+
  "admin commands\n"+
  "• kick | kick a user \n"+
  "• report | report a user to the owner and get them gone\n"+
  "• ban | ban a user \n"+
  "• purge | purge messages \n \n \n"+
    "my website  https://and-here-is-my-code.glitch.me\n"
  );


    message.channel.send(serverembed);


}

}
