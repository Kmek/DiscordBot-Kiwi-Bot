// Kate Keefe
// DiscordBot-Kiwi-Bot

const Reminder = require("./Reminder.js");
const fs = require('fs');

module.exports = {
    importReminders: function(remindersArray) {
        let data = JSON.parse(fs.readFileSync("savedReminders.json"));
        console.log("\nImporting " + data.length + " saved reminders...");
        for (let i = 0; i < data.length; i++) {
            let d = data[i];
            console.log("\t" + d.name)
            remindersArray.push(new Reminder(d.name, new Date(d.when), d.description, d.increment));
        }
        
        return remindersArray;
    },

    exportReminders: function(remindersArray) {
        console.log("\nExporting " + remindersArray.length + " saved reminders...");
        fs.writeFileSync("savedReminders.json", JSON.stringify(remindersArray, null, "\t"))
    }
}