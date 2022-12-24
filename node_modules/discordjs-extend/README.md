
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


## Documentation

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`TOKEN`

`CLIENT_ID`

`GUILD_ID`

