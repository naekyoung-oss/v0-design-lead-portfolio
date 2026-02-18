import { Linkedin, Mail, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Contact
          </p>
          <div className="h-px w-12 bg-accent" />
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl text-balance">
              {"Let's discuss a project or just say hello."}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {"I'm always open to exploring new opportunities and collaborations. Whether you're looking for a design leader or want to chat about user experience, feel free to reach out."}
            </p>
          </div>

          <div className="space-y-6">
            <a
              href="https://www.linkedin.com/in/nkwak"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:bg-muted"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                <Linkedin className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">LinkedIn</p>
                <p className="text-sm text-muted-foreground">
                  linkedin.com/in/nkwak
                </p>
              </div>
            </a>

            <a
              href="mailto:hello@nkwak.com"
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:bg-muted"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                <Mail className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Email</p>
                <p className="text-sm text-muted-foreground">Get in touch</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                <MapPin className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Location</p>
                <p className="text-sm text-muted-foreground">
                  London, United Kingdom
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
