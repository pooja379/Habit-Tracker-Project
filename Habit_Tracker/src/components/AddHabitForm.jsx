import { useState } from "react";

export default function AddHabitForm({ user, onHabitAdded }) {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");

  const addHabit = async () => {

    //  Habit name validation
    if (!name.trim()) {
      alert("Please enter a habit name.");
      return;
    }

    //  Time validation
    const timeRegex =
      /^([01]\d|2[0-3]):([0-5]\d)-([01]\d|2[0-3]):([0-5]\d)$/;

    if (!timeRegex.test(time)) {
      alert(
        "Please enter time in 24-hour format.\n\nExample:\n06:00-07:00\n18:30-19:30"
      );
      return;
    }

    const response = await fetch("https://habit-tracker-backend-jn9l.onrender.com/api/habits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        time,
        userEmail: user,
        done: false,
      }),
    });

    if (!response.ok) {
      alert("Failed to add habit.");
      return;
    }

    // Clear inputs
    setName("");
    setTime("");

    //  Refresh habits from backend
    onHabitAdded();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Habit name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="HH:MM-HH:MM"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <button onClick={addHabit}>
        Add Habit
      </button>
    </div>
  );
}