import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'k2yb8t20',
  dataset: 'production',
  apiVersion: '2025-02-19',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false,
});

await client.createOrReplace({
  _id: 'contactPage',
  _type: 'contactPage',
  title: 'Contact',
  intro: {
    headline: "Let's get in touch.",
    description:
      "Want to talk about a new website project or an idea you're still shaping? Reach out. I'd love to hear what you have in mind.",
  },
  emailSection: {
    headline: 'Email me',
    description:
      'Prefer your own inbox? Write me directly. I read every message and reply personally.',
    email: 'jalenparham97@gmail.com',
  },
  formSection: {
    headline: 'Send a message',
    description:
      "Tell me a little about your website project or idea, and what you'd like help with. I usually reply within 24 hours.",
  },
  seo: {
    title: 'Contact | Jalen Parham',
    description:
      'Talk with Jalen Parham about web design, website development, or your next project.',
    noIndex: false,
  },
});

console.log(JSON.stringify({ contactPage: 'contactPage' }, null, 2));
