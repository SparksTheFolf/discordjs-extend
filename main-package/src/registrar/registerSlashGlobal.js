module.exports = (token, clientId, commandsPath) => {
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