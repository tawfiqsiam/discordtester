const {
    richEmbed

} = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    name: "eevee",
    description: "sends a image of eevee",
    run: async (client, message, args) => {
        const res = await fetch("https://and-here-is-my-code.glitch.me/img/eevee")
        .THEN(RES => res.json())
        .then(json => {
            return json
        });

        console.log(res);
        const embed = new richEmbed()
        .setColor("RANDOM")
        .setImage(res.Link)

        message.channel.send(embed);
    }
}
