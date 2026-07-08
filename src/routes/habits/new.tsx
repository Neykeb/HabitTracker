import { createFileRoute } from "@tanstack/react-router";

import { HabitForm } from "../../components/forms/HabitForm";
import { defaultHabitFormValues } from "../../schemas/habitSchema";

export const Route = createFileRoute("/habits/new")({
  component: NewHabitPage,
});

function NewHabitPage() {
  return (
    <div>
      <h1>Create Habit</h1>
      <HabitForm
        initialValues={defaultHabitFormValues}
        submitLabel="Create Habit"
        onSubmit={(values) => {
          console.log("create habit", values);
        }}
      />
    </div>
  );
}
