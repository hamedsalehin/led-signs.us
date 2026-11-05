export interface Application {
  slug: string
  name: string
  description: string
  longDescription: string
  image: string
  category: string
  specs: { label: string; value: string }[]
  features: { title: string; description: string }[]
  gallery: string[]
  recommendedProducts: { name: string; slug: string }[]
}

export const applications: Application[] = [
  {
    slug: "stage",
    name: "Stage & Live Events LED Display",
    description: "High-performance dynamic video walls designed for concerts, theatrical stages, and large events.",
    longDescription: "Our stage rental LED displays are built for rapid deployment, high durability, and exceptional visual performance. With modular touring cabinets, quick-latch setups, and advanced color rendering, these screens create an immersive visual environment that captivates audiences. Offering both indoor and outdoor rental models, we ensure flicker-free performance under professional broadcast cameras.",
    image: "/images/app-stage.png",
    category: "Stage Production",
    specs: [
      { label: "Recommended Product", value: "Indoor & Outdoor Rental LED" },
      { label: "Refresh Rate", value: "3,840 Hz - 7,680 Hz" },
      { label: "Cabinet Dimensions", value: "500x500mm / 500x1000mm" },
      { label: "IP Rating", value: "IP65 (Outdoor) / IP30 (Indoor)" }
    ],
    features: [
      { title: "Fast-Rigging Quick Locks", description: "Enables rapid assembly and dismantling by a minimal crew, saving valuable stage-setup time." },
      { title: "Camera-Friendly Broadcast", description: "Extremely high refresh rates prevent screen flicker on video cameras and live broadcast feeds." },
      { title: "Curved Screen Angles", description: "Precision side-locks allow creative staging layouts with concave or convex configurations." }
    ],
    gallery: [
      "/images/app-stage.png",
      "/images/news-1.jpg"
    ],
    recommendedProducts: [
      { name: "Outdoor Rental LED Display", slug: "outdoor-rental-led-display" },
      { name: "Indoor Rental LED", slug: "indoor-rental-led" }
    ]
  },
  {
    slug: "sport",
    name: "Stadium & Arena LED Screen",
    description: "High-speed visual displays and digital boards optimized for sports complexes and arenas.",
    longDescription: "Engage fans and maximize commercial sponsorship visibility with our stadium-grade LED displays. Designed to show live actions, close-up replays, scoreboards, and advertising sponsor loops, our sports LED displays deliver ultra-wide viewing angles, high brightness for daylight legibility, and robust waterproofing. Ideal for multi-purpose indoor arenas and grand outdoor stadiums.",
    image: "/images/app-sport.png",
    category: "Sports Arenas",
    specs: [
      { label: "Recommended Product", value: "Stadium Perimeter LED" },
      { label: "Viewing Angle", value: "160° H / 140° V" },
      { label: "Daylight Brightness", value: "6,500+ nits" },
      { label: "Contrast Ratio", value: "5,000:1" }
    ],
    features: [
      { title: "Wide Visibility Span", description: "Ensures every seat in the stadium, from lower tiers to the upper deck, gets a clear, vibrant image." },
      { title: "All-Weather Reliability", description: "Designed to operate through heavy rain, high winds, and freezing temperatures." },
      { title: "Live Streaming Latency", description: "Sub-millisecond processing ensures live actions and scoreboards sync flawlessly with the game." }
    ],
    gallery: [
      "/images/app-sport.png"
    ],
    recommendedProducts: [
      { name: "Stadium Perimeter LED Display", slug: "stadium-perimeter-led" },
      { name: "Outdoor Fixed LED Display", slug: "outdoor-fixed-led-display" }
    ]
  },
  {
    slug: "football-field",
    name: "Football Field Perimeter Banner",
    description: "Impact-resistant side banner displays for football pitches, maximizing sponsor advertising value.",
    longDescription: "Our football field perimeter LED banners are built to the highest safety and performance standards. Soft rubber face masks and cushioned top covers protect athletes from impact injuries, while structural brackets allow adjustable viewing angles (0-90 degrees) for pitch-level television cameras. The high refresh rates ensure advertisements look sharp and clear on slow-motion TV broadcasts.",
    image: "/images/app-football.png",
    category: "Perimeter Advertising",
    specs: [
      { label: "Recommended Product", value: "Stadium Perimeter LED" },
      { label: "Athlete Safety Features", value: "Soft rubber mask & foam padding" },
      { label: "Angle Adjustment", value: "0° to 90° adjustable bracket" },
      { label: "Protection Index", value: "IP65 Water & Dustproof" }
    ],
    features: [
      { title: "Impact Shock Protection", description: "Specially designed soft module masks and rubber top cushions protect running athletes upon collision." },
      { title: "TV Broadcast Optimization", description: "Prevents screen banding, line scanning, or color shifting under high-speed television cameras." },
      { title: "Fast-Access Ground Entry", description: "Individual perimeter cabinets can be quickly unlatched and rotated to allow medical or security access." }
    ],
    gallery: [
      "/images/app-football.png"
    ],
    recommendedProducts: [
      { name: "Stadium Perimeter LED Display", slug: "stadium-perimeter-led" }
    ]
  },
  {
    slug: "church",
    name: "House of Worship & Church LED Display",
    description: "Clear and vibrant visual backdrop solutions to enhance congregation engagement, scripture sharing, and worship services.",
    longDescription: "Ditch traditional projection screens for bright, high-contrast LED displays tailored for sanctuaries. Even in rooms with large stained-glass windows and direct sunlight, our worship LED screens deliver crisp text and vivid video. Use them for scrolling song lyrics, Bible verses, pastor close-ups, and ambient backdrops. Our quiet-cooling design ensures no ambient fan noise disrupts the sanctuary's acoustics.",
    image: "/images/app-church.png",
    category: "House of Worship",
    specs: [
      { label: "Recommended Product", value: "Indoor Fixed or Rental LED" },
      { label: "Pixel Pitch options", value: "P1.8, P2.0, P2.5, P3.0" },
      { label: "Acoustics", value: "Silent fanless design" },
      { label: "Contrast Ratio", value: "4,000:1 for deep blacks" }
    ],
    features: [
      { title: "Direct Sunlight Readability", description: "Powerful LED brightness overrides heavy sanctuary ambient light without fading or washing out." },
      { title: "Silent Operation", description: "Fanless power supplies and passive heatsinks ensure quiet operation during prayers and sermon pauses." },
      { title: "Front-Maintenance Tiles", description: "Enables wall-mounting directly onto structural backdrops without needing a rear service corridor." }
    ],
    gallery: [
      "/images/app-church.png"
    ],
    recommendedProducts: [
      { name: "Indoor Fixed LED Display", slug: "indoor-led-display" },
      { name: "Indoor Rental LED", slug: "indoor-rental-led" }
    ]
  },
  {
    slug: "exhibition",
    name: "Exhibition & Trade Show LED Poster",
    description: "Slim, mobile digital poster screens designed to maximize audience attention at trade show booths.",
    longDescription: "Stand out in busy exhibition halls with Nano Signs digital LED posters. Far superior to static roll-up banners, these sleek, plug-and-play digital displays play high-definition videos, product slideshows, and interactive promotions. Equipped with caster wheels and a kickstand, a single person can roll it in, plug it in, and manage content wirelessly from a smartphone.",
    image: "/images/app-exhibition.png",
    category: "Trade Shows",
    specs: [
      { label: "Recommended Product", value: "Digital LED Poster / LED Pillar" },
      { label: "Setup Time", value: "Under 5 minutes (Plug & Play)" },
      { label: "Media Upload", value: "WiFi, USB, LAN & Cloud App" },
      { label: "Thickness", value: "Slim 35mm profile" }
    ],
    features: [
      { title: "True Plug-and-Play Setup", description: "Features a built-in media player. No external send-cards, computers, or config software required." },
      { title: "Mobile & Freestanding", description: "Comes with a heavy duty fold-out kickstand and built-in wheels for quick positioning and moving." },
      { title: "Multi-Screen Splicing", description: "Connect up to 6 posters together seamlessly to form one large 16:9 advertising video wall." }
    ],
    gallery: [
      "/images/app-exhibition.png",
      "/images/showcase-4.jpg"
    ],
    recommendedProducts: [
      { name: "Digital LED Poster", slug: "digital-led-poster" },
      { name: "LED Pillar Display", slug: "led-pillar-display" }
    ]
  },
  {
    slug: "specialty-store",
    name: "Specialty Retail Store Visual Screen",
    description: "High-end visual retail displays to draw foot traffic and highlight luxury products.",
    longDescription: "Transform store facades and window displays into digital attractions. Our retail LED displays are optimized for indoor shopping mall environments, featuring ultra-fine pixel pitches, high color accuracy, and dynamic brightness control. From shop window transparent screens that let daylight pass through to fine-pitch video pillars in luxury boutiques, we build custom solutions that increase dwell time and drive sales.",
    image: "/images/app-store.png",
    category: "Retail Spaces",
    specs: [
      { label: "Recommended Product", value: "Shop Window LED / Transparent LED" },
      { label: "Visual Depth", value: "Bezel-free seamless splicing" },
      { label: "Color Accuracy", value: "True-to-life DCI-P3 gamut" },
      { label: "Thickness", value: "Ultra-thin wall integration" }
    ],
    features: [
      { title: "Visual Window Transparency", description: "Maintains 75%+ window visibility, allowing natural sunlight to enter while displaying eye-catching store graphics." },
      { title: "High Contrast Ratio", description: "Ensures luxury clothing details, jewelry, and branding colors stand out with extreme clarity." },
      { title: "Cloud Display Control", description: "Manage promotions, pricing, and video loops across multiple store branches remotely from a central panel." }
    ],
    gallery: [
      "/images/app-store.png"
    ],
    recommendedProducts: [
      { name: "Shop Window LED Display", slug: "shop-window-led" },
      { name: "Transparent LED Screen", slug: "transparent-led-screen" },
      { name: "Digital Shelf LED Display", slug: "digital-shelf-led-display" }
    ]
  },
  {
    slug: "conference",
    name: "Corporate Conference Room LED Video Wall",
    description: "Seamless fine-pitch LED display walls engineered for corporate boardrooms and collaborative workspaces.",
    longDescription: "Replace unreliable conference projectors and multi-bezel LCD grids with a single, seamless, high-resolution LED video wall. Our corporate conference LED displays offer flawless alignment, quiet operation, and built-in screen-sharing compatibility. Ideal for video conferences, large board meetings, financial reporting, and interactive employee presentations, they provide brilliant colors even in brightly lit offices.",
    image: "/images/app-conference.png",
    category: "Corporate Offices",
    specs: [
      { label: "Recommended Product", value: "Fine Pitch Indoor LED" },
      { label: "Supported Resolution", value: "Full HD, 4K & Ultra-wide formats" },
      { label: "Cabinet Thickness", value: "Super-slim 28mm depth" },
      { label: "Control Systems", value: "Compatible with Crestron, Extron, etc." }
    ],
    features: [
      { title: "Zero Bezel Alignment", description: "Combines modules seamlessly, ensuring no grid lines split spreadsheets, documents, or video call faces." },
      { title: "Integrated Screen Share", description: "Direct input connection for multiple laptops and HDMI inputs for effortless multi-view presentations." },
      { title: "Low Blue Light Output", description: "Eye-comfort technology prevents eye strain and fatigue during long, multi-hour boardroom meetings." }
    ],
    gallery: [
      "/images/app-conference.png"
    ],
    recommendedProducts: [
      { name: "Indoor Fixed LED Display", slug: "indoor-led-display" }
    ]
  }
]

export function getApplicationBySlug(slug: string): Application | undefined {
  return applications.find((app) => app.slug === slug)
}
