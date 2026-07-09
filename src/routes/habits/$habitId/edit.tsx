import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { HabitForm } from "../../../components/forms/HabitForm";
import type { HabitFormData } from "../../../schemas/habitSchema";
import { useHabit } from "../../../hooks/useHabit";
import { useUpdateHabit } from "../../../hooks/useUpdateHabit";

export const Route = createFileRoute("/habits/$habitId/edit")({
  component: EditHabitPage,
});

function EditHabitPage() {
  const { habitId } = Route.useParams();
  const navigate = useNavigate();

  const { data: habit, isLoading, isError } = useHabit(habitId);
  const updateHabitMutation = useUpdateHabit();
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
        submitLabel={
          updateHabitMutation.isPending
            ? "Wird gespeichert..."
            : "Habit speichern"
        }
        onSubmit={(values) => {
          updateHabitMutation.mutate(
            { id: habitId, habit: values },
            {
              onSuccess: () => {
                navigate({ to: "/habits" });
              },
            },
          );
        }}
      />
      {updateHabitMutation.isError && (
        <p>Habit konnte nicht aktualisiert werden.</p>
      )}
    </div>
  );
}
