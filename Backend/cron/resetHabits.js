const cron = require("node-cron");
const Habit = require("../models/Habit");

cron.schedule("30 23 * * *", async () => {
  try {
    await Habit.updateMany({}, { done: false });
    console.log(" Habits reset at 11:30 PM");
  } catch (err) {
    console.error("❌ Reset failed:", err.message);
  }
});
