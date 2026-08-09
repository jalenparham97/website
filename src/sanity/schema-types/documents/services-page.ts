import { defineArrayMember, defineField, defineType } from "sanity";

const linkField = defineField({
  name: "link",
  title: "Link",
  type: "link",
  validation: (rule) => rule.required(),
});

export const servicesPage = defineType({
  name: "servicesPage",
  title: "Services Page",
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
      initialValue: "Services",
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
          rows: 3,
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
          name: "packagesLabel",
          title: "Packages button label",
          type: "string",
          initialValue: "View packages",
          validation: (rule) => rule.required(),
        }),
        defineField({ ...linkField, name: "cta", title: "Intro CTA" }),
      ],
    }),
    defineField({
      name: "offer",
      title: "What I offer",
      type: "object",
      group: "content",
      fields: [
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          initialValue: "What I offer",
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
          name: "items",
          title: "Services",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  title: "Title",
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
                  name: "icon",
                  title: "Icon",
                  type: "string",
                  options: { list: ["design", "development", "content"] },
                  initialValue: "design",
                  validation: (rule) => rule.required(),
                }),
              ],
            }),
          ],
          validation: (rule) => rule.min(1),
        }),
      ],
    }),
    defineField({
      name: "packages",
      title: "Packages",
      type: "object",
      group: "content",
      fields: [
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          initialValue: "Packages",
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
          name: "note",
          title: "Pricing note",
          type: "string",
          description: "Optional note displayed below the package cards.",
        }),
        defineField({
          name: "ctaLabel",
          title: "Package button label",
          type: "string",
          description: "Label used on each package card button.",
          initialValue: "Inquire",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "items",
          title: "Packages",
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
                  name: "price",
                  title: "Price",
                  type: "string",
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: "blurb",
                  title: "Blurb",
                  type: "text",
                  rows: 2,
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: "features",
                  title: "Features",
                  type: "array",
                  of: [defineArrayMember({ type: "string" })],
                  validation: (rule) => rule.min(1),
                }),
                defineField({
                  name: "featured",
                  title: "Featured",
                  type: "boolean",
                  initialValue: false,
                }),
              ],
            }),
          ],
          validation: (rule) => rule.min(1),
        }),
      ],
    }),
    defineField({
      name: "faq",
      title: "Pricing FAQ",
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
        }),
        defineField({
          name: "items",
          title: "Questions",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({
                  name: "question",
                  title: "Question",
                  type: "string",
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: "answer",
                  title: "Answer",
                  type: "text",
                  rows: 3,
                  validation: (rule) => rule.required(),
                }),
              ],
            }),
          ],
          validation: (rule) => rule.min(1),
        }),
      ],
    }),
    defineField({
      name: "finalCta",
      title: "Final call to action",
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
        defineField({ ...linkField, name: "link", title: "CTA link" }),
      ],
    }),
    defineField({ name: "seo", title: "SEO", type: "seo", group: "seo" }),
  ],
  preview: {
    select: { title: "title" },
    prepare: ({ title }) => ({ title: title || "Services Page", subtitle: "Singleton" }),
  },
});
