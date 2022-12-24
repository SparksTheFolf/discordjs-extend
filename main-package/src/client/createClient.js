module.exports = (TOKEN, intents) => {
    const Discord = require('discord.js');
    const client = new Discord.Client({ intents });
    client.login(TOKEN);
    return client;
}