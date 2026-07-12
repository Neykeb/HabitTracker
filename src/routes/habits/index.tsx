import { createFileRoute, Link } from "@tanstack/react-router";
import { useHabits } from "../../hooks/useHabits";
export const Route = createFileRoute("/habits/")({
  component: HabitOverviewPage,
});

function HabitOverviewPage() {
  const { data: habits = [], isLoading, isError } = useHabits();
  if (isLoading) {
    return <p>Habits werden geladen...</p>;
  }
  if (isError) {
    return <p>Habits konnten nicht geladen werden.</p>;
  }
  return (
    <div>
      <h1>Habits</h1>
      <Link to="/habits/new">Neue Habit erstellen</Link>
      {habits.length === 0 && <p>Noch keine Habits vorhanden.</p>}
      <ul>
        {habits.map((habit) => (
          <li key={habit.id}>
            <h2>{habit.title}</h2>
            <p>{habit.description} </p>
            <p> Kategorie: {habit.category} </p>
            <p> Status: {habit.status} </p>
            <p>Häufigkeit: {habit.frequency} </p>
            <p> Ziel pro Woche: {habit.targetPerWeek} </p>
            <p> Erinnerungszeit: {habit.reminderTime} </p>
            <Link to="/habits/$habitId/edit" params={{ habitId: habit.id }}>
              Habit Bearbeiten
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
