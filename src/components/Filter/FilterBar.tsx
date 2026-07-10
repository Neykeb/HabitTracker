import type { HabitStatus } from "../../types/habit";

type FilterBarProps = {
  activeFilter: HabitStatus | "all";
  onFilterChange: (filter: HabitStatus | "all") => void;
};

export default function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
  return (
    <div>
      {/* style ändert sich wenn der Button aktiv ist */}
      <button
        onClick={() => onFilterChange("all")}
        style={{ fontWeight: activeFilter === "all" ? "bold" : "normal" }}
      >
        Alle
      </button>

      <button
        onClick={() => onFilterChange("aktiv")}
        style={{ fontWeight: activeFilter === "aktiv" ? "bold" : "normal" }}
      >
        Aktiv
      </button>

      <button
        onClick={() => onFilterChange("pausiert")}
        style={{ fontWeight: activeFilter === "pausiert" ? "bold" : "normal" }}
      >
        Pausiert
      </button>

      <button
        onClick={() => onFilterChange("abgeschlossen")}
        style={{ fontWeight: activeFilter === "abgeschlossen" ? "bold" : "normal" }}
      >
        Abgeschlossen
      </button>
    </div>
  );
}
