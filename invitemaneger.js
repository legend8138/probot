
////// code invite vr 12 by hell///////
client.on("message", message => {
  if (message.content === prefix + "/invite") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
const invites = {};
const wait = require("util").promisify(setTimeout);
client.on("ready", () => {
  wait(1000);
  client.guilds.cache.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  }); 
});
///////////////////
client.on("guildMemberAdd", member => {
  member.guild.fetchInvites().then(guildInvites => {
    const gamer = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => gamer.get(i.code).uses < i.uses);
    const inviter = client.users.cache.get(invite.inviter.id);
    const channel = member.guild.channels.cache.find(
      channel => channel.name === "𝐈𝐧𝐯𝐢𝐭𝐞𝐬" 
    );
    channel.send(
      `__**<@${member.id}> **|invite kra la layan** | <@${inviter.id}> | **Zhmaray henan** |${invite.uses}**__`
    );
  });
});
////////////////
