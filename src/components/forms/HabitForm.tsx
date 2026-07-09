import { useForm } from "@tanstack/react-form";
import { habitSchema, type HabitFormData } from "../../schemas/habitSchema";

type HabitFormProps = {
  initialValues: HabitFormData;
  submitLabel: string;
  onSubmit: (values: HabitFormData) => void;
};
function getErrorMessages(errors: unknown[]) {
  return errors
    .map((error) => {
      if (typeof error === "string") {
        return error;
      }
      if (typeof error === "object" && error !== null && "message" in error) {
        return String(error.message);
      }
      return "ungültige Eingabe";
    })
    .join(", ");
}
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
      <h2>Habit Formular</h2>
      <form.Field
        name="title"
        children={(field) => (
          <div>
            <label htmlFor={field.name}>Titel</label>
            <input
              id={field.name}
              name={field.name}
              type="text"
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(event) => field.handleChange(event.target.value)}
            />
            {field.state.meta.errors.length > 0 && (
              <p>{getErrorMessages(field.state.meta.errors)}</p>
            )}
          </div>
        )}
      />
      <form.Field
        name="description"
        children={(field) => (
          <div>
            <label htmlFor={field.name}>Beschreibung</label>
            <textarea
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(event) => field.handleChange(event.target.value)}
            />
            {field.state.meta.errors.length > 0 && (
              <p>{getErrorMessages(field.state.meta.errors)} </p>
            )}
          </div>
        )}
      />
      <form.Field
        name="category"
        children={(field) => (
          <div>
            <label htmlFor={field.name}>Kategorie</label>
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
              <p>{getErrorMessages(field.state.meta.errors)}</p>
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
              <p>{getErrorMessages(field.state.meta.errors)}</p>
            )}
          </div>
        )}
      />
      <form.Field
        name="frequency"
        children={(field) => (
          <div>
            <label htmlFor={field.name}>Häufigkeit</label>

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
              <option value="täglich">Täglich</option>
              <option value="wöchentlich">Wöchentlich</option>
              <option value="individuell">Individuell</option>
            </select>

            {field.state.meta.errors.length > 0 && (
              <p>{getErrorMessages(field.state.meta.errors)}</p>
            )}
          </div>
        )}
      />
      <form.Field
        name="targetPerWeek"
        children={(field) => (
          <div>
            <label htmlFor={field.name}> Ziel pro Woche</label>
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
              <p>{getErrorMessages(field.state.meta.errors)}</p>
            )}
          </div>
        )}
      />
      <form.Field
        name="reminderTime"
        children={(field) => (
          <div>
            <label htmlFor={field.name}>Erinnerungszeit</label>
            <input
              id={field.name}
              name={field.name}
              type="time"
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(event) => field.handleChange(event.target.value)}
            />
            {field.state.meta.errors.length > 0 && (
              <p>{getErrorMessages(field.state.meta.errors)}</p>
            )}
          </div>
        )}
      />
      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
        children={([canSubmit, isSubmitting]) => (
          <button type="submit" disabled={!canSubmit || isSubmitting}>
            {" "}
            {isSubmitting ? "Speichern..." : submitLabel}{" "}
          </button>
        )}
      />
    </form>
  );
}
