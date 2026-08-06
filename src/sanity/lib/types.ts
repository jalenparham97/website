export type SanityLink = {
  label?: string | null;
  href?: string | null;
};

export type HomePageData = {
  title?: string | null;
  hero?: {
    headline?: string | null;
    intro?: string | null;
    primaryCta?: SanityLink | null;
    secondaryCta?: SanityLink | null;
  } | null;
  about?: {
    headline?: string | null;
    body?: Array<string | null> | null;
    cta?: SanityLink | null;
    principles?: Array<{
      _key?: string;
      title?: string | null;
      summary?: string | null;
      description?: string | null;
    }> | null;
  } | null;
  services?: {
    headline?: string | null;
    intro?: string | null;
    items?: Array<{
      _key?: string;
      title?: string | null;
      summary?: string | null;
      detail?: string | null;
      tags?: Array<string | null> | null;
    }> | null;
  } | null;
  portfolio?: {
    headline?: string | null;
    intro?: string | null;
    cta?: SanityLink | null;
    featuredProjects?: Array<{
      _id?: string;
      title?: string | null;
      description?: string | null;
      href?: string | null;
      image?: string | null;
      tags?: Array<string | null> | null;
    } | null> | null;
  } | null;
  contact?: {
    headline?: string | null;
    intro?: string | null;
    email?: string | null;
  } | null;
  seo?: {
    title?: string | null;
    description?: string | null;
    image?: unknown;
    noIndex?: boolean | null;
  } | null;
};
