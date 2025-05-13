module.exports = {
    data: {
        name: 'uptime',
        description: 'Replies with bot uptime',
    },
    run: ({interaction}) =>{
        const uptime = interaction.client.uptime;
        const seconds = Math.floor((uptime / 1000) % 60);
        const minutes = Math.floor((uptime / (1000 * 60)) % 60);
        const hours = Math.floor((uptime / (100 * 60 * 60)) % 60);
        const days = Math.floor((uptime / (1000 * 60 * 60 * 24)) % 60);

        const uptimeString = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`
        interaction.reply("Uptime: " + uptimeString);
    },
    options: {
        devOnly: true,
    }
}