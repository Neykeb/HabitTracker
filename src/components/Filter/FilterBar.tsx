import type { HabitStatus } from "../../types/habit";

type FilterBarProps = {
  activeFilter: string;
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
        onClick={() => onFilterChange("active")}
        style={{ fontWeight: activeFilter === "active" ? "bold" : "normal" }}
      >
        Aktiv
      </button>

      <button
        onClick={() => onFilterChange("paused")}
        style={{ fontWeight: activeFilter === "paused" ? "bold" : "normal" }}
      >
        Pausiert
      </button>

      <button
        onClick={() => onFilterChange("completed")}
        style={{ fontWeight: activeFilter === "completed" ? "bold" : "normal" }}
      >
        Abgeschlossen
      </button>
    </div>
  );
}