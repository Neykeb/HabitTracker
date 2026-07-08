import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/habits/new")({
  component: NewHabitPage,
});

function NewHabitPage() {
  return <h1>Create Habit Test</h1>;
}
