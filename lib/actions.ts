"use server";
import { supabase } from "./supabase";

export default async function NewFormation(formData: FormData) {
  const { data, error } = await supabase.from("analytics").insert({
    formation: formData.get("formation") as string,
  });

  if (error) {
    console.log(error);
  }
}
