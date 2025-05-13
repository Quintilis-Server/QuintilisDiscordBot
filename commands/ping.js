module.exports = {
    data: {
        name: 'ping',
        description: 'Replies with "Im Here"',
    },
    run: ({interaction, client}) => {
        interaction.reply(`I'm Here after ${client.ws.ping}ms`);
    },
    options: {
        devOnly: true,
    }
}