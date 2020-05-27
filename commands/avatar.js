const { Client, Collection, MessageEmbed } = require("discord.js");

module.exports.config = {
    name: "avatar",
    aliases: ["av"],
};

module.exports.run = async (client, message, args) => {
    const user = message.mentions.users.first() || message.author;
    message.react("714228170848731227")
    const avatarEmbed = new MessageEmbed()
        .setColor(0x000000)
        .setAuthor(`Avatar de(a): ${user.username}`)
        .setImage(user.displayAvatarURL());
    message.channel.send(avatarEmbed);
}