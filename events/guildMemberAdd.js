module.exports = async (client, member) => {
	
	const embed = {
	  "color": 8311585,
	  "timestamp": new Date(),
	  "footer": {
		"icon_url": client.user.avatarURL,
		"text": "Data de entrada"
	  },
	  "author": {
		"name": member.user.username,
		"icon_url": member.user.avatarURL
	  },
	  "fields": [
		{
		  "name": "Bem vindo(a)",
		  "value": "Leia as regras para não tomar KICK/BAN e mantenha um bom relacionamento com o pessoal :sunglasses: "
		}
	  ]
	};
	member.guild.channels.find("name","entradas").send({embed});
}