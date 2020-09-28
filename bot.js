// Kate Keefe
// DiscordBot-Kiwi-Bot

// Prerequisites:
const Discord = require("discord.js");
const config = require ("./config.json");
const Reminder = require("./Reminder.js");
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

    // console.log(message.channel.id);

    // Ping Pong test
    if (message.content.startsWith("ping")) {
        message.channel.send("pong!");
    } else 
    
    // Shutdown
    if (message.content === "shutdown") {
        message.channel.send("Shutting down...").then(m => {
            console.log("Shutting down...");
            clearInterval(timer);
            client.destroy();
        });
    }
});

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

// A 60 second interval will check if any reminders need to be sent every minute
var timer = setInterval(function() {
    var now = new Date();
    console.log("interval firing " + weekDays[now.getDay()] + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());
}, 6000);
// fixme: remember to change this to 60000 once testing is done

// Start with "node bot.js"