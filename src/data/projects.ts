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
    description: `
        <p class="mb-4 text-lg text-[var(--white-icon)] leading-relaxed">
          Combining formal pedagogical background with hands-on experience in adult education, I bridge the gap between complex software and hardware systems and effective user onboarding. Whether teaching languages or mentoring technical teams at <strong class="text-white">3di Information Solutions</strong>, my goal is always actionable, structured knowledge transfer.
        </p>
        
        <p class="mb-3 text-white font-medium">
          Core pedagogical focus and methodology:
        </p>
        
        <ul class="list-disc pl-5 space-y-2 text-[var(--white-icon)] text-base leading-relaxed mb-6">
          <li>
            <strong class="text-white">Pedagogical foundation:</strong> Grounded in adult learning theory (andragogy), cognitive load management, and clear instructional scaffolding.
          </li>
          <li>
            <strong class="text-white">Internal mentoring and workshops:</strong> Leading internal training sessions, onboarding technical staff, and coaching colleagues in effective communication practices.
          </li>
          <li>
            <strong class="text-white">Hands-on and async learning design:</strong> Designing modular learning materials, interactive guides, and self-paced documentation workflows, alongside custom curriculum development for dedicated training initiatives.
          </li>
        </ul>

        <p class="text-base text-[var(--white-icon)] italic">
          Explore the case studies below to see how these learning strategies were applied in practice.
        </p>
      `,
    sections: [
        {
  title: "Postgraduate academic course at Vistula University",
  content: `
    <div class="space-y-4 text-[var(--white-icon)] leading-relaxed">
      <p>
        Designed and delivered a remote postgraduate course focused on single-source authoring and documentation tools for beginner technical writers at Vistula University.
      </p>
       <a href="https://vistula.edu.pl/kierunki-studiow/komunikacja-techniczna#Program" target="_blank" rel="noopener noreferrer" class="inline-block px-4 py-2 rounded-lg bg-[#ffffff08] border border-[#ffffff10] text-white hover:bg-[#ffffff15] transition">See the faculty profile &rarr;</a>
      
      <p class="text-white font-medium">
        Key educational and instructional components:
      </p>
      
      <ul class="list-disc pl-5 space-y-2 text-base">
        <li>
          <strong class="text-white">Curriculum and lesson planning:</strong> Developed the course syllabus, lecture materials, and practical hands-on exercises tailored for adult learners entering technical communication.
        </li>
        <li>
          <strong class="text-white">MadCap Flare and tooling practice:</strong> Guided students step-by-step through core authoring concepts in MadCap Flare via live sessions on MS Teams, complemented by practical homework assignments and a final assessment project.
        </li>
                <li>
          <strong class="text-white">Student outcomes and evaluation:</strong> Delivered an introductory program that earned high feedback ratings from participants for clarity, structure, and practical relevance.
        </li>
        <li>
          <strong class="text-white">Industry-aligned tools:</strong> Used Confluence and Jira throughout the course to manage tasks and materials, helping students get comfortable with standard industry tools.
        </li>

      </ul>
    </div>
  `
},

      {
        title: "Internal MadCap Flare template and onboarding",
        content: `
    <div class="space-y-4 text-[var(--white-icon)] leading-relaxed">
      <p>
        As the owner and maintainer of the global MadCap Flare template project at <strong class="text-white">3di information solutions</strong>, I design and maintain the educational ecosystem surrounding our central authoring tools and DocOps standards.
      </p>
      
      <p class="text-white font-medium">
        Key educational and instructional components:
      </p>
      
      <ul class="list-disc pl-5 space-y-2 text-base">
        <li>
          <strong class="text-white">Self-paced async learning:</strong> Developed structured training modules built directly on team feedback and skill gap analysis, allowing authors to work asynchronously and submit sample tasks for evaluation.
        </li>
        <li>
          <strong class="text-white">Multi-tier onboarding and upskilling:</strong> Facilitated 0-to-1 onboarding for new hires alongside targeted advanced workshops for experienced technical writers adapting to template updates.
        </li>
        <li>
          <strong class="text-white">Interactive demo sessions and feature releases:</strong> Led live demonstration sessions to present new template features, tooling customizations, and authoring guidelines.
        </li>
        <li>
          <strong class="text-white">Continuous feedback loop and mentoring:</strong> Established a feedback collection system to continuously update internal docs while providing 1-on-1 mentoring for team members.
        </li>
      </ul>
    </div>
  `
      }
    ]
  },
  {
    title: "Content tools",
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
    title: "Personal projects",
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