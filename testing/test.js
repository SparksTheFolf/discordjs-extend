const {createClient, showClientInfo, setPresence, handleCommands, registerSlashGlobal, registerSlashGuild} = require('direct-discord-bot')
const path = require('node:path');

const client = createClient(process.env.TOKEN, ['Guilds', 'GuildMessages']);

client.on('ready', () => {
    showClientInfo(client.user.tag, client.guilds.cache.size, client.users.cache.size);
    setPresence(client, 'online', 'WATCHING', 'V14.6.3 DISCORD.JS');
    handleCommands(client, path.join(__dirname, 'commands'));


    if (process.argv[2] === '-s') {
       registerSlashGlobal(process.env.TOKEN, process.env.CLIENT_ID, path.join(__dirname, 'commands'));
    }

});
