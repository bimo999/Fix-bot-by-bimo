const { Client, GatewayIntentBits } = require('discord.js');

// Replace with the ID of the specific channel
const targetChannelId = '1241353038237536306';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
    // Ignore messages from the bot itself
    if (message.author.bot) return;

    // Check if the message is in the target channel
    if (message.channel.id === targetChannelId) {
        // Your auto response message
        const response = 'https://cdn.discordapp.com/attachments/1248603957262155877/1260223919890366516/line.gif?ex=668e8a7c&is=668d38fc&hm=192ecfba5cc1f2a0fb53d340b395fec190772b9fbb3c4fd0edbda8cf22501a50&';

        // Send the response
        message.channel.send(response);
    }
});

// Log in to Discord with your bot's token from environment variable
client.login(process.env.token);