const mongoose =  require('mongoose');

const GuildPrefixSchema = new mongoose.Schema({
    guildId: {
        type: String,
        unique:true,
        required: true
    },
    Prefix: {
        type: String
    }
}, {timestamps: true});

const GuildPrefixModel = mongoose.model('GuildPrefix', GuildPrefixSchema);
module.exports = GuildPrefixModel;