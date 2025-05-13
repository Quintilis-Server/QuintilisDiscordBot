module.exports = (message, client) => {
    let lowerMessage = message.content.toString().toLowerCase();
    if (message.author.tag !== client.user.tag) {
        if (lowerMessage.startsWith(process.env.PREFIX)) {
            if (lowerMessage.startsWith(process.env.PREFIX + 'status')) {
                message.reply('Server Online');
                return 0;
            }
        }
    }
};