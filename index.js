const { Client, Collection } = require("discord.js");
const client = new Client();
const { prefix, token } = require("./config/config.json");

client.once("ready", () => {
  console.log(`Estou pronto como: ${client.user.username}.\n`);
});

const fs = require("fs");
client.commands = new Collection();
client.aliases = new Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) console.log(err);

  let jsfile = files.filter((f) => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    return console.log("Eu não consegui ler os comandos!");
  }

  jsfile.forEach((file, i) => {
    let pullcmd = require(`./commands/${file}`);
    client.commands.set(pullcmd.config.name, pullcmd);
    pullcmd.config.aliases.forEach((alias) => {
      client.aliases.set(alias, pullcmd.config.name);
    });
  });
});

client.on("message", async (message) => {

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice();

  if (!message.content.startsWith(prefix)) return;
  let commandFile =
    client.commands.get(cmd.slice(prefix.length)) ||
    client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
  if (commandFile) commandFile.run(client, message, args);

});

client.login(token);
