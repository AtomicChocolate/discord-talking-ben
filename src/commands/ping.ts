export default {};
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription("Replies with ping"),
	async execute(interaction) {
		await interaction.reply("ping");
		interaction.channel;
	},
};
