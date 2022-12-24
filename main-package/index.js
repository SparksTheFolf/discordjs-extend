const Discord = require('discord.js');
const fs = require('node:fs');
const path = require('path');
const { ActivityType } = require('discord.js');

require('dotenv').config();


module.exports = {    

    createClient: (TOKEN, intents) => {
      const client = new Discord.Client({ intents });
      client.login(TOKEN);
      return client;
    },

    showClientInfo: (aboutclient, guildSize, usersSize) => {
        console.log('\n');
        console.log('Loading client...');
        console.log(aboutclient);
        console.log(`Serving ${guildSize} servers`);
		console.log(`Serving ${usersSize} users`);
        console.log('Client loaded!');
        console.log('\n');
    },

    setPresence: (client, status, activityType, activityName) => {
        client.user.setPresence({
            activities: [{ name: activityName, type: ActivityType.Watching }],
            status: status,
          });

        console.log(`Presence set to ${status} ${activityType} ${activityName}`);
      },

        handleCommands: (client, commandsPath) => {

            const fs = require('node:fs');
            const {Collection } = require('discord.js');

            client.commands = new Collection();

            const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
            for (const file of commandFiles) {
                const command = require(`${commandsPath}/${file}`);
                client.on('interactionCreate', async interaction => {
                    if (!interaction.isCommand()) return;
                    if (interaction.commandName === command.data.name) {
                        await command.execute(interaction);
                    }
                });
                console.log(`Loaded command(s) ${command.data.name}!`);
            }

        },

        registerSlashGlobal(token, clientId, commandsPath) {
            const { REST, Routes } = require('discord.js');
            const fs = require('node:fs');

            const commands = [];
            const commandFiles = fs.readdirSync(commandsPath + '/').filter(file => file.endsWith('.js'));

            for (const file of commandFiles) {
                const command = require(commandsPath + '/' + `${file}`);
                commands.push(command.data.toJSON());
            }

            // Construct and prepare an instance of the REST module
            const rest = new REST({ version: '10' }).setToken(token);

            // and deploy your commands!
            (async () => {
                try {
                    console.log(`Started refreshing ${commands.length} application (/) commands.`);

                    // The put method is used to fully refresh all commands in the guild with the current set
                    const data = await rest.put(
                        Routes.applicationCommands(clientId),
                        { body: commands },
                    );

                    console.log(`Successfully reloaded ${data.length} application (/) commands.`);
                } catch (error) {
                    // And of course, make sure you catch and log any errors!
                    console.error(error);
                }
            })();
        }
        

    

   
}
