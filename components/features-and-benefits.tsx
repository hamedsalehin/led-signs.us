"use client"

import { useState } from "react"
import { 
  Shield, Zap, Truck, Headphones, Award, Wrench, 
  Check, X, Globe, Users, CheckCircle2 
} from "lucide-react"

// Data from benefits-section
const benefits = [
  {
    number: "01",
    title: "Industry-Leading Quality",
    description: "15+ years of expertise in LED display manufacturing with cutting-edge technology and rigorous quality control.",
    stats: "5,000+ installations",
  },
  {
    number: "02",
    title: "Custom Solutions",
    description: "Tailored designs for unique applications. Our engineers work with you from concept to installation.",
    stats: "100% customized",
  },
  {
    number: "03",
    title: "Lifetime Support",
    description: "Comprehensive technical support, regular maintenance, and software updates throughout your display lifecycle.",
    stats: "99.9% uptime",
  },
]

// Data from features-section
const features = [
  {
    icon: Zap,
    title: "Ultra High Brightness",
    desc: "Up to 10,000 nits for crystal-clear visibility even in direct sunlight.",
  },
  {
    icon: Shield,
    title: "IP65 Waterproof",
    desc: "Military-grade protection against water, dust, and extreme weather conditions.",
  },
  {
    icon: Award,
    title: "3-Year Warranty",
    desc: "Full coverage warranty with free replacement parts and technical support.",
  },
  {
    icon: Truck,
    title: "Global Shipping",
    desc: "Free worldwide logistics with door-to-door delivery and customs clearance.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Round-the-clock technical assistance via phone, email, and live chat.",
  },
  {
    icon: Wrench,
    title: "Easy Installation",
    desc: "Modular design with tool-free assembly. Professional installation guides included.",
  },
]

// Data from feature-showcase
const featureCompare = [
  { feature: "4K Resolution Support", nano: true, competitors: false },
  { feature: "IP65 Waterproof Rating", nano: true, competitors: true },
  { feature: "10+ Year Lifespan", nano: true, competitors: false },
  { feature: "24/7 Global Support", nano: true, competitors: false },
  { feature: "Modular Installation", nano: true, competitors: true },
  { feature: "Energy Efficient (50% less)", nano: true, competitors: false },
]

// Data from trust-section
const trusts = [
  {
    icon: Award,
    label: "ISO Certified",
    description: "ISO 9001:2015 quality management",
  },
  {
    icon: Globe,
    label: "Global Presence",
    description: "Serving 80+ countries worldwide",
  },
  {
    icon: Shield,
    label: "Secure & Safe",
    description: "Military-grade reliability standards",
  },
  {
    icon: Users,
    label: "5000+ Happy Clients",
    description: "Trusted by leading businesses",
  },
]

