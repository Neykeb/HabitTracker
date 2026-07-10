import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { HabitForm } from "../../components/forms/HabitForm";
import { defaultHabitFormValues } from "../../schemas/habitSchema";
import { useCreateHabit } from "../../hooks/useCreateHabit";
export const Route = createFileRoute("/habits/new")({
  component: NewHabitPage,
});
function NewHabitPage() {
  const navigate = useNavigate();
  const createHabitMutation = useCreateHabit();
  return (
    <div>
      <h1>Habit erstellen</h1>
      <HabitForm
        initialValues={defaultHabitFormValues}
        submitLabel={
          createHabitMutation.isPending
            ? "Wird gespeichert..."
            : "Habit erstellen"
        }
        onSubmit={(values) => {
          createHabitMutation.mutate(values, {
            onSuccess: () => {
              navigate({ to: "/habits" });
            },
          });
        }}
      />
      {createHabitMutation.isError && <p>Habit konnte nicht erstellt werden</p>}
    </div>
  );
}
