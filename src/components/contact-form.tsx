"use client";

import { MailSend01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { env } from "@/env";

export function ContactForm() {
  return (
    <form
      action={`https://api.formbox.app/s/${env.NEXT_PUBLIC_FORMBOX_FORM_ID}`}
      method="POST"
      className="w-full"
    >
      <FieldGroup className="gap-5">
        <Field>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <Input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Your name"
            className="rounded-none"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            className="rounded-none"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <Textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="General question, new project, or anything else..."
            className="min-h-32 rounded-none"
          />
        </Field>
        <div className="flex flex-col gap-3 pt-2">
          <Button
            type="submit"
            size="lg"
            className="group flex h-13 w-full items-center justify-center gap-2.5 rounded-none bg-foreground text-base font-medium text-background transition-all duration-300 hover:bg-foreground/90"
          >
            <span>Send message</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <HugeiconsIcon icon={MailSend01Icon} size={18} strokeWidth={1.5} />
            </span>
          </Button>
        </div>
      </FieldGroup>
    </form>
  );
}
