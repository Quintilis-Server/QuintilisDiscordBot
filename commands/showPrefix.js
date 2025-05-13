const {SlashCommandBuilder} = require("discord.js");
const dotenv = require('dotenv');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('showprefix')
        .setDescription('Show the bot prefix'),

    run: async ({interaction}) => {
        const customPrefix = process.env.CUSTOM_PREFIX;
        const prefix = process.env.PREFIX;
        let newPrefix = '';
        if (customPrefix === "none"){
            newPrefix  = process.env.PREFIX;
            console.log(1);
        } else {
            newPrefix  = process.env.CUSTOM_PREFIX;
            console.log(2);
        }

        interaction.reply(`Bot prefix: ${newPrefix}`);
    },
    options: {
        devOnly: true,
    }
}