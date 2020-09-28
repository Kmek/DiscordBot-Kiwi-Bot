// Kate Keefe
// DiscordBot-Kiwi-Bot

const Discord = require("discord.js");
const client = new Discord.Client();

// Go!
client.login("token");

// Shows when bot is ready to go
client.on("ready", () => {
    console.log("I am ready!");
});

// When the bot stops
client.on("disconnect", function(event){
    console.log(`The WebSocket has closed and will no longer attempt to reconnect`);
});

// Ping Pong test
client.on("message", (message) => {
    if (message.content.startsWith("ping")) {
        message.channel.send("pong!");
    } else if (message.content === "shutdown") {
        message.channel.send('Shutting down...').then(m => {
            console.log("Shutting down...");
            client.destroy();
        });
    }
});

// Start with "node bot.js"