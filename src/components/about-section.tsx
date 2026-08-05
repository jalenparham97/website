"use client";

import { useState } from "react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const principles = [
  {
    id: "systems",
    title: "Clean Design",
    summary: "A simple visual style that keeps your message clear.",
    description:
      "Your website should feel welcoming from the first visit, helping people understand your work and feel good about taking the next step.",
  },
  {
    id: "engineering",
    title: "Built to Last",
    summary: "A dependable website that stays easy to use.",
    description:
      "Your website should feel good to use now and continue serving your business as it grows. Keeping your content current should feel simple, familiar, and never like a chore.",
  },
  {
    id: "collaboration",
    title: "Direct Collaboration",
    summary: "Working directly with the person building your site.",
    description:
      "No agency account managers or telephone games. You get direct, honest communication from kick-off to launch day and beyond.",
  },
];

export function AboutSection() {
  const [activePrinciple, setActivePrinciple] = useState(principles[0].id);

  const activeData = principles.find((p) => p.id === activePrinciple) ?? principles[0];

  return (
    <section id="about" className="border-t border-border py-20 sm:py-28">
      {/* Main Narrative Split Layout */}
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* Left Column: Big Lead Statement & Narrative */}
        <div className="flex flex-col gap-6">
          <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.035em]">
            Hi, I&apos;m Jalen. I design and build exceptional digital experiences.
          </h2>

          <div className="flex flex-col gap-5 text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
            <p>
              I work with people and small businesses to create websites that feel calm,
              intentional, and easy to trust.
            </p>
            <p>
              I care about the details people notice, from clear pages and simple choices to the
              small moments that make a website feel welcoming.
            </p>
            <p>
              If you&apos;re building something that matters to your business, I help turn your
              ideas into a clear, polished online experience.
            </p>
          </div>
        </div>

        {/* Right Column: Interactive Craft Philosophy */}
        <div className="flex flex-col border border-border bg-card p-6 sm:p-8">
          <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Core Principles
            </h3>
          </div>

          {/* Principle Buttons */}
          <div className="flex flex-col gap-2">
            {principles.map((principle) => {
              const isActive = principle.id === activePrinciple;
              return (
                <button
                  key={principle.id}
                  type="button"
                  onClick={() => setActivePrinciple(principle.id)}
                  className={`group relative flex flex-col text-left p-5 transition-all duration-200 ${
                    isActive
                      ? "bg-foreground text-background"
                      : "bg-transparent text-foreground hover:bg-muted/60"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute right-4 top-4 text-sm transition-transform duration-200 ${
                      isActive ? "translate-x-1" : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    <HugeiconsIcon icon={ArrowUpRight01Icon} size={18} strokeWidth={1.5} />
                  </span>
                  <h4 className="text-lg font-medium tracking-[-0.02em]">{principle.title}</h4>
                  <p
                    className={`mt-1 text-base ${
                      isActive ? "text-background/80" : "text-muted-foreground"
                    }`}
                  >
                    {principle.summary}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Expanded Active Principle Description */}
          <div className="mt-6 border-t border-border pt-6">
            <p className="text-base leading-6 text-muted-foreground">{activeData.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
