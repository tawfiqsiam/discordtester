const { Client, Collection} = require("discord.js");
const Discord = require("discord.js")
const { config } = require("dotenv");
const fetch = require("node-fetch");
const fs = require("fs");

const client = new Client({
    disableEveryone: true
})

client.commands = new Collection();
client.aliases = new Collection();



config({
    path: __dirname + "/.env"
});

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
  console.log("Servers:")
  client.guilds.forEach((guild) => {
      console.log(" - " + guild.name)
  })
 
    console.log(`Hi, ${client.user.username} is now online!`);
    let statuses = [
      `server count ${client.guilds.size}!`,
      `!help for commands`,
        `owner is AussieAdapt#5422`,
      `bot help server https://discord.gg/sBVDFT4`,
      `Over ${client.users.size} users!`
  
    ]
    setInterval(function() {
      let staus = statuses[Math.floor(Math.random() * statuses.length)];
      client.user.setPresence({
        status: "online",
        game: {
            name: staus,
            type: "Listening"
        }
    }); 
    }, 20000);

    
})











 





client.on(`guildMemberAdd`, member => {
  const channel = member.guild.channels.find(x => x.name === "welcome");
  let attachment = new Discord.Attachment(client.welcomebg(member), 'welcome.png')
  if(!channel) return;
      channel.send(attachment)
});

client.welcomebg = function (member, type) {
  let link = `https://welcome-imgs.some-random-api.ml/img/2/stars2?type=join&textcolor=indigo&username=${member.user.username}&discriminator=${member.user.discriminator}&guildName=${member.guild.name}&memberCount=${member.guild.memberCount}&avatar=${member.user.avatarURL}`
  if (type === 'join') link = link.replace('join', 'leave') 
return link
}



client.on(`guildMemberRemove`, member => {
  
  const channel = member.guild.channels.find(x => x.name === "welcome");
  let attachment = new Discord.Attachment(client.s(member), 'welcome.png')
  if(!channel) return;
      channel.send(attachment)
});

client.s = function (member, type) {
  let link = `https://welcome-imgs.some-random-api.ml/img/2/stars2?type=leave&textcolor=indigo&username=${member.user.username}&discriminator=${member.user.discriminator}&guildName=${member.guild.name}&memberCount=${member.guild.memberCount}&avatar=${member.user.avatarURL}`

return link
}




client.on("message", async message => {
    const prefix = "!";

    

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) 
        command.run(client, message, args);



});

client.login(process.env.TOKEN);
