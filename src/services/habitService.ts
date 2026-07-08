import type { Habit } from "../types/habit";

const API_URL = "http://localhost:3001/habits";
// Fake API Server - npm run server

export async function getHabits(): Promise<Habit[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Habits konnten nicht geladen werden.");
  }

  return response.json();
}
