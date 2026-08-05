"use client";

const services = [
  {
    title: "Web Design",
    summary:
      "Clear layouts and a distinct visual direction built around the way your business should feel.",
    tags: ["Visual Direction", "Page Layouts", "Mobile Friendly", "Content Planning"],
    detail:
      "I shape a distinct look for your business and make sure every page feels easy to follow. The result is a website that feels polished, trustworthy, and true to you.",
  },
  {
    title: "Website Development",
    summary:
      "A smooth, reliable website that helps people find what they need and take the next step.",
    tags: ["Custom Website", "Easy to Use", "Fast Loading", "Accessible Design"],
    detail:
      "I bring the finished design to life with care for the details people notice most. Your visitors get a clear, comfortable experience from their first visit to their final click.",
  },
  {
    title: "Content Management",
    summary: "Simple ways to keep your website current as your business grows and changes.",
    tags: ["Easy Updates", "Content Planning", "Team Guidance", "Ongoing Care"],
    detail:
      "A great website stays useful long after launch day. I give you a straightforward way to update your content without waiting on a developer or worrying about the layout.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="border-t border-border py-20 sm:py-28">
      {/* Header - Vertical Stacked Editorial Header */}
      <div className="mb-12 flex flex-col gap-4 sm:mb-16">
        <h2 className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
          Services for Your Business
        </h2>
        <p className="max-w-2xl text-lg leading-7 text-muted-foreground sm:text-xl sm:leading-8">
          Well-made websites that help your business look its best, connect with the right people,
          and stay easy to manage.
        </p>
      </div>

      {/* Stacked Rows Layout */}
      <div className="flex flex-col gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="group relative border border-border bg-card p-8 transition-all duration-300 hover:border-foreground/20 sm:p-10 lg:p-12"
          >
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
              {/* Left Column: Title & Capability Tags */}
              <div className="flex flex-col justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-base font-medium text-foreground sm:text-lg">
                    {service.summary}
                  </p>
                </div>

                {/* Capability Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-border/80 bg-background px-3 py-1 font-mono text-xs font-medium text-muted-foreground transition-colors group-hover:border-foreground/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Detailed Narrative */}
              <div className="flex flex-col justify-center border-t border-border/60 pt-6 lg:border-t-0 lg:border-l lg:border-border/60 lg:pt-0 lg:pl-12">
                <p className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                  {service.detail}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
