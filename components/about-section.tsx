"use client"

import Image from "next/image"
import { ArrowRight, Factory } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-background border-t border-border/40 scroll-mt-12 overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-stretch">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col justify-center py-16 px-6 sm:py-24 sm:px-12 md:px-16 lg:pl-16 lg:pr-12 xl:pl-28 xl:pr-20 2xl:pl-40 space-y-6">
          <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            ABOUT US
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold font-mono text-foreground tracking-tight leading-tight uppercase">
            NANO SIGNS LLC
          </h2>

          <div className="text-muted-foreground text-sm sm:text-base space-y-4 leading-relaxed max-w-xl">
            <p>
              At <strong>Nano Signs</strong>, we are dedicated to designing and manufacturing innovative, custom-engineered LED display systems. Our advanced product range includes aerodynamic{" "}
              <span className="text-foreground font-medium">taxi top screens, ultra-thin digital posters, highly flexible LED modules, circular displays, and fully integrated custom-built setups</span> tailored to meet your unique project goals.
            </p>
            <p>
              Our state-of-the-art visual solutions are widely deployed across international trade shows, corporate conferences, live entertainment venues, airports, shopping centers, and prestigious retail spaces.
            </p>
            <p>
              By leveraging our robust, highly optimized supply chain, we deliver high-performance, cost-effective commercial LED displays to clients globally without compromising on quality or long-term support.
            </p>
          </div>

          <div className="pt-2">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Request a Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right Column: Factory Image & Floating Stat Badge (Edge-to-Edge) */}
        <div className="relative w-full h-[350px] sm:h-[450px] lg:h-auto min-h-[400px] lg:min-h-[550px] shrink-0">
          <Image
            src="/images/about-facility.png"
            alt="Nano Signs Manufacturing Facility"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            quality={70}
          />
          {/* Overlay gradient to fade into the background */}
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-background via-background/10 to-transparent pointer-events-none" />

          {/* Floating Stat Badge */}
          <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 bg-card/90 backdrop-blur-xl border border-border p-5 rounded-xl shadow-2xl max-w-[240px] animate-float">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Factory className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold font-mono">More Than</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-foreground font-mono">10</span>
                  <span className="text-sm font-bold text-muted-foreground">Years</span>
                </div>
                <p className="text-[11px] text-muted-foreground leading-normal mt-1 font-sans">
                  delivering advanced custom and digital advertising LED solutions
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
