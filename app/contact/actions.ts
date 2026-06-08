"use server";
import nodemailer from "nodemailer";
import fs from "fs/promises";
import path from "path";

export type ContactState = {
  success: boolean;
  message: string;
  error: string;
};

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  auth: {
    user: process.env.BREVO_SMTP_LOGIN,
    pass: process.env.BREVO_SMTP_PASSWORD,
  },
});

async function getEmailHtml(ticketId: string, date: string) {
  const filePath = path.join(process.cwd(), "public", "email-template.html");
  let template = await fs.readFile(filePath, "utf-8");
  template = template.replace("{{ticket_id}}", ticketId);
  template = template.replace("{{submitted_date}}", date);
  return template;
}

import { createClient } from "@supabase/supabase-js";

export async function submitContact(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  try {
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const subject = formData.get("subject") as string;
    const msg = formData.get("message") as string;

    const ticketId = Math.floor(100000 + Math.random() * 900000).toString();
    const date = new Date().toLocaleDateString("en-US", {
      month: "short", day: "numeric", year: "numeric",
    });

    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const { error: dbError } = await supabase.from("support_tickets").insert({
      ticket_id: ticketId,
      name,
      email,
      subject,
      message: msg,
    });

    if (dbError) throw new Error(dbError.message);

    const html = await getEmailHtml(ticketId, date);

    await transporter.sendMail({
      from: '"Podloop Support" <support@podloop.xyz>',
      to: email,
      subject: `Support Confirmation: #${ticketId}`,
      html,
      text: `Thanks for reaching out to the Podloop support team.\nYour ticket ID is #${ticketId}.\nWe will get back to you within 24 hours.\n\n- The Podloop Team`,
    });

    await transporter.sendMail({
      from: '"Podloop Support" <support@podloop.xyz>',
      to: "support@podloop.xyz",
      replyTo: email,
      subject: `New Message from ${name}: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${msg}`,
    });

    return { success: true, message: "Message sent! Check your inbox.", error: "" };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Unknown error";
    return { success: false, message: "", error: errorMsg };
  }
}
