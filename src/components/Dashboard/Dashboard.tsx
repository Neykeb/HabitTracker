import type { Habit } from "../../types/habit";

// Hier erstellen wir erstmal 3 Beispiel-Habits
// Das ist wie eine kleine Datenbank nur im Code
// Später kommt hier echte Daten von Josi's API
const fakeHabits: Habit[] = [
  {
    id: "1",
    title: "Wasser trinken",
    description: "2L Wasser am Tag trinken",
    category: "Gesundheit",
    status: "active",
    createdAt: "2026-07-07T09:00:00.000Z",
    updatedAt: "2026-07-07T09:00:00.000Z",
    frequency: "täglich",
    targetPerWeek: 7,
    currentStreak: 4,
  },
  {
    id: "2",
    title: "Lesen",
    description: "30 Minuten täglich lesen",
    category: "Lernen",
    status: "paused",
    createdAt: "2026-07-01T09:00:00.000Z",
    updatedAt: "2026-07-05T09:00:00.000Z",
    frequency: "täglich",
    targetPerWeek: 7,
    currentStreak: 0,
  },
  {
    id: "3",
    title: "Meditation",
    description: "10 Minuten meditieren",
    category: "Achtsamkeit",
    status: "completed",
    createdAt: "2026-06-01T09:00:00.000Z",
    updatedAt: "2026-07-07T09:00:00.000Z",
    frequency: "täglich",
    targetPerWeek: 7,
    currentStreak: 10,
  },
];

export default function Dashboard() {

  // fakeHabits.length zählt einfach wie viele Objekte im Array sind
  // So wie array.length das du schon kennst
  const total = fakeHabits.length;

  // filter() geht durch JEDES Habit und behält nur die, wo status === "active" ist
  // .length zählt dann wie viele übrig geblieben sind
  const active = fakeHabits.filter((habit) => habit.status === "active").length;
  const paused = fakeHabits.filter((habit) => habit.status === "paused").length;
  const completed = fakeHabits.filter((habit) => habit.status === "completed").length;

  // map() geht durch jedes Habit und gibt nur currentStreak zurück
  // Das ergibt ein neues Array z.B. [4, 0, 10]
  // Math.max(...) nimmt das größte aus diesem Array → 10
  const longestStreak = Math.max(...fakeHabits.map((habit) => habit.currentStreak));

  // JSX - das was der User am Ende sieht
  return (
    <div>
      <h1>Dashboard</h1>

      {/* Jede Zahl kommt aus den Variablen oben */}
      <p>Gesamt Habits: {total}</p>
      <p>Aktiv: {active}</p>
      <p>Pausiert: {paused}</p>
      <p>Abgeschlossen: {completed}</p>
      <p>Längste Streak: {longestStreak} Tage</p>
    </div>
  );
}