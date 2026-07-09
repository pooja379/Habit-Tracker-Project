export default function Summary({ habits }) {
  const today = new Date().toISOString().split("T")[0];
  const done = habits.filter((h) =>
    h.completedDates.includes(today)
  ).length;

  if (habits.length === 0) return null;

  return <h3>Today: {done} / {habits.length} completed</h3>;
}
