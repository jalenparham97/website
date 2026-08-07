import { defineArrayMember, defineField, defineType } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
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
      description: "Internal label for Studio",
      initialValue: "About",
      group: "content",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "story",
      title: "Story",
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
          of: [defineArrayMember({ type: "block" })],
          validation: (rule) => rule.required().min(1),
        }),
      ],
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
          name: "intro",
          title: "Intro",
          type: "text",
          rows: 2,
        }),
        defineField({
          name: "link",
          title: "Link",
          type: "link",
          validation: (rule) => rule.required(),
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
        title: title || "About Page",
        subtitle: "Singleton",
      };
    },
  },
});
