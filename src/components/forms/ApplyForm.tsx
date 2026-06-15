"use client";

import { useFormState, useFormStatus } from "react-dom";
import { CheckCircle2 } from "lucide-react";
import { submitApplication } from "@/app/actions/apply";
import { initialFormState } from "@/app/actions/types";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Honeypot, FieldWrap, usePhone } from "./Field";

const ageRanges = ["18–24", "25–34", "35–44", "45–54", "55–64", "65+"];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full">
      {pending ? "Submitting…" : "Submit Application"}
    </Button>
  );
}

export function ApplyForm() {
  const [state, action] = useFormState(submitApplication, initialFormState);
  const { phone, onChange } = usePhone();

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-brass/30 bg-ink-800 p-8">
        <CheckCircle2 className="h-9 w-9 text-brass" strokeWidth={1.5} />
        <p className="font-serif text-3xl text-bone">Application received.</p>
        <p className="text-bone-muted">
          A member of the advisory team will be in touch.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-5">
      <Honeypot />

      <FieldWrap label="Full name" htmlFor="fullName" required error={state.errors?.fullName}>
        <Input id="fullName" name="fullName" autoComplete="name" required />
      </FieldWrap>

      <div className="grid gap-5 sm:grid-cols-2">
        <FieldWrap label="Email" htmlFor="email" required error={state.errors?.email}>
          <Input id="email" name="email" type="email" autoComplete="email" required />
        </FieldWrap>
        <FieldWrap label="Phone" htmlFor="phone" required error={state.errors?.phone}>
          <Input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="(555) 123-4567"
            value={phone}
            onChange={onChange}
            required
          />
        </FieldWrap>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FieldWrap label="City / neighborhood" htmlFor="city" required error={state.errors?.city}>
          <Input id="city" name="city" placeholder="e.g. St. Petersburg" required />
        </FieldWrap>
        <FieldWrap label="Age range" htmlFor="ageRange">
          <select
            id="ageRange"
            name="ageRange"
            defaultValue=""
            className="flex h-12 w-full rounded-md border border-bone/15 bg-ink-800 px-4 text-sm text-bone focus-visible:border-brass focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brass"
          >
            <option value="" disabled>
              Select…
            </option>
            {ageRanges.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </FieldWrap>
      </div>

      <FieldWrap label="Occupation" htmlFor="occupation">
        <Input id="occupation" name="occupation" autoComplete="organization-title" />
      </FieldWrap>

      <div className="grid gap-5 sm:grid-cols-2">
        <FieldWrap label="Who referred you" htmlFor="referrerName" optional>
          <Input id="referrerName" name="referrerName" placeholder="Name" />
        </FieldWrap>
        <FieldWrap label="Referrer email" htmlFor="referrerEmail" optional>
          <Input id="referrerEmail" name="referrerEmail" type="email" placeholder="Email" />
        </FieldWrap>
      </div>

      <FieldWrap
        label="Why are you interested in The Watchmen?"
        htmlFor="why"
        required
        error={state.errors?.why}
      >
        <Textarea id="why" name="why" rows={5} required />
      </FieldWrap>

      <FieldWrap label="Anything else we should know?" htmlFor="anythingElse" optional>
        <Textarea id="anythingElse" name="anythingElse" rows={3} />
      </FieldWrap>

      {state.status === "error" && state.message ? (
        <p className="text-sm text-red-400">{state.message}</p>
      ) : null}

      <div className="pt-2">
        <SubmitButton />
        <p className="mt-3 text-center text-xs text-bone-faint">
          Applications are reviewed intentionally to protect the culture of the
          brotherhood.
        </p>
      </div>
    </form>
  );
}
