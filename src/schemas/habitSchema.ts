import { z } from "zod";
export const habitCategories = [
  "Gesundheit",
  "Produktivität",
  "Achtsamkeit",
  "Lernen",
  "Soziales",
] as const;
export const habitStatuses = ["aktiv", "pausiert", "abgeschlossen"] as const;
export const habitSchema = z.object({
  title: z.string().min(3, "Der Titel muss mindestens 3 Zeichen haben"),

  description: z
    .string()
    .min(10, "Die Beschreibung muss mindestens 10 Zeichen haben"),
  category: z.enum(habitCategories),

  status: z.enum(habitStatuses),
  targetPerWeek: z
    .number()
    .min(1, "Das Wochenziel muss mindestens 1 sein")
    .max(7, "Das Wochenziel darf maximal 7 sein"),

  reminderTime: z.string().min(1, "Bitte eine Erinnerungszeit auswählen"),
});
export type HabitFormData = z.infer<typeof habitSchema>;

export const defaultHabitFormValues: HabitFormData = {
  title: "",
  description: "",
  category: "Gesundheit",
  status: "aktiv",
  targetPerWeek: 1,
  reminderTime: "09:00",
};
