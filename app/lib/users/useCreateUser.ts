"use client";
import { createUser } from "@/app/services/mutations";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export function useCreateUser() {
  const queryClient = useQueryClient();

  const { mutate: AddUser, isLoading: isCreating } = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      console.log("user created");
      toast.success("New User successfully created");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    // onError: (err) => toast.error(err.message),
  });

  return { isCreating, AddUser };
}
