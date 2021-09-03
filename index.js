const Discord = require('discord.js');
const config = require("./config.json");
const db = require('quick.db');
const cooldown = require("./cooldown.js");
const utils = require("./utils.js");
const jimp =require("jimp")
const client = new Discord.Client('');
client.prefix = config.prefix;

client.on("ready", () => {
    console.log("Bot iniciado com sucesso!")
    client.user.setActivity(`O MISTÉRIO!`, {type: "Watching"})
});

client.on('raw', async dados => {
    if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
    if(dados.d.message_id != "607342072223236096") return

    let servidor = client.guilds.get("490351135408914453")
    let membro = servidor.members.get(dados.d.user_id)

    let cargo1 = servidor.roles.get('606844449896529975'),
        cargo2 = servidor.roles.get('607247608926306334'),
        cargo3 = servidor.roles.get('607248790856007701')

    if(dados.t === "MESSAGE_REACTION_ADD"){
        if(dados.d.emoji.id === "607334781285433385"){
            if(membro.roles.has(cargo1)) return
            membro.addRole(cargo1)
        }else if(dados.d.emoji.name === "🛒"){
            if(membro.roles.has(cargo2)) return
            membro.addRole(cargo2)
        }else if(dados.d.emoji.name === "📠"){
            if(membro.roles.has(cargo3)) return
            membro.addRole(cargo3)
        }
    }
    if(dados.t === "MESSAGE_REACTION_REMOVE"){
        if(dados.d.emoji.id === "607334781285433385"){
            if(membro.roles.has(cargo1)) return
            membro.removeRole(cargo1)
        }else if(dados.d.emoji.name === "🛒"){
            if(membro.roles.has(cargo2)) return
            membro.removeRole(cargo2)
        }else if(dados.d.emoji.name === "📠"){
            if(membro.roles.has(cargo3)) return
            membro.removeRole(cargo3)
        }
    }

})

client.on('raw', async dados => {
    if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
    if(dados.d.message_id != "607347515947483149") return

    let servidor = client.guilds.get("490351135408914453")
    let membro = servidor.members.get(dados.d.user_id)

    let check = servidor.roles.get('490352079500607489'),
        uncheck = servidor.roles.get('606841672063647784'),
        sla = servidor.roles.get('491028742794248193')

    if(dados.t === "MESSAGE_REACTION_ADD"){
        if(dados.d.emoji.id === "607347397332303872"){
            if(membro.roles.has(check)) return
            membro.addRole(check)
            membro.removeRole(uncheck)
        }else if(dados.d.emoji.name === "🛒"){
            if(membro.roles.has(uncheck)) return
            membro.addRole(uncheck)
        }else if(dados.d.emoji.name === "📠"){
            if(membro.roles.has(sla)) return
            membro.addRole(sla)
        }
    }
    if(dados.t === "MESSAGE_REACTION_REMOVE"){
        if(dados.d.emoji.id === "607347397332303872"){
            if(membro.roles.has(check)) return
            membro.removeRole(check)
        }else if(dados.d.emoji.name === "🛒"){
            if(membro.roles.has(uncheck)) return
            membro.removeRole(uncheck)
        }else if(dados.d.emoji.name === "📠"){
            if(membro.roles.has(sla)) return
            membro.removeRole(sla)
        }
    }

})

client.on("message", async message => {
    let msg =  message.content.toLowerCase();
    if (message.content.startsWith(`<@${client.user.id}>`)){
      message.channel.send(` :robot: Olá! Eu sou o *MysteryBot* e estou aqui para te ajudar! :robot:\nPara começar, o meu prefixo é ">" e com o comando >ajuda consegues ver todos os comandos disponiveis! `)
    }

    if (message.author.bot) return undefined;      
    let user = message.author;
    

  
    let xp = await db.fetch(`xp_${user.id}`);
    if (xp === null) xp = 0;
    let level = await db.fetch(`level_${user.id}`);
    if (level === null) level = 0;
    let total_points = await db.fetch(`total_points_${user.id}`);
    if (total_points === null) total_points = 0;
  
    while (xp >= utils.need(level+1)) {
      if (xp >= utils.need(level+1)) {
        db.subtract(`xp_${user.id}`, utils.need(level+1));
        db.add(`level_${user.id}`, 1);
        xp = await db.fetch(`xp_${user.id}`);
        level = await db.fetch(`level_${user.id}`);
        let embed = new Discord.RichEmbed()
          .setAuthor("LEVEL UP")
          .setDescription("Aumentaste de level **Level " + level + "**!")
          .setColor([14, 117, 163]);
        message.channel.send(embed);
      }
    }
  
  if (!cooldown.is(user.id)) {
    cooldown.add(user.id);
    var add = Math.floor(Math.random() * 15) + 10;
    db.add(`xp_${user.id}`, add);
    db.add(`total_points_${user.id}`, add);
    setTimeout(() => {
      cooldown.remove(user.id);
    }, 1000 * 15);
  }
  
  
          
    if (message.content.indexOf(client.prefix) !== 0) return;
    const args = message.content.slice(client.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        let commands = require(`./commands/${command}.js`);
      
        commands.run(client, message, args);
    } catch (e){
        console.log(e);
    } finally{}
});

client.on("guildMemberAdd", async member => {
    client.channels.get('490352864829505546').send(`😄 **${member.user.username}** juntou-se ao servidor ${member.guild.name}!`);
    client.guilds.get("490351135408914453").channels.get("607332163729227781").setName("Membros: " + client.guilds.get("490351135408914453").memberCount);
    client.user.setActivity(`FACTIONS OBSCURE`, {type: "Watching"});
  });
  
  client.on("guildMemberRemove", async member => {
    client.channels.get('490352881543675905').send(`😢 *${member.user.username}* saiu do servidor ${member.guild.name}.`);
    client.guilds.get("490351135408914453").channels.get("607332163729227781").setName("Membros: " + client.guilds.get("490351135408914453").memberCount);
    client.user.setActivity(`UM SERVIDOR`, {type: "Watching"});
  });
  
  client.on("guildCreate", async guild => {
    client.channels.get('590201737651027998').send(`Fui adicionado num novo servidor: **${guild.name}** (Owner: ${guild.owner.user.username})(Members: ${guild.memberCount})`);
    client.user.setActivity(`VIPS A VOAR`, {type: "Watching"});
  });
  
  client.on("guildDelete", async guild => {
    client.channels.get('590201737651027998').send(`Fui removido de um servidor: **${guild.name}**`);
    client.user.setActivity(`FRANCISCA.105`, {type: "Watching"});
  });

client.login(config.token);