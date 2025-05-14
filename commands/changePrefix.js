const {SlashCommandBuilder} = require("discord.js");
const GuildPrefix = require("../Models/GuildPrefix");
module.exports =  {
    data: new SlashCommandBuilder()
        .setName('update_prefix')
        .setDescription('Changes the bot Prefix')
        .addStringOption((option) =>
            option
                .setName('new_prefix')
                .setDescription('Set a new prefix to the bot')
                .setRequired(true)
        ),
    run: async ({interaction}) => {
        try {

            const guildId = interaction.guild.id;
            const setCustomPrefixText = interaction.options.getString('new_prefix');

            let foundGuild = await GuildPrefix.findOne({guildId});


            if (foundGuild) {
                console.log(`Guild found on Database`);
                try {
                    const updatedPrefix = await GuildPrefix.updateOne({guildId: guildId}, {Prefix: setCustomPrefixText});
                    console.log("Prefix updated!");
                    interaction.reply(`Prefix updated! \nNew prefix: ${setCustomPrefixText}`);
                    console.log(updatedPrefix);
                } catch (e) {
                    console.log(e);
                }
            } else {
                console.log(guildId.name);
                console.log(`Guild not found on Database`);
            }
        } catch (e) {
            interaction.reply("Error: ", e);
        }
    },
    options: {
        devOnly: true,
    }
}