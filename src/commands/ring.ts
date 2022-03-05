import { Interaction } from "discord.js";

export default {};
const { SlashCommandBuilder } = require("@discordjs/builders");

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName("ring")
		.setDescription("Have a telephone conversation with Ben"),
	async execute(interaction) {
		await interaction.reply("☎ (Dialing...)");
		await sleep(700);
		interaction.editReply("☎ .");
		await sleep(500);
		interaction.editReply("☎ ..");
		await sleep(500);
		interaction.editReply("☎ ...");
		await sleep(600);
		interaction.channel.send("Ben?").then(() => {
			const filter = (message) => interaction.user.id === message.author.id;

			interaction.channel
				.awaitMessages({ filter, time: 5000, max: 1, errors: ["time"] })
				.then((messages) => {
					interaction.channel.send("Insert random message here...");
				})
				.catch(() => {
					interaction.channel.send("☎ (He hung up.)");
				});
		});
	},
};
