const { Client, Collection, MessageEmbed } = require('discord.js');

module.exports.config = {
    name: "ping",
    aliases: []
}

module.exports.run = async (client, message, args) => {
    let msgPing = await message.channel.send("Ping?");
    let ping = msgPing.createdTimestamp - message.createdTimestamp;
    msgPing.edit(`:information_source: Pong! A latência é de ${ping}ms`);
}