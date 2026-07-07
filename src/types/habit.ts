export type HabitStatus = "active" | "paused" | "completed";

export type HabitCategory =
  "health" | "productivity" | "mindfulness" | "learning" | "social";

export type HabitFrequency = "daily" | "weekly" | "custom";

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
