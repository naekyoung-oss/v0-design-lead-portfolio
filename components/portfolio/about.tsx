export function About() {
  const capabilities = [
    "Design Discovery & Framing",
    "Design Systems & Pattern Libraries",
    "Usability Research & Testing",
    "Regulatory & Compliance UX",
    "Interaction & Service Design",
    "Multi-market Localisation",
    "Distributed Team Leadership",
    "Stakeholder Workshop Facilitation",
    "Concept & Prototype Development",
    "Information Architecture",
    "Authentication & Identity Flows",
    "Agile & Lean UX Processes",
  ]

  return (
    <section id="about" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            About
          </p>
          <div className="h-px w-12 bg-accent" />
        </div>

        <div className="grid gap-16 lg:grid-cols-5">
          {/* Left: bio text */}
          <div className="lg:col-span-3">
            <h2 className="font-serif text-3xl leading-snug tracking-tight text-foreground md:text-4xl text-balance">
              I design the experiences behind institutional
              banking and global digital finance.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground lg:text-lg">
              <p>
                At J.P. Morgan, I run design discovery for CIB and firm-wide
                initiatives -- identifying unmet needs, framing problems with
                stakeholders, and proposing experimental approaches to complex
                operational workflows like settlement instructions, workforce
                analytics, and internal HR tooling. I work at the earliest stage
                of the product lifecycle, shaping what gets built and why.
              </p>
              <p>
                At HSBC, I owned end-to-end design for mobile banking
                registration, identity verification, and authentication across
                four countries. I built scalable pattern libraries, ran usability
                research with real customers, navigated regulatory constraints
                across markets, and managed a distributed design team spanning
                China, India, Poland, and the UK.
              </p>
            </div>
          </div>

          {/* Right: capabilities */}
          <div className="lg:col-span-2">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Core Capabilities
            </p>
            <div className="flex flex-wrap gap-2">
              {capabilities.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
