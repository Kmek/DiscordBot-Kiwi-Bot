// Kate Keefe
// DiscordBot-Kiwi-Bot

// Prerequisites:
const { Console } = require("console");
const Discord = require("discord.js");
const fs = require('fs');
// My Prerequisites:
const config = require("./config.json");
const Reminder = require("./Reminder.js");
const lib = require("./library.js");

// console.log(JSON.stringify(new Date("November 1, 2020 15:20:00")))
// return

// Holds all of the reminders
var reminders = lib.importReminders([]);

// Saves the reminders to their saves.json file
lib.exportReminders(reminders);

// Go!
const client = new Discord.Client();
client.login(config.token);

// Shows when bot is ready to go
client.on("ready", async () => {
    console.log("\n" + client.user.username);

    console.log("I am ready!");
});

// When the bot sees a new message:
client.on("message", (message) => {
    // Prevent bot from reading its own messages
    if (message.author.bot || !message.content.startsWith(config.prefix)) 
        return;

    // Ping Pong test
    if (message.content.startsWith(config.prefix + "ping")) {
        message.channel.send("pong!");
    } else 
    
    // Shutdown
    if (message.content.startsWith(config.prefix + "shutdown")) {
        message.channel.send("Shutting down...").then(m => {
            console.log("Shutting down...");
            clearInterval(timer);
            client.destroy();
        });
    } else 

    // ListReminders
    if (message.content.startsWith(config.prefix + "listReminders")) {
        for (let i = 0; i < reminders.length; i++) {
            message.channel.send(i + ": " + reminders[i].toString());
        }
    }

});

// Shortcut for getting the shortened date
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

// A 60 second interval will check if any reminders need to be sent every minute
var timer = setInterval(function() {
    var now = new Date();
    console.log("interval firing " + weekDays[now.getDay()] + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());

    for (let i = 0; i < reminders.length; i++) {
        // idea check if time is within ~10 minutes before sending a message
        // console.log((now.getTime() - reminders[i].when.getTime()))

        if (reminders[i].when < now) {
            // Send message
            client.channels.cache.get(config.channel).send("Reminder! " + reminders[i].getDescription());

            // Increment the sent reminder
            reminders[i].incrementDate();
        }
    }
}, 6000);
// fixme: remember to change this to 60000 once testing is done

// Start with "node bot.js"