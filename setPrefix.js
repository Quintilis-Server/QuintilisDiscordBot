const GuildPrefix = require("./Models/GuildPrefix");

async function prefix(guildId) {
    const foundGuild = await GuildPrefix.findOne({guildId});
    return foundGuild.Prefix;
}

module.exports = {
    prefix: prefix
};