export function FeaturesAndBenefitsSection() {
  const [activeTab, setActiveTab] = useState<"benefits" | "features" | "technology">("benefits")
  const [showComparison, setShowComparison] = useState(false)

  return (
    <section id="features-and-benefits" className="relative pt-3 pb-8 bg-[#0B0B0C] border-t border-border/40 scroll-mt-12">
      <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-44">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-5">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary mb-1">
            WHY NANO SIGNS
          </span>
          <h2 className="text-xl sm:text-2xl md:text-[28px] font-bold font-mono text-white mt-1 mb-2 leading-tight tracking-tight uppercase">
            TECHNOLOGY & VALUE
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-none leading-normal mt-1">
            Discover what sets Nano Signs apart: cutting-edge LED features, custom configurations, and lifetime support.
          </p>
        </div>

        {/* Dynamic Tab Switcher */}
        <div className="flex justify-center border-b border-border mb-6">
          <div className="flex gap-2 sm:gap-6">
            <button
              onClick={() => setActiveTab("benefits")}
              className={`pb-3 text-xs sm:text-sm font-semibold transition-all border-b-2 font-mono uppercase cursor-pointer ${
                activeTab === "benefits"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Why Choose Us
            </button>
            <button
              onClick={() => setActiveTab("features")}
              className={`pb-3 text-xs sm:text-sm font-semibold transition-all border-b-2 font-mono uppercase cursor-pointer ${
                activeTab === "features"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Key Features
            </button>
            <button
              onClick={() => setActiveTab("technology")}
              className={`pb-3 text-xs sm:text-sm font-semibold transition-all border-b-2 font-mono uppercase cursor-pointer ${
                activeTab === "technology"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Our Technology
            </button>
          </div>
        </div>

        {/* Tab Contents */}
        <div className="min-h-[200px]">
          
          {/* TAB 1: BENEFITS & TRUST */}
          {activeTab === "benefits" && (
            <div className="space-y-8 animate-fade-in">
              <div className="grid md:grid-cols-3 gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="p-4 sm:p-5 rounded-xl border border-border bg-card/50 flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-xs font-mono font-bold text-primary/60 mb-2">
                        {benefit.number}
                      </div>
                      <h3 className="text-base font-bold text-white mb-1.5 font-mono">
                        {benefit.title}
                      </h3>
                      <p className="text-zinc-400 leading-relaxed text-xs">
                        {benefit.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-primary mt-3">
                      <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                      {benefit.stats}
                    </div>
                  </div>
                ))}
              </div>

              {/* Sub-Trust badges */}
              <div className="border-t border-border/40 pt-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {trusts.map((item, i) => {
                    const Icon = item.icon
                    return (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 rounded-lg bg-card/30 border border-border/40"
                      >
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon className="w-4.5 h-4.5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white text-xs">{item.label}</h4>
                          <p className="text-[10px] text-zinc-500 leading-none mt-0.5">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: KEY FEATURES */}
          {activeTab === "features" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 animate-fade-in">
              {features.map((feat) => (
                <div
                  key={feat.title}
                  className="group flex items-start gap-3 p-4 bg-card/40 border border-border rounded-xl hover:bg-secondary/15 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <feat.icon className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-white mb-1 font-mono">
                      {feat.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: TECHNOLOGY & COMPARISON */}
          {activeTab === "technology" && (
            <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
              
              <div className="flex justify-center mb-4">
                <button
                  onClick={() => setShowComparison(!showComparison)}
                  className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground text-xs font-semibold rounded-full hover:bg-primary/90 transition-all shadow-md cursor-pointer"
                >
                  {showComparison ? "View Key Specs Grid" : "Compare with Competitors"}
                </button>
              </div>

              {showComparison ? (
                <div className="space-y-2 border border-border rounded-xl p-4 bg-card/30">
                  {/* Header Row */}
                  <div className="grid grid-cols-3 gap-2 pb-2 border-b border-border text-xs font-mono font-bold text-zinc-400">
                    <div>Feature</div>
                    <div className="text-center text-primary">Nano Signs</div>
                    <div className="text-center">Competitors</div>
                  </div>
                  {featureCompare.map((item, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-3 gap-2 py-2.5 items-center border-b border-border/30 last:border-b-0 text-xs sm:text-sm"
                    >
                      <div className="font-semibold text-white">{item.feature}</div>
                      <div className="flex items-center justify-center">
                        {item.nano ? (
                          <div className="flex items-center gap-1.5 text-primary">
                            <Check className="w-4 h-4" />
                            <span className="font-semibold text-xs font-mono">Yes</span>
                          </div>
                        ) : (
                          <X className="w-4 h-4 text-zinc-600" />
                        )}
                      </div>
                      <div className="flex items-center justify-center">
                        {item.competitors ? (
                          <Check className="w-4 h-4 text-zinc-500" />
                        ) : (
                          <X className="w-4 h-4 text-zinc-600" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {featureCompare.map((item, i) => (
                    <div
                      key={i}
                      className="group p-4 bg-card/40 rounded-xl border border-border hover:border-primary/50 transition-all cursor-pointer"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white text-xs sm:text-sm mb-1 font-mono">{item.feature}</h3>
                          <p className="text-[11px] text-zinc-500 leading-snug">
                            {item.feature.includes("4K") && "Crystal clear high-res visuals for details."}
                            {item.feature.includes("Waterproof") && "All-weather IP65 protection and durability."}
                            {item.feature.includes("Lifespan") && "Guaranteed performance for over a decade."}
                            {item.feature.includes("Support") && "Expert technician availability day and night."}
                            {item.feature.includes("Modular") && "Quick, seamless setup and maintenance."}
                            {item.feature.includes("Energy") && "Lower operational costs and green carbon footprint."}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          )}

        </div>

        {/* Integrated compact CTA Banner */}
        <div className="mt-10 p-5 rounded-xl bg-card/30 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-4 text-left">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-white font-mono leading-tight">
              Ready to Transform Your Space with <span className="text-primary">LED Technology?</span>
            </h3>
            <p className="text-xs text-zinc-400 max-w-2xl leading-snug">
              From design to deployment, our engineering team handles it all. Get started with a free consultation today.
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            <a
              href="#configurator"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary text-primary-foreground text-xs font-bold rounded hover:opacity-90 transition-all cursor-pointer"
            >
              Configure & Price
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 border border-border text-white text-xs font-bold rounded hover:bg-secondary/25 transition-colors cursor-pointer"
            >
              Talk to an Expert
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
