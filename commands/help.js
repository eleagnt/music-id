exports.run = async (client, message) => {

    message.channel.send({
        embed: {
            color: 'RANDOM',
            author: { name: 'Bot Orders 🎵' },
            footer:{ text: 'Bot By sajad4syr YT' },
            fields: [
                { name: 'Music Orders', value: '`play`, `pause`, `resume`, `queue`, `clear-queue`, `shuffle`, `np`, `loop`, `volume`, `skip`, `stop`' },
            ],
            timestamp: new Date(),
        },
    });

};
