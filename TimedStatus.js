// Kate Keefe
// DiscordBot-Kiwi-Bot

// This is a class for storing each timed status
module.exports = class TimedStatus {
    constructor(test) {
        this.test = test;

        
    }

    printTest() {
        return "Testing String: " + this.test;
    }
}