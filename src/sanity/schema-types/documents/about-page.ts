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
      name: "tech",
      title: "Tech I use",
      type: "object",
      group: "content",
      fields: [
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          initialValue: "Tech I use",
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
          name: "items",
          title: "Tools",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({
                  name: "name",
                  title: "Name",
                  type: "string",
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: "category",
                  title: "Category",
                  type: "string",
                  options: {
                    list: [
                      { title: "Development", value: "development" },
                      { title: "Hardware", value: "hardware" },
                      { title: "Apps", value: "apps" },
                      { title: "AI", value: "ai" },
                      { title: "Gaming", value: "gaming" },
                    ],
                    layout: "radio",
                  },
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: "description",
                  title: "Personal note",
                  description: "A short note about why this tool matters to you.",
                  type: "text",
                  rows: 2,
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: "url",
                  title: "Website",
                  type: "url",
                }),
              ],
              preview: {
                select: { title: "name", subtitle: "category" },
              },
            }),
          ],
          validation: (rule) => rule.min(1),
        }),
      ],
    }),
    defineField({
      name: "currentlyExploring",
      title: "Currently exploring",
      type: "object",
      group: "content",
      fields: [
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          initialValue: "Currently exploring",
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
          title: "Things I'm exploring",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({
                  name: "name",
                  title: "Name",
                  type: "string",
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: "description",
                  title: "Personal note",
                  type: "text",
                  rows: 2,
                  validation: (rule) => rule.required(),
                }),
                defineField({ name: "url", title: "Link", type: "url" }),
              ],
              preview: {
                select: { title: "name", subtitle: "description" },
              },
            }),
          ],
          validation: (rule) => rule.min(1),
        }),
      ],
    }),
    defineField({
      name: "currentlyPlaying",
      title: "What I am playing",
      type: "object",
      group: "content",
      fields: [
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          initialValue: "What I am playing",
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
          title: "Games I am playing",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({
                  name: "name",
                  title: "Name",
                  type: "string",
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: "description",
                  title: "Personal note",
                  type: "text",
                  rows: 2,
                  validation: (rule) => rule.required(),
                }),
                defineField({ name: "url", title: "Link", type: "url" }),
              ],
              preview: {
                select: { title: "name", subtitle: "description" },
              },
            }),
          ],
          validation: (rule) => rule.min(1),
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
