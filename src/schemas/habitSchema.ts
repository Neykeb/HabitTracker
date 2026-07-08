import { z } from "zod";
export const habitSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must at least 10 characters"),
  category: z.enum(["health", "learning", "fitness", "work", "personal"]),
  status: z.enum(["active", "paused", "completed"]),
  targetPerWeek: z
    .number()
    .min(1, "Target per week must be at least 1")
    .max(7, "Target per week cannot be more than 7"),

  reminderTime: z.string().min(1, "Reminder time is required"),
});

export type HabitFormData = z.infer<typeof habitSchema>;
export const defaultHabitFormValues: HabitFormData = {
  title: "",
  description: "",
  category: "health",
  status: "active",
  targetPerWeek: 1,
  reminderTime: "18:00",
};

// HALLO TEAM
