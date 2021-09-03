const Discord = require("discord.js")

exports.run = async (client, message, args) => {

if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Você não tem permissão!')  
  
   let N = args.slice(0)
                .join(" ");
        if (!N) return message.reply("Por favor escreva alguma coisa!!!")
  
  let embed = new Discord.RichEmbed()
    .setAuthor("AVISO")
    .setDescription(N)
    .setColor([0, 153, 255])
    .setFooter(`RedeMystery`, client.user.avatarURL)
    .setTimestamp();
  
  message.channel.send(embed);
}