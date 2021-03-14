const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "";

client.on("ready", () => {
  console.log(
    `Online In Servers : ${client.guilds.size} | Users : ${client.users.size}`
  );
  let statuses = ['HELL is Here #0304',' /help ','MODIRATOR','GIF']
  ;

setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(STREAMING, {
      type: "STREAMING",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});


client.on("message", async message => {
  if (message.content.toLowerCase() === prefix + "/p") {
               exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['P','profile','pro','Pro','Profile',],

  permLevel: 0

};
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 200).then(
      message.channel.send({
        files: [
          {
            name: "prfoilebycutie.png",
            attachment: `https://api.probot.io/profile/${message.author.id}`
          }
        ]
      })
    );
  }
});

client.on("message", message => {
  var command = message.content;
  if (message.author.bot) return;

  switch (command) {
    case "avatjhyuyujujjhhhjuijjiar":
      message.channel.send(
        `وێنەی ئەکاونتەکەت ئەوەیە <:emoji_299:765347080515354654>: ${message.author.avatarURL}`
      );
      break;

    case "<@758476332098650152>":
      message.channel.send("فــەرمـــوو    ");
  }
});

client.on("message", msg => {
  if (msg.content === "slaw") {
    msg.reply("**baxer bey **");
  }
});

client.on("message", msg => {
  if (msg.content === "Reklam") {
    msg.reply("** la zutren kat jwabt adretawa dlm **");
  }
});

client.on("message", msg => {
  if (msg.content === "hi") {
    msg.reply("**baxer bey  **");
  }
});

client.on("message", msg => {
  if (msg.content === "mama") {
    msg.reply("**bale braza **");
  }
});

// ======== { • move  • }======== //
client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + "/move")) {
    if (message.member.hasPermission("MOVE_MEMBERS")) {
      if (message.mentions.users.size === 0) {
        return message.channel.send(
          "``To use the command type this command <a:emoji_23:799005021303210024>: " +
            prefix +
            "move [USER]``"
        );
      }
      if (message.member.voiceChannel != null) {
        if (message.mentions.members.first().voiceChannel != null) {
          var authorchannel = message.member.voiceChannelID;
          var usermentioned = message.mentions.members.first().id;
          var embed = new Discord.RichEmbed()
            .setTitle("Succes!")
            .setColor("#000000")
            .setDescription(
              `You have withdrawn<@${usermentioned}> to Your voice rum✅ `
            );
          var embed = new Discord.RichEmbed()
            .setTitle(`You are Moved in ${message.guild.name}`)
            .setColor("RANDOM")
            .setDescription(
              `**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`
            );
          message.guild.members
            .get(usermentioned)
            .setVoiceChannel(authorchannel)
            .then(m => message.channel.send(embed));
          message.guild.members.get(usermentioned).send(embed);
        } else {
          message.channel.send(
            "``You can not withdraw" +
              message.mentions.members.first() +
              " `This member must be in a vocal rome`"
          );
        }
      } else {
        message.channel.send(
          "**``You must be in an audio ROM in order to pull the member out to you``**"
        );
      }
    } else {
      message.react("❌");
    }
  }
});

// ======== { • moveall • }======== //
client.on("message", message => {
  if (message.content.startsWith(prefix + "/moveall")) {
    if (!message.member.hasPermission("MOVE_MEMBERS"))
      return message.channel.send("**:x: You Dont Have Perms `MOVE_MEMBERS`**");
    if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS"))
      return message.reply("**:x: I Dont Have Perms `MOVE_MEMBERS`**");
    if (message.member.voiceChannel == null)
      return message.channel.send(`**You Have To Be In Room Voice**`);
    var author = message.member.voiceChannelID;
    var m = message.guild.members.filter(m => m.voiceChannel);
    message.guild.members
      .filter(m => m.voiceChannel)
      .forEach(m => {
        m.setVoiceChannel(author);
      });
    message.channel.send(`**__:❤: Success Moved All To Your Channel__**`);
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "emosuuujjilist")) {
    const List = message.guild.emojis.map(e => e.toString()).join(" ");

    const EmojiList = new Discord.RichEmbed()
      .setTitle("Emojis")
      .setAuthor(message.guild.name, message.guild.iconURL)
      .setColor("RANDOM")
      .setDescription(List)
      .setFooter(message.guild.name);
    message.channel.send(EmojiList);
  }
});

client.on("message", message => {
  if (message.content === prefix + "/lock") {
    if (!message.channel.guild) return message.reply(" |Chat Locked  ");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(" | You Dont have permission");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.reply("  ✅| lock chat ");
      });
  }
  if (message.content === prefix + "/unlock") {
    if (!message.channel.guild) return message.reply(" | not server");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(" |You Dont have permission");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.reply("  ✅| Chat Unlocked  **");
      });
  }
});
client.on("error", err => {
  console.log(err);
});

