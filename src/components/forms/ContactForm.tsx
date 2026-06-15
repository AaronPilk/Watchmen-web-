"use client";

import { useFormState, useFormStatus } from "react-dom";
import { CheckCircle2 } from "lucide-react";
import { submitContact } from "@/app/actions/contact";
import { initialFormState } from "@/app/actions/types";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Honeypot, FieldWrap, usePhone } from "./Field";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? "Sending…" : "Send Message"}
    </Button>
  );
}

export function ContactForm() {
  const [state, action] = useFormState(submitContact, initialFormState);
  const { phone, onChange } = usePhone();

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-brass/30 bg-ink-800 p-8">
        <CheckCircle2 className="h-8 w-8 text-brass" strokeWidth={1.5} />
        <p className="font-serif text-2xl text-bone">Thank you.</p>
        <p className="text-bone-muted">
          Your message has been received. We&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-5">
      <Honeypot />

      <FieldWrap label="Name" htmlFor="name" required error={state.errors?.name}>
        <Input id="name" name="name" autoComplete="name" required />
      </FieldWrap>

      <FieldWrap label="Email" htmlFor="email" required error={state.errors?.email}>
        <Input id="email" name="email" type="email" autoComplete="email" required />
      </FieldWrap>

      <FieldWrap label="Phone" htmlFor="phone" optional error={state.errors?.phone}>
        <Input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="(555) 123-4567"
          value={phone}
          onChange={onChange}
        />
      </FieldWrap>

      <FieldWrap label="Message" htmlFor="message" required error={state.errors?.message}>
        <Textarea id="message" name="message" rows={5} required />
      </FieldWrap>

      {state.status === "error" && state.message ? (
        <p className="text-sm text-red-400">{state.message}</p>
      ) : null}

      <div className="pt-2">
        <SubmitButton />
        <p className="mt-3 text-xs text-bone-faint">
          We respond personally, usually within a couple of days.
        </p>
      </div>
    </form>
  );
}
