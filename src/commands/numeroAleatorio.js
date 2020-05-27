const { Client, Collection, MessageEmbed } = require("discord.js");

module.exports.config = {
  name: "numeroAleatorio",
  aliases: ["na"],
};

module.exports.run = async (client, message, args) => {
  if (!(args[1], args[2])) {
    let helpEmbed = new MessageEmbed()
      .setColor(0x000000)
      .setAuthor("Utilização do comando de número aleatório:")
      .setDescription("`numeroAleatorio 1 10`");
    message.channel.send(helpEmbed);
  } else {
    let min = args[1];
    let max = args[2];
    let numeroAleatorio = Math.round(Math.random() * (max - min) + min);
    const numeroEmbed = new MessageEmbed()
      .setColor(0x000000)
      .setAuthor("Numero Aleatório")
      .setTitle(`Você pediu um número aleatório entre ${min} e ${max}`)
      .setDescription(`O número aleatório é: ${numeroAleatorio}`);

    message.channel.send(numeroEmbed);
  }
};