client.on("message", message => {
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command === "say") {
    if (!message.channel.guild)
      return message.channel
        .send("This command only for servers")
        .then(m => m.delete(5000));
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("You Dont have permission ، ADMINISTRATOR");
    message.delete();
    message.channel.sendMessage(args.join(" "));
  }

  if (command == "embed") {
    if (!message.channel.guild)
      return message.channel
        .send("This command only for servers")
        .then(m => m.delete(5000));
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("You Dont have permission ، ADMINISTRATOR");
    let say = new Discord.RichEmbed()
      .setDescription(args.join("  "))
      .setColor("RANDOM");
    message.channel.sendEmbed(say);
    message.delete();
  }
});
client.on("message", async message => {
  if (message.content.startsWith(prefix + "/websay")) {
    const args = message.content.substring(prefix.length).split(" ");

    message.delete();
    args.shift();
    let msg = args.join(" ");
    message.channel
      .createWebhook(message.author.username, message.author.avatarURL)
      .then(wb => {
        const user = new Discord.WebhookClient(wb.id, wb.token);
        user.send(msg);
        user.delete();
      })
      .catch(console.error);
  }
});

client.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "/join") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("Joined");
        })
        .catch(console.log);
    } else {
      message.reply("Firs You Join A Voice");
    }
  }
});

client.on("message", async msg => {
  if (msg.content === prefix + "/server") {
    var w1 = msg.guild.createdAt.getFullYear();
    var w2 = msg.guild.createdAt.getMonth();
    var w3 = msg.guild.createdAt.getDate();
    let embed = new Discord.RichEmbed()
      .addField("**  👑|name server**: ", msg.guild.name)
      .addField("**  🌈|Id server**:", msg.guild.id)
      .addField("**  💫|Owner ship **: ", msg.guild.owner)
      .addField("**  💧|Member count**: ", msg.guild.memberCount)
      .addField("**  ⛄|Region server**: ", msg.guild.region)
      .addField("**  💎|Channel counts**: ", msg.guild.channels.size)
      .addField("**  🛠|Roles counts**: ", msg.guild.roles.size)
      .setColor("RANDOM")
      .setImage(
        "https://cdn.discordapp.com/attachments/805927580930146325/807011849827909662/591025441004060684.gif"
      )
      .setFooter(`${msg.guild.name}`);
    msg.channel.sendEmbed(embed);
  }
});

