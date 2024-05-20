"use client";
import { getUser, getUsers } from "@/app/services/queries";
import { useQuery } from "@tanstack/react-query";
import supabase from "../supabase";

// export function useGetUser(id) {
//   const {
//     isLoading,
//     data: user,
//     error,
//   } = useQuery({
//     queryKey: ["user", { id }],
//     queryFn: (id) => getUser(id),
//   });

//   return { isLoading, error, user };
// }

// export async function useGetUser(userId) {
//   const { data: user, error } = await supabase
//     .from("users")
//     .select("*")
//     .eq("id", userId)
//     .single();
//   console.log(user);
//   if (error) {
//     console.log(error);
//     throw new Error("failed to fetch users");
//   }
//   return { user, error };
// }
