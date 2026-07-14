import dynamic from "next/dynamic"
import { Navbar } from "@/components/navbar"
import { HeroSlider } from "@/components/hero-slider"
import { StatsBar } from "@/components/stats-bar"
import { ProductsSection } from "@/components/products-section"
import { ApplicationsSection } from "@/components/applications-section"
import { AboutSection } from "@/components/about-section"
import { SolutionsSection } from "@/components/solutions-section"
import { ShowcaseSection } from "@/components/showcase-section"
import { NewsSection } from "@/components/news-section"
import { FeaturesAndBenefitsSection } from "@/components/features-and-benefits"
import { Footer } from "@/components/footer"

const ContactSection = dynamic(
  () => import("@/components/contact-section").then(mod => mod.ContactSection),
  { loading: () => <div className="py-20 text-center text-muted-foreground bg-zinc-950/20 border-t border-border/40">Loading Contact...</div> }
)
const ConfiguratorSection = dynamic(
  () => import("@/components/configurator-section").then(mod => mod.ConfiguratorSection),
  { loading: () => <div className="py-20 text-center text-muted-foreground bg-zinc-950/20 border-t border-border/40">Loading Configurator...</div> }
)
const CartDrawer = dynamic(
  () => import("@/components/cart-drawer").then(mod => mod.CartDrawer),
  { loading: () => null }
)
const DemoBadge = dynamic(
  () => import("@/components/demo-badge").then(mod => mod.DemoBadge),
  { loading: () => null }
)

export const metadata = {
  title: 'Nano Signs | Premium LED Display Solutions & Manufacturer',
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSlider />
        <StatsBar />
        <ProductsSection />
        <ApplicationsSection />
        <AboutSection />
        <SolutionsSection />
        <ShowcaseSection />
        <NewsSection />
        <ConfiguratorSection />
        <FeaturesAndBenefitsSection />
        <ContactSection />
      </main>
      <Footer />
      <CartDrawer />
      <DemoBadge />
    </>
  )
}
