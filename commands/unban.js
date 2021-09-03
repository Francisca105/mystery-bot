const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  if(!message.member.hasPermission('BAN_MEMBERS')) 
    return message.channel.send(`Não tens permissão para executar este comando!`)
  if(!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) 
    return message.channel.send(`Não tenho permissão para executar este comando!`)

  
  message.guild.unban(args[0]).then(msg =>{message.channel.send(`${message.author}, Usuário desbanido com sucesso!`)})
    
}