import { defineField, defineType } from "sanity";

export const workPage = defineType({
  name: "workPage",
  title: "Work Page",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "My Work",
      group: "content",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "intro",
      title: "Intro",
      type: "object",
      group: "content",
      fields: [
        defineField({
          name: "headline",
          title: "Headline",
          type: "text",
          rows: 2,
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
    }),
    defineField({
      name: "featuredProjects",
      title: "Projects to show",
      description:
        "Choose which projects appear on the work page and drag to set the order. Only projects listed here are shown.",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "project" }],
          options: { disableNew: true },
        },
      ],
      group: "content",
      validation: (rule) => rule.unique().min(1),
    }),
    defineField({
      name: "cta",
      title: "Call to action",
      type: "object",
      group: "content",
      fields: [
        defineField({
          name: "headline",
          title: "Headline",
          type: "text",
          rows: 2,
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
          rows: 3,
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "link",
          title: "Link",
          type: "link",
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({ name: "seo", title: "SEO", type: "seo", group: "seo" }),
  ],
  preview: {
    select: { title: "title" },
    prepare: ({ title }) => ({ title: title || "Work Page", subtitle: "Singleton" }),
  },
});
