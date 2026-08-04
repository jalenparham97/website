import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jalen Parham | Independent web designer & developer",
  description: "Jalen Parham helps small businesses turn good ideas into clear, capable websites.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <template
          dangerouslySetInnerHTML={{
            __html:
              "<!-- DESIGN CONTRACT: SEED: 4e25a1e7. THESIS: Build a precise, personable freelance workbench for small businesses. OWN-WORLD: A quiet editorial page where generous negative space, sharp type, hairline rules, and project specimens make craft visible. STORY: Establish trust, show the work, clarify the services, and make starting a conversation easy. FIRST VIEWPORT: The centered positioning, primary email CTA, and work anchor are visible immediately. FORM: Zero-radius surfaces, semantic shadcn tokens, editorial type scale, and measured motion. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md -->",
          }}
        />
        {children}
      </body>
    </html>
  );
}
