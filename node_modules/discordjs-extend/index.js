const Discord = require('discord.js');
const { Client, GatewayIntentBits, Collection, Events, ActivityType } = require('discord.js');

module.exports = {
    // Function to create a new Discord client
    createClient: (token, intents) => {
      const client = new Discord.Client({ intents });
      client.login(token);
      return client;
    }



}
