const Discord = require("discord.js")

exports.run = async (bot, message, args) => {

if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Você não tem permissão!')

   let A = args.slice(0)
                .join(" ");
        if (!A) return message.reply("Por favor escreva alguma coisa!")
        message.channel.send(A)

}