import type { Habit, NewHabit, UpdateHabit } from "../types/habit";

const API_URL = "/api/habits";
// Fake API Server - npm run server

async function throwApiError(response: Response, fallbackMessage: string): Promise<never> {
  const errorText = await response.text();
  throw new Error(
    `${fallbackMessage} (${response.status} ${response.statusText})${errorText ? `: ${errorText}` : ""}`,
  );
}

export async function getHabits(): Promise<Habit[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    await throwApiError(response, "Habits konnten nicht geladen werden.");
  }

  return response.json();
}

// Einen Habit anhand seiner ID laden
export async function getHabitById(id: string): Promise<Habit> {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    await throwApiError(response, "Habit konnte nicht geladen werden.");
  }

  return response.json();
}

// Einen Habit hinzufügen
export async function createHabit(habit: NewHabit): Promise<Habit> {
  const now = new Date().toISOString();

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...habit,
      createdAt: now,
      updatedAt: now,
      currentStreak: 0,
    }),
  });

  if (!response.ok) {
    await throwApiError(response, "Habit konnte nicht erstellt werden.");
  }

  return response.json();
}

// Ein Habit bearbeiten
export async function updateHabit(
  id: string,
  habit: UpdateHabit,
): Promise<Habit> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...habit,
      updatedAt: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    await throwApiError(response, "Habit konnte nicht aktualisiert werden.");
  }

  return response.json();
}

// Habit löschen
export async function deleteHabit(id: string): Promise<void> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    await throwApiError(response, "Habit konnte nicht gelöscht werden.");
  }
}
