import { defineField, defineType } from "sanity";

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact Page",
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
      initialValue: "Contact",
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
      name: "emailSection",
      title: "Email section",
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
          name: "description",
          title: "Description",
          type: "text",
          rows: 3,
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "email",
          title: "Email address",
          type: "email",
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: "formSection",
      title: "Form section",
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
          name: "description",
          title: "Description",
          type: "text",
          rows: 3,
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({ name: "seo", title: "SEO", type: "seo", group: "seo" }),
  ],
  preview: {
    select: { title: "title" },
    prepare: ({ title }) => ({ title: title || "Contact Page", subtitle: "Singleton" }),
  },
});
