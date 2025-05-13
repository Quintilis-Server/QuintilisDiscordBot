const {SlashCommandBuilder} = require("discord.js");
const dotenv = require('dotenv');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('update_prefix')
        .setDescription('Changes the bot Prefix')
        .addStringOption((option) =>
            option
                .setName('update_prefix')
                .setDescription('Set a new prefix to the bot')
                .setRequired(true)
        ),
    run: ({interaction}) => {
        try {
            const setCustomPrefixText = interaction.options.getString('update_prefix');
            const newPrefixCustomPrefix = {CUSTOM_PREFIX: setCustomPrefixText};
            dotenv.populate(process.env, newPrefixCustomPrefix, {override: true, debug:true});
            console.log(`New custom prefix: ${process.env.CUSTOM_PREFIX}`);
            console.log(`Guild id with custom prefix: ${interaction.guild.id}`)
            interaction.reply("Prefix updated!");
        } catch (e) {
            interaction.reply("Error: ", e);
        }

    },
    options: {
        devOnly: true,
    }
}