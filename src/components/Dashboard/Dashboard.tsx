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
    <div
      className={`min-h-screen px-8 py-10 transition-colors duration-300 ${
        isDark ? "bg-[#0a0a0a] text-white" : "bg-[#f5f5f5] text-black"
      }`}
    >
      {/* Header */}
      <div className="mb-10 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#1C6ADD]">
            HabitFlow
          </p>

          <h1 className="mt-2 text-5xl font-bold">Dashboard</h1>

          <p className={isDark ? "mt-3 text-white/60" : "mt-3 text-black/60"}>
            Verwalte deine Gewohnheiten und verfolge deinen Fortschritt.
          </p>
        </div>

         
      </div>

      {/* Statistik */}
      <div className="mb-10 grid grid-cols-2 gap-5 md:grid-cols-5">
        <div
          className={`rounded-xl p-6 ${
            isDark ? "bg-[#111111]" : "bg-white shadow"
          }`}
        >
          <p className={isDark ? "text-white/50" : "text-black/50"}>Gesamt</p>
          <h2 className="mt-2 text-3xl font-bold">{gesamt}</h2>
        </div>

        <div
          className={`rounded-xl p-6 ${
            isDark ? "bg-[#111111]" : "bg-white shadow"
          }`}
        >
          <p className={isDark ? "text-white/50" : "text-black/50"}>Aktiv</p>
          <h2 className="mt-2 text-3xl font-bold">{aktiv}</h2>
        </div>

        <div
          className={`rounded-xl p-6 ${
            isDark ? "bg-[#111111]" : "bg-white shadow"
          }`}
        >
          <p className={isDark ? "text-white/50" : "text-black/50"}>Pausiert</p>
          <h2 className="mt-2 text-3xl font-bold">{pausiert}</h2>
        </div>

        <div
          className={`rounded-xl p-6 ${
            isDark ? "bg-[#111111]" : "bg-white shadow"
          }`}
        >
          <p className={isDark ? "text-white/50" : "text-black/50"}>Erledigt</p>
          <h2 className="mt-2 text-3xl font-bold">{abgeschlossen}</h2>
        </div>

        <div
          className={`rounded-xl p-6 ${
            isDark ? "bg-[#111111]" : "bg-white shadow"
          }`}
        >
          <p className={isDark ? "text-white/50" : "text-black/50"}>
            Beste Streak
          </p>
          <h2 className="mt-2 text-3xl font-bold"> {laengsteStreak}</h2>
        </div>
      </div>

      {/* Suche, Filter und Sortierung */}
      <div
        className={`mb-10 rounded-xl p-6 ${
          isDark ? "bg-[#111111]" : "bg-white shadow"
        }`}
      >
        <div className="mb-5">
          <SearchBar
            searchQuery={suchbegriff}
            onSearchChange={setSuchbegriff}
          />
        </div>

        <div className="flex flex-col justify-between gap-5 md:flex-row">
          <FilterBar
            activeFilter={aktiverFilter}
            onFilterChange={setAktiverFilter}
          />

          <select
            value={sortierung}
            onChange={(event) =>
              setSortierung(event.target.value as "neueste" | "streak")
            }
            className={`rounded-lg border px-4 py-2 ${
              isDark
                ? "border-white/10 bg-[#1a1a1a] text-white"
                : "border-black/10 bg-white text-black"
            }`}
          >
            <option value="neueste">Neueste zuerst</option>
            <option value="streak">Höchste Streak</option>
          </select>
        </div>
      </div>

      {/* Habits */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {gefilterteHabits.length === 0 ? (
          <p
            className={`col-span-full py-20 text-center ${
              isDark ? "text-white/60" : "text-black/60"
            }`}
          >
            Keine Habits gefunden.
          </p>
        ) : (
          gefilterteHabits.map((habit) => (
            <div
              key={habit.id}
              className={`rounded-xl border border-transparent p-6 transition hover:border-[#1C6ADD] ${
                isDark ? "bg-[#111111]" : "bg-white shadow"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold">{habit.title}</h3>

                <span className="text-sm capitalize text-[#1C6ADD]">
                  {habit.status}
                </span>
              </div>

              <p
                className={isDark ? "mt-3 text-white/60" : "mt-3 text-black/60"}
              >
                {habit.description}
              </p>

              <div
                className={`mt-6 flex justify-between text-sm ${
                  isDark ? "text-white/60" : "text-black/60"
                }`}
              >
                <span>{habit.category}</span>
                <span> {habit.currentStreak}</span>
              </div>

              <button className="mt-6 w-full rounded-lg border border-[#1C6ADD] py-3 transition hover:bg-[#1C6ADD] hover:text-white">
                Habit ansehen
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
