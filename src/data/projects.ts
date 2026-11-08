export interface ProjectSection {
  title: string;
  content: string;
}

export interface Project {
  title: string;
  slug: string;
  description: string;
  sections: ProjectSection[];
}

export const projects: Project[] = [
  {
    title: "Technical writing",
    slug: "technical-writing",
    description: "An overview of my professional work spanning technical writing, developer portals, user assistance systems, and technical content.",
    sections: [
      {
        title: "3di blog contributions",
        content: `<p>My technical blog posts created for 3di Information Solutions.</p> <a href="https://3di-info.com/author/agata-rygielska/" target="_blank" rel="noopener noreferrer" class="inline-block px-4 py-2 rounded-lg bg-[#ffffff08] border border-[#ffffff10] text-white hover:bg-[#ffffff15] transition">Visit 3di-info.com &rarr;</a>`
      }
    ]
  },
  {
    title: "Instructional design and enablement",
    slug: "instructional-design",
    description: "Designing educational paths, training materials, and translating complex concepts into clear, actionable knowledge",
    sections: [
      {
        title: "Instructional Design example",
        content: "<p>How we translate complex processes into intuitive learning materials.</p>"
      }
    ]
  },
  {
    title: "Tools, scripts, and integrations",
    slug: "tools-and-scripts",
    description: "Automation scripts in Python, validation scripts, and tools supporting daily processes.",
    sections: [
      {
        title: "Python Automation Scripts",
        content: "<p>Scripts for validating locational data and automating tasks in DocOps.</p>"
      }
    ]
  },
  {
    title: "Various creative projects",
    slug: "personal-projects",
    description: "My creative projects, publications, columns, and visual art.",
    sections: [
      {
        title: "Kronika Geeka (pop culture & board games)",
        content: `
          <p class="mb-3">An independent Polish pop-culture portal focusing on board games and media reviews, where I contribute in two main roles:</p>
          <ul class="list-disc pl-5 mb-4 space-y-1 text-[var(--white-icon)]">
            <li><strong class="text-white">Content creator:</strong> Authoring board game reviews, articles, and pop-culture content.</li>
            <li><strong class="text-white">Webmaster:</strong> Handling WordPress administration, site maintenance, and frontend development.</li>
          </ul>
          <a href="https://kronika-geeka.pl/author/agata/" target="_blank" rel="noopener noreferrer" class="inline-block px-4 py-2 rounded-lg bg-[#ffffff08] border border-[#ffffff10] text-white hover:bg-[#ffffff15] transition">Visit Kronika Geeka &rarr;</a>
        `
      },
      {
        title: "Substack newsletter",
        content: "<p class='mb-3'>Painting, curiosity, and an occasional rabbit hole.</p><a href='https://agatarygielska.substack.com' target='_blank' class='inline-block px-4 py-2 rounded-lg bg-[#ffffff08] border border-[#ffffff10] text-white hover:bg-[#ffffff15] transition'>Visit my Substack &rarr;</a>"
      },
      {
        title: "La Vetrata (art portfolio)",
        content: "<p class='mb-3'>Oil painting, watercolours, urban sketching, and more.</p><a href='https://lavetrata.eu' target='_blank' class='inline-block px-4 py-2 rounded-lg bg-[#ffffff08] border border-[#ffffff10] text-white hover:bg-[#ffffff15] transition'>Visit La Vetrata &rarr;</a>"
      }
    ]
  }
];