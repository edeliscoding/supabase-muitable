"use server";
import { revalidatePath } from "next/cache";
import supabase from "../lib/supabase";
import { redirect } from "next/navigation";

export async function createUser(newUser) {
  //   const { data, error } = await supabase.from("users").insert([{ ...newUser }]);
  //   console.log(data);
  const { username, email, phone, firstName, lastName } = newUser;
  console.log(newUser);

  const { data, error } = await supabase
    .from("users")
    .insert([
      {
        username: username,
        email: email,
        phone: phone,
        firstName: firstName,
        lastName: lastName,
      },
    ])
    .select();

  if (error) {
    console.log(error);
    throw new Error("failed to fetch users");
  }
  return data;
}

export async function deleteUser(id) {
  console.log(id);
  const { data, error } = await supabase.from("users").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}

export const editUser = async (formData) => {
  const { id, username, email, phone, firstName, lastName } =
    Object.fromEntries(formData);

  console.log(formData);
  const updateFields = {
    username,
    email,
    firstName,
    lastName,
    phone,
  };

  Object.keys(updateFields).forEach(
    (key) => (updateFields[key] === "" || undefined) && delete updateFields[key]
  );

  try {
    const { data, error } = await supabase
      .from("users")
      .update({
        username: updateFields.username,
        email: updateFields.email,
        firstName: updateFields.firstName,
        lastName: updateFields.lastName,
        phone: updateFields.phone,
      })
      .eq("id", id)
      .select();
    console.log(data);
  } catch (error) {}
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};
