import { Resend } from "resend";

/** Lazily instantiate Resend so a missing key doesn't crash the build. */
export function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

export const EMAIL_FROM =
  process.env.RESEND_FROM_EMAIL ?? "The Watchmen <noreply@gy6.me>";
export const EMAIL_TO = process.env.RESEND_TO_EMAIL ?? "hello@thewatchmen.com";
export const EMAIL_APPLY_CC = process.env.RESEND_APPLY_CC_EMAIL ?? "dustin@gy6.me";

/** Minimal HTML escaping for user-supplied values in email bodies. */
export function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/** Renders a simple labelled table of fields for the notification email. */
export function fieldsToHtml(
  title: string,
  fields: { label: string; value: string }[]
): string {
  const rows = fields
    .filter((f) => f.value.trim().length > 0)
    .map(
      (f) => `
        <tr>
          <td style="padding:8px 12px;color:#9a7a52;font-size:12px;text-transform:uppercase;letter-spacing:.08em;vertical-align:top;white-space:nowrap;">${esc(
            f.label
          )}</td>
          <td style="padding:8px 12px;color:#f4f1ea;font-size:14px;line-height:1.5;">${esc(
            f.value
          ).replace(/\n/g, "<br/>")}</td>
        </tr>`
    )
    .join("");

  return `
  <div style="background:#0a0a0b;padding:32px;font-family:Helvetica,Arial,sans-serif;">
    <div style="max-width:560px;margin:0 auto;background:#121214;border:1px solid #26262b;border-radius:12px;overflow:hidden;">
      <div style="padding:20px 24px;border-bottom:1px solid #26262b;">
        <h1 style="margin:0;color:#b8956a;font-size:16px;letter-spacing:.1em;text-transform:uppercase;">${esc(
          title
        )}</h1>
      </div>
      <table style="width:100%;border-collapse:collapse;">${rows}</table>
    </div>
  </div>`;
}

export function fieldsToText(fields: { label: string; value: string }[]): string {
  return fields
    .filter((f) => f.value.trim().length > 0)
    .map((f) => `${f.label}: ${f.value}`)
    .join("\n");
}
