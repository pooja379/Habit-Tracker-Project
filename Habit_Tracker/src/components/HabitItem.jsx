import { isWithinTime } from "../utils/timeUtils";

export default function HabitItem({ habit, markDone, deleteHabit }) {
  const canMark = isWithinTime(habit.time);

  return (
    <li style={{ marginBottom: "12px" }}>
      <strong>{habit.name}</strong> ({habit.time})

      {/*  Completed status */}
      {habit.done && (
        <span style={{ color: "green", marginLeft: "10px" }}>
          ✔ Completed
        </span>
      )}

      {/* Done button */}
      {!habit.done && (
        <button
          style={{ marginLeft: "10px" }}
          disabled={!canMark}
          onClick={() => markDone(habit._id)}
        >
          {canMark ? "Done" : "Not in time"}
        </button>
      )}

      {/* Delete button */}
      <button
        style={{
          marginLeft: "10px",
          color: "red",
          border: "1px solid red",
          background: "transparent",
          cursor: "pointer"
        }}
        onClick={() => deleteHabit(habit._id)}
      >
        Delete
      </button>
    </li>
  );
}
