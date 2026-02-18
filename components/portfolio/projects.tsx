import { ArrowUpRight } from "lucide-react"

interface Project {
  title: string
  company: string
  description: string
  capabilities: string[]
  tags: string[]
}

const projects: Project[] = [
  {
    title: "SSI Standardisation",
    company: "J.P. Morgan",
    description:
      "Ran design discovery to frame a firm-wide problem around inconsistent settlement instruction formats. Facilitated stakeholder workshops across operations and technology, mapped end-to-end processing flows, and designed a standardised template grounded in ISO 20022 taxonomy -- now published as an industry standard by FMSB.",
    capabilities: ["Design Discovery", "Stakeholder Facilitation", "Service Design", "Complex Flow Mapping"],
    tags: ["CIB", "Operational Tooling", "Industry Standards"],
  },
  {
    title: "WADU 2.0 & Manager Zone",
    company: "J.P. Morgan",
    description:
      "Led conceptual design for two firm-wide tools: a workforce activity data utility and an HR management dashboard. Conducted problem-framing sessions with business stakeholders, developed concept prototypes, and presented experimental design approaches to senior leadership.",
    capabilities: ["Concept Design", "Problem Framing", "Rapid Prototyping", "Executive Storytelling"],
    tags: ["CIB", "Workforce Analytics", "HR Tooling"],
  },
  {
    title: "Mobile Banking Registration",
    company: "HSBC",
    description:
      "Owned end-to-end design of the new digital banking registration experience for web and mobile. Conducted user research across India, Malaysia, Singapore, and the UK, created interaction flows that met diverse regulatory requirements per market, and built a pattern library adopted by regional teams.",
    capabilities: ["End-to-end Ownership", "Regulatory UX", "Cross-market Research", "Pattern Libraries"],
    tags: ["Mobile Banking", "Global Launch", "Onboarding"],
  },
  {
    title: "Online ID Verification & Authentication",
    company: "HSBC",
    description:
      "Designed identity verification and multi-factor authentication flows for mobile -- including QR-code login, push authentication, biometrics, and secure codes. Ran usability testing across four countries, iterated on accessibility edge cases, and partnered with engineering on camera-based document capture.",
    capabilities: ["Identity & Auth Design", "Usability Testing", "Accessibility", "Cross-functional Collaboration"],
    tags: ["Security", "Mobile App", "Multi-market"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="bg-card px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Selected Projects
          </p>
          <div className="h-px w-12 bg-accent" />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative rounded-2xl border border-border bg-background p-8 transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-accent">
                    {project.company}
                  </p>
                  <h3 className="mt-1 font-serif text-2xl tracking-tight text-foreground">
                    {project.title}
                  </h3>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-6">
                <p className="mb-2 text-xs uppercase tracking-[0.1em] text-muted-foreground">
                  Skills Applied
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
