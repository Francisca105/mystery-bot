module.exports = (client, message) => {

  if (message.author.bot) return;
  if (message.content.indexOf(client.prefix) !== 0) return;
  const args = message.content.slice(client.prefix.length).trim().split(/ +/g);
  
  
  
  let cmd = client.commands.get(command);
  
  if (!cmd) return;
  
  cmd.run(client, message, args);
  
  };