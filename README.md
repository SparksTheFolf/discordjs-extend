
# Easy Discord Js

Make development with disord.js v14 easier with direct-discord-bot


## Authors

- [@SparksTheFolf](https://www.github.com/SparksTheFolf)


## Installation

Install direct-discord-bot with npm js

```bash
  npm install direct-discord-bot
```
    
## Deployment

To deploy this project from your main index.js file use

```bash
  node .
```


## Example index.js

Here is the most basic and simple discord bot without any commands being registerd

```javascript
const {createClient, showClientInfo, setPresence} = require('direct-discord-bot')
const path = require('node:path');

const client = createClient(process.env.TOKEN, ['Guilds', 'GuildMessages']);

client.on('ready', () => {
    showClientInfo(client.user.tag, client.guilds.cache.size, client.users.cache.size);
    setPresence(client, 'online', 'WATCHING', 'Direct Discord Bots');
});
```


## Documentation

[Documentation](https://wuffs.net/discordbot)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`TOKEN`

`CLIENT_ID`

`GUILD_ID`


## License

[MIT](https://choosealicense.com/licenses/mit/)

