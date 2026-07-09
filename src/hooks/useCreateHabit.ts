import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createHabit } from "../services/habitService";

export function useCreateHabit() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createHabit,
    // Wenn jemand einen Habit erstellen will, benutze die Service-Funktion createHabit().

    onSuccess: () => {
      // Wenn das Erstellen erfolgreich war, aktualisiere die Habit-Liste.
      queryClient.invalidateQueries({ queryKey: ["habits"] });
    },
    // Die Liste ["habits"] ist wahrscheinlich veraltet.Bitte neu laden.
  });
}
