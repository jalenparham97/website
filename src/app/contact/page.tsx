import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/contact/contact-page";

export const metadata: Metadata = {
  title: "Contact | Jalen Parham",
  description:
    "Get in touch with Jalen Parham about web design, website development, or your next project.",
};

export default function ContactRoute() {
  return (
    <main id="top" className="min-h-svh overflow-x-clip">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 sm:px-8 lg:px-12">
        <ContactPage />
      </div>
    </main>
  );
}
