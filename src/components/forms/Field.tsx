"use client";

import * as React from "react";
import { Label } from "@/components/ui/label";

/** Visually-hidden honeypot. Bots fill it; the action drops anything that does. */
export function Honeypot() {
  return (
    <div className="absolute left-[-9999px]" aria-hidden="true">
      <label htmlFor="website">Website</label>
      <input
        type="text"
        id="website"
        name="website"
        tabIndex={-1}
        autoComplete="off"
      />
    </div>
  );
}

export function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-xs text-red-400">{message}</p>;
}

export function FieldWrap({
  label,
  htmlFor,
  required,
  optional,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={htmlFor}>
        {label}
        {required ? <span className="ml-1 text-brass">*</span> : null}
        {optional ? (
          <span className="ml-1 normal-case text-bone-faint">(optional)</span>
        ) : null}
      </Label>
      {children}
      <FieldError message={error} />
    </div>
  );
}

/** US phone mask → (XXX) XXX-XXXX */
export function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  const len = digits.length;
  if (len === 0) return "";
  if (len < 4) return `(${digits}`;
  if (len < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export function usePhone(initial = "") {
  const [phone, setPhone] = React.useState(initial);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPhone(formatPhone(e.target.value));
  return { phone, onChange };
}
