# Discord Talking Ben

A simple Discord bot that replicates the telephone feature of Talking Ben where he says a random line in response to what the user says.
More of a learning project than an actual usable bot.

If you're running this yourself, make sure you add a `config.json` file in `/src` with the values the bot needs. Like so:

```json
{
	"clientId": "<the client id of your application>",
	"token": "<the secret token of your application's bot>"
}
```

Then, you can run it:

```bash
npm start
```

Or as a Docker container:

```bash
docker-compose build
docker-compose up -d
```

### Made with

- Discord.js
- JavaScript
