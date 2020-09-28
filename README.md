# DiscordBot-Kiwi-Bot

### Goals:
<!-- This "self-bot" type bot is against Discord ToS and isn't possible... :(
- Change status to "In class: className" during my scheduled class
- Change back to original status when class ends
- Set myself to busy during class so I don't get notifications in class, change back afterwards -->
<!-- - Automatically nickname the bot itself? -->
- Send me a reminder message a set time before a class starts
   - Add the option to turn reminders off for the day (like for a holiday or snowday in the middle of the week)
   - Reminders will be saved as javascript classes (will be defined in `Reminder.js`)
   - Reminders will persist outside the bot in a file somewhere, to be saved between sessions
   - Reminders can be created and removed through commands
- Display weather info for the day?
- Display menu info for Philly and HoCo?
   - Save a list of menu items I like and don't like, so they can get highlighted when printing the menu (this persists in a file somewhere)
   - Option to add and remove items to these three categories (good (green), bad (red), ehh (yellow))
- Add prefix variable to config file (maybe `/`?)

---

## Current Commands:

- `ping` - Pings the bot, who responds with "pong!"
- `shutdown` - Properly closes the bot's program
