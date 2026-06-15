"use server";

import { headers } from "next/headers";
import {
  getResend,
  EMAIL_FROM,
  EMAIL_TO,
  isValidEmail,
  fieldsToHtml,
  fieldsToText,
} from "@/lib/email";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import type { FormState } from "./types";

export async function submitContact(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  // Honeypot — bots fill hidden fields; humans don't.
  if ((formData.get("website") as string)?.trim()) {
    return { status: "success" }; // silently accept, drop
  }

  const name = ((formData.get("name") as string) ?? "").trim();
  const email = ((formData.get("email") as string) ?? "").trim();
  const phone = ((formData.get("phone") as string) ?? "").trim();
  const message = ((formData.get("message") as string) ?? "").trim();

  const errors: Record<string, string> = {};
  if (!name) errors.name = "Please enter your name.";
  if (!email) errors.email = "Please enter your email.";
  else if (!isValidEmail(email)) errors.email = "Please enter a valid email.";
  if (!message) errors.message = "Please enter a message.";

  if (Object.keys(errors).length) {
    return { status: "error", message: "Please fix the highlighted fields.", errors };
  }

  // Rate limit: 5 / hour / IP
  const ip = getClientIp(headers());
  const limited = rateLimit(`contact:${ip}`);
  if (!limited.success) {
    return {
      status: "error",
      message: "You've sent several messages recently. Please try again later.",
    };
  }

  const resend = getResend();
  if (!resend) {
    return {
      status: "error",
      message:
        "Email isn't configured yet. Add RESEND_API_KEY to send messages.",
    };
  }

  const fields = [
    { label: "Name", value: name },
    { label: "Email", value: email },
    { label: "Phone", value: phone },
    { label: "Message", value: message },
  ];

  try {
    const { error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      reply_to: email,
      subject: `[Contact] ${name}`,
      html: fieldsToHtml("New contact message", fields),
      text: fieldsToText(fields),
    });
    if (error) throw new Error(error.message);
  } catch (err) {
    console.error("Contact send failed:", err);
    return {
      status: "error",
      message: "Something went wrong sending your message. Please try again.",
    };
  }

  return { status: "success" };
}
