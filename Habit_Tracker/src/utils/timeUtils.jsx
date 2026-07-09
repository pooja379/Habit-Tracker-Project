export function isWithinTime(range) {
  if (!range) return true;

  const now = new Date();
  const [start, end] = range.split("-").map(t => t.trim());

  const [sh, sm] = start.split(":").map(Number);
  const [eh, em] = end.split(":").map(Number);

  const startTime = new Date();
  startTime.setHours(sh, sm, 0, 0);

  const endTime = new Date();
  endTime.setHours(eh, em, 0, 0);

  // Handle crossing midnight (optional safety)
  if (endTime < startTime) {
    endTime.setDate(endTime.getDate() + 1);
  }

  return now >= startTime && now <= endTime;
}
