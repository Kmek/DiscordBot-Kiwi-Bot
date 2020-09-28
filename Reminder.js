// Kate Keefe
// DiscordBot-Kiwi-Bot

// This is a class for storing each reminder
module.exports = class Reminder {
    constructor(name, when, reminderTime) {
        this.name = name; // Name of the reminder, ex: "CS416"
        this.description = description // Description of the reminder, ex: "Go to class! 3:10"
        this.when = when; // Array of when the class is, ex 3:10. The dates don't matter, just the weekdays and times. Times are in military time, so no confusion with am and pm. 
        this.reminderTime = reminderTime; // How many minutes to remind the user before the given time
    }
}