require('dotenv').config();
const { Client, IntentsBitField, ActivityType } = require('discord.js');

const commandManager = require('./commands/command-manager');

const myIntents = new IntentsBitField();
myIntents.add(IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMessages, IntentsBitField.Flags.MessageContent);

const bot = new Client({ intents: myIntents });

bot.on('ready', async () => {
  bot.user.setActivity('my 2 brain cells fighting each other', { type: ActivityType.Watching });
  
  console.log(`Logged in as ${bot.user.tag}!`);
})

bot.on('messageCreate', async (msg) => {
  commandManager.execute(bot, msg);
})

bot.login(process.env.TOKEN)