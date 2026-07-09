import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteHabit } from "../services/habitService";

export function useDeleteHabit() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteHabit,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["habits"] });
    },
  });
}
