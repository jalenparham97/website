import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'k2yb8t20',
  dataset: 'production',
  apiVersion: '2025-02-19',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false,
});

await client.createOrReplace({
  _id: 'servicesPage',
  _type: 'servicesPage',
  title: 'Services',
  intro: {
    headline: 'Web design and development for small businesses.',
    description:
      'Straightforward web work for small businesses and independent people. Clear scope, direct communication, and a website you can manage.',
    packagesLabel: 'View packages',
    cta: { label: 'Start A Project', href: '/contact' },
  },
  offer: {
    headline: 'What I offer',
    description:
      'Each site I develop is built with the user in mind, delivering a great user experience and design, using the latest web technologies.',
    items: [
      {
        _key: 'design',
        title: 'Web design',
        description:
          'Clear layouts and a distinct visual direction built around the way your business should feel.',
        icon: 'design',
      },
      {
        _key: 'development',
        title: 'Website development',
        description:
          'A smooth, reliable website that helps people find what they need and take the next step.',
        icon: 'development',
      },
      {
        _key: 'content',
        title: 'Content management',
        description:
          'Simple ways to keep your website current as your business grows and changes.',
        icon: 'content',
      },
    ],
  },
  packages: {
    headline: 'Packages',
    description:
      'Straightforward website packages with content management included. Custom workflows are priced based on the needs of your business.',
    note: 'Additional pages for the website are $100 each.',
    ctaLabel: 'Inquire',
    items: [
      {
        _key: 'basic',
        name: 'Basic website',
        price: 'From $600',
        blurb:
          'A custom website with up to five pages with content management included.',
        features: [
          'Up to 5 pages',
          'Custom design',
          'Responsive build',
          'Content management',
        ],
        featured: true,
      },
      {
        _key: 'workflows',
        name: 'Custom workflows',
        price: 'From $800',
        blurb:
          'A custom website with content management plus custom workflows for your business.',
        features: [
          'Everything in Basic',
          'Database workflows',
          'Email workflows',
          'Custom functionality',
        ],
        featured: false,
      },
      {
        _key: 'management',
        name: 'Ongoing management',
        price: '$75/month',
        blurb:
          'Keep your website current with ongoing website management after launch.',
        features: [
          'Routine content updates',
          'Technical support',
          'Light maintenance',
          'Larger requests quoted separately',
        ],
        featured: false,
      },
    ],
  },
  faq: {
    headline: 'Frequently Asked Questions',
    description:
      'Answers to common questions about starting and pricing your website project.',
    items: [
      {
        _key: 'getting-started',
        question: 'What are the first steps to starting a website project?',
        answer:
          'We will start with a conversation about your business, goals, and what the website needs to do. A short overview, any existing brand materials, and current content are helpful starting points. Once we have a clear scope and know we are a good fit, I will send a proposal that outlines the work, timeline, and project cost.',
      },
      {
        _key: 'timeline',
        question: 'How long does a typical website project take to complete?',
        answer:
          'The timeline depends on the project scope, how much content is needed, and the feedback process. I will include a realistic timeline in the proposal before work begins, and we can plan around a specific launch date when needed.',
      },
      {
        _key: 'cost',
        question: 'What affects the final cost of a website?',
        answer:
          'The final cost depends on the number of pages, the content needed, and any custom functionality or workflows. Additional pages are $100 each, and the full scope will be outlined in the proposal before work begins.',
      },
      {
        _key: 'fit',
        question: 'Is a custom website the right fit for my project?',
        answer:
          'A custom website is a good fit when you need an online presence built around your business rather than a template. During our initial conversation, we can look at your goals and decide whether a custom website is the right approach.',
      },
      {
        _key: 'content-updates',
        question: 'Can I update the website myself after launch?',
        answer:
          'Yes. Content management is included with the website packages, so you can keep your pages current after launch. Ongoing management is also available if you would rather have help with updates.',
      },
      {
        _key: 'ongoing-management',
        question: 'What does ongoing website management include?',
        answer:
          'Ongoing management includes website updates, technical support, light maintenance, and continued help keeping your site current after launch.',
      },
      {
        _key: 'existing-materials',
        question: 'Do you work with existing branding, copy, or tools?',
        answer:
          'Yes. I can work with the branding, copy, and tools you already use. We will review what is in place and decide what should carry into the new website.',
      },
    ],
  },
  finalCta: {
    headline: 'Ready when you are',
    description:
      "Share a bit about the project and I'll follow up with fit, timing, and next steps.",
    link: { label: 'Discuss your project', href: '/contact' },
  },
  seo: {
    title: 'Services | Jalen Parham',
    description:
      'Web design, website development, and content management for small businesses and independent people.',
    noIndex: false,
  },
});

console.log(JSON.stringify({ servicesPage: 'servicesPage' }, null, 2));
