import { getUsers } from "@/app/services/queries";
import { useQuery } from "@tanstack/react-query";

export function useUsers() {
  const {
    isLoading,
    data: users,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  return { isLoading, error, users };
}
