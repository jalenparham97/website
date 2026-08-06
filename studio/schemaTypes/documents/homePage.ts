import { defineArrayMember, defineField, defineType } from "sanity";
import { HomeIcon } from "@sanity/icons";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  icon: HomeIcon,
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Internal label for Studio",
      initialValue: "Home",
      group: "content",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      group: "content",
      fields: [
        defineField({
          name: "headline",
          title: "Headline",
          type: "text",
          rows: 3,
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "intro",
          title: "Intro",
          type: "text",
          rows: 3,
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "primaryCta",
          title: "Primary call to action",
          type: "link",
        }),
        defineField({
          name: "secondaryCta",
          title: "Secondary call to action",
          type: "link",
        }),
      ],
    }),
    defineField({
      name: "about",
      title: "About",
      type: "object",
      group: "content",
      fields: [
        defineField({
          name: "headline",
          title: "Headline",
          type: "text",
          rows: 3,
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "body",
          title: "Body",
          type: "array",
          of: [defineArrayMember({ type: "text", rows: 3 })],
          validation: (rule) => rule.min(1),
        }),
        defineField({
          name: "cta",
          title: "Call to action",
          type: "link",
        }),
        defineField({
          name: "principles",
          title: "Principles",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              name: "principle",
              fields: [
                defineField({
                  name: "title",
                  title: "Title",
                  type: "string",
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: "summary",
                  title: "Summary",
                  type: "string",
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: "description",
                  title: "Description",
                  type: "text",
                  rows: 3,
                  validation: (rule) => rule.required(),
                }),
              ],
              preview: {
                select: { title: "title", subtitle: "summary" },
              },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "object",
      group: "content",
      fields: [
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "intro",
          title: "Intro",
          type: "text",
          rows: 3,
        }),
        defineField({
          name: "items",
          title: "Service items",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              name: "serviceItem",
              fields: [
                defineField({
                  name: "title",
                  title: "Title",
                  type: "string",
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: "summary",
                  title: "Summary",
                  type: "text",
                  rows: 2,
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: "detail",
                  title: "Detail",
                  type: "text",
                  rows: 4,
                }),
                defineField({
                  name: "tags",
                  title: "Tags",
                  type: "array",
                  of: [defineArrayMember({ type: "string" })],
                  options: { layout: "tags" },
                }),
              ],
              preview: {
                select: { title: "title", subtitle: "summary" },
              },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "portfolio",
      title: "Portfolio",
      type: "object",
      group: "content",
      fields: [
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "intro",
          title: "Intro",
          type: "text",
          rows: 3,
        }),
        defineField({
          name: "cta",
          title: "Call to action",
          type: "link",
        }),
        defineField({
          name: "featuredProjects",
          title: "Featured projects",
          type: "array",
          of: [
            defineArrayMember({
              type: "reference",
              to: [{ type: "project" }],
            }),
          ],
          validation: (rule) => rule.unique(),
        }),
      ],
    }),
    defineField({
      name: "contact",
      title: "Contact",
      type: "object",
      group: "content",
      fields: [
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "intro",
          title: "Intro",
          type: "text",
          rows: 3,
        }),
        defineField({
          name: "email",
          title: "Email",
          type: "string",
          validation: (rule) => rule.email(),
        }),
      ],
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
      group: "seo",
    }),
  ],
  preview: {
    select: { title: "title" },
    prepare({ title }) {
      return {
        title: title || "Home Page",
        subtitle: "Singleton",
      };
    },
  },
});
