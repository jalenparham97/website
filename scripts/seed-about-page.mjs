import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'k2yb8t20',
  dataset: 'production',
  apiVersion: '2025-02-19',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false,
});

const aboutPage = await client.createOrReplace({
  _id: 'aboutPage',
  _type: 'aboutPage',
  title: 'About',
  story: {
    headline:
      'A software engineer and independent web developer who cares about the details.',
    body: [
      {
        _key: 'intro',
        _type: 'block',
        children: [
          {
            _key: 'intro-text',
            _type: 'span',
            marks: [],
            text: "I'm Jalen, a software engineer and independent web developer. I work directly with small businesses and people building something of their own, helping turn good ideas into clear, dependable websites.",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'background',
        _type: 'block',
        children: [
          {
            _key: 'background-text',
            _type: 'span',
            marks: [],
            text: 'My background is in software engineering, where I learned to care about accuracy, speed, and maintainability. I bring those same instincts to the web, alongside a love for thoughtful typography, useful structure, and details that make a site feel easy to use.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'approach',
        _type: 'block',
        children: [
          {
            _key: 'approach-text',
            _type: 'span',
            marks: [],
            text: "My approach is simple: make the important things clear, leave out what doesn't help, and build something you can manage after launch. I prefer a direct working relationship, simple feedback, and decisions made together as the work takes shape.",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
    ],
  },
  cta: {
    headline: 'Have a question or just want to say hello?',
    intro:
      "I'd be happy to hear from you, whether you have an idea in mind or just want to start a conversation.",
    link: { label: 'Say hello', href: '/contact' },
  },
  seo: {
    title: 'About | Jalen Parham',
    description:
      "Learn about Jalen Parham's background in software engineering, design philosophy, and direct client collaboration.",
    noIndex: false,
  },
});

console.log(JSON.stringify({ aboutPage: aboutPage._id }, null, 2));
