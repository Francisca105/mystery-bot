const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
  let embed = new Discord.RichEmbed()
    .setAuthor(`${user.username}`)
    .setImage(user.displayAvatarURL)
    .setColor([54, 57, 64])
    .setFooter("Rede Mystery 2019 ©", client.user.avatarURL)
    .setTimestamp();
  
  message.channel.send(embed);
}