"use server";
import { supabase } from "./supabase";
import { Database } from "@/database.types";

export default async function NewFormation(formData: FormData) {
  const { data, error } = await supabase.from("analytics").insert({
    formation: formData.get(
      "formation"
    ) as Database["public"]["Enums"]["formation_name"],
  });

  if (error) {
    console.log(error);
  }
}
