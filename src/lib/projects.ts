export type Project = {
  name: string;
  description: string;
  href: string;
  image: string;
};

/** Shared project list for homepage Recent Work and the My Work page. */
export const projects: Project[] = [
  {
    name: "Formbox",
    description:
      "A simple form backend service that lets creators and teams build custom HTML forms and collect responses effortlessly.",
    href: "https://formbox.app/",
    image: "/projects/formbox.png",
  },
  {
    name: "Beyond Births",
    description:
      "A welcoming educational platform providing clear guidance on exercise, nutrition, birth planning, and finding care facilities.",
    href: "https://www.beyondbirths.org/",
    image: "/projects/beyond-births.png",
  },
];

export const featuredProjects = projects;
