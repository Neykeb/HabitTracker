import { useQuery } from "@tanstack/react-query";
import { getHabitById } from "../services/habitService";

export function useHabit(id: string) {
  return useQuery({
    queryKey: ["habit", id],
    queryFn: () => getHabitById(id),
    enabled: !!id,
  });
}
