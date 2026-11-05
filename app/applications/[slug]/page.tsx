import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { 
  ChevronRight, 
  CheckCircle2, 
  MessageSquare, 
  ArrowLeft,
  Zap,
  Layers,
  ShieldCheck
} from "lucide-react"

import { getApplicationBySlug, applications } from "@/lib/applications-data"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { ContactSection } from "@/components/contact-section"
import { Metadata } from "next"

export async function generateStaticParams() {
  return applications.map((app) => ({
    slug: app.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const application = getApplicationBySlug(resolvedParams.slug)
  if (!application) {
    return {
      title: "Application Not Found | Nano Signs",
    }
  }
  return {
    title: `${application.name} | Nano Signs LED Display Application`,
    description: application.description,
    alternates: {
      canonical: `/applications/${application.slug}`,
    },
    openGraph: {
      title: `${application.name} | Nano Signs`,
      description: application.description,
      images: [{ url: application.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${application.name} | Nano Signs`,
      description: application.description,
      images: [application.image],
    }
  }
}

export default async function ApplicationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const application = getApplicationBySlug(resolvedParams.slug)

  if (!application) {
    notFound()
  }

  // Related/other applications to recommend at the bottom
  const otherApplications = applications
    .filter((a) => a.slug !== application.slug)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-44">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/#products" className="hover:text-primary transition-colors">Applications</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">{application.name}</span>
          </nav>

          {/* Header & Main Image */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Gallery / Image */}
            <div className="space-y-4">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-border group">
                <Image
                  src={application.image}
                  alt={application.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw, 600px"
                  quality={70}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              
              {application.gallery.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {application.gallery.map((img, idx) => (
                    <div key={idx} className="relative aspect-square rounded-lg overflow-hidden border border-border cursor-pointer hover:border-primary transition-colors">
                      <Image
                        src={img}
                        alt={`${application.name} gallery ${idx + 1}`}
                        fill
                        sizes="(max-width: 1024px) 25vw, 150px"
                        quality={70}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Header Info */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-wider">
                  {application.category}
                </Badge>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold font-mono tracking-tight text-foreground mb-4 sm:mb-6 leading-tight">
                {application.name}
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                {application.description}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-10">
                {application.specs.map((spec) => (
                  <div key={spec.label} className="flex flex-col gap-1 border-l-2 border-primary/30 pl-4 py-1">
                    <span className="text-xs text-muted-foreground uppercase tracking-widest">{spec.label}</span>
                    <span className="text-sm sm:text-base font-bold text-foreground font-mono">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="h-12 px-6 text-sm font-bold transition-all hover:scale-105 cursor-pointer" asChild>
                  <a href="#contact">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Request a Consultation
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-6 text-sm font-bold border-2 transition-all hover:bg-secondary cursor-pointer" asChild>
                  <Link href="/#products">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Homepage
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Details & Recommended Products Tabs */}
          <div className="mb-20">
            <Tabs defaultValue="features" className="w-full">
              <TabsList className="w-full justify-start bg-transparent border-b border-border rounded-none h-14 p-0 mb-8 overflow-x-auto">
                <TabsTrigger 
                  value="features" 
                  className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-full px-8 font-bold uppercase tracking-wider text-xs cursor-pointer"
                >
                  Application Advantages
                </TabsTrigger>
                <TabsTrigger 
                  value="description" 
                  className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-full px-8 font-bold uppercase tracking-wider text-xs cursor-pointer"
                >
                  System Overview
                </TabsTrigger>
                <TabsTrigger 
                  value="products" 
                  className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-full px-8 font-bold uppercase tracking-wider text-xs cursor-pointer"
                >
                  Recommended Products
                </TabsTrigger>
              </TabsList>

              <TabsContent value="features" className="outline-none focus-visible:ring-0">
                <div className="grid md:grid-cols-3 gap-8">
                  {application.features.map((feature, idx) => (
                    <Card key={idx} className="bg-secondary/20 border-border/50 hover:border-primary/30 transition-all card-glow overflow-hidden group">
                      <CardContent className="p-6">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                          {idx === 0 ? <Zap className="w-5 h-5 text-primary" /> : 
                           idx === 1 ? <Layers className="w-5 h-5 text-primary" /> : 
                           <ShieldCheck className="w-5 h-5 text-primary" />}
                        </div>
                        <h3 className="text-base font-bold text-foreground mb-3 font-mono">{feature.title}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="description" className="outline-none focus-visible:ring-0">
                <div className="prose prose-slate dark:prose-invert max-w-4xl">
                  <p className="text-base text-muted-foreground leading-loose">
                    {application.longDescription}
                  </p>
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-foreground font-mono">Key Highlights</h4>
                      <ul className="space-y-3">
                        {application.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                            <span className="text-xs sm:text-sm text-muted-foreground"><strong>{f.title}</strong>: {f.description}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative aspect-video rounded-xl overflow-hidden border border-border">
                      <Image
                        src={application.image}
                        alt="Application context"
                        fill
                        sizes="(max-width: 768px) 100vw, 450px"
                        quality={70}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="products" className="outline-none focus-visible:ring-0">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {application.recommendedProducts.map((p) => (
                    <div key={p.slug} className="p-6 rounded-xl border border-border bg-card/50 flex flex-col justify-between">
                      <div>
                        <h4 className="font-bold text-white text-base font-mono mb-2">{p.name}</h4>
                        <p className="text-xs text-zinc-400">High-performance display solution matching this industry application.</p>
                      </div>
                      <Link 
                        href={`/products/${p.slug}`}
                        className="inline-flex items-center justify-center mt-6 px-4 py-2 bg-primary text-primary-foreground text-xs font-bold rounded hover:opacity-90 transition-all"
                      >
                        View Product Details &gt;
                      </Link>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Other Applications */}
          {otherApplications.length > 0 && (
            <div className="pt-16 border-t border-border/40">
              <h2 className="text-xl font-bold font-mono text-foreground mb-8">OTHER APPLICATIONS</h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {otherApplications.map((app) => (
                  <Link
                    key={app.slug}
                    href={`/applications/${app.slug}`}
                    className="group relative h-[180px] rounded-xl overflow-hidden border border-border/60 block"
                  >
                    <Image
                      src={app.image}
                      alt={app.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 250px"
                      quality={70}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-sm font-bold text-white font-mono group-hover:text-primary transition-colors line-clamp-1">{app.name}</h3>
                      <p className="text-[10px] text-zinc-400 line-clamp-1 mt-0.5">{app.category}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Quote / Inquiry Form */}
      <ContactSection />
      
      <Footer />
    </div>
  )
}
