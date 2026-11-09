
export interface Project {
  title: string;
  slug: string;
  description: string;
}

export const projects: Project[] = [
  {
    title: "Content tools",
    slug: "tools-and-scripts",
    description: "Automation, custom scripts, documentation platforms and integrations."
  },
  {
    title: "Technical writing",
    slug: "technical-writing",
    description: "Developer documentation, API references and technical communication across industries."
  },
  {
    title: "Instructional design and enablement",
    slug: "instructional-design",
    description: "Technical training, learning materials and team enablement."
  },
  {
    title: "Personal projects",
    slug: "personal-projects",
    description: "Creative projects, publications, columns, and visual art."
  }
];
