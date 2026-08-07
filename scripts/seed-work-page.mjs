import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'k2yb8t20',
  dataset: 'production',
  apiVersion: '2025-02-19',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false,
});

await client.createOrReplace({
  _id: 'workPage',
  _type: 'workPage',
  title: 'My Work',
  intro: {
    headline: "Work I'm proud to share.",
    description:
      'I am inspired by creating great work with people who are as passionate as I am about building something awesome.',
  },
  featuredProjects: [
    { _type: 'reference', _ref: 'project-formbox', _key: 'formbox' },
    {
      _type: 'reference',
      _ref: 'project-beyond-births',
      _key: 'beyond-births',
    },
  ],
  cta: {
    headline: 'Want something like this for your business?',
    description:
      "Tell me what you're building. We can talk through scope, timing, and whether we're a good fit.",
    link: { label: "Let's talk about your project", href: '/contact' },
  },
  seo: {
    title: 'My Work | Jalen Parham',
    description:
      'Selected websites designed and built by Jalen Parham — real projects first, with a clear path to start a conversation.',
    noIndex: false,
  },
});

console.log(JSON.stringify({ workPage: 'workPage' }, null, 2));
