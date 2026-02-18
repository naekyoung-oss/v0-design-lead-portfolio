import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Naekyoung was tremendous at guiding the design team and it was great to see her progress to the position Product Design Lead whilst we worked together, which she fully deserved to recognise her impact. She made a fantastic impression in ensuring the development team had everything they needed to be able to deliver great experiences to our customers.",
    author: "Christopher Byrne",
    relationship: "Colleague at HSBC",
  },
  {
    quote:
      "Naekyoung is an excellent manager. She always kept the team morale up, and I believe she is the best manager I ever had. Her ability to work through the crisis and develop new ways to achieve the targets and solve the problem were always inspiring. She is innovative, organized as well as helpful and is always open to ideas and suggestions.",
    author: "Talha Naik",
    relationship: "Direct Report at HSBC",
  },
]

export function Testimonials() {
  return (
    <section className="bg-card px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Recommendations
          </p>
          <div className="h-px w-12 bg-accent" />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <blockquote
              key={t.author}
              className="relative rounded-2xl border border-border bg-background p-8"
            >
              <Quote className="mb-4 h-6 w-6 text-accent/40" />
              <p className="text-base leading-relaxed text-muted-foreground italic">
                {`"${t.quote}"`}
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted font-serif text-sm text-foreground">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {t.author}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t.relationship}
                  </p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
