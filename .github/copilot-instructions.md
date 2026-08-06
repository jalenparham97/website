## What is this project?

- This project is my personal website. It is meant to be a place for people to be able to learn more about me and my work. It is also a place for me to experiment with new technologies and ideas.

## General Guidelines

- Only create an abstraction if it's actually needed - Prefer clear function/variable names over inline comments - Avoid helper functions when a simple inline expression would suffice - Don't use emojis unless told to so so

- The dev server is already running so you don't have to run it ever.

- NEVER use barrel files. They are a code smell.

- When asked to create a plan put the plan file in the .github/plans directory. Give it a date and time last updated in the front matter.

## TypeScript

- Don't unnecessarily add 'try / catch' - Don't cast to 'any'

## React

- Avoid massive JSX blocks and compose smaller components - Colocate code that changes together - Avoid 'useEffect unless absolutely needed

## Next.js

- When working with Next.js code refer to the AGENT.md file for Next.js specific guidelines.

## UI

- Don't add crazy gradients, or crazy hover effects - Prefer subtle shadows and borders - Follow shadcn/ui design patterns and components where possible
- Avoid adding shadow on hover unless explicitly asked to do so
- Avoid custom colors outside of the design system - Prefer spacing that matches shadcn/ui design system
- Always refer to the UI components that exist and the code within before creating a new component
- Use Hugeicons for icons - refer to existing usage for examples or fetch the latest from the docs

## Tailwind

- Mostly use built-in values, occasionally allow dynamic values, rarely globals - Always use v4 + global CSS file format + shadcn/ui

## Package manager

- I use bun as a package manager. Do not use npm for anything.

## Database

- Always assume the database is running and connected.

## Testing

- Dont add tests unless explicitly asked to do so
