const {SlashCommandBuilder} = require("discord.js");
const {prefix} = require("../setPrefix");


module.exports = {
    data: new SlashCommandBuilder()
        .setName('showprefix')
        .setDescription('Show the bot prefix'),

    run: async ({interaction}) => {
        const localPrefix = await prefix(interaction.guild.id);
        interaction.reply(`Bot prefix: ${localPrefix}`);
    },
    options: {
        devOnly: true,
    }
}