export type HabitStatus = "aktiv" | "pausiert" | "abgeschlossen";

export type HabitCategory =
  "Gesundheit" | "Produktivität" | "Achtsamkeit" | "Lernen" | "Soziales";

export type HabitFrequency = "täglich" | "wöchentlich" | "individuell";

export type NewHabit = Omit<
  Habit,
  "id" | "createdAt" | "updatedAt" | "currentStreak"
>;
// Omit = ohne id, createdAt usw. da diese vom System vergeben werden nicht vom User. (Gegenteil: Pick)

export type UpdateHabit = Partial<NewHabit>;
// Partial = macht alle Eigenschaften von NewHabit optional.
// Warum? > Beim Aktualisieren (PATCH) schickt der Benutzer nur die Felder, die TATSÄCHLICH geändert wurden.
// NewHabit = Hier sind es Pflichtfelder > UpdateHabit = Was möchtest du ändern User

export interface Habit {
  id: string;
  title: string;
  description: string;

  category: HabitCategory;
  status: HabitStatus;

  createdAt: string;
  updatedAt: string;

  frequency: HabitFrequency;
  targetPerWeek: number;
  currentStreak: number;
  reminderTime?: string;
}
