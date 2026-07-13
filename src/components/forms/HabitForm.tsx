import { useState } from "react";
import { habitSchema, type HabitFormData } from "../../schemas/habitSchema";
import { useTheme } from "../../context/ThemeContext";

type HabitFormProps = {
  initialValues: HabitFormData;
  submitLabel: string;
  onSubmit: (values: HabitFormData) => void | Promise<void>;
};
<<<<<<< HEAD
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
=======

type FormErrors = Partial<Record<keyof HabitFormData, string>>;

>>>>>>> e33728ca106d4417cb9d26947cf528ee2abc5239
export function HabitForm({
  
  initialValues,
  submitLabel,
  onSubmit,
}: HabitFormProps) {
<<<<<<< HEAD
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
=======
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
  const { isDark } = useTheme();

return (
  <form
    onSubmit={handleSubmit}
    className={`mx-auto max-w-2xl space-y-6 transition-colors ${
      isDark ? " text-white" : "bg-white text-gray-900"
    }`}
  >
    <h2 className="text-3xl font-bold text-[#1C6ADD]">Habit Form</h2>

    <div className="space-y-2">
      <label
        htmlFor="title"
        className={
          isDark ? "font-medium text-gray-200" : "font-medium text-gray-700"
        }
      >
        Titel
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
        className={`w-full rounded-lg border px-4 py-2 outline-none transition ${
          isDark
            ? "border-gray-700 bg-gray-800 text-white placeholder:text-gray-500"
            : "border-gray-300 bg-white text-gray-900 placeholder:text-gray-400"
        } focus:border-[#1C6ADD] focus:ring-2 focus:ring-[#1C6ADD]/30`}
>>>>>>> e33728ca106d4417cb9d26947cf528ee2abc5239
      />

      {errors.title && <p className="text-sm text-red-500">{errors.title}</p>}
    </div>

    <div className="space-y-2">
      <label
        htmlFor="description"
        className={
          isDark ? "font-medium text-gray-200" : "font-medium text-gray-700"
        }
      >
        Beschreibung
      </label>

      <textarea
        id="description"
        name="description"
<<<<<<< HEAD
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
=======
        value={values.description}
        onChange={(event) =>
          setValues((currentValues) => ({
            ...currentValues,
            description: event.target.value,
          }))
        }
        className={`min-h-32 w-full rounded-lg border px-4 py-2 outline-none transition ${
          isDark
            ? "border-gray-700 bg-gray-800 text-white placeholder:text-gray-500"
            : "border-gray-300 bg-white text-gray-900 placeholder:text-gray-400"
        } focus:border-[#1C6ADD] focus:ring-2 focus:ring-[#1C6ADD]/30`}
      />
>>>>>>> e33728ca106d4417cb9d26947cf528ee2abc5239

      {errors.description && (
        <p className="text-sm text-red-500">{errors.description}</p>
      )}
    </div>

<<<<<<< HEAD
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
=======
    <div className="grid gap-5 md:grid-cols-2">
      <div className="space-y-2">
        <label
          htmlFor="category"
          className={
            isDark ? "font-medium text-gray-200" : "font-medium text-gray-700"
          }
        >
          Kategorie
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
          className={`w-full rounded-lg border px-4 py-2 outline-none transition ${
            isDark
              ? "border-gray-700 bg-gray-800 text-white"
              : "border-gray-300 bg-white text-gray-900"
          } focus:border-[#1C6ADD] focus:ring-2 focus:ring-[#1C6ADD]/30`}
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
        <label
          htmlFor="status"
          className={
            isDark ? "font-medium text-gray-200" : "font-medium text-gray-700"
          }
        >
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
          className={`w-full rounded-lg border px-4 py-2 outline-none transition ${
            isDark
              ? "border-gray-700 bg-gray-800 text-white"
              : "border-gray-300 bg-white text-gray-900"
          } focus:border-[#1C6ADD] focus:ring-2 focus:ring-[#1C6ADD]/30`}
        >
          <option value="aktiv">Aktiv</option>
          <option value="pausiert">Pausiert</option>
          <option value="abgeschlossen">Abgeschlossen</option>
        </select>

        {errors.status && (
          <p className="text-sm text-red-500">{errors.status}</p>
>>>>>>> e33728ca106d4417cb9d26947cf528ee2abc5239
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="frequency"
          className={
            isDark ? "font-medium text-gray-200" : "font-medium text-gray-700"
          }
        >
          Häufigkeit
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
          className={`w-full rounded-lg border px-4 py-2 outline-none transition ${
            isDark
              ? "border-gray-700 bg-gray-800 text-white"
              : "border-gray-300 bg-white text-gray-900"
          } focus:border-[#1C6ADD] focus:ring-2 focus:ring-[#1C6ADD]/30`}
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
        <label
          htmlFor="targetPerWeek"
          className={
            isDark ? "font-medium text-gray-200" : "font-medium text-gray-700"
          }
        >
          Ziel pro Woche
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
          className={`w-full rounded-lg border px-4 py-2 outline-none transition ${
            isDark
              ? "border-gray-700 bg-gray-800 text-white"
              : "border-gray-300 bg-white text-gray-900"
          } focus:border-[#1C6ADD] focus:ring-2 focus:ring-[#1C6ADD]/30`}
        />

        {errors.targetPerWeek && (
          <p className="text-sm text-red-500">{errors.targetPerWeek}</p>
        )}
      </div>
    </div>

    <div className="space-y-2">
      <label
        htmlFor="reminderTime"
        className={
          isDark ? "font-medium text-gray-200" : "font-medium text-gray-700"
        }
      >Erinnerung
      </label>

      <input
        id="reminderTime"
        name="reminderTime"
<<<<<<< HEAD
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
=======
        type="time"
        value={values.reminderTime}
        onChange={(event) =>
          setValues((currentValues) => ({
            ...currentValues,
            reminderTime: event.target.value,
          }))
        }
        className={`w-full rounded-lg border px-4 py-2 outline-none transition ${
          isDark
            ? "border-gray-700 bg-gray-800 text-white"
            : "border-gray-300 bg-white text-gray-900"
        } focus:border-[#1C6ADD] focus:ring-2 focus:ring-[#1C6ADD]/30`}
      />

      {errors.reminderTime && (
        <p className="text-sm text-red-500">{errors.reminderTime}</p>
      )}
    </div>

    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full rounded-lg bg-[#1C6ADD] px-6 py-3 font-semibold text-white transition hover:bg-[#1758B8] disabled:cursor-not-allowed disabled:opacity-60"
    >
      {isSubmitting ? "Saving..." : submitLabel}
    </button>
  </form>
);
}
>>>>>>> e33728ca106d4417cb9d26947cf528ee2abc5239
