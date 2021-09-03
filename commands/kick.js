const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  if(!message.member.hasPermission('KICK_MEMBERS')) 
    return message.channel.send(`Não tens permissão para executar este comando!`)
  if(!message.guild.member(client.user).hasPermission('KICK_MEMBERS')) 
    return message.channel.send(`Não tenho permissão para executar este comando!`)
  let member = message.mentions.members.first()  || message.guild.members.get(args[0]);
  if (!member) return message.channel.send(`${message.author}, para usares este comando precisas de mencionar alguém do servidor!`);
  
    
  message.guild.member(member.id).kick( )
  message.channel.send(`${message.author}, usuário kickado com sucesso!`)
    
  if (!message.guild.member(member).kickable) 
    return message.channel.send(`${message.author}, eu não consigo kickar este usuário!`)
    
    }