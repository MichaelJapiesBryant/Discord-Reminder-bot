const Discord = require('discord.js')
const bot = new Discord.Client();

const discord_token = process.env.token;

bot.on('ready', () => {
    console.log('This bot is online!');
})

bot.login(token);