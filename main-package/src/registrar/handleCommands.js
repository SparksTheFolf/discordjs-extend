module.exports = (client, commandsPath) => {

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

}