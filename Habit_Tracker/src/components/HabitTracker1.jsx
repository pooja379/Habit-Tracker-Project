import { useEffect, useState } from "react";
import AddHabitForm from "./AddHabitForm";
import HabitItem from "./HabitItem";
import { getCurrentUser } from "../auth/authUtils";

export default function HabitTracker1() {
  const [habits, setHabits] = useState([]);
  const user = getCurrentUser();

  // 🔹 Fetch habits
  const fetchHabits = () => {
    if (!user) return;

    console.log("Frontend fetching habits for:", user);

    fetch(`http://localhost:5000/api/habits/${user}`)
      .then(res => res.json())
      .then(data => setHabits(Array.isArray(data) ? data : []));
  };

  useEffect(() => {
    fetchHabits();
  }, [user]);

  //  MARK DONE
  const markDone = async (id) => {
    await fetch(`http://localhost:5000/api/habits/done/${id}`, {
      method: "PUT",
    });

    fetchHabits(); // refresh list
  };

  // DELETE HABIT
  const deleteHabit = async (id) => {
    await fetch(`http://localhost:5000/api/habits/${id}`, {
      method: "DELETE",
    });

    fetchHabits(); // refresh list
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>Habit Tracker</h2>

      <p><b>Logged in as:</b> {user}</p>

      <AddHabitForm user={user} onHabitAdded={fetchHabits} />

      <ol>
        {habits.map(habit => (
          <HabitItem
            key={habit._id}
            habit={habit}
            markDone={markDone}
            deleteHabit={deleteHabit}
          />
        ))}
      </ol>
    </div>
  );
}