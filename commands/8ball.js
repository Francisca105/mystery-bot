const Discord = require('discord.js')

exports.run = function(client, message, args){
       let Pergunta = args.slice(0)
                .join(" ");
        if (!Pergunta) return message.reply("Por favor escreva alguma coisa!!!")
  
    message.channel.sendEmbed(new Discord.RichEmbed()
    .setColor(message.guild.me.displayHexColor)
    .setTitle('🎱 A bola mágica diz que: ' + doMagic8BallVoodoo())
    .setFooter("Rede Mystery 2019 ©", client.user.avatarURL)
    .setTimestamp());
  

  
    function doMagic8BallVoodoo() {
        var rand = ['nope', 'yeah', 'Sim', 'Não', 'Claro que sim!', 'De certeza.', 'O que achas? NÃO', 'Talvez', 'NUNCA', 'Yep', 'No futuro.', 'Eu não te estou a entender'];

      
        return rand[Math.floor(Math.random()*rand.length)];
      

    }
}
