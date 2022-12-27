const { createSlashCommand, createClient} = require("direct-discord-bot");
const client = createClient(process.env.TOKEN, ['Guilds', 'GuildMessages']);


createSlashCommand (client, " commandName ", (interaction) => {
    interaction.reply("Hello world!");
});
