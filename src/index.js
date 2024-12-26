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

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'embed') {
    const embed = new EmbedBuilder()
      .setThumbnail('https://avatars.githubusercontent.com/u/192787967?s=96&v=4')
      .setTitle('Oi, Welcome to Mendowa Server Bruv!')
      .setDescription(`This here's the spot, innit? Vibes are top-tier.`)
      .setColor('Random')
      .addFields(
        { name: 'Founder', value: 'Big boss man of Mendowa corp, yeah?', inline: true },
        { name: 'Co-Founder', value: 'Second-in-command, still running the ting.', inline: true },
        { name: 'Tech Nerds', value: 'Proper whizzes, love their gadgets, y’know.', inline: true },
        { name: 'Orang Ganteng', value: 'This one’s for the stunners, keepin’ it suave.', inline: true },
        { name: `Lil' G`, value: 'This role’s for the real ones—verified and vibin’ in the crew.', inline: true }
      );

    await interaction.reply({ embeds: [embed] });
  }
});

client.on('messageCreate', (messege) =>{
  if (messege.content === 'embed') {
    const embed = new EmbedBuilder()
      .setThumbnail('https://avatars.githubusercontent.com/u/192787967?s=96&v=4')
      .setTitle('Oi, Welcome to Mendowa Server Bruv!')
      .setDescription(`This here's the spot, innit? Vibes are top-tier.`)
      .setColor('Random')
      .addFields(
        { name: 'Founder', value: 'Big boss man of Mendowa corp, yeah?', inline: true },
        { name: 'Co-Founder', value: 'Second-in-command, still running the ting.', inline: true },
        { name: 'Tech Nerds', value: 'Proper whizzes, love their gadgets, y’know.', inline: true },
        { name: 'Orang Ganteng', value: 'This one’s for the stunners, keepin’ it suave.', inline: true },
        { name: `Lil' G`, value: 'This role’s for the real ones—verified and vibin’ in the crew.', inline: true }
      );

    messege.channel.send({ embeds: [embed] });
  }
});

client.login(process.env.TOKEN);