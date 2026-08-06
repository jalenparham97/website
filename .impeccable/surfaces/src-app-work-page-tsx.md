---
version: 1
slug: "src-app-work-page-tsx"
primary_target: "src/app/work/page.tsx"
related_targets: ["src/components/pages/work/work-page.tsx","src/components/project-card.tsx","src/lib/projects.ts","src/components/portfolio-section.tsx"]
---

# My Work

## Scope & mode
Experience surface at `/work`: image-led gallery wall expanding the homepage Recent Work section. Visitor browses real projects, can open live sites, and exits to contact.

## Audience & job
Prospective small-business clients assessing craft and fit. Job: believe Jalen ships clear, capable websites; act by visiting live work or starting a conversation.

## Content & constraints
- Real projects only: Formbox, Beyond Births (shared via `src/lib/projects.ts`).
- No in-progress, teaser, or placeholder project previews.
- Shared `ProjectCard`: image, description, visit link.
- Inherit site visual system (neutral tokens, zero radius, Geist, max-w-5xl inner column).
- Homepage Recent Work stays two real cards + link to `/work`; nav My work → `/work`.

## Direction
Image-led wall (structure candidate 3, seed 9debc815). Work leads; copy supports. Two-up mosaic of selected work, then contact CTA.

## Memorable moment
Full-bleed project previews as the primary object.

## Unresolved
Whether homepage cards should later diverge from the shared card; add projects only when shipped.
