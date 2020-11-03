// Kate Keefe
// DiscordBot-Kiwi-Bot

// This is a class for storing each reminder
module.exports = class Reminder {
    constructor(name, when, description, increment) {
        this.name = name; // Name of the reminder, ex: "CS416"
        this.when = when; // When the class is, ex month day and time. Times are in military time, so no confusion with am and pm. 
        this.description = description // Description of the reminder, ex: "Go to class! 3:10"
        this.increment = increment; // The number of days to increase the reminder by, like 1 for every day, or 7 for every week

        this.bringUpToDate(); // Pick up slack if the reminder has been turned off for awhile
    }

    bringUpToDate() {
        var now = new Date();

        while (this.when < now) {
            // console.log(this.when)
            this.incrementDate();
            // console.log(this.when)
        }
    }

    getDate() {
        return this.when;
    }

    getDescription() {
        return this.description;
    }

    incrementDate() {
        this.when.setDate(this.when.getDate() + this.increment);
        // idea loop until the new date is in the future, to pick up the slack if the reminders were stopped for awhile, 
        // maybe as a different function that would be called when the reminders are loaded in from the json?
    }

    toString() {
        return this.name + " (" + this.when + ") " + this.description;
    }

    toMessage() {
        return this.name + " (" + this.when.getHours() + ":" + this.when.getMinutes() + ") " + this.description;
    }
}