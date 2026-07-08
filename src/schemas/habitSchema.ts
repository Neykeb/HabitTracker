import { z } from "zod";
export const habitSchema = z.object({
  title: z.string().min(3, "der Titel muss mindestens 3 Zeichnen haben"),
  description: z
    .string()
    .min(10, "die Beschreibung muss mindestens 10 Zeichen haben"),
  category: z.enum(["Gesundheit", "Lernen", "Fitness", "Arbeit", "Privat"]),
  status: z.enum(["aktiv", "pausiert", "abgeschlossen"]),
  targetPerWeek: z
    .number()
    .min(1, "Das Wochenziel muss mindestens 1 sein")
    .max(7, "Das Wochenziel darf maximal 7 sein"),

  reminderTime: z.string().min(1, "Bitte eine Erinnerungszeit ausählen"),
});

export type HabitFormData = z.infer<typeof habitSchema>;
export const defaultHabitFormValues: HabitFormData = {
  title: "",
  description: "",
  category: "Gesundheit",
  status: "aktiv",
  targetPerWeek: 1,
  reminderTime: "18:00",
};

// HALLO TEAM
