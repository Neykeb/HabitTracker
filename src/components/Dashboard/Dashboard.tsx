import { useState } from "react";
import type { Habit, HabitStatus } from "../../types/habit";
import FilterBar from "../Filter/FilterBar";
import SearchBar from "../Search/SearchBar";

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
  // activeFilter speichert welcher Filter-Button aktiv ist
  const [activeFilter, setActiveFilter] = useState<HabitStatus | "all">("all");

  // searchQuery speichert was der User ins Suchfeld tippt
  const [searchQuery, setSearchQuery] = useState("");

  // Statistiken
  const total = fakeHabits.length;
  const active = fakeHabits.filter((habit) => habit.status === "active").length;
  const paused = fakeHabits.filter((habit) => habit.status === "paused").length;
  const completed = fakeHabits.filter((habit) => habit.status === "completed").length;
  const longestStreak = Math.max(...fakeHabits.map((habit) => habit.currentStreak));

  // Erst nach Status filtern, dann nach Suchbegriff filtern
  const filteredHabits = fakeHabits
    .filter((habit) => activeFilter === "all" || habit.status === activeFilter)
    .filter((habit) =>
      // toLowerCase() macht Groß/Kleinschreibung egal
      habit.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div>
      <h1>Dashboard</h1>

      <p>Gesamt Habits: {total}</p>
      <p>Aktiv: {active}</p>
      <p>Pausiert: {paused}</p>
      <p>Abgeschlossen: {completed}</p>
      <p>Längste Streak: {longestStreak} Tage</p>

      {/* Suchfeld */}
      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* Filter Buttons */}
      <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      {/* gefilterte und gesuchte Habits anzeigen */}
      {filteredHabits.length === 0 ? (
        // Empty State - wenn keine Habits gefunden wurden
        <p>Keine Habits gefunden.</p>
      ) : (
        filteredHabits.map((habit) => (
          <div key={habit.id}>
            <h3>{habit.title}</h3>
            <p>{habit.status}</p>
          </div>
        ))
      )}
    </div>
  );
}