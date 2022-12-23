const Discord = require('discord.js');
const { Client, GatewayIntentBits, Collection, Events, ActivityType } = require('discord.js');

require('dotenv').config();



module.exports = {    
    // Function to create a new Discord client
    createClient: (TOKEN, intents) => {
      const client = new Discord.Client({ intents });
      client.login(TOKEN);
      return client;
    },

    createSlashCommand: (client, commandName, callback) => {
        client.on('message', (message) => {
          if (message.content.startsWith(`/${commandName}`)) {
            callback(message);
          }
        });
    }
}
