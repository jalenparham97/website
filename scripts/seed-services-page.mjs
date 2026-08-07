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
      'Starting points with clear scope. Final pricing depends on pages, complexity, and timeline.',
    ctaLabel: 'Inquire',
    items: [
      {
        _key: 'design',
        name: 'Design',
        price: 'From $1,500',
        blurb: 'For a clear visual direction before anything is built.',
        features: [
          'Visual direction',
          'Key page layouts',
          'Mobile-first structure',
          'Content outline',
        ],
        featured: false,
      },
      {
        _key: 'website',
        name: 'Website',
        price: 'From $3,500',
        blurb: 'Design and development for a complete, ready-to-launch site.',
        features: [
          'Custom design',
          'Full development',
          'Responsive build',
          'Basic content setup',
          'Launch support',
        ],
        featured: true,
      },
      {
        _key: 'care',
        name: 'Care',
        price: 'From $150/mo',
        blurb: 'Ongoing updates and light maintenance after your site is live.',
        features: [
          'Content updates',
          'Small design tweaks',
          'Performance checks',
          'Priority support',
        ],
        featured: false,
      },
    ],
    note: 'Need something outside these packages?',
    noteLink: { label: 'Tell me what you need', href: '/contact' },
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
