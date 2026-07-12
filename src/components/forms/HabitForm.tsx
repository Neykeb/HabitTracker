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
  <form
    onSubmit={handleSubmit}
    className="mx-auto  space-y-6 "
  >
    {/* <h2 className="text-3xl font-bold text-[#1C6ADD]">Habit Form</h2> */}

    <div className="space-y-2">
      <label htmlFor="title" className="font-medium text-gray-700">
        Title
      </label>
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
        className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-[#1C6ADD] focus:ring-2 focus:ring-[#1C6ADD]/20"
      />
      {errors.title && <p className="text-sm text-red-500">{errors.title}</p>}
    </div>

    <div className="space-y-2">
      <label htmlFor="description" className="font-medium text-gray-700">
        Description
      </label>
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
        className="min-h-32 w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-[#1C6ADD] focus:ring-2 focus:ring-[#1C6ADD]/20"
      />
      {errors.description && (
        <p className="text-sm text-red-500">{errors.description}</p>
      )}
    </div>

    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-2">
        <label htmlFor="category" className="font-medium text-gray-700">
          Category
        </label>
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
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-[#1C6ADD] focus:ring-2 focus:ring-[#1C6ADD]/20"
        >
          <option value="Gesundheit">Gesundheit</option>
          <option value="Produktivität">Produktivität</option>
          <option value="Achtsamkeit">Achtsamkeit</option>
          <option value="Lernen">Lernen</option>
          <option value="Soziales">Soziales</option>
        </select>
        {errors.category && (
          <p className="text-sm text-red-500">{errors.category}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="status" className="font-medium text-gray-700">
          Status
        </label>
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
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-[#1C6ADD] focus:ring-2 focus:ring-[#1C6ADD]/20"
        >
          <option value="aktiv">Aktiv</option>
          <option value="pausiert">Pausiert</option>
          <option value="abgeschlossen">Abgeschlossen</option>
        </select>
        {errors.status && (
          <p className="text-sm text-red-500">{errors.status}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="frequency" className="font-medium text-gray-700">
          Frequency
        </label>
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
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-[#1C6ADD] focus:ring-2 focus:ring-[#1C6ADD]/20"
        >
          <option value="täglich">Täglich</option>
          <option value="wöchentlich">Wöchentlich</option>
          <option value="individuell">Individuell</option>
        </select>
        {errors.frequency && (
          <p className="text-sm text-red-500">{errors.frequency}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="targetPerWeek" className="font-medium text-gray-700">
          Target Per Week
        </label>
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
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-[#1C6ADD] focus:ring-2 focus:ring-[#1C6ADD]/20"
        />
        {errors.targetPerWeek && (
          <p className="text-sm text-red-500">{errors.targetPerWeek}</p>
        )}
      </div>

      <div className="space-y-2 md:col-span-2">
        <label htmlFor="reminderTime" className="font-medium text-gray-700">
          Reminder Time
        </label>
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
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-[#1C6ADD] focus:ring-2 focus:ring-[#1C6ADD]/20"
        />
        {errors.reminderTime && (
          <p className="text-sm text-red-500">{errors.reminderTime}</p>
        )}
      </div>
    </div>

    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full rounded-lg bg-[#1C6ADD] px-6 py-3 font-semibold text-white transition hover:bg-[#1658B8] disabled:cursor-not-allowed disabled:opacity-60"
    >
      {isSubmitting ? "Saving..." : submitLabel}
    </button>
  </form>
);
}