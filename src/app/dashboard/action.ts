"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function createNote(formdata: FormData) {
  const supabase = await createClient();
  const { data: session } = await supabase.auth.getUser();

  const data = {
    task: formdata.get("task"),
  };

  const { error } = await supabase
    .from("todos")
    .insert({ ...data, user_id: session.user?.id });

  if (!error) revalidatePath("/");
}
