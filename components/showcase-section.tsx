"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const successCases = [
  {
    title: "Mobile taxi roof display project for regional business summit",
    image: "/images/showcase-1.jpg",
    category: "Mobile Vehicle LED"
  },
  {
    title: "Urban digital advertising campaign on taxi screens",
    image: "/images/showcase-2.jpg",
    category: "Mobile Vehicle LED"
  },
  {
    title: "Custom indoor LED cube display for trade show exhibition",
    image: "/images/showcase-3.jpg",
    category: "Creative LED Display"
  },
  {
    title: "Seamless spherical LED display at international tech expo",
    image: "/images/showcase-4.jpg",
    category: "Creative LED Display"
  },
  {
    title: "Aerodynamic mobile taxi top LED advertising display",
    image: "/images/showcase-5.png",
    category: "Mobile Vehicle LED"
  },
  {
    title: "Seamless curved flexible video wall installation",
    image: "/images/showcase-6.png",
    category: "Creative LED Display"
  }
]

export function ShowcaseSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const dragStartX = useRef(0)
  const scrollStartLeft = useRef(0)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    let intervalId: NodeJS.Timeout

    const startScrolling = () => {
      intervalId = setInterval(() => {
        if (!container) return
        const firstChild = container.firstElementChild as HTMLElement
        const scrollStep = firstChild ? firstChild.offsetWidth + 24 : 374
        // -10 for floating point rounding margin
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          container.scrollBy({ left: scrollStep, behavior: 'smooth' }) 
        }
      }, 2500)
    }

    startScrolling()

    const handleMouseEnter = () => clearInterval(intervalId)
    const handleMouseLeave = () => startScrolling()

    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)
    container.addEventListener('touchstart', handleMouseEnter, { passive: true })
    container.addEventListener('touchend', handleMouseLeave, { passive: true })

    // Mouse drag to scroll
    const onMouseDown = (e: MouseEvent) => {
      isDragging.current = true
      dragStartX.current = e.pageX
      scrollStartLeft.current = container.scrollLeft
      container.style.cursor = 'grabbing'
      container.style.userSelect = 'none'
      clearInterval(intervalId)
    }
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return
      const dx = e.pageX - dragStartX.current
      container.scrollLeft = scrollStartLeft.current - dx
    }
    const onMouseUp = () => {
      if (!isDragging.current) return
      isDragging.current = false
      container.style.cursor = 'grab'
      container.style.userSelect = ''
      startScrolling()
    }

    container.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    container.style.cursor = 'grab'

    return () => {
      clearInterval(intervalId)
      container.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeave)
      container.removeEventListener('touchstart', handleMouseEnter)
      container.removeEventListener('touchend', handleMouseLeave)
    }
  }, [])

  return (
    <section 
      id="showcase" 
      className="relative pt-6 pb-12 bg-background border-t border-border/40 scroll-mt-12 overflow-hidden"
    >
      <div className="w-full">
        {/* Header */}
        <div className="flex flex-col items-center text-center px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-44 mb-8">
          <h2 className="text-xl sm:text-2xl md:text-[28px] font-bold font-mono text-foreground mt-1 mb-2 leading-tight tracking-tight uppercase">
            SUCCESS CASES
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed mt-1">
            Our innovative visual screens serve as dynamic centerpieces in conference centers, retail hubs, transit terminals, and commercial landmarks worldwide. Operating across major global regions, Nano Signs provides customized mobile advertising displays, digital column setups, and high-contrast video walls engineered to meet the highest industry standards.
          </p>
        </div>

        {/* Carousel Slider (Continuously moving wide horizontal carousel) */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto select-none no-scrollbar px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-44 py-4 scroll-smooth"
        >
          {successCases.map((item, idx) => (
            <div 
              key={idx} 
              className="min-w-[280px] w-[65vw] sm:w-[42vw] md:w-[32vw] lg:w-[350px] shrink-0"
            >
              <div className="group relative overflow-hidden rounded-xl bg-card border border-border/60 aspect-[4/3] w-full cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 shadow-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 65vw, (max-width: 768px) 42vw, (max-width: 1024px) 32vw, 350px"
                  quality={70}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <span className="text-[10px] uppercase font-bold text-primary tracking-wider px-2 py-0.5 bg-black/40 border border-primary/20 rounded-md">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-semibold text-white mt-2 line-clamp-2 font-mono">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
