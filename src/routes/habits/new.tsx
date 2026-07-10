import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { HabitForm } from "../../components/forms/HabitForm";
import { defaultHabitFormValues } from "../../schemas/habitSchema";
import { useCreateHabit } from "../../hooks/useCreateHabit";
import { useTheme } from "../../context/ThemeContext";

export const Route = createFileRoute("/habits/new")({
  component: NewHabitPage,
});

function NewHabitPage() {
  const navigate = useNavigate();
  const createHabitMutation = useCreateHabit();

  return (
    <div>
      <h1>Neuen Habit erstellen</h1>
      <HabitForm
        initialValues={defaultHabitFormValues}
        submitLabel={
          createHabitMutation.isPending
            ? "Wird gespeichert..."
            : "Habit erstellen"
        }
        onSubmit={async (values) => {
          await createHabitMutation.mutateAsync(values);
          navigate({ to: "/dashboard" });
        }}
      />
      {createHabitMutation.isError && (
        <p>
          Habit konnte nicht erstellt werden:{" "}
          {createHabitMutation.error.message}
        </p>
      )}
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen px-6 py-12 ${
        isDark ? "bg-[#0a0a0a] text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#1C6ADD]">
          HabitFlow
        </p>

        <h1 className="text-5xl font-bold">Neues Habit erstellen</h1>

        <p className={`mt-4 ${isDark ? "text-white/60" : "text-black/60"}`}>
          Erstelle eine neue Gewohnheit und beginne mit deinem Fortschritt.
        </p>

        <div
          className={`mt-10 rounded-2xl p-8 ${
            isDark ? "bg-[#111111]" : "bg-white shadow"
          }`}
        >
          <HabitForm
            initialValues={defaultHabitFormValues}
            submitLabel={
              createHabitMutation.isPending
                ? "Wird gespeichert..."
                : "Habit erstellen"
            }
            onSubmit={(values) => {
              createHabitMutation.mutate(values, {
                onSuccess: () => {
                  navigate({ to: "/habits" });
                },
              });
            }}
          />
        </div>

        {createHabitMutation.isError && (
          <p className="mt-6 rounded-lg border border-red-500 p-4 text-red-500">
            Habit konnte nicht erstellt werden.
          </p>
        )}
      </div>
    </div>
  );
}