import {
  defineDocuments,
  defineLocations,
  type PresentationPluginOptions,
} from "sanity/presentation";

export const resolve: PresentationPluginOptions["resolve"] = {
  mainDocuments: defineDocuments([
    {
      route: "/",
      filter: `_type == "homePage" && _id in ["homePage", "drafts.homePage"]`,
    },
    {
      route: "/about",
      filter: `_type == "aboutPage" && _id in ["aboutPage", "drafts.aboutPage"]`,
    },
    {
      route: "/contact",
      filter: `_type == "contactPage" && _id in ["contactPage", "drafts.contactPage"]`,
    },
    {
      route: "/services",
      filter: `_type == "servicesPage" && _id in ["servicesPage", "drafts.servicesPage"]`,
    },
    {
      route: "/work",
      filter: `_type == "workPage" && _id in ["workPage", "drafts.workPage"]`,
    },
  ]),
  locations: {
    aboutPage: defineLocations({
      select: { title: "title" },
      resolve: (doc) => ({
        locations: [{ title: doc?.title || "About", href: "/about" }],
      }),
    }),
    contactPage: defineLocations({
      select: { title: "title" },
      resolve: (doc) => ({
        locations: [{ title: doc?.title || "Contact", href: "/contact" }],
      }),
    }),
    homePage: defineLocations({
      select: { title: "title" },
      resolve: (doc) => ({
        locations: [{ title: doc?.title || "Home", href: "/" }],
      }),
    }),
    servicesPage: defineLocations({
      select: { title: "title" },
      resolve: (doc) => ({
        locations: [{ title: doc?.title || "Services", href: "/services" }],
      }),
    }),
    project: defineLocations({
      select: { title: "title", slug: "slug.current" },
      resolve: () => ({
        locations: [
          { title: "Home", href: "/" },
          { title: "Work", href: "/work" },
        ],
      }),
    }),
    blogPage: defineLocations({
      select: { title: "title" },
      resolve: (doc) => ({
        locations: [{ title: doc?.title || "Blog", href: "/blog" }],
      }),
    }),
    blogPost: defineLocations({
      select: { title: "title", slug: "slug.current" },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || "Article",
            href: doc?.slug ? `/blog/${doc.slug}` : "/blog",
          },
        ],
      }),
    }),
    workPage: defineLocations({
      select: { title: "title" },
      resolve: (doc) => ({
        locations: [{ title: doc?.title || "Work", href: "/work" }],
      }),
    }),
  },
};
