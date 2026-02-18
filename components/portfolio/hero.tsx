import { ArrowDown, Linkedin } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center px-6 pt-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-end gap-12 lg:grid-cols-2">
          {/* Left column */}
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Design Lead -- J.P. Morgan
            </p>
            <h1 className="font-serif text-5xl leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl text-balance">
              Naekyoung
              <br />
              Kwak
            </h1>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/nkwak"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm text-foreground transition-colors hover:bg-muted"
                aria-label="Visit LinkedIn profile"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm text-background transition-opacity hover:opacity-90"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:pb-4">
            <p className="text-lg leading-relaxed text-muted-foreground lg:text-xl">
              I lead design discovery and strategy for institutional
              banking products at J.P. Morgan, and previously redesigned
              core digital banking journeys at HSBC across four global
              markets. I specialise in making regulated, high-complexity
              financial services feel simple.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex justify-center lg:mt-32">
          <a href="#about" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="Scroll to about section">
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
