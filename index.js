require('dotenv').config();

const GuardianClient = require('./core/client.js');
const client = new GuardianClient();

client.on("ready", () => {
    
  const guild = client.guilds.cache.get('771800300445106186')
  console.log(`(READY EVENT)Statusas atnaujintas i (Kiemo 24/7 Admins) Tipas: WATCHING Botas: ${client.user.username}! Members: ${guild.memberCount.toLocaleString()}`)
  client.user.setActivity(`${guild.memberCount.toLocaleString()} zmones `, { type: 'WATCHING'})
    
});
client.on("guildMemberAdd", () => {
    
  const guild = client.guilds.cache.get('771800300445106186')
  console.log(` (JOIN EVENT) Statusas atnaujintas i (Kiemo 24/7 Admins) Tipas: WATCHING Botas: ${client.user.username}! Members: ${guild.memberCount.toLocaleString()}`)
  client.user.setActivity(`${guild.memberCount.toLocaleString()} zmones `, { type: 'WATCHING'})
    
});

client.on("guildMemberRemove", () => {
    
  const guild = client.guilds.cache.get('771800300445106186')
  console.log(` (LEAVE EVENT) Statusas atnaujintas i (Kiemo 24/7 Admins) Tipas: WATCHING Botas: ${client.user.username}! Members: ${guild.memberCount.toLocaleString()}`)
  client.user.setActivity(`${guild.memberCount.toLocaleString()} zmones `, { type: 'WATCHING'})
    
});




client.login(process.env.BOT_TOKEN);
