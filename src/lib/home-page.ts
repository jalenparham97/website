import { stegaClean } from "@sanity/client/stega";
import type { AboutSectionContent } from "@/components/about-section";
import type { ContactSectionContent } from "@/components/contact-section";
import type { HeroSectionContent } from "@/components/hero-section";
import type { PortfolioSectionContent } from "@/components/portfolio-section";
import type { ServicesSectionContent } from "@/components/services-section";
import type { Project } from "@/lib/projects";
import type { HomePageData } from "@/sanity/lib/types";

function requiredString(value: string | null | undefined, field: string) {
  if (!value) {
    throw new Error(`Home page is missing required field: ${field}`);
  }

  return value;
}

function requiredLink(
  value: { label?: string | null; href?: string | null } | null | undefined,
  field: string,
) {
  return {
    label: requiredString(value?.label, `${field}.label`),
    href: stegaClean(requiredString(value?.href, `${field}.href`)),
  };
}

export function mapHomePage(data: HomePageData | null) {
  if (!data) {
    throw new Error("Home page document is missing in Sanity");
  }

  const hero: HeroSectionContent = {
    headline: requiredString(data.hero?.headline, "hero.headline"),
    intro: requiredString(data.hero?.intro, "hero.intro"),
    primaryCta: requiredLink(data.hero?.primaryCta, "hero.primaryCta"),
    secondaryCta: requiredLink(data.hero?.secondaryCta, "hero.secondaryCta"),
  };

  const about: AboutSectionContent = {
    headline: requiredString(data.about?.headline, "about.headline"),
    body: (data.about?.body ?? []).filter((paragraph): paragraph is string => Boolean(paragraph)),
    cta: requiredLink(data.about?.cta, "about.cta"),
    principles: (data.about?.principles ?? [])
      .filter(
        (principle): principle is NonNullable<typeof principle> =>
          Boolean(principle?.title && principle?.summary && principle?.description),
      )
      .map((principle, index) => ({
        _key: stegaClean(principle._key || `principle-${index}`),
        title: principle.title as string,
        summary: principle.summary as string,
        description: principle.description as string,
      })),
  };

  if (about.body.length === 0) {
    throw new Error("Home page is missing required field: about.body");
  }

  if (about.principles.length === 0) {
    throw new Error("Home page is missing required field: about.principles");
  }

  const services: ServicesSectionContent = {
    headline: requiredString(data.services?.headline, "services.headline"),
    intro: requiredString(data.services?.intro, "services.intro"),
    items: (data.services?.items ?? [])
      .filter((item): item is NonNullable<typeof item> => Boolean(item?.title && item?.summary))
      .map((item, index) => ({
        _key: stegaClean(item._key || `service-${index}`),
        title: item.title as string,
        summary: item.summary as string,
        detail: item.detail || "",
        tags: item.tags?.filter((tag): tag is string => Boolean(tag)) || [],
      })),
  };

  if (services.items.length === 0) {
    throw new Error("Home page is missing required field: services.items");
  }

  const featuredProjects: Project[] = (data.portfolio?.featuredProjects ?? [])
    .filter(
      (project): project is NonNullable<typeof project> =>
        Boolean(project?.title && project?.description && project?.href && project?.image),
    )
    .map((project) => ({
      name: project.title as string,
      description: project.description as string,
      href: stegaClean(project.href as string),
      image: stegaClean(project.image as string),
    }));

  const portfolio: PortfolioSectionContent = {
    headline: requiredString(data.portfolio?.headline, "portfolio.headline"),
    intro: requiredString(data.portfolio?.intro, "portfolio.intro"),
    cta: requiredLink(data.portfolio?.cta, "portfolio.cta"),
    featuredProjects,
  };

  const contact: ContactSectionContent = {
    headline: requiredString(data.contact?.headline, "contact.headline"),
    intro: requiredString(data.contact?.intro, "contact.intro"),
    email: stegaClean(requiredString(data.contact?.email, "contact.email")),
  };

  return {
    hero,
    about,
    services,
    portfolio,
    contact,
    seo: {
      title: data.seo?.title || undefined,
      description: data.seo?.description || undefined,
      noIndex: Boolean(data.seo?.noIndex),
    },
  };
}
