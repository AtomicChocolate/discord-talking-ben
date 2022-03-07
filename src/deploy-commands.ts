export default {};

require("dotenv").config();
const fs = require("node:fs");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");

const commands = [] as JSON[];

const commandFiles = fs
	.readdirSync(`${__dirname}/commands`)
	.filter((file: string) => file.endsWith(".ts"));

for (const file of commandFiles) {
	const command = require(`${__dirname}/commands/${file}`);

	commands.push(command.data.toJSON());
}

const rest = new REST({ version: "9" }).setToken(process.env.TOKEN);

rest
	.put(Routes.applicationCommands(process.env.CLIENTID), { body: commands })
	.then(() => console.log("Successfully registered application commands."))
	.catch(console.error);
