const {prefix} = require('../../setPrefix.js');

module.exports = async (message, client) => {
    let lowerMessage = message.content.toString().toLowerCase();
    const localPrefix = await prefix(message.guild.id);
    if (message.author.tag !== client.user.tag) {
        if (lowerMessage.startsWith(localPrefix)) {
            if (lowerMessage.startsWith(localPrefix + 'status')) {
                message.reply('Server Online');
                return 0;
            }
        }
    }
};