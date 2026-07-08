import { createFileRoute } from "@tanstack/react-router";
import { HabitForm } from "../../components/forms/HabitForm";
import { defaultHabitFormValues } from "../../schemas/habitSchema";
export const Route = createFileRoute("/habits/new")({
  component: NewHabitPage,
});
function NewHabitPage() {
  return (
    <div>
      <h1>Neue Habit erstellen</h1>
      <HabitForm
        initialValues={defaultHabitFormValues}
        submitLabel="habit erstellen"
        onSubmit={(values) => {
          console.log("neue habit:", values);
        }}
      />
    </div>
  );
}
