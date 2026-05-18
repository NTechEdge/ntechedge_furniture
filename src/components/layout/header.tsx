"use client"

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect, useCallback } from "react"
import Image from "next/image"
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Phone,
  Mail,
  MapPin
} from "lucide-react"

// ── Enhanced Mega Menu Data with Featured Items ────────────────────────────────
interface MenuItem {
  label: string
  href: string
  hasArrow: boolean
  items: string[]
  featured?: boolean
  image?: string
  description?: string
}

type MegaColumn = MenuItem[]

const livingRoomMega: MegaColumn[] = [
  [
    {
      label: "Sofa Set",
      href: "/living-room/sofa-set",
      hasArrow: true,
      items: [
        "Fabric Sofa", "Wooden Sofa", "L-Shaped Sofa", "Leather Sofa",
        "Rexin Sofa", "Sofa-Bed", "3-Seater Sofa", "2-Seater Sofa",
        "Single Seater", "Modular Sofa", "Sofa with Divan",
        "Multipurpose Sofa", "Storage Sofa", "Ottoman",
      ],
      featured: true,
      description: "Premium comfort for your living space",
    },
    {
      label: "Cushion",
      href: "/living-room/cushion",
      hasArrow: false,
      items: [],
    },
  ],
  [
    {
      label: "Center Table",
      href: "/living-room/center-table",
      hasArrow: true,
      items: [
        "Glass Top", "Wooden Top", "With Storage", "Corner Table",
        "Modular", "Non-Lacquer", "Nested Table",
      ],
    },
    {
      label: "TV Cabinet",
      href: "/living-room/tv-cabinet",
      hasArrow: true,
      items: ["Hanging Unit", "Low Height", "Modular"],
      featured: true,
    },
    {
      label: "Divan",
      href: "/living-room/divan",
      hasArrow: true,
      items: ["Fabric", "Wooden", "Modular"],
    },
  ],
  [
    {
      label: "Shoe Rack",
      href: "/living-room/shoe-rack",
      hasArrow: true,
      items: ["Storage", "With Mirror"],
    },
    {
      label: "Open Shelves",
      href: "/living-room/open-shelves",
      hasArrow: true,
      items: ["Book Shelves", "Corner Shelves", "Display Rack"],
    },
    {
      label: "Chair",
      href: "/living-room/chair",
      hasArrow: true,
      items: ["Rocking", "Easy", "Accent", "Bar Stool", "Foot Stool"],
    },
  ],
]

const bedroomMega: MegaColumn[] = [
  [
    {
      label: "Bed",
      href: "/bedroom/bed",
      hasArrow: true,
      items: [
        "King Size", "Queen Size", "Semi Double", "With Storage",
        "Low Height", "Sofa Cum Bed", "Folding", "Kid's Bunk",
      ],
      featured: true,
      description: "Rest easy with our premium collection",
    },
    {
      label: "Wardrobe",
      href: "/bedroom/wardrobe",
      hasArrow: true,
      items: [
        "With Mirror", "Slide Door", "Modular", "Non-Lacquer 2-Door",
        "Non-Lacquer 3-Door", "Non-Lacquer 4-Door",
      ],
    },
  ],
  [
    {
      label: "Dressing Table",
      href: "/bedroom/dressing-table",
      hasArrow: true,
      items: ["Non-Lacquer", "With Storage", "Seater"],
    },
    {
      label: "Bed-Side Table",
      href: "/bedroom/bed-side-table",
      hasArrow: true,
      items: ["Low Height", "Non-Lacquer"],
    },
    {
      label: "Mattress",
      href: "/bedroom/mattress",
      hasArrow: true,
      items: ["Toshok", "King Size", "Queen Size", "Semi Double"],
      featured: true,
    },
  ],
]

const diningMega: MegaColumn[] = [
  [
    {
      label: "Dining Sets",
      href: "/dining",
      hasArrow: true,
      items: [
        "8-Seater", "6-Seater", "4-Seater", "Wooden Top",
        "Glass Top", "Wall Hanging", "Round-Shaped", "Extendable",
      ],
      featured: true,
      description: "Gather around in style",
    },
    {
      label: "Dining Chair",
      href: "/dining/chair",
      hasArrow: true,
      items: ["Wooden", "Fabric", "Bench", "Step Ladder-Chair"],
    },
  ],
  [
    {
      label: "Showcase",
      href: "/dining/showcase",
      hasArrow: false,
      items: [],
    },
    {
      label: "Mini Cabinet",
      href: "/dining/mini-cabinet",
      hasArrow: true,
      items: ["Bar Cabinet"],
    },
    {
      label: "Tea Trolley",
      href: "/dining/tea-trolley",
      hasArrow: true,
      items: ["Wooden", "Serving Tray"],
    },
  ],
]

