const { Client, Collection, MessageEmbed } = require("discord.js");

module.exports.config = {
    name: "reagir",
    aliases: [],
};

module.exports.run = async (client, message, args) => {
    if (!(args[1], args[2])) {
        let helpEmbed = new MessageEmbed()
          .setColor(0x000000)
          .setAuthor("Utilização do comando de reagir:")
          .setDescription("`reagir (nome do emoji) `")
          .setFooter("Utilize apenas os emojis do grupo!");
        message.channel.send(helpEmbed);
    }
    else {
   let emoji = client.emojis.cache.find(emoji => emoji.name === args[1]);
   message.react(emoji.id)
    }
}