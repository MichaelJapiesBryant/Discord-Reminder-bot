// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    const channel = client.channels.cache.get("547610660230397954");
    channel.send(":chocolate_bar: @everyone It's choccy time!!!!!! :chocolate_bar:");
});

client.login(process.env.token);