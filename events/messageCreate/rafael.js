const {prefix} = require('../../setPrefix.js');

module.exports = async (message, client) => {
    let lowerMessage = message.content.toString().toLowerCase();
    const localPrefix = await prefix(message.guild.id);
    if (message.author.tag !== client.user.tag) {
        if (lowerMessage.startsWith(localPrefix)) {
            if (lowerMessage.startsWith(localPrefix + 'rafael')) {
                if (lowerMessage.startsWith(localPrefix + 'rafaelultra')) {
                    message.reply('ULTRA GAY!!!!!');
                    return 0;
                } else {
                    message.reply('GAY!!!!!');
                    return 0;
                }
            }
        }
    }
};