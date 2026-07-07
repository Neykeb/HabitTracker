export type HabitStatus = "active" | "paused" | "completed";

export type HabitCategory =
  "Gesundheit" | "Produktivität" | "Achtsamkeit" | "Lernen" | "Soziales";

export type HabitFrequency = "täglich" | "wöchentlich" | "individuell";

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
