module.exports = (message, client) => {
    let lowerMessage = message.content.toString().toLowerCase();
    if (message.author.tag !== client.user.tag) {
        if (lowerMessage.startsWith(process.env.PREFIX)) {
            if (lowerMessage.startsWith(process.env.PREFIX + 'rafael')) {
                if (lowerMessage.startsWith(process.env.PREFIX + 'rafaelultra')) {
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