client.on("message", message => {
  //Turbo Codes
  var args = message.content.split(" ").slice(1); //Turbo Codes
  if (message.content.startsWith(prefix + "/id")) {
    //Turbo Codes
    var year = message.author.createdAt.getFullYear();
    var month = message.author.createdAt.getMonth();
    var day = message.author.createdAt.getDate();
    var men = message.mentions.users.first(); //Turbo Codes
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" "); //Turbo Codes
    if (args == "") {
      //Turbo Codes
      var z = message.author; //Turbo Codes
    } else {
      var z = message.mentions.users.first(); //Turbo Codes
    }

    let d = z.createdAt; //Turbo Codes
    let n = d.toLocaleString(); //Turbo Codes
    let x;
    let y;

    if (z.presence.game !== null) {
      //Turbo Codes
      y = `${z.presence.game.name}`; //Turbo Codes
    } else {
      y = "|No Playing... ."; //Turbo Codes
    }
    if (z.bot) {
      var w = "Bot"; //Turbo Codes
    } else {
      var w = "Member";
    }
    let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField(
        " ❄ | Name:",
        `**<@` + `${z.id}` + `>**`,
        true
      )
      .addField(
        " 📝 | Id:",
        "**" + `${z.id}` + "**",
        true
      )
      .addField(
        " ⭕ | Playing:",
        "**" + y + "**",
        true
      )
      .addField(
        " 💕 | Your account",
        "**" + w + "**",
        true
      )
      .addField(
        " 🌸 | Id member:",
        "**#" + `${z.discriminator}**`,
        true
      ) //Turbo Codes
      .addField(
        "** 🌛 |Time joined server   :**",
        message.member.joinedAt.toLocaleString()
      ) //Turbo Codes
     
      
      
      .addField(
        " **🍭 |End message  :**",
        message.author.lastMessage
      )
      .setImage(
        "https://cdn.discordapp.com/attachments/805927580930146325/807011849827909662/591025441004060684.gif"
      )
      .setThumbnail(`${z.avatarURL}`)
      .setFooter(message.author.username, message.author.avatarURL);

    message.channel.send({ embed });
    if (!message)
      return message.reply("**Put the minchan right**").catch(console.error); //Turbo Codes
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "/man")) {
    
    exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['gif man','man gif','gifman','mangif','man','Man'],

  permLevel: 0

};
    
    let man = [
      "https://media.giphy.com/media/l4pT1r2ayYtPLc0PS/giphy.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870769313480714/Enes_Acar_GIF_70.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870793716858880/a_57a7f6c875e3a329b170edf177392911.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870817351368734/5-2.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804007829010513966/image1.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804007829483552838/image3.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804219672513478706/Lenora_36.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804220384899498064/Lenora_28.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804220394697392158/Lenora_33.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804315371271749662/image0-20.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804968359572930580/ALANIS_MAN_GIF_156.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804968381816111124/image0-5.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804760463044640808/ALANIS_MAN_GIF_99.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870704999202836/ENES_ACAR_GIF_104.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870737941135421/ENES_ACAR_GIF_15.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870682479067166/ENES_ACAR_GIF_135.gif",
      "https://media4.giphy.com/media/WrBSHRLE9gEgM/giphy.webp?cid=ecf05e47b3fkaz5c1z5g7290iecvazsw39eag2jn10st6o7i&rid=giphy.webp",
      "https://media3.giphy.com/media/Xmq5tTWRdwqXu/giphy.webp?cid=ecf05e476rg2x32a9mjpctlvw6icds1kfvegwaowgwukcxee&rid=giphy.webp",
      "",
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} MAN GIFS   `,
          image: {
            url: man[Math.floor(Math.random() * man.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "/girl")) {
    exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['gif girl','girl gif','gifgirl','girlgif','girl','Girl'],

  permLevel: 0

};

    let girl = [
      "https://cdn.discordapp.com/attachments/792035229505945621/811585870535852073/image0.gif",
      "https://cdn.discordapp.com/attachments/792035229505945621/811586874183385108/image0.gif",
      "https://cdn.discordapp.com/attachments/792035229505945621/811586882348908574/image0.gif",
      "https://cdn.discordapp.com/attachments/792035229505945621/811585909534883850/image0.gif",
      "https://cdn.discordapp.com/attachments/792035229505945621/811585845017444372/image0.gif",
      "https://cdn.discordapp.com/attachments/792035229505945621/811585887241502761/image0.gif",
      "https://cdn.discordapp.com/attachments/792035229505945621/811585933559464016/image0.gif",
      "https://cdn.discordapp.com/attachments/792035229505945621/811585934969405460/image0.gif",
      "https://cdn.discordapp.com/attachments/792035229505945621/811585843332513792/image0.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804968189892755456/image2-1.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804968223577604126/gif472.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804968231794245642/rexsin_212.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804968258859827210/pintrst___luri_4.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804983128527077387/a_177ddfe86ad32b68be6200f007682136.gif",
      "https://media.discordapp.net/attachments/786897045436366849/805008600334073866/3WIu.gif",
      "https://media.discordapp.net/attachments/786897045436366849/805370008330436648/image0.gif",
      "https://media.discordapp.net/attachments/786897045436366849/805008566439641128/image0.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804681217022099466/a_3c85d4517fbaf4f750d344820b49c076.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804682936615829504/image0.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804314115601596426/ALANIS_WOMAN_GIF_176.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804280612227383316/ALANIS_WOMAN_GIF_138.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} GIRL GIFS `,

          image: {
            url: girl[Math.floor(Math.random() * girl.length)]
          }
        }
      })
   
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "/sad")) {
       exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['gif sad','gifsad','sadgif','sad','Sad'],

  permLevel: 0

};
    
    let sads = [
      "https://media.discordapp.net/attachments/786897045952790550/798719676795715614/Zeyrox_43.gif",
      "https://media.discordapp.net/attachments/786897045952790550/799435191323852820/luisa1-1.gif",
      "https://media.discordapp.net/attachments/786897045952790550/799435254011920404/a_caf4fdc4f3e516fcabec0022078c38ab.gif",
      "https://media.discordapp.net/attachments/786897045952790550/804040753072439326/038842117446a0c76a922d23727942b1.gif",
      "https://media.discordapp.net/attachments/786897045952790550/787581071079768074/image0.gif",
      "https://media.discordapp.net/attachments/786897045952790550/787581004424544256/image0.gif",
      "https://media.discordapp.net/attachments/786897045952790550/787580974975549450/image0.gif",
      "https://media.discordapp.net/attachments/786897045952790550/787580943627976704/image0.gif",
      "https://media.discordapp.net/attachments/786897045952790550/802930927784820766/Cedric_Anime_Gif_81.gif",
      "https://media.discordapp.net/attachments/786897045952790550/802722301984243712/a_66f26e072e89a58c1879c6fa27744bd7.gif",
      "https://media.discordapp.net/attachments/786897045952790550/801054305569865778/uzgun-4.gif",
      "https://media.discordapp.net/attachments/786897044483604490/806288916160315422/image0.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} **SAD GIFS**`,
          image: {
            url: sads[Math.floor(Math.random() * sads.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "/couple")) {
           exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['gif couple','couple gif','gifcouple','couplegif','couple','Couple'],

  permLevel: 0

};
   
    let loves = [
      "https://media.discordapp.net/attachments/608711480346542102/782233713538498600/hit_gif_5.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782286421020508170/image0_1.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782284851570147358/image0-1-4.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782406047473467422/image0.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782148760997593098/a_8bc52b6080ce3079988c6e49f84c4b03.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782445443665625128/ezgif-7-2032ed99845d.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782196955488321556/a_637b8e2042d540a1e5e28282e3fe5cc7.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803307812608409600/image0.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869330005688340/a_130ce69bc8c1f06d917ee668f7051b64.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869344266321931/dans4.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869587988152340/gif.13.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869653641854996/20210105_223539.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869660814376960/a_09fbaba0301c6db194af2f0c6d2a6a93.gif",
      "https://media.discordapp.net/attachments/788119246517174362/804188805204410378/2.gif",
      "https://media.discordapp.net/attachments/788119246517174362/804337804179275776/16-10-27-tenor.gif",
      "https://media.discordapp.net/attachments/788119246517174362/804759240451424256/Lrows_Gif_25.gif",
      "https://media.discordapp.net/attachments/788119246517174362/804759252899594259/ciftler8.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} :heart:  COUPLE GIF  `,
          image: {
            url: loves[Math.floor(Math.random() * loves.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});


client.on("message", message => {
  if (message.content.startsWith(prefix + "/tomas shelbi")) {
           exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['gif tomas shelbi','tomas shelbi gif','giftomas shelbi','tomas shelbigif','couple',''],

  permLevel: 0

};
   
    let loves  = [
      "https://media.discordapp.net/attachments/792035229505945621/811585845017444372/image0.gif",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} TOMAS SHELBI GIF  `,
          image: {
            url: loves[Math.floor(Math.random() * loves.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});


client.on("message", function(message) {
  if (message.content.startsWith(prefix + "/rps")) {
    let messageArgs = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    let messageRPS = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    let arrayRPS = ["**# - Rock**", "**# - Paper**", "**# - Scissors**"];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setThumbnail(message.author.avatarURL)
      .addField("Rock", "🇷", true)
      .addField("Paper", "🇵", true)
      .addField("Scissors", "🇸", true);
    message.channel.send(RpsEmbed).then(msg => {
      msg.react(" 🇷");
      msg.react("🇸");
      msg
        .react("🇵")
        .then(() => msg.react("🇷"))
        .then(() => msg.react("🇸"))
        .then(() => msg.react("🇵"));
      let reaction1Filter = (reaction, user) =>
        reaction.emoji.name === "🇷" && user.id === message.author.id;
      let reaction2Filter = (reaction, user) =>
        reaction.emoji.name === "🇸" && user.id === message.author.id;
      let reaction3Filter = (reaction, user) =>
        reaction.emoji.name === "🇵" && user.id === message.author.id;
      let reaction1 = msg.createReactionCollector(reaction1Filter, {
        time: 12000
      });

      let reaction2 = msg.createReactionCollector(reaction2Filter, {
        time: 12000
      });
      let reaction3 = msg.createReactionCollector(reaction3Filter, {
        time: 12000
      });
      reaction1.on("collect", r => {
        message.channel.send(result);
      });
      reaction2.on("collect", r => {
        message.channel.send(result);
      });
      reaction3.on("collect", r => {
        message.channel.send(result);
      });
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "/nick")) {
    if (!message.guild.member(message.author).hasPermission("MANAGE_NICKNAMES"))
      return message.channel.send("Please Check Your Permission.");
    if (!message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES"))
      return message.channel.send("Please Check My Permission.");
    let user = message.mentions.users.first();

    if (!user)
      return message.channel.send(`**>>> ${prefix}nick @mention nickname**`);
    let args = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (!args)
      message.guild
        .member(user)
        .setNickname("")
        .then(m => {
          message.channel.send(
            " " + user.username + " has been reseted nickname "
          );
        })
        .catch(error => {
          message.channel.send("Error: **" + error.message + "**");
        });
    message.guild
      .member(user)
      .setNickname(args)
      .then(m => {
        let embed = new Discord.RichEmbed()
          .setTitle("Nicknamed User!")
          .setDescription(
            "User: ```" +
              user.username +
              "```\nBy: ```" +
              message.author.username +
              "```\nNickname: ```" +
              args +
              "``` "
          );
        message.channel.send(embed);
      })
      .catch(error => {
        message.channel.send("Error: **" + error.message + "** ");
      });
  }
  if (message.content.toLowerCase() === prefix + "help nick") {
    let nick = new Discord.MessageEmbed()
      .setTitle(`Command: nick`)
      .addField("Usage", `${prefix}nick @user nickname`)
      .addField("Information", "Nicknames");
    message.channel.send(nick);
  }
});

