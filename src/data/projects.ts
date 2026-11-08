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
    description: `<div class="space-y-4 mb-8 text-[var(--white-icon)] leading-relaxed">
          <p>
            As a Senior Technical Writer at <strong class="text-white">3di Information Solutions</strong>, I collaborate with cross-functional teams to craft clear, structured, and user-focused documentation for global clients. My work spans diverse industries, covering software platforms, hardware systems, developer portals, and complex enterprise workflows.
          </p>
          <p>
            Because most of these deliverables are developed under non-disclosure agreements (NDAs) or reside within secure internal portals, public links aren't always available. Below is a curated breakdown of key projects, architectural migrations, and documentation types I routinely design and deliver.
          </p>
        </div>`,
    sections: [
        {
        title: "Developer and API documentation",
        content: `
        <p class="mb-4 text-lg text-[var(--white-icon)] leading-relaxed">
          Focused on developer experience, API references, and documentation architecture across diverse platforms. This work spans interactive gaming systems, cybersecurity integrations, and open-source robotics, emphasizing structured technical communication and workflow modernization.
        </p>
        
        <p class="mb-3 text-white font-medium">
          Key highlights and technical scope:
        </p>
        
        <ul class="list-disc pl-5 space-y-3 text-[var(--white-icon)] text-base leading-relaxed mb-6">
          <li>
            <strong class="text-white">Interactive gaming platform APIs:</strong> Authored comprehensive REST and non-rest API documentation for a custom interactive gaming platform within a specialized authoring tool. Took ownership of content migration and adaptation to new publishing workflows.
          </li>
          <li>
            <strong class="text-white">Cybersecurity and integration content:</strong> Contributed as part of contract teams for leading cybersecurity companies, focusing on technical content, complex integrations, and configuring documentation tooling setups.
          </li>
          <li>
            <strong class="text-white">Payment provider API docs:</strong> Participated in drafting and refining REST API documentation for a major payment provider.
          </li>
          <li>
            <strong class="text-white">Open-source robotics documentation:</strong> Executed mandated restructuring for an open-source robotics documentation project (Open Robotics), adapting to newly defined content architectures and contribution guidelines.
          </li>
        </ul>

        <p class="text-base text-[var(--white-icon)] italic">
          Note: Specific proprietary repositories, internal client tools, and unreleased documentation versions are protected under non-disclosure agreements (NDAs).
        </p>
      `
      },
     
    {
        title: "Hardware and military documentation",
       content: `
        <p class="mb-4 text-lg text-[var(--white-icon)] leading-relaxed">
          A collection of specialized technical documentation projects delivered for hardware manufacturers, telecommunications providers, and high-compliance sectors. These deliverables range from high-contrast shipboard systems to interactive field tools designed for offline mobile use.
        </p>
        
        <p class="mb-3 text-white font-medium">
          Key highlights and technical scope:
        </p>
        
        <ul class="list-disc pl-5 space-y-3 text-[var(--white-icon)] text-base leading-relaxed mb-6">
          <li>
            <strong class="text-white">Maritime and defense systems:</strong> Customised a help system for display on naval vessels, meeting strict maritime accessibility standards and implementing custom high-contrast CSS for low-light and night-vision environments.
          </li>
          <li>
            <strong class="text-white">Educational display hardware:</strong> Authored multi-language PDF installation guides featuring assembly diagrams, and led a comprehensive digital accessibility compliance project for a global interactive display manufacturer.
          </li>
          <li>
            <strong class="text-white">Telecom service and device portals:</strong> Contributed to user-facing web portals for a major telecommunication provider, covering end-user hardware setup guides, software instructions, and interactive tutorials.
          </li>
          <li>
            <strong class="text-white">Medical device field solutions:</strong> Contributed as part of a team designing interactive, offline-first digital checklists for field engineers servicing advanced medical equipment. The solution was optimized for tablet screens with offline support and automated print rendering matching precise brand design standards.
          </li>
        </ul>

        <p class="text-base text-[var(--white-icon)] italic">
          Note: Specific client names, proprietary schematics, and system source files are withheld due to non-disclosure agreements (NDAs).
        </p>
      `,
      },
            {
        title: "3di blog contributions",
        content: `<strong class="text-white">Technical content and blogging for 3di:</strong> Authored in-depth technical blog posts and marketing articles for 3di Information Solutions, translating complex documentation concepts, workflows, and industry trends into engaging content.</p> <a href="https://3di-info.com/author/agata-rygielska/" target="_blank" rel="noopener noreferrer" class="inline-block px-4 py-2 rounded-lg bg-[#ffffff08] border border-[#ffffff10] text-white hover:bg-[#ffffff15] transition">Visit 3di-info.com &rarr;</a>`
      },
       {
        title: "Internal knowledge bases and user guides",
        content: `
        <p class="mb-4 text-lg text-[var(--white-icon)] leading-relaxed">
          Focused on structuring internal organizational knowledge, streamlining employee onboarding, and documenting internal tool configurations to ensure operational clarity across teams.
        </p>
        
        <p class="mb-3 text-white font-medium">
          Key highlights and technical scope:
        </p>
        
        <ul class="list-disc pl-5 space-y-3 text-[var(--white-icon)] text-base leading-relaxed mb-6">
          <li>
            <strong class="text-white">Onboarding and educational materials:</strong> Created comprehensive educational resources and onboarding frameworks hosted on platforms like Confluence and SharePoint to streamline internal training.
          </li>
          <li>
            <strong class="text-white">Tool configurations and customization guides:</strong> Documented complex internal tool setups and established guidelines on how to customize and tailor these environments for client projects.
          </li>
        </ul>

        <p class="text-base text-[var(--white-icon)] italic">
          Note: Internal procedures and operational setups are managed within private company repositories and internal portals.
        </p>
      `
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
        title: "Coming soon",
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