require('dotenv').config();

const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');  // Use GatewayIntentBits in v14

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers, 
    GatewayIntentBits.MessageContent, 
    GatewayIntentBits.GuildMessages,
  ],
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', (msg) =>{
  if (msg.author.bot) {
    return;
  }

  if (msg.content === 'hello') {
    msg.reply(`Yo ${client.user.tag} Here! How i can help you today ${msg.author}`);
  } else if (msg.content === 'Apakah aleg gila?') {
    msg.reply(`Iya dia gila!`);
  }
});

client.on('interactionCreate', (interaction) =>{
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'embed') {
    const embed = new EmbedBuilder()
    .setTitle('Embed title')
    .setDescription('This is an embed desscription');

    interaction.reply({ embeds: [embed] });
  }
});

client.login(process.env.TOKEN);