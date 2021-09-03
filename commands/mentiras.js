exports.run = async (client, message, args, level) => {
    try {
      message.channel.send('Mentes ' + Math.floor(Math.random() * 50) + '% das vezes!');
    } catch (err) {
      message.channel.send('Ups, houve um erro!\n' + err).catch();
    }
  };