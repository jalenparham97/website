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
- Inner pages (About, Services, Contact) share a max-w-5xl content column inside the site max-w-7xl shell, with large editorial page titles and hairline section separators.

## Page Structure

1. Sticky frosted navigation with About, Services, My work, and Contact (`/contact`).
2. Left-aligned hero with role, personable intro, and CTAs.
3. About: long-form story page plus closing CTA to contact.
4. Services page: short offer summary, compact service list (no numbering), and three package cards with starting prices.
5. Portfolio: two project cards for Formbox and Beyond Births (homepage section).
6. Contact page (`/contact`): full-width invitation headline and short line, then dual peer panels — Email me (address + open/copy actions) and Send a message (name/email/message form). Homepage retains a contact section; sitewide CTAs and nav Contact point to `/contact`.
7. Footer: identity, tagline, socials, and copyright.

## Interaction

Portfolio cards lift slightly on hover. Service titles shift gently. Reduced-motion preferences disable animation and transitions. Form fields use native required validation and open a mailto draft on submit until a backend is available. Contact email path supports mailto open and clipboard copy with brief “Copied” confirmation.

## Responsive Rules

Hero and section type scale down cleanly. Service rows stack on small screens. Portfolio becomes a single column. Contact dual panels stack on small screens with email first, then form. No horizontal overflow.

## Content Boundaries

Copy stays personable and first-person. Project descriptions remain factual. No invented testimonials, metrics, prices, response-time claims, or outcomes. Contact uses a form that falls back to mailto; no scheduling URL until one is provided.
