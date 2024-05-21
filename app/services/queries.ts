import supabase from "../lib/supabase";

export async function getUsers() {
  const { data, error } = await supabase.from("users").select("*");
  if (error) {
    console.log(error);
    throw new Error("failed to fetch users");
  }
  return data;
}

export async function getUser(userId: string) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) {
    console.log(error);
    throw new Error("failed to fetch user");
  }
  return { data, error };
}