const kitchenMega: MegaColumn[] = [[{
  label: "Modular Kitchen",
  href: "/kitchen/modular-kitchen",
  hasArrow: false,
  items: [],
  featured: true,
  description: "Smart solutions for modern kitchens",
}]]

const kidsRoomMega: MegaColumn[] = [
  [
    {
      label: "Kid's Bunk Bed",
      href: "/kids-room/bunk-bed",
      hasArrow: false,
      items: [],
      featured: true,
    },
    {
      label: "Study Table",
      href: "/kids-room/study-table",
      hasArrow: true,
      items: ["Kid's Study Table"],
    },
  ],
]

const smartfitMega: MegaColumn[] = [[{
  label: "SmartFit Collection",
  href: "/smartfit",
  hasArrow: false,
  items: [],
  featured: true,
  description: "Innovative space-saving designs",
}]]

const institutionalMega: MegaColumn[] = [[{
  label: "Institutional",
  href: "/institutional",
  hasArrow: true,
  items: ["Hotel & Restaurant", "Hospital", "Academic", "Auditorium"],
}]]

const doorMega: MegaColumn[] = [[{
  label: "Doors",
  href: "/door",
  hasArrow: true,
  items: [
    "Solid Wooden", "Solid Engineered", "Wooden Glass", "Double-Leaf",
    "Plain Veneered", "Decorative Veneered", "Knock-Down Frame",
  ],
  featured: true,
  description: "Crafted entryways for every home",
}]]

const interiorMega: MegaColumn[] = [[{
  label: "Interior Services",
  href: "/interior",
  hasArrow: true,
  items: ["Resident", "Office"],
  featured: true,
  description: "Transform your space with expertise",
}]]

const officeMega: MegaColumn[] = [
  [
    {
      label: "Sofa",
      href: "/office/sofa",
      hasArrow: true,
      items: ["Fabric", "Wooden", "Rexin", "2-Seater", "Single Seater"],
    },
    {
      label: "Director Table",
      href: "/office/director-table",
      hasArrow: true,
      items: ["Lacquer", "Non-Lacquer", "Wooden-Top", "Glass-Top"],
      featured: true,
    },
  ],
  [
    {
      label: "Conference Table",
      href: "/office/conference-table",
      hasArrow: true,
      items: ["Lacquer", "Non-Lacquer", "Modular"],
    },
    {
      label: "Swivel Chair",
      href: "/office/swivel-chair",
      hasArrow: true,
      items: ["Chief Executive", "Executive", "Mid-Level"],
    },
    {
      label: "Work Station",
      href: "/office/work-station",
      hasArrow: true,
      items: ["Working Table"],
    },
  ],
]

// Navigation configuration
const navItems = [
  { key: "living-room", label: "Living Room", data: livingRoomMega },
  { key: "bedroom", label: "Bedroom", data: bedroomMega },
  { key: "dining", label: "Dining", data: diningMega },
  { key: "kitchen", label: "Kitchen", data: kitchenMega },
  { key: "kids-room", label: "Kid's Room", data: kidsRoomMega },
  { key: "smartfit", label: "SmartFit", data: smartfitMega },
  { key: "institutional", label: "Institutional", data: institutionalMega },
  { key: "door", label: "Door", data: doorMega },
  { key: "interior", label: "Interior", data: interiorMega },
  { key: "office", label: "Office", data: officeMega },
]

