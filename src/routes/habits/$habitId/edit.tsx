import { createFileRoute } from "@tanstack/react-router";
import { HabitForm } from "../../../components/forms/HabitForm";
import type { HabitFormData } from "../../../schemas/habitSchema";

export const Route = createFileRoute("/habits/$habitId/edit")({
  component: EditHabitPage,
});

function EditHabitPage() {
  const { habitId } = Route.useParams();
  const initialValues: HabitFormData = {
    title: "wasser trinken",
    description: "Jeden Tag genug wasser trinken",
    category: "Gesundheit",
    status: "aktiv",
    frequency: "täglich",
    targetPerWeek: 7,
    reminderTime: "09:00",
  };
  return (
    <div>
      <h1>Habit bearbeiten</h1>
      <p>Habit ID: {habitId}</p>
      <HabitForm
        initialValues={initialValues}
        submitLabel="Habit speichern"
        onSubmit={(values) => {
          console.log("Habit aktualieseren", values);
        }}
      />
    </div>
  );
}
