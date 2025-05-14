const GuildPrefix = require("../../Models/GuildPrefix.js");
const mongoose = require("mongoose");


module.exports = async (guild) =>{

    console.log(`Joined the new Guild: ${guild.name} (id: ${guild.id})`);


    const guildId = guild.id;
    try{
        let foundGuild = await GuildPrefix.findOne({guildId});
        if (foundGuild) {
            console.log(`Guild found on Database`);
        } else {
            console.log(`Guild not found on Database`);
            const defaultPrefix = "!";
            const createdGuild = await GuildPrefix.create({
                guildId: guildId,
                Prefix: defaultPrefix
            });
            console.log("Created Guild on database");
            console.log(createdGuild);
        }
    } catch (e) {
        console.log(`Error: ${e}`);
    }

};