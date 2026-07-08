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
            {field.state.meta.errors.length > 0 && (
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
      <form.Field
        name="category"
        children={(field) => (
          <div>
            <label htmlFor={field.name}>Category</label>
            <select
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(event) =>
                field.handleChange(
                  event.target.value as typeof field.state.value,
                )
              }
            >
              <option value="Gesundheit">Gesundheit</option>
              <option value="Produktivität">Produktivität</option>
              <option value="Achtsamkeit">Achtsamkeit</option>
              <option value="Lernen">Lernen</option>
              <option value="Soziales">Soziales</option>
            </select>
            {field.state.meta.errors.length > 0 && (
              <p>{field.state.meta.errors.join(", ")}</p>
            )}
          </div>
        )}
      />
      <form.Field
        name="status"
        children={(field) => (
          <div>
            <label htmlFor={field.name}>Status</label>
            <select
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(event) =>
                field.handleChange(
                  event.target.value as typeof field.state.value,
                )
              }
            >
              <option value="aktiv">Aktiv</option>
              <option value="pausiert">Pausiert</option>
              <option value="abgeschlossen">Abgeschlossen</option>
            </select>
            {field.state.meta.errors.length > 0 && (
              <p>{field.state.meta.errors.join(", ")}</p>
            )}
          </div>
        )}
      />
      <form.Field
        name="targetPerWeek"
        children={(field) => (
          <div>
            <label htmlFor={field.name}> Target Per Week</label>
            <input
              id={field.name}
              name={field.name}
              type="number"
              min="1"
              max="7"
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(event) =>
                field.handleChange(Number(event.target.value))
              }
            />
            {field.state.meta.errors.length > 0 && (
              <p>{field.state.meta.errors.join(", ")}</p>
            )}
          </div>
        )}
      />
      <form.Field
        name="reminderTime"
        children={(field) => (
          <div>
            <label htmlFor={field.name}>Reminder time</label>
            <input
              id={field.name}
              name={field.name}
              type="time"
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(event) => field.handleChange(event.target.value)}
            />
            {field.state.meta.errors.length > 0 && (
              <p>{field.state.meta.errors.join(", ")}</p>
            )}
          </div>
        )}
      />
      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
        children={([canSubmit, isSubmitting]) => (
          <button type="submit" disabled={!canSubmit || isSubmitting}>
            {" "}
            {isSubmitting ? "saving..." : submitLabel}{" "}
          </button>
        )}
      />
    </form>
  );
}
