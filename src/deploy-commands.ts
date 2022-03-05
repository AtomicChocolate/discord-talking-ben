export default {};

const fs = require("node:fs");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { clientId, guildId, token } = require("./config.json");

const commands = [] as JSON[];

const commandFiles = fs
	.readdirSync(`${__dirname}/commands`)
	.filter((file: string) => file.endsWith(".ts"));

for (const file of commandFiles) {
	const command = require(`${__dirname}/commands/${file}`);

	commands.push(command.data.toJSON());
}

const rest = new REST({ version: "9" }).setToken(token);

rest
	.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log("Successfully registered application commands."))
	.catch(console.error);
