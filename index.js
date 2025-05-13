require('dotenv/config');
const {Client, GatewayIntentBits} = require('discord.js');
const {CommandKit} = require('commandkit');
const path = require('path');

const client = new Client({
    intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
});


new CommandKit({
    client,
    eventsPath: path.join(__dirname, 'events'),
    commandsPath: path.join(__dirname, 'commands'),
    //validationsPath: path.join(__dirname, 'validations'),
    devGuildIds: ['1352472063197315156','546567498783391744'],
    devUserIds: ['449324241704452107', '280139037367468032'],
    bulkRegister: true,
})

client.login(process.env.DISCORD_TOKEN);
