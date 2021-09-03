module.exports = async client => {
    console.log('Bot iniciado com ' + client.users.size + ' usuários, em ' + client.channels.size + ' canais de ' + client.guilds.size + ' servidores.');
	
	let counting = 0;
	setInterval(function() {
		client.user.setActivity('O mistério das nossas vidas.', {type: 'WATCHING'});
})};
