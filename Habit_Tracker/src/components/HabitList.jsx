import HabitItem from "./HabitItem";

export default function HabitList({ habits, onToggle, onDelete }) {
  if (habits.length === 0) return <p>No habits yet</p>;

  return (
    <>
      {habits.map((h) => (
        <HabitItem
          key={h.id}
          habit={h}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </>
  );
}
