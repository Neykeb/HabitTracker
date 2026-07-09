import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateHabit } from "../services/habitService";
import type { UpdateHabit } from "../types/habit";

export function useUpdateHabit() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, habit }: { id: string; habit: UpdateHabit }) =>
      updateHabit(id, habit),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["habits"] });
    },
  });
}
