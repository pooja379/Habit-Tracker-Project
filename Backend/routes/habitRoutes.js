const express = require("express");
const Habit = require("../models/Habit");

const router = express.Router();

/* ---------- GET HABITS BY USER ---------- */
router.get("/:email", async (req, res) => {
  console.log("Backend GET for:", req.params.email); // ✅ DEBUG

  try {
    const habits = await Habit.find({
      userEmail: req.params.email
    });
    res.json(habits);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ---------- ADD HABIT ---------- */
router.post("/", async (req, res) => {
  try {
    const habit = new Habit(req.body);
    await habit.save();
    res.status(201).json(habit);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/* ---------- UPDATE HABIT ---------- */
router.put("/:id", async (req, res) => {
  try {
    const updated = await Habit.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// MARK habit as done
router.put("/done/:id", async (req, res) => {
  try {
    const habit = await Habit.findByIdAndUpdate(
      req.params.id,
      { done: true },
      { new: true }
    );
    res.json(habit);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});






/* ---------- DELETE HABIT ---------- */
router.delete("/:id", async (req, res) => {
  try {
    await Habit.findByIdAndDelete(req.params.id);
    res.json({ message: "Habit deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
