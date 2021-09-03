const Discord = require('discord.js');

exports.run = async (client, message) => {

    message.channel.send(`Temos atualmente ${ message.guild.memberCount} membros!`);
  }
