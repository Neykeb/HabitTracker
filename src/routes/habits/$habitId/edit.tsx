import { createFileRoute } from "@tanstack/react-router";
import { HabitForm } from "../../../components/forms/HabitForm";
import type { HabitFormData } from "../../../schemas/habitSchema";
import { useHabit } from "../../../hooks/useHabit";

export const Route = createFileRoute("/habits/$habitId/edit")({
  component: EditHabitPage,
});

function EditHabitPage() {
  const { habitId } = Route.useParams();
  const { data: habit, isLoading, isError } = useHabit(habitId);
  if (isLoading) {
    return <p>Habit wird geladen...</p>;
  }
  if (isError || !habit) {
    return <p>habit wurde nicht gefunden</p>;
  }

  const initialValues: HabitFormData = {
    title: habit.title,
    description: habit.description,
    category: habit.category,
    status: habit.status,
    frequency: habit.frequency,
    targetPerWeek: habit.targetPerWeek,
    reminderTime: habit.reminderTime ?? "",
  };
  return (
    <div>
      <h1>Habit bearbeiten</h1>
      <p>Habit ID: {habitId}</p>
      <HabitForm
        initialValues={initialValues}
        submitLabel="Habit speichern"
        onSubmit={(values) => {
          console.log("Habit aktualieseren", habitId, values);
        }}
      />
    </div>
  );
}
