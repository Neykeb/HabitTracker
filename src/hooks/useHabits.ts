import { useQuery } from "@tanstack/react-query";
import { getHabits } from "../services/habitService";

export function useHabits() {
  return useQuery({
    queryKey: ["habits"],
    queryFn: getHabits,
  });
}
