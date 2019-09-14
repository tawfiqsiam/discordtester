const Discord = require("discord.js");
let coins = require("../currency/coins.json");


module.exports = {
    name: "coins",
    description: "shows how many coins you have",
    run: async (client, message, args) => {
 


  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let uCoins = coins[message.author.id].coins;


  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#00FF00")
  .setDescription(`Coin count: ${uCoins}💸`)


  message.channel.send(coinEmbed);

}


}
