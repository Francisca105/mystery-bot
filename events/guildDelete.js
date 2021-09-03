module.exports = (client, guild) => {
    client.logger.cmd(`[GUILD LEAVE] ${guild.name} (${guild.id}) removeu o bot.`);
  
    if (client.settings.has(guild.id)) {
      client.settings.delete(guild.id);
    }
  };