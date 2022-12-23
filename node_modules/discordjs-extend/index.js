const Discord = require('discord.js');
const fs = require('node:fs');
const path = require('path');
const { Client, GatewayIntentBits, Collection, Events, ActivityType, REST, Routes  } = require('discord.js');

require('dotenv').config();


module.exports = {    
    // Function to create a new Discord client
    createClient: (TOKEN, intents) => {
      const client = new Discord.Client({ intents });
      client.login(TOKEN);
      return client;
    },

    showClientInfo: (client) => {
        console.log('Ready!');
        console.log(client);
    },

    registerSlashGuild: (TOKEN, GUILD_ID, CLIENT_ID) => {
        require('dotenv').config();

        const commands = [];
        // Grab all the command files from the commands directory you created earlier
        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
        
        // Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
        for (const file of commandFiles) {
            const command = require(`./commands/${file}`);
            commands.push(command.data.toJSON());
        }
        
        // Construct and prepare an instance of the REST module
        const rest = new REST({ version: '10' }).setToken(TOKEN);
        
        // and deploy your commands!
        (async () => {
            try {
                console.log(`Started refreshing ${commands.length} application (/) commands.`);
        
                // The put method is used to fully refresh all commands in the guild with the current set
                const data = await rest.put(
                    Routes.applicationCommands(CLIENT_ID, GUILD_ID),
                    { body: commands },
                );
            
        
            // output to the console each file name that was successfully deployed
                for (const file of commandFiles) {
                    console.log(`Successfully reloaded ${file}`);
                }
        
                console.log(`Successfully reloaded ${data.length} application (/) commands.`);
            } catch (error) {
                // And of course, make sure you catch and log any errors!
                console.error(error);
            }
        })();
    },

    registerSlashGlobal: (TOKEN, CLIENT_ID) => {
        require('dotenv').config();

        const commands = [];
        // Grab all the command files from the commands directory you created earlier
        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
        
        // Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
        for (const file of commandFiles) {
            const command = require(`./commands/${file}`);
            commands.push(command.data.toJSON());
        }
        
        // Construct and prepare an instance of the REST module
        const rest = new REST({ version: '10' }).setToken(TOKEN);
        
        // and deploy your commands!
        (async () => {
            try {
                console.log(`Started refreshing ${commands.length} application (/) commands.`);
        
                // The put method is used to fully refresh all commands in the guild with the current set
                const data = await rest.put(
                    Routes.applicationCommands(CLIENT_ID),
                    { body: commands },
                );
            
        
            // output to the console each file name that was successfully deployed
                for (const file of commandFiles) {
                    console.log(`Successfully reloaded ${file}`);
                }
        
                console.log(`Successfully reloaded ${data.length} application (/) commands.`);
            } catch (error) {
                // And of course, make sure you catch and log any errors!
                console.error(error);
            }
        })();
    },

    registerCommandsLocation: (location) => {

        const path = require('path');

        const commandsPath = path.join(location);
        const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
        // command handler
        for (const file of commandFiles) {
	    const filePath = path.join(commandsPath, file);
	    const command = require(filePath);
	    // Set a new item in the Collection with the key as the command name and the value as the exported module
	    if ('data' in command && 'execute' in command) {
		    client.commands.set(command.data.name, command);
	    } else {
		    console.log(`[WARNING] The command at ${location} is missing a required "data" or "execute" property.`);
    	}
        }   

    },


    createSlashCommand: (name, description, options) => {
        const command = new Discord.SlashCommandBuilder()
        .setName(name)
        .setDescription(description)
        .addOptions(options);
        return command;
    },

    createSlashSubCommand: (name, description, options) => {
        const command = new Discord.SlashCommandSubcommandBuilder()
        .setName(name)
        .setDescription(description)
        .addOptions(options);
        return command;
    },

    createSlashSubCommandGroup: (name, description, options) => {
        const command = new Discord.SlashCommandSubcommandGroupBuilder()
        .setName(name)
        .setDescription(description)
        .addOptions(options);
        return command;
    },

    createSlashCommandOption: (type, name, description, required, choices) => {
        const option = new Discord.SlashCommandBuilder()
        .setName(name)
        .setDescription(description)
        .addOptions(options);
        return command;
    },

    createSlashCommandOptionString: (name, description, required, choices) => {
        const option = new Discord.SlashCommandStringOption()
        .setName(name)
        .setDescription(description)
        .setRequired(required)
        .addChoices(choices);
        return option;
    }

   
}
