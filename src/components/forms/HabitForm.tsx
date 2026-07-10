import { useState } from "react";
import { habitSchema, type HabitFormData } from "../../schemas/habitSchema";

type HabitFormProps = {
  initialValues: HabitFormData;
  submitLabel: string;
  onSubmit: (values: HabitFormData) => void | Promise<void>;
};

type FormErrors = Partial<Record<keyof HabitFormData, string>>;

export function HabitForm({
  initialValues,
  submitLabel,
  onSubmit,
}: HabitFormProps) {
  const [values, setValues] = useState<HabitFormData>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const result = habitSchema.safeParse(values);

    if (!result.success) {
      const nextErrors: FormErrors = {};

      for (const issue of result.error.issues) {
        const fieldName = issue.path[0] as keyof HabitFormData | undefined;

        if (fieldName) {
          nextErrors[fieldName] = issue.message;
        }
      }

      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      await onSubmit(result.data);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Habit Form</h2>

      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          value={values.title}
          onChange={(event) =>
            setValues((currentValues) => ({
              ...currentValues,
              title: event.target.value,
            }))
          }
        />
        {errors.title && <p>{errors.title}</p>}
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={values.description}
          onChange={(event) =>
            setValues((currentValues) => ({
              ...currentValues,
              description: event.target.value,
            }))
          }
        />
        {errors.description && <p>{errors.description}</p>}
      </div>

      <div>
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={values.category}
          onChange={(event) =>
            setValues((currentValues) => ({
              ...currentValues,
              category: event.target.value as HabitFormData["category"],
            }))
          }
        >
          <option value="Gesundheit">Gesundheit</option>
          <option value="Produktivität">Produktivität</option>
          <option value="Achtsamkeit">Achtsamkeit</option>
          <option value="Lernen">Lernen</option>
          <option value="Soziales">Soziales</option>
        </select>
        {errors.category && <p>{errors.category}</p>}
      </div>

      <div>
        <label htmlFor="status">Status</label>
        <select
          id="status"
          name="status"
          value={values.status}
          onChange={(event) =>
            setValues((currentValues) => ({
              ...currentValues,
              status: event.target.value as HabitFormData["status"],
            }))
          }
        >
          <option value="aktiv">Aktiv</option>
          <option value="pausiert">Pausiert</option>
          <option value="abgeschlossen">Abgeschlossen</option>
        </select>
        {errors.status && <p>{errors.status}</p>}
      </div>

      <div>
        <label htmlFor="frequency">Häufigkeit</label>
        <select
          id="frequency"
          name="frequency"
          value={values.frequency}
          onChange={(event) =>
            setValues((currentValues) => ({
              ...currentValues,
              frequency: event.target.value as HabitFormData["frequency"],
            }))
          }
        >
          <option value="täglich">Täglich</option>
          <option value="wöchentlich">Wöchentlich</option>
          <option value="individuell">Individuell</option>
        </select>
        {errors.frequency && <p>{errors.frequency}</p>}
      </div>

      <div>
        <label htmlFor="targetPerWeek">Target Per Week</label>
        <input
          id="targetPerWeek"
          name="targetPerWeek"
          type="number"
          min="1"
          max="7"
          value={values.targetPerWeek}
          onChange={(event) =>
            setValues((currentValues) => ({
              ...currentValues,
              targetPerWeek: Number(event.target.value),
            }))
          }
        />
        {errors.targetPerWeek && <p>{errors.targetPerWeek}</p>}
      </div>

      <div>
        <label htmlFor="reminderTime">Reminder time</label>
        <input
          id="reminderTime"
          name="reminderTime"
          type="time"
          value={values.reminderTime}
          onChange={(event) =>
            setValues((currentValues) => ({
              ...currentValues,
              reminderTime: event.target.value,
            }))
          }
        />
        {errors.reminderTime && <p>{errors.reminderTime}</p>}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "saving..." : submitLabel}
      </button>
    </form>
  );
}
