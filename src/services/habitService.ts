import type { Habit, NewHabit } from "../types/habit";

const API_URL = "http://localhost:3001/habits";
// Fake API Server - npm run server

export async function getHabits(): Promise<Habit[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Habits konnten nicht geladen werden.");
  }

  return response.json();
}

// Einen Habit anhand seiner ID laden
export async function getHabitById(id: string): Promise<Habit> {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Habit konnte nicht geladen werden.");
  }

  return response.json();
}
