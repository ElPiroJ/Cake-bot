const Discord = require('discord.js')
require("dotenv").config()

const generateImage = require("./generateImage")

const client = new Discord.Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES",
    "GUILD_MEMBERS",
  ]
})

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`)
})


const WelcomeChannelId = "781437633984593960"

client.on("guildMemberAdd", async (member) => {
  const img = await generateImage(member)
  member.guild.channels.cache.get(WelcomeChannelId).send({
    content: `Welcome to the server <@${member.id}> \n Enter the <#827114537059876865> to get roles \n Make sure to read the rules and have fun!`,
    files: [img]
  })
  
})

client.login(process.env.TOKEN)