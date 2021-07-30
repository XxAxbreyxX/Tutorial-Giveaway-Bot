const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let help = new Discord.MessageEmbed()
      .setAuthor("Help Command")
      .setTitle("Command List & Guide for the Bot")
      .setDescription("Below are Commands you can do with Bot, Right now there is only 6 commands available, more commands will be added soon.")
      .addField("🎁 Giveaway 🎁","start [channel-name] [Time] [winners] [Prize]\nreroll [prize name]\nend [prize name]")
      .addField("Examples", "g!start-giveaway #giveaway 5m 1 Testing\ng!end-giveaway Testing\ng!reroll-giveaway Testing")
      .addField("Utility", "ping, invite", true)
      .addField("ℹ Information ℹ", "stats", true)
      .addField("Check out", "[This Channel!](https://www.youtube.com/channel/UCBoBWnrizxt5HaKTHrC-_sw)")
       .addField("Check out", "[This Discord Server!!](https://discord.gg/VAhke8Kvwr)")
      .setTimestamp()
      .setFooter(`Command Requested By ${message.author.tag}`, client.user.displayAvatarURL());
    message.channel.send("**Sent the commands in Direct Messages! 👾, Check DMs! Thank You**");

    return message.author.send(help);
}

module.exports.help = {
  name: "help"
}
