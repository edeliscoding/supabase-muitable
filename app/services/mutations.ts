"use server";
import { revalidatePath } from "next/cache";
import supabase from "../lib/supabase";
import { redirect } from "next/navigation";

type NewUser = {
  username: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  // other fields...
};

export async function createUser(newUser: NewUser) {
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

export async function deleteUser(id: string) {
  console.log(id);
  const { data, error } = await supabase.from("users").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}

export const editUser = async (formData: FormData) => {
  const { id, username, email, phone, firstName, lastName } =
    Object.fromEntries(formData) as {
      id: string;
      username: string;
      email: string;
      phone: string;
      firstName: string;
      lastName: string;
    };

  console.log(formData);
  type UpdateFields = {
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
  };

  const updateFields: Partial<UpdateFields> = {
    username,
    email,
    firstName,
    lastName,
    phone,
  };

  // Object.keys(updateFields).forEach(
  //   (key) => (updateFields[key] === "" || undefined) && delete updateFields[key]
  // );

  // Use type assertion to let TypeScript know the type of key
  Object.keys(updateFields).forEach((key) => {
    const typedKey = key as keyof UpdateFields;
    if (updateFields[typedKey] === "" || updateFields[typedKey] === undefined) {
      delete updateFields[typedKey];
    }
  });

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
