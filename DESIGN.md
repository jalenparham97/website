# Design Record

## Direction

An agency-style freelance portfolio with personable language. The visual grammar uses generous negative space, sharp editorial type, restrained hairline separators, and a few elevated surfaces for work and contact. The neutral shadcn palette stays intact.

## Thesis

Jalen's site should feel like a polished independent practice: confident composition, warm first-person copy, clear proof, and an easy path to start a conversation.

## Visual System

- Preserve the existing shadcn neutral semantic tokens and zero-radius theme.
- Use Geist Sans for headings and body copy, with Geist Mono only for the mark.
- Use foreground, muted foreground, muted, card, border, and background tokens only. No new accent palette.
- Prefer asymmetric section layouts and large type over dense card grids.
- Use cards sparingly for portfolio and contact form surfaces.

## Page Structure

1. Sticky frosted navigation with About, Services, Portfolio, and Contact.
2. Left-aligned hero with role, personable intro, and CTAs.
3. About: split layout with personal greeting and short bio.
4. Services: stacked editorial rows for design, development, and content management.
5. Portfolio: two project cards for Formbox and Beyond Births.
6. Contact: invitation copy plus name/email/message form.
7. Footer: identity, tagline, and copyright.

## Interaction

Portfolio cards lift slightly on hover. Service titles shift gently. Reduced-motion preferences disable animation and transitions. Form fields use native required validation and open a mailto draft on submit until a backend is available.

## Responsive Rules

Hero and section type scale down cleanly. Service rows stack on small screens. Portfolio becomes a single column. Contact form stacks under the invitation copy. No horizontal overflow.

## Content Boundaries

Copy stays personable and first-person. Project descriptions remain factual. No invented testimonials, metrics, prices, or outcomes. Contact uses a form that falls back to mailto.
