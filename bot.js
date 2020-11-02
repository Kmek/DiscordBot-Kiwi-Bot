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


// idea: trying to get weather
// var request = require("request");
// request({
//   uri: "https://www.wunderground.com/hourly/us/nh/durham",
// }, function(error, response, body) {
//   console.log(body);
// });

// const request = require('request');
// const options = {
//   url: 'https://api.github.com/repos/request/request',
//   headers: {
//     'User-Agent': 'request'
//   }
// };
// function callback(error, response, body) {
//   if (!error && response.statusCode == 200) {
//       console.log(body)
//     // const info = JSON.parse(body);
//     // console.log(info.stargazers_count + " Stars");
//     // console.log(info.forks_count + " Forks");
//   }
// }
// request(options, callback);

/////////////////////////////////////////

// Holds all of the reminders
var reminders = lib.importReminders([]);
// console.log(reminders);


// Saves the reminders to their saves.json file
lib.exportReminders(reminders);
// let rem = new Reminder("test reminder", [new Date("November 1, 2020 08:50:00")], 10, "this is my description");
// let rem2 = new Reminder("test reminder", [new Date("November 1, 2020 08:50:00")], 10, "this is my description");
// // console.log(JSON.stringify([rem, rem2]))
// // console.log(JSON.stringify(reminders))
// fs.writeFileSync("savedReminders.json", JSON.stringify([rem, rem2]))

// fixme remove
return

// Go!
const client = new Discord.Client();
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