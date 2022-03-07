# Discord Talking Ben

A simple Discord bot that replicates the telephone feature of Talking Ben where he says a random line in response to what the user says.
More of a learning project than an actual usable bot.

If you're running this yourself, make sure you add a `.env` file in the root directory of the repository with the values the bot needs. Like so:

```.env
CLIENTID=<the client id of your application>
TOKEN=<the secret token of your application's bot>
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

It's also available on [Docker Hub](https://hub.docker.com/repository/docker/atomicchocolate/discord-talking-ben).

### Made with

- Discord.js
- JavaScript
