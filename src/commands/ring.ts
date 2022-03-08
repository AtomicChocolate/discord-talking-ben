import { MessageAttachment } from "discord.js";

export default {};
const { SlashCommandBuilder } = require("@discordjs/builders");

const assetsLocation = `${__dirname}/../assets`;
const responsesLocation = `${__dirname}/../assets/conversation-random`;
const responses = [`yes.mp4`, `no.mp4`, `ugh.mp4`, `laugh.mp4`];

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
			const file = new MessageAttachment(
				`${responsesLocation}/${
					responses[Math.floor(Math.random() * responses.length)]
				}`
			);
			messages.first().reply({ files: [file] });
			Conversation(interaction);
		})
		.catch(() => {
			const file = new MessageAttachment(`${assetsLocation}/hangup.mp4`);
			interaction.followUp({ files: [file] });
			return;
		});
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName("ring")
		.setDescription("Have a telephone conversation with Ben"),
	async execute(interaction) {
		const file = new MessageAttachment(`${assetsLocation}/ring.mp4`);
		interaction.reply({ files: [file] }).then(() => {
			Conversation(interaction);
		});
	},
};
