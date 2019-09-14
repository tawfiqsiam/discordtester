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

let coins = require("./commands/currency/coins.json");
let xp = require("./commands/levels/xp.json");

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









client.on('message', async message => {

  let blacklisted = [`shit`,`nal`,`ass`,`assbang`,`assbanged`,`assbangs`,`asses`,`assfuck`,`assfucker`,`assh0le`,`asshat`,`assho1e`,`asshole`,`assholes`,`assmaster`,`assmunch`,`asswipe`,`asswipes`,`b1tch`,`bastard`,`bastards`,`beardedclam`,`beastiality`,`beatch`,`beeyotch`,`beotch`,`biatch`,`bigtits`,`bitch`,`bitched`,`bitches`,`bitchy`,`blowjob`,`blowjobs`,`bollock`,`bollocks`,`bollok`,`boner`,`boners`,`boob`,`boobies`,`boobs`,`booby`,`bukkake`,`bullshit`,`bullshits`,`bullshitted`,`bullturds`,`bung`,`busty`,`buttfuck`,`buttfucker`,`buttplug`,`c.0.c.k`,`c.o.c.k.`,`c.u.n.t,c0ck`,`c-0-c-k`,`caca,cahone`,`cameltoe`,`carpetmuncher`,`cawk`,`cervix`,`chinc`,`chincs`,`chink`,`chode`,`cl1t`,`climax`,`clit`,`clitoris`,`clitorus`,`clits`,`clitty`,`cocain`,`cocaine`,`cock`,`c-o-c-k`,`cockblock`,`cockholster`,`cockknocker`,`cocks`,`cocksmoker`,`cocksucker`,`corksucker`,`crackwhore`,`cum`,`cummin`,`cumming`,`cumshot`,`cumshots`,`cumslut`,`cumstain`,`cunilingus`,`cunnilingus`,`cunny`,`cunt`,`c-u-n-t`,`cuntface`,`cunthunter`,`cuntlick`,`cuntlicker`,`cunts`,`d1ck`,`d1ld0`,`d1ldo`,`dick`,`dickbag`,`dickdipper`,`dickface`,`dickflipper`,`dickhead`,`dickheads`,`dickish`,`dick-ish`,`dickripper`,`dicksipper`,`dickweed`,`dickwhipper`,`dickzipper`,`dike`,`dildo`,`dildos`,`dipship`,`doggie-style`,`doggy-style`,`dumass`,`dumbass`,`dumbasses`,`f.u.c.k`,`fuck`,`f-u-c-k`,`fuckass`,`fucked`,`fucker`,`fuckface`,`fuckin`,`fucking`,`fucknugget`,`fucknut`,`fuckoff`,`fucks`,`fucktard`,`fuck-tard`,`fuckup`,`fuckwad`,`fuckwit`,`fudgepacker`,`fuk`,`fvck`,`fxck`,`gtfo`,`handjob`,`j3rk0ff`,`jackass`,`jackhole`,`jackoff`,`jerk0ff`,`jerkoff`,`jism`,`jiz`,`jizm`,`jizz`,`jizzed`,`motherfucka`,`motherfucker`,`motherfucking`,`mtherfucker`,`mthrfucker`,`mthrfucking`,`muthafuckaz`,`muthafucker`,`mutherfucker`,`mutherfucking`,`muthrfucking`,`nazi`,`nazism`,`negro`,`nigga`,`niggah`,`niggas`,`niggaz`,`nigger`,`niggers`,`niggle`,`niglet`,`pissed`,`pissoff`,`piss-off`,`porn`,`porno`,`pussies`,`pussy`,`pussypounder`,`s.h.i.t.`,`sh1t`,`s-h-1-t`,`shamedame`,`s-h-i-t`,`shite`,`shiteater`,`shitface`,`shithead`,`shithole`,`shithouse`,`shits`,`shitt`,`shitted`,`shitter`,`shitty`,`shiz`,`slut`,`slutdumper`,`sluts`,`dicks`] 


  let foundInText = false;
  for (var i in blacklisted) { 
    if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
  }
  
    if (foundInText) {
      message.delete();
      message.channel.sendMessage('Hey! No bad words!').then(msg => msg.delete(5000));
  }
});


















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

        if(!coins[message.author.id]){
          coins[message.author.id] = {
            coins: 0
          };
        }    



        let coinAmt = Math.floor(Math.random() * 10) + 1;
        let baseAmt = Math.floor(Math.random() * 10) + 1;
        console.log(`${coinAmt} ; ${baseAmt}`);
      
        if(coinAmt === baseAmt){
          coins[message.author.id] = {
            coins: coins[message.author.id].coins + coinAmt
          };
        fs.writeFile("./commands/currency/coins.json", JSON.stringify(coins), (err) => {
          if (err) console.log(err)
        });
        let coinEmbed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor("#0000FF")
        .addField("💸", `${coinAmt} coins added!`);
      
        message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});
        }

        let xpAdd = Math.floor(Math.random() * 7) + 8;
  console.log(xpAdd);

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }


  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 300;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    let lvlup = new Discord.RichEmbed()
    .setTitle("Level Up!")
    .setDescription(`New Level ${curlvl + 1}`)

 

    message.channel.send(lvlup)
  }
  fs.writeFile("./commands/levels/xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });

});

client.login(process.env.TOKEN);
