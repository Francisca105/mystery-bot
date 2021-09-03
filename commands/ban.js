const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  if(!message.member.hasPermission('BAN_MEMBERS')) 
    return message.channel.send(`Não tens permissão para executar este comando!`)
  if(!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) 
    return message.channel.send(`Não tenho permissão para executar este comando!`)
  let member = message.mentions.members.first()  || message.guild.members.get(args[0]);
  if (!member) return message.channel.send(`${message.author}, para usares este comando precisas de mencionar alguém do servidor!`);
  
    
  message.guild.ban(member.id, {days: 7, reason: `Banido por ${message.author.tag}`}).then(msg =>{
  message.channel.send(`${message.author}, usuário banido com sucesso!`)
    
  if (!message.guild.member(member).bannable) 
  return message.channel.send(`${message.author}, eu não consigo banir este usuário!`)
    })
  }
