import { useState } from "react";
import type { HabitStatus } from "../../types/habit";
import FilterBar from "../Filter/FilterBar";
import SearchBar from "../Search/SearchBar";
import { useTheme } from "../../context/ThemeContext";
import { useHabits } from "../../hooks/useHabits";

export default function Dashboard() {
  // useTheme gibt uns dunkelModus und themWechseln aus dem Context
  const { isDark, toggleTheme } = useTheme();
  const { data: habits = [], isLoading, isError } = useHabits();

  // aktiverFilter speichert welcher Filter-Button gerade aktiv ist
  const [aktiverFilter, setAktiverFilter] = useState<HabitStatus | "all">("all");

  // suchbegriff speichert was der User ins Suchfeld tippt
  const [suchbegriff, setSuchbegriff] = useState("");

  // sortierung speichert wonach die Liste sortiert wird
  const [sortierung, setSortierung] = useState<"neueste" | "streak">("neueste");

  // Statistiken - zählt Habits nach Status
  const gesamt = habits.length;
  const aktiv = habits.filter((habit) => habit.status === "aktiv").length;
  const pausiert = habits.filter((habit) => habit.status === "pausiert").length;
  const abgeschlossen = habits.filter((habit) => habit.status === "abgeschlossen").length;

  // Math.max findet die größte Zahl im currentStreak Array
  const laengsteStreak =
    habits.length > 0
      ? Math.max(...habits.map((habit) => habit.currentStreak))
      : 0;

  // Erst nach Status filtern, dann nach Suchbegriff filtern, dann sortieren
  const gefilterteHabits = [...habits]
    .filter((habit) => aktiverFilter === "all" || habit.status === aktiverFilter)
    .filter((habit) =>
      `${habit.title} ${habit.description} ${habit.category}`
        .toLowerCase()
        .includes(suchbegriff.toLowerCase()),
    )
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
      {isLoading && <p>Habits werden geladen...</p>}
      {isError && <p>Habits konnten nicht geladen werden.</p>}

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
