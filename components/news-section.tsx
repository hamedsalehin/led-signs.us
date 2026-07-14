"use client"

import Image from "next/image"
import { Calendar } from "lucide-react"

const secondaryNews = [
  {
    title: "A Comprehensive Guide to Selecting Outdoor Rental LED Screens for Festivals",
    date: "May 11, 2026",
    category: "News",
    image: "/images/news-1.jpg",
    href: "/shop/products"
  },
  {
    title: "Boosting Clinic and Pharmacy Street Visibility with Dynamic Cross LEDs",
    date: "April 27, 2026",
    category: "News",
    image: "/images/news-2.jpg",
    href: "/shop/products"
  }
]

export function NewsSection() {
  return (
    <section id="news" className="relative pt-6 pb-12 bg-secondary/10 border-t border-border/40 scroll-mt-12">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-44">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary mb-1">
            INSIGHTS
          </span>
          <h2 className="text-xl sm:text-2xl md:text-[28px] font-bold font-mono text-foreground mt-1 mb-2 leading-tight tracking-tight uppercase">
            NEWS
          </h2>
        </div>

        {/* News Container */}
        <div className="space-y-6">
          
          {/* Top Featured Post */}
          <div className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/40 transition-all duration-300 card-glow flex flex-col lg:flex-row items-stretch min-h-[350px] lg:h-[380px]">
            {/* Image (Left side) */}
            <div className="relative w-full lg:w-[55%] h-[220px] lg:h-auto overflow-hidden bg-muted">
              <Image
                src="/images/news-featured.png"
                alt="Featured News"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                quality={70}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Content (Right side) */}
            <div className="flex-1 flex flex-col justify-between p-6 sm:p-8 lg:p-10 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="bg-gradient-to-r from-[#59efbc] to-[#65cfea] bg-clip-text text-transparent font-bold uppercase tracking-wider">
                    Exhibitions
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" />
                    July 13-14, 2024
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-[22px] font-bold font-mono text-foreground leading-snug group-hover:text-primary transition-colors">
                  Transforming Museum Exhibits with Innovative Transparent LED Systems
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3 lg:line-clamp-none">
                  The integration of transparent digital screens is redefining visitor engagement in galleries and museums. Instead of traditional static display cases, modern see-through LED panels present floating digital graphics that bring historical artifacts and art to life.
                </p>
              </div>
              <div>
                <a 
                  href="/shop/products"
                  className="inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-[#59efbc] to-[#65cfea] text-black text-xs font-bold rounded hover:opacity-90 hover:shadow-lg transition-all"
                >
                  View More &gt;
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Secondary Posts List (2 equal columns) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {secondaryNews.map((item, idx) => (
              <div 
                key={idx}
                className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/40 transition-all duration-300 card-glow flex flex-col sm:flex-row items-stretch h-auto sm:h-[200px]"
              >
                {/* Content Left */}
                <div className="flex-1 flex flex-col justify-between p-5 space-y-3">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-3 text-[10px] sm:text-xs font-mono">
                      <span className="bg-gradient-to-r from-[#59efbc] to-[#65cfea] bg-clip-text text-transparent font-bold uppercase tracking-wider">
                        {item.category}
                      </span>
                      <span className="text-muted-foreground">{item.date}</span>
                    </div>
                    <h4 className="text-xs sm:text-sm md:text-base font-bold font-mono text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-3">
                      {item.title}
                    </h4>
                  </div>
                  <div>
                    <a 
                      href={item.href}
                      className="inline-flex items-center justify-center px-4 py-1.5 bg-gradient-to-r from-[#59efbc] to-[#65cfea] text-black text-[10px] font-bold rounded hover:opacity-90 transition-all"
                    >
                      View More &gt;
                    </a>
                  </div>
                </div>

                {/* Small Image Right */}
                <div className="relative w-full sm:w-[150px] md:w-[180px] h-[150px] sm:h-auto overflow-hidden bg-muted border-t sm:border-t-0 sm:border-l border-border shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 180px"
                    quality={70}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
