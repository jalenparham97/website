export const sanityTags = {
  home: "sanity:home",
  about: "sanity:about",
  contact: "sanity:contact",
  services: "sanity:services",
  work: "sanity:work",
  blog: "sanity:blog",
  blogPost: (slug: string) => `sanity:blog:${slug}`,
} as const;