client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "/about") {
    const bot = new Discord.RichEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setColor("RANDOM")
      .addField(
        " ♠|**Bot Ping** : ",
        `» ${Date.now() - message.createdTimestamp}` + " ms",
        true
      )
      .addField(
        " 👒|**Servers** :  ",
        `» ${client.guilds.size}`,
        true
      )
      .addField(
        " ✔|**Channels** : ",
        `» ${client.channels.size} `,
        true
      )
      .addField(
        " 📝|**akawnt Name** :  ",
        `» ${client.user.tag} `,
        true
      )
      .addField(
        " 👑|**OWNER BOT** :  ",
        `» <@758476332098650152>`,
        true
      ) // تعديل مهم عدل هذا الرقم لايدي حسابك
      .setImage(
        "https://cdn.discordapp.com/attachments/738017519981559881/742193038536736858/591025441004060684.gif"
      )
      .setFooter(message.author.username, message.author.avatarURL);
    message.channel.send(bot);
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "/info")) {
    message.channel.send({
      embed: new Discord.RichEmbed()
        .setAuthor(client.user.username, client.user.avatarURL)
        .setThumbnail(client.user.avatarURL)
        .setColor("RANDOM")
        .addField(
          " 🍁|My Ping",
          [`${Date.now() - message.createdTimestamp}` + "MS"],
          true
        )
        .addField(
          " 🌎|servers",
          [client.guilds.size],
          true
        )
        .addField(
          " 💫|channels",
          `[ ${client.channels.size} ]`,
          true
        )
        .addField(
          " 💧|My Name",
          `[ ${client.user.tag} ]`,
          true
        )
        .addField(
          " ✨|My ID",
          `[ ${client.user.id} ]`,
          true
        )
        .addField(" ⭕|My Prefix", `[ /help ]`, true)
        .setImage(
          "https://cdn.discordapp.com/attachments/738017519981559881/742193131314872382/591025441004060684.gif"
        )
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "/move")) {
    if (!message.member.hasPermission("MUTE_MEMBERS"))
      return message.channel
        .sendMessage("**ليس لديك صلاحية لاعطاء ميوت صوتي**❌ ")
        .then(m => m.delete(5000));
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message
        .reply("**I Don't Have `MUTE_MEMBERS` Permission**")
        .then(msg => msg.delete(6000));

    if (message.mentions.users.size === 0) {
      return message.reply("Menition member");
    }
    let muteMember = message.guild.member(message.mentions.users.first());
    if (!muteMember) {
      return message.reply("Restart");
    }
    muteMember.setMute(true);
    if (muteMember) {
      message.channel.sendMessage("Muted voice ");
    }
  }
});

