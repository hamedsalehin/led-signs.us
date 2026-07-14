"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, ChevronLeft, ChevronRight, Zap, TrendingUp, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const slides = [
  {
    image: "/he4.png",
    title: "Outdoor LED Display",
    description: "High-performance billboard with 8000+ nits brightness & IP65 weatherproofing",
    cta: "View More>",
    ctaHref: "/products/outdoor-fixed-led-display",
    icon: Sparkles,
  },
  {
    image: "/hero5.png",
    title: "Programmable LED Signs",
    description: "Customizable full-color digital signs for dynamic business messaging",
    cta: "View More>",
    ctaHref: "/products/programmable-led-signs",
    icon: TrendingUp,
  },
  {
    image: "/hero2.jpeg",
    title: "Outdoor Rental LED Display",
    description: "Indoor/outdoor rental led display for all live events",
    cta: "View More>",
    ctaHref: "/products/outdoor-rental-led-display",
    icon: TrendingUp,
  },
  {
    image: "/hero4.jpeg",
    title: "Indoor&Outdoor Flexible LED Display",
    description: "Tailored for any creative shapes",
    cta: "View More>",
    ctaHref: "/products/flexible-led-display",
    icon: Sparkles,
  },
  {
    image: "/hero3.jpeg",
    title: "Outdoor and Indoor Transparent LED Screen",
    description: "Lightweight, and See through the screen",
    cta: "View More>",
    ctaHref: "/products/transparent-led-screen",
    icon: Sparkles,
  },
]


export function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const isAnimatingRef = useRef(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const goTo = (index: number) => {
    if (isAnimatingRef.current) return
    isAnimatingRef.current = true
    setCurrent(index)
    setTimeout(() => {
      isAnimatingRef.current = false
    }, 800)
  }

  const next = () => goTo((current + 1) % slides.length)
  const prev = () => goTo((current - 1 + slides.length) % slides.length)

  useEffect(() => {
    let interval: NodeJS.Timeout

    // Delay the first transition to give Lighthouse enough time to record LCP
    const timeout = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
      
      interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length)
      }, 8000)
    }, 15000)

    return () => {
      clearTimeout(timeout)
      if (interval) clearInterval(interval)
    }
  }, [])



  const slide = slides[current]
  const Icon = slide.icon

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh]"
      ref={containerRef}
    >
      {/* Animated background with multiple layers */}
      <div className="absolute inset-0">
        {/* Base image slides */}
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-background transition-opacity duration-1000 ease-out ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Always render slide 0 (SSR for LCP), others only after mount */}
            {(i === 0 || mounted) && (
              <Image
                src={s.image}
                alt={s.title}
                fill
                sizes="100vw"
                quality={i === 0 ? 75 : 50}
                className="object-cover"
                priority={i === 0}
                loading={i === 0 ? "eager" : "lazy"}
                // @ts-ignore
                fetchPriority={i === 0 ? "high" : "low"}
              />
            )}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-end justify-center pb-4 sm:pb-6 md:pb-8 lg:pb-10">
        <div className="mx-auto max-w-7xl w-full px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="max-w-2xl relative">
              {slides.map((s, i) => (
                <div
                  key={i}
                  className={`transition-all duration-700 ${i === current
                    ? "opacity-100 translate-x-0 relative"
                    : "opacity-0 translate-x-[-40px] absolute inset-0 pointer-events-none"
                    }`}
                  aria-hidden={i !== current}
                >
                  <div className="mb-2 sm:mb-4">
                    <h1 
                      className={`inline-block sm:inline text-sm xs:text-base sm:text-lg md:text-xl lg:text-3xl xl:text-5xl font-bold tracking-tight leading-[1.3] text-white font-sans text-balance bg-black/45 px-2 py-0.5 rounded box-decoration-clone${
                        i === 0 ? "" : " animate-fade-in-down [animation-delay:100ms]"
                      }`}
                      style={{ WebkitTextStroke: "1px rgba(0, 0, 0, 0.4)", textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
                    >
                      {s.title}
                    </h1>
                  </div>

                  {/* CTA Buttons with enhanced styling */}
                  <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-3${
                    i === 0 ? "" : " animate-fade-in-down [animation-delay:400ms]"
                  }`}>
                    <Link
                      href={s.ctaHref}
                      className="group inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-primary text-primary-foreground text-xs sm:text-sm font-semibold rounded-lg hover:bg-primary/90 transition-all hover:gap-3 hover:shadow-lg shadow-md"
                    >
                      {s.cta}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Visual element (only visible on desktop) */}
            <div className="hidden lg:flex items-center justify-center relative h-full">
              <div className="relative w-full aspect-square max-w-md">
                {/* Floating cards with product info */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Central glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-3xl blur-3xl" />

                    {/* Floating stat cards */}
                    <div className="absolute top-0 right-0 p-3 bg-black/45 backdrop-blur-md border border-border rounded-lg shadow-lg animate-float [animation-delay:0s]">
                      <div className="text-xs font-semibold text-primary leading-tight">Resolution</div>
                      <div className="text-sm font-bold text-foreground">4K Ready</div>
                    </div>

                    <div className="absolute bottom-0 left-0 p-3 bg-black/45 backdrop-blur-md border border-border rounded-lg shadow-lg animate-float [animation-delay:1s]">
                      <div className="text-xs font-semibold text-primary leading-tight">Brightness</div>
                      <div className="text-sm font-bold text-foreground">8000+ Nits</div>
                    </div>

                    <div className="absolute top-1/2 right-0 p-3 bg-black/45 backdrop-blur-md border border-border rounded-lg shadow-lg animate-float [animation-delay:2s]">
                      <div className="text-xs font-semibold text-primary leading-tight">Lifespan</div>
                      <div className="text-sm font-bold text-foreground">100k Hours</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 right-6 z-20 hidden sm:flex items-center gap-3">
        <button
          onClick={prev}
          className="w-12 h-12 flex items-center justify-center rounded-full border border-border/50 bg-background/30 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="w-12 h-12 flex items-center justify-center rounded-full border border-border/50 bg-background/30 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-6 z-20 hidden sm:flex items-center gap-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="group flex items-center gap-2 hover:opacity-100 transition-opacity"
            aria-label={`Go to slide ${i + 1}`}
          >
            <div className="relative h-1 w-12 bg-foreground/20 rounded-full overflow-hidden">
              <div
                className={`absolute inset-y-0 left-0 bg-primary rounded-full transition-all duration-[4000ms] ease-linear ${i === current ? "w-full" : "w-0"
                  }`}
              />
            </div>
            <span
              className={`text-xs font-mono transition-colors ${i === current ? "text-primary" : "text-muted-foreground"
                }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Scroll</span>
        <div className="w-5 h-8 border border-muted-foreground/30 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
