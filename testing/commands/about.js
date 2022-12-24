const { SlashCommandBuilder , EmbedBuilder} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('about')
		.setDescription('About the bot!'),
	async execute(interaction) {
		const exampleEmbed = new EmbedBuilder()
	.setColor('Green')
	.setTitle('About Me!')
	.setURL('https://bots.wuffs.net/')
	.setAuthor({ name: 'Ascension', iconURL: 'https://i.imgur.com/uzbez2M.jpg', url: 'https://bots.wuffs.net/' })
	.setDescription('Inquire! :3')
	.setThumbnail('https://i.imgur.com/uzbez2M.jpg')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.setTimestamp()
	//set a footer for when the embed was created (optional)
	.setFooter({ text: 'Datestamp: ' + new Date() });

	await interaction.reply({ embeds: [exampleEmbed] });

	},
};