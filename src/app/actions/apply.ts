"use server";

import { headers } from "next/headers";
import {
  getResend,
  EMAIL_FROM,
  EMAIL_TO,
  EMAIL_APPLY_CC,
  isValidEmail,
  fieldsToHtml,
  fieldsToText,
} from "@/lib/email";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import type { FormState } from "./types";

export async function submitApplication(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  if ((formData.get("website") as string)?.trim()) {
    return { status: "success" };
  }

  const get = (k: string) => ((formData.get(k) as string) ?? "").trim();

  const fullName = get("fullName");
  const email = get("email");
  const phone = get("phone");
  const city = get("city");
  const ageRange = get("ageRange");
  const occupation = get("occupation");
  const referrerName = get("referrerName");
  const referrerEmail = get("referrerEmail");
  const why = get("why");
  const anythingElse = get("anythingElse");

  const errors: Record<string, string> = {};
  if (!fullName) errors.fullName = "Please enter your full name.";
  if (!email) errors.email = "Please enter your email.";
  else if (!isValidEmail(email)) errors.email = "Please enter a valid email.";
  if (!phone) errors.phone = "Please enter your phone number.";
  if (!city) errors.city = "Please tell us where you're based.";
  if (!why) errors.why = "Tell us why you're interested.";

  if (Object.keys(errors).length) {
    return { status: "error", message: "Please fix the highlighted fields.", errors };
  }

  const ip = getClientIp(headers());
  const limited = rateLimit(`apply:${ip}`);
  if (!limited.success) {
    return {
      status: "error",
      message: "We've received several applications from here recently. Please try again later.",
    };
  }

  const resend = getResend();
  if (!resend) {
    return {
      status: "error",
      message: "Applications aren't configured yet. Add RESEND_API_KEY to enable.",
    };
  }

  const fields = [
    { label: "Full name", value: fullName },
    { label: "Email", value: email },
    { label: "Phone", value: phone },
    { label: "City / neighborhood", value: city },
    { label: "Age range", value: ageRange },
    { label: "Occupation", value: occupation },
    { label: "Referred by", value: referrerName },
    { label: "Referrer email", value: referrerEmail },
    { label: "Why interested", value: why },
    { label: "Anything else", value: anythingElse },
  ];

  try {
    const { error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      cc: EMAIL_APPLY_CC,
      reply_to: email,
      subject: `[Application] ${fullName}`,
      html: fieldsToHtml("New membership application", fields),
      text: fieldsToText(fields),
    });
    if (error) throw new Error(error.message);
  } catch (err) {
    console.error("Application send failed:", err);
    return {
      status: "error",
      message: "Something went wrong submitting your application. Please try again.",
    };
  }

  return { status: "success" };
}
