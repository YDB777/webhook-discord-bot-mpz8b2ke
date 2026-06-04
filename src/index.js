const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');

//
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Bot is active!'));
app.listen(port, '0.0.0.0', () => console.log(`Server listening on port ${port}`));

//
const client = new Client({ 
  intents: [GatewayIntentBits.Guilds] 
});

//
const botId = "1511974725625053254"; 

client.once('ready', () => {
  console.log(`Logged in successfully! Bot ID: ${botId}`);
});

//
client.login(process.env.TOKEN);
