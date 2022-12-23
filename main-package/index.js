const Discord = require('discord.js');

module.exports = {
  createBot: (token) => {
    const client = new Discord.Client();
    client.login(token);
    return client;
  }
}