const { Client, GatewayIntentBits } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');

const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildVoiceStates 
  ] 
});




const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
















const token = process.env.token; // Use the secret token

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);

  const guildId = '1241352889310380082'; // Replace with your actual server ID
  const channelId = '1250809085096628316'; // Replace with your actual voice channel ID

  const guild = client.guilds.cache.get(guildId);
  if (!guild) return console.error('Guild not found');

  const channel = guild.channels.cache.get(channelId);
  if (!channel) return console.error('Channel not found');

  const connection = joinVoiceChannel({
    channelId: channel.id,
    guildId: guild.id,
    adapterCreator: channel.guild.voiceAdapterCreator,
  });

  console.log(`Joined voice channel: ${channel.name}`);
});

client.login(token);
