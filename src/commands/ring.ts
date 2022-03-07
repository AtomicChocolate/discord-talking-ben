export default {};
const { SlashCommandBuilder } = require("@discordjs/builders");

const responses = ["Yes.", "No.", "Hohoho!", "Heeugh.", "..."];

function Sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

function RandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function Conversation(interaction) {
	const filter = (message) => interaction.user.id === message.author.id;

	interaction.channel
		.awaitMessages({ filter, time: 12000, max: 1, errors: ["time"] })
		.then(async (messages) => {
			await Sleep(RandomInt(50, 400));
			interaction.channel.send(
				responses[Math.floor(Math.random() * responses.length)]
			);
			Conversation(interaction);
		})
		.catch(() => {
			interaction.channel.send("☎");
			return;
		});
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName("ring")
		.setDescription("Have a telephone conversation with Ben"),
	async execute(interaction) {
		await interaction.reply("☎ (Dialing...)");
		await Sleep(700);
		interaction.editReply("☎ .");
		await Sleep(500);
		interaction.editReply("☎ ..");
		await Sleep(500);
		interaction.editReply("☎ ...");
		await Sleep(600);
		interaction.channel.send("Ben?").then(() => {
			Conversation(interaction);
		});
	},
};
