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
      route: "/work",
      filter: `_type == "project"`,
    },
  ]),
  locations: {
    homePage: defineLocations({
      select: { title: "title" },
      resolve: (doc) => ({
        locations: [{ title: doc?.title || "Home", href: "/" }],
      }),
    }),
    project: defineLocations({
      select: { title: "title", slug: "slug.current" },
      resolve: (doc) => ({
        locations: [
          { title: "Home", href: "/" },
          { title: "Work", href: "/work" },
        ],
      }),
    }),
  },
};
