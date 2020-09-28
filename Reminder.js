// Kate Keefe
// DiscordBot-Kiwi-Bot

// This is a class for storing each reminder
module.exports = class Reminder {
    constructor(name, when, reminderTime) {
        this.name = name;
        this.when = when;
        this.reminderTime = reminderTime;
    }

    printTest() {
        return "Testing String: " + this.test;
    }
}