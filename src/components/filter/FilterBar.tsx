import type { HabitStatus } from "../../types/habit";

type FilterBarProps = {
  activeFilter: HabitStatus | "all";
  onFilterChange: (filter: HabitStatus | "all") => void;
};

export default function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-3 rounded-xl bg-base-200 p-3 shadow-sm text-white">
      <button
        onClick={() => onFilterChange("all")}
        className={`rounded-lg px-4 py-2 transition-all duration-200 ${
          activeFilter === "all"
            ? "bg-[#1C6ADD] text-primary-content font-semibold shadow"
            : "bg-base-100 hover:bg-base-300"
        }`}
      >
        Alle
      </button>

      <button
        onClick={() => onFilterChange("aktiv")}
        className={`rounded-lg px-4 py-2 transition-all duration-200 ${
          activeFilter === "aktiv"
            ? "bg-[#1C6ADD] text-primary-content font-semibold shadow"
            : "bg-base-100 hover:bg-base-300"
        }`}
      >
        Aktiv
      </button>

      <button
        onClick={() => onFilterChange("pausiert")}
        className={`rounded-lg px-4 py-2 transition-all duration-200 ${
          activeFilter === "pausiert"
            ? "bg-[#1C6ADD] text-primary-content font-semibold shadow"
            : "bg-base-100 hover:bg-base-300"
        }`}
      >
        Pausiert
      </button>

      <button
        onClick={() => onFilterChange("abgeschlossen")}
        className={`rounded-lg px-4 py-2 transition-all duration-200 ${
          activeFilter === "abgeschlossen"
            ? "bg-[#1C6ADD] text-primary-content font-semibold shadow"
            : "bg-base-100 hover:bg-base-300"
        }`}
      >
        Abgeschlossen
      </button>
    </div>
  );
}
