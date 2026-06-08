"use server";

import { createClient } from "@supabase/supabase-js";

export type ActionState = {
  success?: boolean;
  message?: string;
  error?: string;
};

export async function joinWaitlist(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    const supabaseUrl =
      process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return { error: "Supabase credentials missing. Check Vercel env." };
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const podcast_name = formData.get("show") as string;

    if (!email) {
      return { error: "Email is required." };
    }

    const { error } = await supabase
      .from("waitlist")
      .insert([{ email, name, podcast_name }]);

    if (error) {
      // Postgres unique constraint violation
      if (error.code === "23505") {
        return { success: true, message: "You're already on the waitlist!" };
      }
      return { error: error.message };
    }

    return {
      success: true,
      message: "You're on the list! We'll be in touch soon.",
    };
  } catch (err: unknown) {
    if (err instanceof Error) {
      return { error: err.message };
    }
    return { error: "Something went wrong." };
  }
}
