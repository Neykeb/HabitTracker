import type { HabitStatus } from "../../types/habit";

// Diese Props kommen später von Dashboard.tsx
type FilterBarProps = {
  // activeFilter ist der aktuell gewählte Filter z.B. "all" oder "active"
  activeFilter: string;
  // onFilterChange wird aufgerufen wenn der User einen Button klickt
  onFilterChange: (filter: HabitStatus | "all") => void;
};

export default function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
  return (
    <div>
      {/* Jeder Button ruft onFilterChange mit seinem Wert auf */}
      <button onClick={() => onFilterChange("all")}>
        Alle
      </button>

      <button onClick={() => onFilterChange("active")}>
        Aktiv
      </button>

      <button onClick={() => onFilterChange("paused")}>
        Pausiert
      </button>

      <button onClick={() => onFilterChange("completed")}>
        Abgeschlossen
      </button>
    </div>
  );
}