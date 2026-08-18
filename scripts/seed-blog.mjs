import { createClient } from '@sanity/client';
import { randomUUID } from 'node:crypto';

const client = createClient({
  projectId: 'k2yb8t20',
  dataset: 'production',
  apiVersion: '2026-02-01',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false,
});

function key() {
  return randomUUID().replace(/-/g, '').slice(0, 12);
}

function block(style, text) {
  return {
    _key: key(),
    _type: 'block',
    style,
    markDefs: [],
    children: [{ _key: key(), _type: 'span', marks: [], text }],
  };
}

async function upsertPost(post) {
  const existingId = await client.fetch(
    '*[_type == "blogPost" && slug.current == $slug][0]._id',
    { slug: post.slug.current },
  );

  return existingId
    ? client.createOrReplace({ _id: existingId, ...post })
    : client.create(post);
}

const blogPage = await client.createOrReplace({
  _id: 'blogPage',
  _type: 'blogPage',
  title: 'Blog',
  intro: {
    headline: 'Notes on making the web clearer.',
    description:
      'Thoughts on design, development, and the choices that make a website feel easy to use.',
  },
  seo: {
    title: 'Blog | Jalen Parham',
    description:
      'Notes from Jalen Parham on web design, development, and building clearer digital experiences.',
    noIndex: false,
  },
});

const posts = await Promise.all([
  upsertPost({
    _type: 'blogPost',
    title: 'A good website starts with a clearer question',
    slug: {
      _type: 'slug',
      current: 'a-good-website-starts-with-a-clearer-question',
    },
    excerpt:
      'Before choosing a style or writing a component, I try to understand the real decision a website needs to help someone make.',
    publishedAt: '2026-08-12T09:00:00.000Z',
    tags: ['Process', 'Strategy'],
    body: [
      block(
        'normal',
        'A website can look polished and still leave people unsure what to do next. That usually is not a visual problem first. It is a question problem.',
      ),
      block('h2', 'Start with the decision'),
      block(
        'normal',
        'I like to begin by asking what a visitor should understand, trust, or choose after a few minutes on the site. The answer gives every page a job and keeps the design from becoming decoration.',
      ),
      block(
        'normal',
        'Once that decision is clear, the rest gets calmer. Content can be shaped around it. Navigation can get smaller. The interface can spend its energy on the moments that actually help.',
      ),
    ],
  }),
  upsertPost({
    _type: 'blogPost',
    title: 'The quiet power of a small design system',
    slug: {
      _type: 'slug',
      current: 'the-quiet-power-of-a-small-design-system',
    },
    excerpt:
      'A useful design system does not need hundreds of tokens. It needs a few decisions that make the next page easier to make well.',
    publishedAt: '2026-07-28T09:00:00.000Z',
    tags: ['Design', 'Systems'],
    body: [
      block(
        'normal',
        'The most valuable part of a design system is often the part nobody sees: the decision that has already been made.',
      ),
      block('h2', 'Fewer choices, better attention'),
      block(
        'normal',
        'A small set of type sizes, spacing rules, surface treatments, and interaction states gives a project a steady rhythm. That leaves more attention for the content and the details that make the work feel specific.',
      ),
      block(
        'normal',
        'I prefer systems that are easy to explain to another person. If the rule needs a paragraph before it can be used, it probably needs to get simpler.',
      ),
    ],
  }),
  upsertPost({
    _type: 'blogPost',
    title: 'What I look for before I write frontend code',
    slug: {
      _type: 'slug',
      current: 'what-i-look-for-before-i-write-frontend-code',
    },
    excerpt:
      'The first pass is about structure: finding the content, states, and edges that will make the finished interface feel dependable.',
    publishedAt: '2026-07-10T09:00:00.000Z',
    tags: ['Development', 'Craft'],
    body: [
      block(
        'normal',
        'The fastest way to make a frontend feel fragile is to begin with the happy path and discover the rest later.',
      ),
      block('h2', 'Read the shape of the work'),
      block(
        'normal',
        'Before I write components, I look for the content model, the important states, and the places where a person might arrive with less information than expected. Those details determine the structure more than a screenshot does.',
      ),
      block(
        'normal',
        'A little time spent making those edges visible usually pays for itself. The page becomes easier to build, easier to edit, and much easier for someone else to trust.',
      ),
    ],
  }),
]);

console.log(
  JSON.stringify(
    {
      blogPage: blogPage._id,
      posts: posts.map((post) => post._id),
    },
    null,
    2,
  ),
);
