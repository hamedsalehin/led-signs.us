"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const solutionsData = [
  {
    title: "Indoor LED Display",
    image: "/images/sol-indoor.png",
    href: "/products/indoor-led-display"
  },
  {
    title: "Outdoor LED Display",
    image: "/images/sol-outdoor.png",
    href: "/products/outdoor-fixed-led-display"
  },
  {
    title: "Stage & Events LED Display",
    image: "/images/sol-stage.png",
    href: "/products/outdoor-rental-led-display"
  },
  {
    title: "Advertising LED Display",
    image: "/images/sol-advertising.png",
    href: "/products/outdoor-fixed-led-display"
  },
  {
    title: "Mobile Vehicle LED Display",
    image: "/images/sol-vehicle.png",
    href: "/products/taxi-top-led-display"
  },
  {
    title: "Creative LED Display",
    image: "/images/sol-creative.png",
    href: "/products/flexible-led-display"
  }
]

export function SolutionsSection() {
  return (
    <section 
      id="solutions" 
      className="relative pt-6 pb-12 bg-black text-white scroll-mt-12"
    >
      <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-44">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary mb-1">
            SOLUTIONS
          </span>
          <h2 className="text-xl sm:text-2xl md:text-[28px] font-bold font-mono text-white mt-1 mb-2 leading-tight tracking-tight uppercase">
            SOLUTION
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl leading-relaxed mt-1">
            At Nano Signs, we engineer customized LED display solutions tailored to modern industrial and commercial environments. Our high-resolution video panels, weather-resistant outdoor screens, and dynamic stage backdrops deliver top-tier clarity and visual impact globally.
          </p>
        </div>

        {/* Asymmetrical Alternating Grid in dark container */}
        <div className="bg-zinc-900/30 border border-zinc-800/60 backdrop-blur-md rounded-2xl p-2 md:p-3 mt-8 space-y-2 md:space-y-3">
          
          {/* Row 1: Item 1 (Small) + Item 2 (Large) */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-3">
            <Link
              href={solutionsData[0].href}
              className="group relative overflow-hidden rounded-xl bg-muted w-full md:w-[35%] h-[300px] md:h-[400px] block"
            >
              <Image
                src={solutionsData[0].image}
                alt={solutionsData[0].title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 35vw, 400px"
                quality={70}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[90%] flex items-end justify-between z-10 transition-all duration-300 group-hover:w-[95%] group-hover:p-4 group-hover:bg-gradient-to-r group-hover:from-[#59efbc] group-hover:to-[#65cfea] group-hover:rounded-xl">
                <h3 className="text-sm sm:text-base font-bold font-mono text-white group-hover:text-black">
                  {solutionsData[0].title}
                </h3>
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#59efbc] to-[#65cfea] group-hover:bg-none flex items-center justify-center shrink-0 shadow-md">
                  <ArrowUpRight className="w-4.5 h-4.5 text-black group-hover:text-black" />
                </div>
              </div>
            </Link>

            <Link
              href={solutionsData[1].href}
              className="group relative overflow-hidden rounded-xl bg-muted w-full md:flex-1 h-[300px] md:h-[400px] block"
            >
              <Image
                src={solutionsData[1].image}
                alt={solutionsData[1].title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 750px"
                quality={70}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[90%] flex items-end justify-between z-10 transition-all duration-300 group-hover:w-[95%] group-hover:p-4 group-hover:bg-gradient-to-r group-hover:from-[#59efbc] group-hover:to-[#65cfea] group-hover:rounded-xl">
                <h3 className="text-sm sm:text-base font-bold font-mono text-white group-hover:text-black">
                  {solutionsData[1].title}
                </h3>
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#59efbc] to-[#65cfea] group-hover:bg-none flex items-center justify-center shrink-0 shadow-md">
                  <ArrowUpRight className="w-4.5 h-4.5 text-black group-hover:text-black" />
                </div>
              </div>
            </Link>
          </div>

          {/* Row 2: Item 3 (Large) + Item 4 (Small) */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-3">
            <Link
              href={solutionsData[2].href}
              className="group relative overflow-hidden rounded-xl bg-muted w-full md:flex-1 h-[300px] md:h-[400px] block"
            >
              <Image
                src={solutionsData[2].image}
                alt={solutionsData[2].title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 750px"
                quality={70}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[90%] flex items-end justify-between z-10 transition-all duration-300 group-hover:w-[95%] group-hover:p-4 group-hover:bg-gradient-to-r group-hover:from-[#59efbc] group-hover:to-[#65cfea] group-hover:rounded-xl">
                <h3 className="text-sm sm:text-base font-bold font-mono text-white group-hover:text-black">
                  {solutionsData[2].title}
                </h3>
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#59efbc] to-[#65cfea] group-hover:bg-none flex items-center justify-center shrink-0 shadow-md">
                  <ArrowUpRight className="w-4.5 h-4.5 text-black group-hover:text-black" />
                </div>
              </div>
            </Link>

            <Link
              href={solutionsData[3].href}
              className="group relative overflow-hidden rounded-xl bg-muted w-full md:w-[35%] h-[300px] md:h-[400px] block"
            >
              <Image
                src={solutionsData[3].image}
                alt={solutionsData[3].title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 35vw, 400px"
                quality={70}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[90%] flex items-end justify-between z-10 transition-all duration-300 group-hover:w-[95%] group-hover:p-4 group-hover:bg-gradient-to-r group-hover:from-[#59efbc] group-hover:to-[#65cfea] group-hover:rounded-xl">
                <h3 className="text-sm sm:text-base font-bold font-mono text-white group-hover:text-black">
                  {solutionsData[3].title}
                </h3>
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#59efbc] to-[#65cfea] group-hover:bg-none flex items-center justify-center shrink-0 shadow-md">
                  <ArrowUpRight className="w-4.5 h-4.5 text-black group-hover:text-black" />
                </div>
              </div>
            </Link>
          </div>

          {/* Row 3: Item 5 (Small) + Item 6 (Large) */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-3">
            <Link
              href={solutionsData[4].href}
              className="group relative overflow-hidden rounded-xl bg-muted w-full md:w-[35%] h-[300px] md:h-[400px] block"
            >
              <Image
                src={solutionsData[4].image}
                alt={solutionsData[4].title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 35vw, 400px"
                quality={70}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[90%] flex items-end justify-between z-10 transition-all duration-300 group-hover:w-[95%] group-hover:p-4 group-hover:bg-gradient-to-r group-hover:from-[#59efbc] group-hover:to-[#65cfea] group-hover:rounded-xl">
                <h3 className="text-sm sm:text-base font-bold font-mono text-white group-hover:text-black">
                  {solutionsData[4].title}
                </h3>
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#59efbc] to-[#65cfea] group-hover:bg-none flex items-center justify-center shrink-0 shadow-md">
                  <ArrowUpRight className="w-4.5 h-4.5 text-black group-hover:text-black" />
                </div>
              </div>
            </Link>

            <Link
              href={solutionsData[5].href}
              className="group relative overflow-hidden rounded-xl bg-muted w-full md:flex-1 h-[300px] md:h-[400px] block"
            >
              <Image
                src={solutionsData[5].image}
                alt={solutionsData[5].title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 750px"
                quality={70}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[90%] flex items-end justify-between z-10 transition-all duration-300 group-hover:w-[95%] group-hover:p-4 group-hover:bg-gradient-to-r group-hover:from-[#59efbc] group-hover:to-[#65cfea] group-hover:rounded-xl">
                <h3 className="text-sm sm:text-base font-bold font-mono text-white group-hover:text-black">
                  {solutionsData[5].title}
                </h3>
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#59efbc] to-[#65cfea] group-hover:bg-none flex items-center justify-center shrink-0 shadow-md">
                  <ArrowUpRight className="w-4.5 h-4.5 text-black group-hover:text-black" />
                </div>
              </div>
            </Link>
          </div>

        </div>

      </div>
    </section>
  )
}
