import { BookOpen, ExternalLink } from "lucide-react"

const publications = [
  {
    title: "Days in London",
    subtitle: "Travel Photo Essay",
    year: "2008",
    description:
      "Travel photo essay about London, written in Korean and published in South Korea. Achieved sales of over 14,000 copies and was selected as the best in travel writing in 2008.",
    language: "Korean",
  },
  {
    title: "Lomography Seoul Guide",
    subtitle: "Co-author & Editor",
    year: "2013",
    description:
      "Co-authored and edited the Seoul Edition in collaboration with the Lomography Publication team in Vienna.",
    language: "English",
  },
]

const education = [
  {
    degree: "MA, Enabling Innovation",
    school: "City University London",
    year: "2009 - 2010",
    distinction: "Merit",
  },
  {
    degree: "BS, Product User Interface",
    school: "Handong Global University",
    year: "1997 - 2002",
    distinction: "Distinction",
  },
  {
    degree: "BA, Visual Information Design",
    school: "Handong Global University",
    year: "1997 - 2002",
    distinction: "Distinction",
  },
]

export function Publications() {
  return (
    <section id="publications" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-20 lg:grid-cols-2">
          {/* Publications */}
          <div>
            <div className="mb-12">
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Publications
              </p>
              <div className="h-px w-12 bg-accent" />
            </div>

            <div className="space-y-8">
              {publications.map((pub) => (
                <article
                  key={pub.title}
                  className="group rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                      <BookOpen className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="flex items-start gap-2">
                        <h3 className="font-serif text-lg tracking-tight text-foreground">
                          {pub.title}
                        </h3>
                        <ExternalLink className="mt-1 h-3 w-3 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {pub.subtitle} &middot; {pub.year}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {pub.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="mb-12">
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Education
              </p>
              <div className="h-px w-12 bg-accent" />
            </div>

            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="border-l-2 border-border pl-6 transition-colors hover:border-accent"
                >
                  <h3 className="font-serif text-lg tracking-tight text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {edu.school}
                  </p>
                  <div className="mt-2 flex items-center gap-3">
                    <span className="text-xs text-muted-foreground">
                      {edu.year}
                    </span>
                    <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                      {edu.distinction}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-16">
              <div className="mb-8">
                <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  Certifications
                </p>
                <div className="h-px w-12 bg-accent" />
              </div>
              <div className="space-y-4">
                <div className="rounded-lg border border-border bg-card px-5 py-4">
                  <p className="text-sm font-medium text-foreground">
                    Customer Led Change: Design Thinking
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Stanford Online &middot; 2021
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-card px-5 py-4">
                  <p className="text-sm font-medium text-foreground">
                    Coding - HTML, CSS and Javascript
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    University of the Arts London &middot; 2020
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
