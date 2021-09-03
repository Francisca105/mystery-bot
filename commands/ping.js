exports.run = async (client, message, args) => {
    const m = await message.channel.send("Calculando...");
    m.edit(`Latency é **${m.createdTimestamp - message.createdTimestamp}**ms.\nAPI Latency é **${Math.round(client.ping)}**ms.`);
    m.react("🏓");
  }