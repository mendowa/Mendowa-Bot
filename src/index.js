require('dotenv').config();

const eventHandler = require('./handlers/eventHandler');
const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const client = new Client({ intents: [ GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages] });

eventHandler (client);

client.login(process.env.TOKEN);