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
      <form.Field
        name="title"
        children={(field) => (
          <div>
            <label htmlFor={field.name}>Title</label>
            <input
              id={field.name}
              name={field.name}
              type="text"
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(event) => field.handleChange(event.target.value)}
            />
            {field.state.meta.errors.length < 0 && (
              <p>{field.state.meta.errors.join(", ")}</p>
            )}
          </div>
        )}
      />
      <form.Field
        name="description"
        children={(field) => (
          <div>
            <label htmlFor={field.name}>Description</label>
            <textarea
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(event) => field.handleChange(event.target.value)}
            />
            {field.state.meta.errors.length > 0 && (
              <p>{field.state.meta.errors.join(", ")} </p>
            )}
          </div>
        )}
      />
      <button type="submit">{submitLabel}</button>
    </form>
  );
}
