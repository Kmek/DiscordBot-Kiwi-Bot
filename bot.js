// Kate Keefe
// DiscordBot-Kiwi-Bot

// Prerequisites:
const Discord = require("discord.js");
const config = require ("./config.json");
const Reminder = require('./Reminder.js');
const client = new Discord.Client();

// Go!
client.login(config.token);

// Shows when bot is ready to go
client.on("ready", async () => {
    console.log("\n" + client.user.username);

    console.log("I am ready!");
});

// Ping Pong test
client.on("message", (message) => {
    // Prevent bot from reading its own messages
    if (message.author.bot) return;

    // Ping Pong test
    if (message.content.startsWith("ping")) {
        message.channel.send("pong!");
    } else 
    
    // Shutdown
    if (message.content === "shutdown") {
        message.channel.send('Shutting down...').then(m => {
            console.log("Shutting down...");
            client.destroy();
        });
    }
});

// Start with "node bot.js"