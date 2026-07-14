"use client"

import Image from "next/image"
import Link from "next/link"

const applications = [
  {
    slug: "stage",
    title: "Stage",
    description: "Led video wall used in the stage. Create illusive effects for concert & theatre.",
    image: "/images/app-stage.png",
  },
  {
    slug: "sport",
    title: "Sport",
    description: "High-quality motion images reach the audience.",
    image: "/images/app-sport.png",
  },
  {
    slug: "football-field",
    title: "Football Field",
    description: "The large LED display billboard is applied to the football field. Commercial maximization.",
    image: "/images/app-football.png",
  },
  {
    slug: "church",
    title: "Church",
    description: "Indoor rental LED display is used in Church. Grow in the faith through hymn and scripture.",
    image: "/images/app-church.png",
  },
  {
    slug: "exhibition",
    title: "Exhibition",
    description: "HD Digital LED Poster is used in the exhibition. Best possible exposure to your audiences.",
    image: "/images/app-exhibition.png",
  },
  {
    slug: "specialty-store",
    title: "Specialty Store",
    description: "Indoor LED display screen used in Specialty Store. Customers get more satisfaction.",
    image: "/images/app-store.png",
  },
  {
    slug: "conference",
    title: "Conference",
    description: "P3 Indoor LED display is used in Conference. Creating optimum environments for employees.",
    image: "/images/app-conference.png",
  },
]

/* Green square arrow icon — visible on hover */
function HoverIcon() {
  return (
    <span className="shrink-0 w-9 h-9 bg-emerald-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    </span>
  )
}

/* Text bar at the bottom of each card.
   Normal: dark gradient so text is legible on bright images.
   On hover: solid emerald-green bar — text fully readable, arrow appears. */
function CardBar({ title, description, large = false }: { title: string; description: string; large?: boolean }) {
  return (
    <div className="absolute bottom-0 left-0 w-full">
      {/* Normal state: gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent group-hover:opacity-0 transition-opacity duration-300" />
      {/* Hover state: solid green bar */}
      <div className="absolute inset-0 bg-emerald-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {/* Text */}
      <div className={`relative z-10 flex items-end justify-between ${large ? "p-5" : "p-4"}`}>
        <div>
          <h3 className={`font-extrabold text-white tracking-tight ${large ? "text-2xl" : "text-base"}`}>{title}</h3>
          <p className={`text-white/90 mt-0.5 ${large ? "text-sm max-w-xs" : "text-xs line-clamp-2"}`}>{description}</p>
        </div>
        <HoverIcon />
      </div>
    </div>
  )
}

export function ApplicationsSection() {
  return (
    <section className="w-full bg-background">
      {/* ── Header ── */}
      <div className="text-center pt-6 pb-6 px-6">
        <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-primary mb-2">
          APPLICATIONS
        </span>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-3 tracking-tight">
          INDUSTRY APPLICATIONS
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto text-sm leading-relaxed">
          Deliver memorable visual experiences across live arenas, corporate venues, shopping malls, and trade exhibitions with our purpose-built LED display technology designed for optimal customer engagement.
        </p>
      </div>

      {/* ── Full-width layout: 1 big left + 2-col grid right ── */}
      <div className="flex flex-col lg:flex-row w-full">

        {/* ── LEFT — Stage (tall) ── */}
        <Link
          href={`/applications/${applications[0].slug}`}
          className="relative flex-shrink-0 w-full lg:w-[38%] h-[380px] lg:h-auto group overflow-hidden block"
        >
          <Image
            src={applications[0].image}
            alt={applications[0].title}
            fill
            sizes="(max-width: 1024px) 100vw, 38vw"
            quality={70}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <CardBar title={applications[0].title} description={applications[0].description} large />
        </Link>

        {/* ── RIGHT — 6 items in 2-col × 3-row grid ── */}
        <div className="flex-1 grid grid-cols-2 grid-rows-3">
          {applications.slice(1).map((app, i) => (
            <Link
              key={i}
              href={`/applications/${app.slug}`}
              className="relative group overflow-hidden block"
              style={{ minHeight: "200px" }}
            >
              <Image
                src={app.image}
                alt={app.title}
                fill
                sizes="(max-width: 1024px) 50vw, 31vw"
                quality={70}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <CardBar title={app.title} description={app.description} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