const moreMenuItems = [
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

// ── Premium Mega Panel Component ────────────────────────────────────────────────
function MegaPanel({ data, isOpen }: { data: MegaColumn[]; isOpen: boolean }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.15 }}
          className="pt-2"
        >
          <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-6">
              <div className="flex gap-8">
                {data.map((col, colIndex) => (
                  <div
                    key={colIndex}
                    className={`flex flex-col gap-6 min-w-45 ${
                      colIndex < data.length - 1 ? "border-r border-gray-100 pr-8" : ""
                    }`}
                  >
                    {col.map((cat) => (
                      <div key={cat.label}>
                        <Link
                          href={cat.href}
                          className="block font-semibold text-sm text-gray-900 hover:text-amber-600 transition-colors mb-2"
                        >
                          {cat.label}
                        </Link>
                        {cat.items.length > 0 && (
                          <ul className="space-y-1.5">
                            {cat.items.map((item) => (
                              <li key={item}>
                                <Link
                                  href={`${cat.href}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                                  className="text-sm text-gray-600 hover:text-amber-600 transition-colors block"
                                >
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ── Mobile Navigation Component ───────────────────────────────────────────────
function MobileNav({
  isOpen,
  onClose
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())

  const toggleSection = useCallback((key: string) => {
    setExpandedSections(prev => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }, [])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-60 lg:hidden"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="fixed top-0 right-0 bottom-0 w-80 bg-white z-70 lg:hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <Image src="/img/logo.png" alt="Woodrox" width={120} height={40} className="h-8 w-auto" />
              <button onClick={onClose} className="p-1.5 hover:bg-gray-100 rounded-md transition-colors">
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Nav Items */}
            <div className="flex-1 overflow-y-auto py-4">
              {navItems.map((item) => (
                <div key={item.key} className="border-b border-gray-50">
                  <button
                    onClick={() => toggleSection(item.key)}
                    className="w-full flex items-center justify-between px-5 py-3.5 text-sm font-medium text-gray-800 hover:text-amber-600 transition-colors"
                  >
                    {item.label}
                    <motion.div animate={{ rotate: expandedSections.has(item.key) ? 90 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {expandedSections.has(item.key) && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden bg-gray-50"
                      >
                        <div className="px-5 py-3 space-y-1">
                          {item.data.flat().map((cat) => (
                            <Link
                              key={cat.label}
                              href={cat.href}
                              onClick={onClose}
                              className="block py-2 text-sm text-gray-600 hover:text-amber-600 transition-colors"
                            >
                              {cat.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div className="px-5 pt-4 space-y-1">
                {moreMenuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="block py-2.5 text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="px-5 py-4 border-t border-gray-100 space-y-2">
              <a href="tel:+1234567890" className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="w-4 h-4 text-amber-600" />
                +1 (234) 567-890
              </a>
              <a href="mailto:info@woodrox.com" className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="w-4 h-4 text-amber-600" />
                info@woodrox.com
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// ── Main Header Component ───────────────────────────────────────────────────────
export default function Header() {
  const [activeMega, setActiveMega] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const megaTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const headerRef = useRef<HTMLElement>(null)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      // bg turns white as soon as user starts scrolling
      setIsScrolled(currentY > 1)
      // hide on scroll down, show on scroll up (after 80px)
      if (currentY > lastScrollY.current && currentY > 80) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }
      lastScrollY.current = currentY
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveMega(null)
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const openMega = useCallback((key: string) => {
    if (megaTimeout.current) clearTimeout(megaTimeout.current)
    setActiveMega(key)
  }, [])

  const closeMega = useCallback(() => {
    megaTimeout.current = setTimeout(() => setActiveMega(null), 300)
  }, [])

  useEffect(() => () => {
    if (megaTimeout.current) clearTimeout(megaTimeout.current)
  }, [])

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-sm border-b border-gray-100" : "bg-transparent"
        } ${isHidden ? "-translate-y-full" : "translate-y-0"}`}
      >
        {/* Top bar */}
        <div className={`text-xs transition-all duration-300 ${isScrolled ? "hidden" : "bg-gray-900 text-gray-300"}`}>
          <div className="w-10/12 mx-auto px-4 flex justify-between items-center h-9">
            <div className="flex items-center gap-5">
              <a href="tel:+1234567890" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Phone className="w-3 h-3" />
                +1 (234) 567-890
              </a>
              <a href="mailto:info@woodrox.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Mail className="w-3 h-3" />
                info@woodrox.com
              </a>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>
        {/* Main nav */}
        <nav className="w-10/12 mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src="/img/logo.png"
                alt="Woodrox"
                width={140}
                height={44}
                className="h-9 w-auto"
              />
            </Link>

            {/* Desktop nav */}
            <div
              className="hidden lg:flex items-center"
              onMouseLeave={closeMega}
            >
              {navItems.map((item) => (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => openMega(item.key)}
                >
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
                      activeMega === item.key
                        ? "text-amber-400"
                        : isScrolled
                          ? "text-gray-700 hover:text-amber-600"
                          : "text-white hover:text-amber-400"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeMega === item.key ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Active indicator */}
                  {activeMega === item.key && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-500 rounded-full" />
                  )}
                </div>
              ))}

              {/* More dropdown */}
              <div className="relative group">
                <button className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${isScrolled ? "text-gray-700 hover:text-amber-600" : "text-white hover:text-amber-400"}`}>
                  More
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute top-full right-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-1.5 w-48">
                    {moreMenuItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:text-amber-600 hover:bg-gray-50 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`lg:hidden p-2 transition-colors ${isScrolled ? "text-gray-700 hover:text-amber-600" : "text-white hover:text-amber-400"}`}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>

        {/* Centered mega panel — rendered once, below the full header */}
        <div
          className="absolute left-1/2 -translate-x-1/2 z-50 w-10/12"
          onMouseEnter={() => activeMega && openMega(activeMega)}
          onMouseLeave={closeMega}
        >
          {navItems.map((item) => (
            <div
              key={item.key}
              className={`transition-all duration-150 ${
                activeMega === item.key
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none absolute top-0 left-0"
              }`}
            >
              <MegaPanel data={item.data} isOpen={activeMega === item.key} />
            </div>
          ))}
        </div>


      </header>

      <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}
