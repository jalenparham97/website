import { createClient } from '@sanity/client';
import { createReadStream } from 'node:fs';
import { basename, resolve } from 'node:path';
import { randomUUID } from 'node:crypto';

const client = createClient({
  projectId: 'k2yb8t20',
  dataset: 'production',
  apiVersion: '2025-02-19',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false,
});

function key() {
  return randomUUID().replace(/-/g, '').slice(0, 12);
}

async function uploadImage(filePath) {
  const absolute = resolve(filePath);
  const stream = createReadStream(absolute);
  const asset = await client.assets.upload('image', stream, {
    filename: basename(absolute),
    contentType: 'image/png',
  });
  return {
    _type: 'image',
    asset: {
      _type: 'reference',
      _ref: asset._id,
    },
  };
}

const formboxImage = await uploadImage('public/projects/formbox.png');
const beyondBirthsImage = await uploadImage(
  'public/projects/beyond-births.png',
);

const formbox = await client.createOrReplace({
  _id: 'project-formbox',
  _type: 'project',
  title: 'Formbox',
  slug: { _type: 'slug', current: 'formbox' },
  description:
    'A simple form backend service that lets creators and teams build custom HTML forms and collect responses effortlessly.',
  image: formboxImage,
  link: 'https://formbox.app/',
  tags: ['SaaS', 'Forms'],
});

const beyondBirths = await client.createOrReplace({
  _id: 'project-beyond-births',
  _type: 'project',
  title: 'Beyond Births',
  slug: { _type: 'slug', current: 'beyond-births' },
  description:
    'A welcoming educational platform providing clear guidance on exercise, nutrition, birth planning, and finding care facilities.',
  image: beyondBirthsImage,
  link: 'https://www.beyondbirths.org/',
  tags: ['Education', 'Healthcare'],
});

const homePage = await client.createOrReplace({
  _id: 'homePage',
  _type: 'homePage',
  title: 'Home',
  hero: {
    headline:
      'Web developer & software engineer crafting websites that make an impact.',
    intro:
      'I help founders, creators, and growing businesses build clean websites with clear design, useful messaging, and effortless management.',
    primaryCta: { label: "Let's talk", href: '/contact' },
    secondaryCta: { label: 'View my work', href: '/work' },
  },
  about: {
    headline:
      "Hi, I'm Jalen. I design and build exceptional digital experiences.",
    body: [
      'I work with people and small businesses to create websites that feel calm, intentional, and easy to trust.',
      'I care about the details people notice, from clear pages and simple choices to the small moments that make a website feel welcoming.',
      "If you're building something that matters to your business, I help turn your ideas into a clear, polished online experience.",
    ],
    cta: { label: 'More about me', href: '/about' },
    principles: [
      {
        _key: key(),
        title: 'Tasteful Design',
        summary: 'A simple visual style that keeps your message clear.',
        description:
          'Your website should feel welcoming from the first visit, helping people quickly understand what you do and take the next step.',
      },
      {
        _key: key(),
        title: 'Grows With You',
        summary: 'A dependable website that stays easy to manage.',
        description:
          'Your website should feel good to use today and grow with your business. Updating it should always feel simple.',
      },
      {
        _key: key(),
        title: 'Direct Collaboration',
        summary: 'Work directly with the person building your site.',
        description:
          "We build your site together. Your ideas shape every decision, and you'll always know where things stand.",
      },
    ],
  },
  services: {
    headline: 'Services for Your Business',
    intro:
      'Well-made websites that help your business look its best, connect with the right people, and stay easy to manage.',
    items: [
      {
        _key: key(),
        title: 'Web Design',
        summary:
          'Clear layouts and a distinct visual direction built around the way your business should feel.',
        tags: [
          'UI Design',
          'Visual Identity',
          'Responsive Layouts',
          'Information Architecture',
        ],
        detail:
          'I shape a distinct look for your business and make sure every page feels easy to follow. The result is a website that feels polished, trustworthy, and true to you.',
      },
      {
        _key: key(),
        title: 'Website Development',
        summary:
          'A smooth, reliable website that helps people find what they need and take the next step.',
        tags: [
          'Custom Frontend',
          'Performance',
          'Accessibility',
          'Interactive UI',
        ],
        detail:
          'I bring the finished design to life with care for the details people notice most. Your visitors get a clear, comfortable experience from their first visit to their final click.',
      },
      {
        _key: key(),
        title: 'Content Management',
        summary:
          'Simple ways to keep your website current as your business grows and changes.',
        tags: [
          'Headless CMS',
          'Editable Pages',
          'Structured Content',
          'Self-Serve Updates',
        ],
        detail:
          'A great website stays useful long after launch day. I give you a straightforward way to update your content without waiting on a developer or worrying about the layout.',
      },
    ],
  },
  portfolio: {
    headline: 'Recent Work',
    intro:
      'A few websites I have designed and built to help businesses communicate clearly and make a lasting impression.',
    cta: { label: 'View all work', href: '/work' },
    featuredProjects: [
      { _type: 'reference', _ref: formbox._id, _key: key() },
      { _type: 'reference', _ref: beyondBirths._id, _key: key() },
    ],
  },
  contact: {
    headline: "Let's work together",
    intro:
      'Have a project in mind? I am always open to discussing new projects, creative ideas or opportunities to be a part of.',
    email: 'jalenparham97@gmail.com',
  },
  seo: {
    title: 'Jalen Parham | Independent web designer & developer',
    description:
      'Jalen Parham helps small businesses turn good ideas into clear, capable websites.',
    noIndex: false,
  },
});

console.log(
  JSON.stringify(
    {
      formbox: formbox._id,
      beyondBirths: beyondBirths._id,
      homePage: homePage._id,
    },
    null,
    2,
  ),
);
