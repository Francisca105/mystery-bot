const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let embed = new Discord.RichEmbed()
    .setColor([113, 149, 18])
    .setAuthor("Informacao do Bot", client.user.avatarURL)
    .setDescription("Canal da criadora [aqui](https://www.youtube.com/channel/UCm78HT3WnIvptEJw1LxSd6g)!")
    .addField("Servidores", ":desktop: " + client.guilds.size, true)
    .addField("Membros", ":joystick: " + client.users.size, true)
    .addField("Canais", ":page_facing_up: " + client.channels.size, true)
    .addField("Versão do Bot", "v2.0.0", true)
    .addField("Fui criado no dia", ":calendar: " + client.user.createdAt, true)
    .addField("Pais", ":flag_pt: Portugal", true)
    .addField("Recursos", ":books: discord.js", true)
    .setFooter("Rede Mystery 2019 ©", client.user.avatarURL)
    .setTimestamp();

  message.channel.send(embed);

}