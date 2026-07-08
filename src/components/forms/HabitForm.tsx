import { useForm } from "@tanstack/react-form";
import { habitSchema, type HabitFormData } from "../../schemas/habitSchema";

type HabitFormProps = {
  initialValues: HabitFormData;
  submitLabel: string;
  onSubmit: (values: HabitFormData) => void;
};

export function HabitForm({
  initialValues,
  submitLabel,
  onSubmit,
}: HabitFormProps) {
  const form = useForm({
    defaultValues: initialValues,
    validators: {
      onSubmit: habitSchema,
    },
    onSubmit: ({ value }) => {
      onSubmit(value);
    },
  });
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();
        form.handleSubmit();
      }}
    >
      <h2>Habit Form</h2>
      <button type="submit">{submitLabel}</button>
    </form>
  );
}
