// Kate Keefe
// DiscordBot-Kiwi-Bot

const Discord = require("discord.js");
const client = new Discord.Client();

// Shows when bot is ready to go
client.on("ready", () => {
  console.log("I am ready!");
});

// Ping Pong test
client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

// Go!
client.login("token");

// Start with "node bot.js"