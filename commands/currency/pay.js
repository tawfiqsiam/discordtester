const Discord = require("discord.js");
const fs = require("fs")
let coins = require("../currency/coins.json");


module.exports = {
    name: "pay",
    description: "give a friend a coin or 2",
    run: async (client, message, args) => {
        if(!coins[message.author.id]){
            return message.reply("You don't have any coins!")
          }
        
          let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        
          if(!coins[pUser.id]){
            coins[pUser.id] = {
              coins: 0
            };
          }
        
          let pCoins = coins[pUser.id].coins;
          let sCoins = coins[message.author.id].coins;
        
          if(sCoins < args[0]) return message.reply("Not enough coins there!");
        
          coins[message.author.id] = {
            coins: sCoins - parseInt(args[1])
          };
        
          coins[pUser.id] = {
            coins: pCoins + parseInt(args[1])
          };
        
          message.channel.send(`${message.author} has given ${pUser} ${args[1]} coins.`);
        
          fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
            if(err) cosole.log(err)
 



        });
    }
}
