"use client"

import { useState, useMemo, memo, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ShoppingCart, MessageSquare } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { products, Product } from "@/lib/products-data"

const categoryMap: Record<string, string> = {
  "Advertising LED Display": "Advertising",
  "Creative LED Display": "Creative",
  "Rental LED Display": "Rental",
  "Mobile Vehicle LED Display": "Mobile",
}

const categories = Object.keys(categoryMap)

const ProductCard = memo(({ product }: { product: Product }) => {
  const { addItem } = useCart()

  return (
    <div className="group bg-card rounded-xl border border-border overflow-hidden card-glow transition-all hover:-translate-y-1">
      <div className="relative h-40 sm:h-48 md:h-52 lg:h-56 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 65vw, (max-width: 768px) 42vw, (max-width: 1024px) 32vw, 350px"
          quality={70}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider bg-primary/90 text-primary-foreground rounded">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-3 sm:p-4 lg:p-5">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-base sm:text-lg font-bold text-foreground font-mono">
            {product.name}
          </h3>
          {product.series && (
            <span className="text-[10px] font-bold text-primary px-2 py-0.5 border border-primary/30 rounded bg-primary/5">
              {product.series}
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-muted-foreground mb-3">
          <span className="flex items-center gap-1">
            <span className="text-primary/50">Pixel:</span> {product.specs.find(s => s.label === "Pixel Pitch")?.value || "N/A"}
          </span>
          <span className="text-border">|</span>
          <span className="flex items-center gap-1">
            <span className="text-primary/50">Brightness:</span> {product.specs.find(s => s.label === "Brightness")?.value || "N/A"}
          </span>
          {product.specs.length > 2 && (
            <>
              <span className="text-border">|</span>
              <span className="flex items-center gap-1 text-primary/70">
                + More Specs
              </span>
            </>
          )}
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 text-pretty line-clamp-3 group-hover:line-clamp-none transition-all">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          {product.buyable && product.price ? (
            <>
              <div>
                <span className="text-2xl font-bold text-foreground font-mono">
                  ${product.price}
                </span>
                <span className="text-xs text-muted-foreground ml-1">
                  {product.unit}
                </span>
              </div>
              <button
                onClick={() =>
                  addItem({
                    id: product.id,
                    name: product.name,
                    price: product.price!,
                    quantity: 1,
                  })
                }
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-md hover:bg-primary/90 transition-colors cursor-pointer"
              >
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </button>
            </>
          ) : (
            <>
              <span className="text-sm text-muted-foreground italic">
                Custom Pricing
              </span>
              <Link
                href={`/products/${products.find(p => p.id === product.id)?.slug || product.id}`}
                className="flex items-center gap-2 px-4 py-2 border border-primary text-primary text-sm font-semibold rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                View Details
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
})
ProductCard.displayName = "ProductCard"

export function ProductsSection() {
  const [active, setActive] = useState<string | null>(null)
  const [showAll, setShowAll] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const displayedProducts = useMemo(() => {
    if (!active) return products
    const targetCategory = categoryMap[active]
    return products.filter((p) => p.category === targetCategory)
  }, [active, showAll])

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
      }, 1500)
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
  }, [displayedProducts])

  return (
    <section id="products" className="relative pt-12 pb-4 bg-grid">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 text-sm font-bold tracking-widest uppercase text-primary mb-4">
            PRODUCTS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-mono text-foreground mb-3 sm:mb-4 text-balance">
            TOP LED DISPLAY MANUFACTURER
          </h2>
          <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 text-foreground/90">
            Nano Signs specializes in creative LED displays & solutions.
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
            Transform your space into a digital world with our industry-leading LED display technology. Our dedicated software and professional services ensure you get the perfect visual solution for any application.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => { setActive(null); setShowAll(false) }}
            className={`px-5 py-2 text-sm font-medium rounded-full cursor-pointer transition-all ${active === null
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActive(cat)
                setShowAll(false)
              }}
              className={`px-5 py-2 text-sm font-medium rounded-full cursor-pointer transition-all ${active === cat
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Carousel */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scroll-smooth w-full px-6 lg:px-12" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style dangerouslySetInnerHTML={{__html: `
          .overflow-x-auto::-webkit-scrollbar { display: none; }
        `}} />
        {displayedProducts.map((product) => (
          <div key={product.id} className="snap-start shrink-0 w-[65vw] sm:w-[42vw] md:w-[32vw] lg:w-[350px]">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

    </section>
  )
}
