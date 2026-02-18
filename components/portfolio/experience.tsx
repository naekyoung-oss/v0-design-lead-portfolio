"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface Role {
  title: string
  company: string
  period: string
  location: string
  description: string
  achievements?: string[]
  tags?: string[]
}

const roles: Role[] = [
  {
    title: "VP Lead Experience Designer, CIB XD Core",
    company: "J.P. Morgan",
    period: "May 2023 - Present",
    location: "London, UK",
    description:
      "Lead design discovery and experimental projects for CIB and firm-wide business stakeholders. Focus on proposing innovative approaches tailored to the specific problems stakeholders face.",
    achievements: [
      "Standing Settlement Instructions (SSIs) Standardisation - Created and tested a standardised SSIs template published by Financial Markets Standards Board (FMSB)",
      "Workforce Activity Data Utility (WADU 2.0) Conceptual Designs",
      "Manager Zone (a firmwide HR tool powered by WADU) Conceptual Designs",
    ],
    tags: ["Design Strategy", "Financial Services", "Innovation"],
  },
  {
    title: "VP Lead Product Designer, CIB Payments",
    company: "J.P. Morgan",
    period: "Oct 2022 - Apr 2023",
    location: "London, UK",
    description:
      "Led product design for CIB Payments, delivering user-centred design solutions for complex financial payment systems.",
    tags: ["Product Design", "Payments", "Enterprise UX"],
  },
  {
    title: "Product Design Manager / Design Lead",
    company: "HSBC",
    period: "Mar 2020 - Oct 2022",
    location: "London, UK",
    description:
      "Oversaw iterative design processes, maintained quality and consistency. Managed and mentored designers across China, India, Poland, and the UK.",
    achievements: [
      "5.1 million customers registered or migrated to new mobile banking app. Average registration time reduced from 15 mins to 2.7 mins",
      "Online ID verification: average time reduced from 1-2 days (at branch) to less than 5 mins (online)",
      "Led user authentication experience design using QR codes, push auth, biometrics, and secure codes",
    ],
    tags: ["Design Management", "Mobile Banking", "Identity Verification"],
  },
  {
    title: "User Experience Manager",
    company: "Tungsten Network",
    period: "Nov 2012 - Mar 2020",
    location: "London, UK",
    description:
      "Led and managed the redesign of a web client portal, incorporating a new design system. Directed collaboration with an external design agency and managed contract designers.",
    achievements: [
      "Client portal transformation with new information architecture, branding, and design system",
      "Customer onboarding conversion rate increased from 21% to 64% within three months",
    ],
    tags: ["Design Systems", "Portal Design", "Onboarding"],
  },
  {
    title: "User Research Manager (Lifestyle Entertainment)",
    company: "Philips Consumer Lifestyle",
    period: "Oct 2010 - Jan 2012",
    location: "Hong Kong SAR",
    description:
      "Led comprehensive research for SimplyShare, wake-up alarms, music players, and car infotainment systems. Provided key insights for product vision and strategy.",
    tags: ["User Research", "Consumer Electronics", "Product Strategy"],
  },
  {
    title: "UX Design Specialist / Senior UX Designer",
    company: "Samsung Electronics",
    period: "Jun 2007 - May 2009",
    location: "Seoul, South Korea",
    description:
      "Selected as UX Specialist for Samsung's first multidisciplinary innovation lab. Led localisation projects for TouchWiz 1.0, Samsung's first mobile touch interface.",
    tags: ["Mobile UX", "Innovation Lab", "Localisation"],
  },
  {
    title: "User Experience Designer",
    company: "SK Telecom",
    period: "Oct 2003 - May 2006",
    location: "Seoul, South Korea",
    description:
      "Designed operating system and native app user interfaces for SKY-brand mobile devices and Digital Multimedia Broadcasting (DMB) devices.",
    tags: ["Mobile OS", "UI Design", "Telecommunications"],
  },
]

function ExperienceItem({ role }: { role: Role }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-t border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-start justify-between gap-4 py-6 text-left transition-colors hover:bg-muted/30 px-2 -mx-2 rounded-lg"
        aria-expanded={isOpen}
      >
        <div className="flex-1">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
            <h3 className="font-serif text-xl tracking-tight text-foreground md:text-2xl">
              {role.company}
            </h3>
            <span className="text-sm text-muted-foreground">
              {role.period}
            </span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{role.title}</p>
        </div>
        <ChevronDown
          className={cn(
            "mt-2 h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="pb-6 px-2 -mx-2">
            <p className="text-sm text-muted-foreground mb-1">{role.location}</p>
            <p className="text-base leading-relaxed text-muted-foreground">
              {role.description}
            </p>

            {role.achievements && role.achievements.length > 0 && (
              <ul className="mt-4 space-y-2">
                {role.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {achievement}
                  </li>
                ))}
              </ul>
            )}

            {role.tags && (
              <div className="mt-4 flex flex-wrap gap-2">
                {role.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Experience
          </p>
          <div className="h-px w-12 bg-accent" />
        </div>

        <div>
          {roles.map((role) => (
            <ExperienceItem key={`${role.company}-${role.period}`} role={role} />
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  )
}