client.on("message", message => {
  if (message.content === prefix + "/rooms") {
    var channels = message.guild.channels
      .map(channels => `${channels.name}, `)
      .join(" ");
    const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField(`${message.guild.name}`, `**Rooms:white_check_mark:**`)
      .addField(
        ":arrow_down: Rooms Number. :heavy_check_mark:",
        `** ${message.guild.channels.size}**`
      )

      .addField(
        ":arrow_down:Rooms  Name. :heavy_check_mark::",
        `**[${channels}]**`
      );
    message.channel.sendEmbed(embed);
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "/unmute")) {
    if (!message.member.hasPermission("MUTE_MEMBERS"))
      return message.channel
        .sendMessage("**MUTE MEMBER ببورە ئەو رۆلەت نیە**❌ ")
        .then(m => m.delete(5000));
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message
        .reply("**من ئەو پێرمیشنەم نیە `MUTE_MEMBERS` Permission**")
        .then(msg => msg.delete(6000));

    if (message.mentions.users.size === 0) {
      return message.reply("Menition user");
    }
    let muteMember = message.guild.member(message.mentions.users.first());
    if (!muteMember) {
      return message.reply("Restart");
    }
    muteMember.setMute(false);
    if (muteMember) {
      message.channel.sendMessage("Un mute member");
    }
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "/meme")) {
      
           exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['gif meme','meme gif','gifmeme','memegif','meme','Meme'],

  permLevel: 0

};
    let meme = [
      "https://media.discordapp.net/attachments/778349612146360381/805361657781944340/FB_IMG_1608729181806.jpg",
      "https://media.discordapp.net/attachments/778349612146360381/805361657177702420/IMG_20201125_181212.jpg",
      "https://media.discordapp.net/attachments/778349612146360381/805361656954748948/received_310923683551106.jpeg",
      "https://media.discordapp.net/attachments/778349612146360381/805361656698765342/Komede.jpg",
      "https://media.discordapp.net/attachments/778349612146360381/805361172776747038/1f16fa85f750c462.jpg",
      "https://media.discordapp.net/attachments/778349612146360381/805361042229690398/image0.jpg",
      "https://media.discordapp.net/attachments/791219055083651092/805361152481689610/image0.jpg",
      "https://media.tenor.co/videos/2f17757958ab63c82e105cb2f068ba25/mp4",
      "https://media.discordapp.net/attachments/793750057500278805/805371117404815360/image0.jpg",
      "https://media.discordapp.net/attachments/793750057500278805/805370861393149962/image0.jpg",
      "https://media.discordapp.net/attachments/793750057500278805/805370485155954728/image0.jpg",
      "https://media.discordapp.net/attachments/791219055083651092/805363347390201866/image0.jpg",
      "https://media.discordapp.net/attachments/791219055083651092/805363470182383646/image0.jpg",
      "https://media.discordapp.net/attachments/791219055083651092/805363578055163934/image0.jpg",
      "https://media.discordapp.net/attachments/788957374311956480/792776202984095744/133411745_960371687826475_946663856063250772_n.png",
      "https://media.discordapp.net/attachments/768041476004904971/781669774374469642/124907941_1816050908534119_3407893796902602469_n.jpg",
      "https://media.discordapp.net/attachments/768041476004904971/777584124663037982/Will_You_Shut_Up_Man_.jpg",
      "https://media.discordapp.net/attachments/768041476004904971/777176870130155540/Screenshot_2020-11-14-18-17-30.png",
      "https://media.discordapp.net/attachments/791219055083651092/805364265540124683/image0.jpg",
      "https://media.discordapp.net/attachments/778349612146360381/805361657387024414/Screenshot_20210122_160111.jpg",
      "https://media.discordapp.net/attachments/793750057500278805/805781587316441108/image0.jpg",
      "https://media.discordapp.net/attachments/793750057500278805/805781864220196885/image0.jpg",
      "https://media.discordapp.net/attachments/793750057500278805/805782023562199060/image0.jpg",
      "https://media.discordapp.net/attachments/793750057500278805/806561503980421120/image0.jpg"
    ];

    message.channel
      .send({
        embed: {
          description: `**${message.author.username} Meme photos :joy:**`,
          image: {
            url: meme[Math.floor(Math.random() * meme.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "/boom")) {
               exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['gif boom','boom gif','gifboom','boomgif','boom','Boom'],

  permLevel: 0

};
    let bombs = [
      "https://media.giphy.com/media/Xp98Vi5OBvhXpwA0Zp/giphy.gif",
      "https://media.giphy.com/media/POnwee2RZBWmWWCeiX/giphy.gif",
      "https://media.giphy.com/media/oywQ7OhnYupINQa0L4/giphy.gif",
      "https://media.giphy.com/media/5aLrlDiJPMPFS/giphy.gif",
      "https://media.giphy.com/media/l1BgS9aNtdCdjgkaQ/giphy.gif",
      "https://media.giphy.com/media/d0NnEG1WnnXqg/giphy.gif",
      "https://media.giphy.com/media/NmrqUdwGXPOog/giphy.gif",
      "https://media.giphy.com/media/dpnfPvaCIHBrW/giphy.gif",
      "https://media.giphy.com/media/mks5DcSGjhQ1a/giphy.gif",
      "https://media.giphy.com/media/8wfoaIjVc0FBaLu5xH/giphy.gif",
      "https://media.giphy.com/media/xThtanBNixj1O1m5oY/giphy.gif",
      "https://media.giphy.com/media/fdGkCOiM0oOqI/giphy.gif",
      "https://media.giphy.com/media/c862b2dAhJXYA/giphy.gif",
      "https://media.giphy.com/media/CepTYjGRbV1ba/giphy.gif",
      "https://media.giphy.com/media/sRGCQ7INgSD0qbTqB5/giphy.gif",
      "https://media.giphy.com/media/ZJYOwl8SbFsic/giphy.gif",
      "https://media.giphy.com/media/3oEhmKspQX9EN48HNm/giphy.gif",
      "https://media.giphy.com/media/l1KVcAP6jvP9r4MaA/giphy.gif",
      "https://media.giphy.com/media/j2mY6orBJqAdG/giphy.gif",
      "https://media.giphy.com/media/3oz8xEqn8AGAQbR0yY/giphy.gif",
      "https://media.giphy.com/media/l4lQW9KfRQscU0ds4/giphy.gif",
      "https://media.giphy.com/media/XathaB5ILqSME/giphy.gif",
      "https://media.giphy.com/media/26AHvF2p5pridaSf6/giphy.gif",
      "https://media.giphy.com/media/Nlur5uO8GkjC0/giphy.gif",
      "https://media.giphy.com/media/l1J3preURPiwjRPvG/giphy.gif",
      "https://media.giphy.com/media/8cdZit2ZcjTri/giphy.gif",
      "https://media.giphy.com/media/3o7btNa0RUYa5E7iiQ/giphy.gif",
      "https://media.giphy.com/media/V88pTEefkoOFG/giphy.gif",
      "https://media.giphy.com/media/rfWAomOTPeOo8/giphy.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} BOOMED`,
          image: {
            url: bombs[Math.floor(Math.random() * bombs.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "/unban") {
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "all") {
      message.guild.fetchBans().then(zg => {
        zg.forEach(NoNo => {
          message.guild.unban(NoNo);
        });
      });
      return message.channel.send("**✅ Unbanned all members **");
    }
    if (!args)
      return message.channel.send("**Please Type the member ID / all**");
    message.guild
      .unban(args)
      .then(m => {
        message.channel.send(`**✅ Unbanned ${m.username}**`);
      })
      .catch(stry => {
        message.channel.send(
          `**🙄 - I can't find \`${args}\` in the ban list**`
        );
      });
  }
});

client.on("message", message => {
  if (message.content === prefix + "/info roles") {
    if (!message.channel.guild) return;
    var roles = message.guild.roles.map(roles => `${roles.name}, `).join(" ");
    const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setImage(
        "https://cdn.discordapp.com/attachments/805927580930146325/807011849827909662/591025441004060684.gif"
      )
      .addField("Roles:", `**[${roles}]**`);
    message.channel.sendEmbed(embed);
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "/info invites")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author;
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      message.channel.send(`${user} has ${inviteCount} invites.`);
    });
  }
});

client.on("message", message => {
  if (message.content === prefix + "/help") {
    var addserver = `https://discord.gg/n8kXNUG2jn`;
    var SUPPORT = `https://discord.gg/9jyZWX4Fmc`;
    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setThumbnail(message.author.avatarURL)
      .setFooter("")
      .setImage(
        "https://cdn.discordapp.com/attachments/796750980469358622/809873763444850698/image0.gif"
      )
      .setColor("RANDOM").setDescription(` 
    
```MODIRATOR```
 :point_up::point_up::point_up::point_up:

=========================
🌉| /avatar
=========================
🛠| /p
=========================
🔇| /mute
🔊| /unmmute
=========================
🔕| /deafend
🔉| /undeafend
=========================
✔| /info
=========================
❄| /about
=========================
📝| /rooms
=========================
🔒| /lock
🔓| /unlock
=========================
💎| /id
=========================
🛫| /ban
🛬| /unban
=========================
🕐| /date
🥶| /count
=========================
:man_running:| /move {user}
:earth_asia: | /move all

||GIFS COMMANDS||
  :point_up::point_up::point_up::point_up:

=========================
😅| /meme
🎴| /boomb
=========================
🌝| /man gif
🦄| /girl gif
=========================
💔| /sad gif
❤| /couple


**[ invite ]**
**[ click here ](https://discord.com/api/oauth2/authorize?client_id=733469607175913593&permissions=8&scope=bot)** 
**[ support ]**
**[ click here ](https://discord.gg/9jyZWX4Fmc)**`)
    
 message.channel.sendEmbed(embed);
  }
});


client.on("message", message => {
  if (message.content.startsWith(prefix + "/sad gif")) {
    let sads = [
      "https://media.discordapp.net/attachments/786897045952790550/798719676795715614/Zeyrox_43.gif",
      "https://media.discordapp.net/attachments/786897045952790550/799435191323852820/luisa1-1.gif",
      "https://media.discordapp.net/attachments/786897045952790550/799435254011920404/a_caf4fdc4f3e516fcabec0022078c38ab.gif",
      "https://media.discordapp.net/attachments/786897045952790550/804040753072439326/038842117446a0c76a922d23727942b1.gif",
      "https://media.discordapp.net/attachments/786897045952790550/787581071079768074/image0.gif",
      "https://media.discordapp.net/attachments/786897045952790550/787581004424544256/image0.gif",
      "https://media.discordapp.net/attachments/786897045952790550/787580974975549450/image0.gif",
      "https://media.discordapp.net/attachments/786897045952790550/787580943627976704/image0.gif",
      "https://media.discordapp.net/attachments/786897045952790550/802930927784820766/Cedric_Anime_Gif_81.gif",
      "https://media.discordapp.net/attachments/786897045952790550/802722301984243712/a_66f26e072e89a58c1879c6fa27744bd7.gif",
      "https://media.discordapp.net/attachments/786897045952790550/801054305569865778/uzgun-4.gif",
      "https://media.discordapp.net/attachments/786897044483604490/806288916160315422/image0.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} **SAD GIFS**`,
          image: {
            url: sads[Math.floor(Math.random() * sads.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "/deafen")) {
    if (
      message.mentions.users.size === 0 &&
      message.mentions.roles.size === 0
    ) {
      return message.reply("**Menition member**❌").catch(console.error);
    }
    if (!message.guild.member(client.user).hasPermission("DEAFEN_MEMBERS")) {
      return message.reply("I dont have premission**❌").catch(console.error);
    }

    const deafenMember = member => {
      if (!member || !member.voiceChannel) return;
      if (member.serverDeaf)
        return message.channel.send(`${member} **دیفێند کرا**:x:`);
      member.setDeaf(true).catch(console.error);
      if (!message.member.hasPermission("DEAFEN_MEMBERS"))
        return message.channel
          .sendMessage("**You dont have DEAFEN_MEMBER**❌ ")
          .then(m => m.delete(5000));
    };

    message.mentions.users.forEach(user =>
      deafenMember(message.guild.member(user))
    );
    message.mentions.roles.forEach(role =>
      role.members.forEach(member => deafenMember(member))
    );
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "/undeafen")) {
    if (
      message.mentions.users.size === 0 &&
      message.mentions.roles.size === 0
    ) {
      return message.reply("**Please menition member**❌").catch(console.error);
    }
    if (!message.guild.member(client.user).hasPermission("DEAFEN_MEMBERS")) {
      return message
        .reply("**I dont undeafen member**❌ ")
        .catch(console.error);
      if (!message.member.hasPermission("DEAFEN_MEMBERS"))
        return message.channel
          .sendMessage("**You dont have premission Deafen member**❌ ")
          .then(m => m.delete(5000));
    }

    const undeafenMember = member => {
      if (!member || !member.voiceChannel) return;
      if (!member.serverDeaf) return message.channel.send(`${member} `);
      member.setDeaf(false).catch(console.error);
    };

    message.mentions.users.forEach(user =>
      undeafenMember(message.guild.member(user))
    );
    message.mentions.roles.forEach(role =>
      role.members.forEach(member => undeafenMember(member))
    );
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "/avatar")) {
    if (!message.channel.guild) return;
    var mentionned = message.mentions.users.first();
    var client;
    if (mentionned) {
      var client = mentionned;
    } else {
      var client = message.author;
    }
    const embed = new Discord.RichEmbed()
      .addField("Requested by:", "<@" + message.author.id + ">")
      .setColor("RANDOM")
      .setImage(`${client.avatarURL}`)
      .setFooter("");
    message.channel.sendEmbed(embed);
  }
});

client.on("message", message => {
  //Black jack
  if (!message.channel.guild) return;
  if (message.content == prefix + "/count")
    //Black jack
    var Black = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle("🌍| Info member", `__${message.guild.name}__`)
      .addBlankField(true) //Black jack
      .addField("Member count", `__${message.guild.memberCount}__`);
  message.channel.send(Black);
});

client.on("message", message => {
  if (message.content === prefix + "/date") {
    if (!message.channel.guild) return;
    var currentTime = new Date(),
      hours = currentTime.getHours() + 4,
      hours2 = currentTime.getHours() + 3,
      hours3 = currentTime.getHours() + 2,
      hours4 = currentTime.getHours() + 3,
      minutes = currentTime.getMinutes(),
      seconds = currentTime.getSeconds(),
      Year = currentTime.getFullYear(),
      Month = currentTime.getMonth() + 1,
      Day = currentTime.getDate();
    var h = hours;
    if (hours > 12) {
      hours -= 12;
    } else if (hours == 0) {
      hours = "12";
    }
    if (hours2 > 12) {
      hours2 -= 12;
    } else if (hours2 == 0) {
      hours2 = "12";
    }
    if (hours3 > 12) {
      hours3 -= 12;
    } else if (hours3 == 0) {
      hours3 = "12";
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    var suffix = "AM";
    if (hours >= 12) {
      suffix = "PM";
      hours = hours - 12;
    }
    if (hours == 0) {
      hours = 12;
    }

    var Date15 = new Discord.RichEmbed()
      .setThumbnail("https://i.imgur.com/ib3n4Hq.png")
      .setTitle("『TIME AND DATE』")
      .setColor("RANDOM")
      .setFooter("BLACK BOT")
      .setFooter(message.author.username, message.author.avatarURL)
      .addField("Time", "『" + hours2 + ":" + minutes + ":" + seconds + "』")

      .addField("Date", "『" + Day + "-" + Month + "-" + Year + "』");

    message.channel.sendEmbed(Date15);
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "/ban")) {
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel
        .send(" **you need the** ``BAN MEMBER`` **permission!**")
        .then(msg => msg.delete(3000));
    if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS"))
      return message.channel
        .send(" **I need the** ``BAN MEMBER ``  **permission!** ")
        .then(msg => msg.delete(3000));
    var mention = message.mentions.members.first();
    if (!mention)
      return message.channel.send(`** MENTION SOMEONE : :no_entry_sign: **`);
    let edward = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription(`**${mention} | Has been Banned From The Server! **`)
      .setColor("#000000")
      .setColor("#36393e")
      .setTimestamp()

      .setFooter(mention.user.username, mention.user.avatarURL);
    mention
      .ban()
      .then(member => {
        // Successmessage
        message.channel.sendEmbed(edward);
      })
      .catch(error => {
        let errora = new Discord.RichEmbed()
          .setColor("#000000")
          .setColor("#36393e")
          .setDescription(
            `**I Cant Ban ${mention} Its ` + "``" + `${error}` + "``" + `**`
          );
        message.channel.sendEmbed(errora);
      });
  }
});

// Events

client.login("NzMzNDY5NjA3MTc1OTEzNTkz.XxDmzQ.nuuLPHZZfwJz67HuxMLOGcxebno");
