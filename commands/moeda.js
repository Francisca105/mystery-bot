const Discord = require('discord.js')

exports.run = function(bot, message){
    message.channel.sendEmbed(new Discord.RichEmbed()
    .setColor("PURPLE")
    .setTitle('A moeda foi ao ar e caiu... ' + coinFlipMagic()));

    function coinFlipMagic() {
        var rand = ['cara', 'coroa'];

        return rand[Math.floor(Math.random()*rand.length)];
    }
}