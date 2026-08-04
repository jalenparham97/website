import { ContactForm } from "@/components/contact-form";
import { SiteHeader } from "@/components/site-header";
import { buttonVariants } from "@/components/ui/button";

const projects = [
  {
    name: "Formbox",
    description:
      "A form backend as a service that lets users create custom HTML forms and collect submissions through a custom endpoint.",
    href: "https://formbox.app/",
  },
  {
    name: "Beyond Births",
    description:
      "Advice on nutrition, exercise, birth plans, and choosing the right birthing facility.",
    href: "https://www.beyondbirths.org/",
  },
];

const services = [
  {
    title: "Web Design",
    detail:
      "I shape clear layouts, calm interfaces, and visual systems that feel like your business — not a template.",
  },
  {
    title: "Web Development",
    detail:
      "I build fast, thoughtful sites in the browser, with care for the details people actually notice and use.",
  },
  {
    title: "Content Management",
    detail:
      "I set up simple ways to keep your content current, so the site stays useful long after launch day.",
  },
];

export default function Home() {
  return (
    <main id="top" className="min-h-svh overflow-x-clip">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 sm:px-8 lg:px-12">
        <SiteHeader />

        <section className="flex flex-col justify-center py-24 sm:py-32 lg:min-h-[calc(100svh-5rem)] lg:py-28">
          <div className="max-w-5xl">
            <h1 className="text-[clamp(2.75rem,7.5vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.04em]">
              Software engineer and freelance web developer.
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-9 text-muted-foreground sm:text-2xl sm:leading-10">
              I&apos;m Jalen. I design and build digital experiences for people and small businesses
              who want their work to feel clear, capable, and a little more human online.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                className={buttonVariants({
                  size: "lg",
                  className: "rounded-none",
                })}
                href="#contact"
              >
                Let&apos;s talk
              </a>
              <a
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "rounded-none",
                })}
                href="#portfolio"
              >
                View my work
              </a>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="grid gap-8 border-t border-border py-20 sm:py-24 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16"
        >
          <div>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.04em]">
              About me
            </h2>
            <p className="mt-4 max-w-xs text-base leading-7 text-muted-foreground sm:text-lg">
              Based in Romulus, MI. Available for select freelance projects.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.03em]">
              Hi, I&apos;m Jalen. Nice to meet you.
            </p>
            <div className="flex max-w-2xl flex-col gap-4 text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
              <p>
                I&apos;m a senior software developer with a soft spot for thoughtful websites — the
                kind that feel calm, intentional, and easy to trust.
              </p>
              <p>
                I care about the craft behind the screen: structure that makes sense, interfaces
                that feel natural, and details that quietly make someone&apos;s day a little easier.
              </p>
              <p>
                If you&apos;re building something that matters to your business, I&apos;d love to
                help you bring it to life.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="border-t border-border py-20 sm:py-24">
          <div className="mb-10 flex flex-col gap-3 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.04em]">
              What I can help with
            </h2>
            <p className="max-w-md text-base leading-7 text-muted-foreground sm:max-w-sm sm:text-right sm:text-lg">
              Design, development, and the systems that keep a site useful after launch.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3 sm:gap-4">
            {services.map((service) => (
              <div
                className="group flex min-h-72 flex-col border border-border bg-card p-8 transition-all duration-300 sm:min-h-80 sm:p-12"
                key={service.title}
              >
                <h3 className="text-2xl font-medium tracking-[-0.03em] sm:text-[1.8rem]">
                  {service.title}
                </h3>
                <p className="mt-8 text-lg leading-8 text-muted-foreground">{service.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="portfolio" className="border-t border-border py-20 sm:py-24">
          <div className="mb-10 flex flex-col gap-3 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.04em]">
              Selected work
            </h2>
            <p className="max-w-md text-base leading-7 text-muted-foreground sm:max-w-sm sm:text-right sm:text-lg">
              A couple of projects that show how I think about product, design, and code.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <a
                className="group flex min-h-80 flex-col justify-between border border-border bg-card p-10 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-[0_18px_50px_-24px_rgba(0,0,0,0.18)] sm:min-h-96 sm:p-14"
                href={project.href}
                key={project.name}
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <h3 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                    {project.name}
                  </h3>
                  <p className="mt-8 max-w-md text-lg leading-8 text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <span className="mt-14 inline-flex items-center gap-2 text-base text-muted-foreground transition-colors group-hover:text-foreground">
                  Visit website
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="border-t border-border py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="flex flex-col gap-5">
              <h2 className="text-[clamp(2.25rem,4.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
                Let&apos;s work together
              </h2>
              <p className="max-w-md text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                Have a project in mind, or just want to say hi? Tell me a little about what
                you&apos;re working on — I&apos;m always open to new ideas and good conversations.
              </p>
              <div className="mt-1 flex flex-col gap-2 text-base text-muted-foreground">
                <span>Email</span>
                <a
                  className="text-lg text-foreground transition-opacity hover:opacity-70"
                  href="mailto:jalenparham97@gmail.com"
                >
                  jalenparham97@gmail.com
                </a>
              </div>
            </div>
            <div className="border border-border bg-card p-8 sm:p-12">
              <ContactForm />
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-3 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>Jalen Parham © 2026</span>
          <span>Living, learning, and leveling up one day at a time.</span>
        </footer>
      </div>
    </main>
  );
}
