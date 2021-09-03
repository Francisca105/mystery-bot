const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {
  try {
    message.channel.send(`${message.author} morreu 😵`, new Discord.Attachment('https://tenor.com/view/spongebob-rip-he-was-number1-tim-conway-barnacle-boy-gif-12979293.gif'))
  } catch (err) {
    message.channel.send('Houve um erro!\n' + err).catch();
  }
};