import { useState } from "react";
import type { Habit, HabitStatus } from "../../types/habit";
import FilterBar from "../Filter/FilterBar";
import SearchBar from "../Search/SearchBar";
import { useTheme } from "../../context/ThemeContext";

// Fake-Daten mit deutschen Status-Werten
const fakeHabits: Habit[] = [
  {
    id: "1",
    title: "Wasser trinken",
    description: "2L Wasser am Tag trinken",
    category: "Gesundheit",
    status: "aktiv",
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
    status: "pausiert",
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
    status: "abgeschlossen",
    createdAt: "2026-06-01T09:00:00.000Z",
    updatedAt: "2026-07-07T09:00:00.000Z",
    frequency: "täglich",
    targetPerWeek: 7,
    currentStreak: 10,
  },
];

export default function Dashboard() {
  // useTheme gibt uns dunkelModus und themWechseln aus dem Context
  const { isDark, toggleTheme } = useTheme();

  // aktiverFilter speichert welcher Filter-Button gerade aktiv ist
  const [aktiverFilter, setAktiverFilter] = useState<HabitStatus | "all">("all");

  // suchbegriff speichert was der User ins Suchfeld tippt
  const [suchbegriff, setSuchbegriff] = useState("");

  // sortierung speichert wonach die Liste sortiert wird
  const [sortierung, setSortierung] = useState<"neueste" | "streak">("neueste");

  // Statistiken - zählt Habits nach Status
  const gesamt = fakeHabits.length;
  const aktiv = fakeHabits.filter((habit) => habit.status === "aktiv").length;
  const pausiert = fakeHabits.filter((habit) => habit.status === "pausiert").length;
  const abgeschlossen = fakeHabits.filter((habit) => habit.status === "abgeschlossen").length;

  // Math.max findet die größte Zahl im currentStreak Array
  const laengsteStreak = Math.max(...fakeHabits.map((habit) => habit.currentStreak));

  // Erst nach Status filtern, dann nach Suchbegriff filtern, dann sortieren
  const gefilterteHabits = fakeHabits
    .filter((habit) => aktiverFilter === "all" || habit.status === aktiverFilter)
    .filter((habit) => habit.title.toLowerCase().includes(suchbegriff.toLowerCase()))
    .sort((a, b) => {
      // wenn "neueste" gewählt ist, neuere zuerst
      if (sortierung === "neueste") {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
      // wenn "streak" gewählt ist, höchste Streak zuerst
      return b.currentStreak - a.currentStreak;
    });

  return (
    <div>
      <h1>Dashboard</h1>

      {/* Theme Toggle Button - wechselt zwischen Hell und Dunkel */}
      <button onClick={toggleTheme}>
        {isDark ? "☀️ Heller Modus" : "🌙 Dunkler Modus"}
      </button>

      {/* Statistiken */}
      <p>Gesamt Habits: {gesamt}</p>
      <p>Aktiv: {aktiv}</p>
      <p>Pausiert: {pausiert}</p>
      <p>Abgeschlossen: {abgeschlossen}</p>
      <p>Längste Streak: {laengsteStreak} Tage</p>

      {/* Suchfeld */}
      <SearchBar searchQuery={suchbegriff} onSearchChange={setSuchbegriff} />

      {/* Filter Buttons */}
      <FilterBar activeFilter={aktiverFilter} onFilterChange={setAktiverFilter} />

      {/* Sortierung */}
      <select
        value={sortierung}
        onChange={(e) => setSortierung(e.target.value as "neueste" | "streak")}
      >
        <option value="neueste">Neueste zuerst</option>
        <option value="streak">Höchste Streak zuerst</option>
      </select>

      {/* Wenn keine Habits gefunden - leerer Zustand anzeigen */}
      {gefilterteHabits.length === 0 ? (
        <p>Keine Habits gefunden.</p>
      ) : (
        gefilterteHabits.map((habit) => (
          <div key={habit.id}>
            <h3>{habit.title}</h3>
            <p>{habit.status}</p>
          </div>
        ))
      )}
    </div>
  );
}