"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
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
                    className={`flex flex-col gap-6 min-w-44 sm:min-w-50 ${
                      colIndex < data.length - 1 ? "border-r border-gray-100 pr-8" : ""
                    }`}
                  >
                    {col.map((cat) => (
                      <div key={cat.label}>
                        <Link
                          href={cat.href}
                          className="block font-semibold text-sm text-gray-900 hover:text-[#faba00] transition-colors mb-2"
                        >
                          {cat.label}
                        </Link>
                        {cat.items.length > 0 && (
                          <ul className="space-y-1.5">
                            {cat.items.map((item) => (
                              <li key={item}>
                                <Link
                                  href={`${cat.href}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                                  className="text-sm text-gray-600 hover:text-[#faba00] transition-colors block"
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
            className="fixed inset-0 z-60 bg-black/50 backdrop-blur-[2px] lg:hidden"
            aria-hidden
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 280 }}
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
            className="fixed top-0 right-0 bottom-0 z-70 flex w-[min(100%,22rem)] flex-col border-l border-gray-100 bg-white shadow-2xl lg:hidden pr-[max(0px,env(safe-area-inset-right))] pt-[env(safe-area-inset-top)]"
          >
            {/* Drawer header */}
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-gray-100 px-4 py-3 sm:px-5 sm:py-4">
              <Link href="/" onClick={onClose} className="min-w-0 shrink">
                <Image src="/img/logo.png" alt="Woodrox" width={130} height={42} className="h-8 w-auto sm:h-9" />
              </Link>
              <button
                type="button"
                onClick={onClose}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-gray-100 active:bg-gray-200"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Nav — scrollable */}
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain py-2">
              <p className="px-4 pb-2 text-[11px] font-semibold uppercase tracking-wider text-gray-400 sm:px-5">
                Shop by category
              </p>
              {navItems.map((item) => (
                <div key={item.key} className="border-b border-gray-100 last:border-b-0">
                  <button
                    type="button"
                    onClick={() => toggleSection(item.key)}
                    aria-expanded={expandedSections.has(item.key)}
                    className="flex min-h-12 w-full items-center justify-between gap-2 px-4 py-3.5 text-left text-[15px] font-medium text-gray-900 transition-colors hover:bg-gray-50 active:bg-gray-100 sm:px-5"
                  >
                    <span>{item.label}</span>
                    <motion.span
                      animate={{ rotate: expandedSections.has(item.key) ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {expandedSections.has(item.key) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden bg-[#fafafa]"
                      >
                        <div className="space-y-0.5 px-3 py-2 sm:px-4">
                          {item.data.flat().map((cat) => (
                            <Link
                              key={cat.label}
                              href={cat.href}
                              onClick={onClose}
                              className="flex min-h-11 items-center rounded-lg px-3 text-sm text-gray-700 transition-colors hover:bg-white hover:text-[#faba00] active:bg-white"
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

              <div className="mt-4 border-t border-gray-100 px-4 pt-4 sm:px-5">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                  More
                </p>
                <div className="space-y-1">
                  {moreMenuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className="flex min-h-11 items-center rounded-lg px-3 text-[15px] font-medium text-gray-800 transition-colors hover:bg-gray-50 hover:text-[#faba00] active:bg-gray-100"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Drawer footer — contact */}
            <div className="shrink-0 space-y-3 border-t border-gray-100 bg-[#fafafa] px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-5">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">Contact</p>
              <a
                href="tel:+1234567890"
                className="flex min-h-11 items-center gap-3 rounded-xl bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-sm ring-1 ring-gray-100 transition-colors active:bg-gray-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#faba00]/15 text-[#faba00]">
                  <Phone className="h-4 w-4" />
                </span>
                <span className="min-w-0">+1 (234) 567-890</span>
              </a>
              <a
                href="mailto:info@woodrox.com"
                className="flex min-h-11 items-center gap-3 rounded-xl bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-sm ring-1 ring-gray-100 transition-colors active:bg-gray-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#faba00]/15 text-[#faba00]">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="min-w-0 break-all">info@woodrox.com</span>
              </a>
              <p className="flex items-start gap-2 text-xs leading-relaxed text-gray-500">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#faba00]" />
                <span>Dhaka, Bangladesh</span>
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// ── Main Header Component ───────────────────────────────────────────────────────
export default function Header() {
  const pathname = usePathname()
  const isHome = pathname === "/"
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
      setIsScrolled(currentY > 1)
      if (isMobileMenuOpen) {
        setIsHidden(false)
        lastScrollY.current = currentY
        return
      }
      if (currentY > lastScrollY.current && currentY > 80) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }
      lastScrollY.current = currentY
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMobileMenuOpen])

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

  useEffect(() => {
    if (!isMobileMenuOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previous
    }
  }, [isMobileMenuOpen])

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

  // Solid white header everywhere except home hero at the very top
  const isSolidHeader = isScrolled || !isHome
  const showTopBar = isHome && !isScrolled

  return (
    <>
      <header
        ref={headerRef}
        className={`site-header fixed top-0 left-0 right-0 z-50 bg-white transition-[transform,box-shadow,border-color] duration-300 ${
          isSolidHeader ? "shadow-sm border-b border-gray-100" : "border-b border-transparent"
        } ${isHidden ? "-translate-y-full" : "translate-y-0"}`}
      >
        {/* Top bar — home hero only, desktop/tablet */}
        <div
          className={`hidden md:block text-xs transition-all duration-300 ${
            showTopBar ? "bg-gray-900 text-gray-300" : "hidden"
          }`}
        >
          <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex min-w-0 flex-1 items-center gap-4 lg:gap-6">
              <a
                href="tel:+1234567890"
                className="flex min-h-9 min-w-0 items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">+1 (234) 567-890</span>
              </a>
              <a
                href="mailto:info@woodrox.com"
                className="hidden min-h-9 items-center gap-1.5 hover:text-white transition-colors sm:flex"
              >
                <Mail className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">info@woodrox.com</span>
              </a>
            </div>
            <div className="flex max-w-[45%] items-center justify-end gap-1.5 text-right sm:max-w-none">
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>

        {/* Mobile: compact contact strip when scrolled (optional quick actions) */}
        <div
          className={`md:hidden ${isScrolled ? "flex" : "hidden"} border-b border-gray-100 bg-white/95 backdrop-blur-sm`}
        >
          <div className="mx-auto flex max-w-7xl items-stretch justify-center gap-1 px-2 py-1.5 text-[11px] text-[#222222]">
            <a
              href="tel:+1234567890"
              className="flex flex-1 items-center justify-center gap-1 rounded-lg py-2 font-medium text-[#222222] transition-colors hover:bg-[#faba00]/10 hover:text-[#c79200] active:bg-gray-50"
            >
              <Phone className="h-3.5 w-3.5 text-[#faba00]" />
              Call
            </a>
            <a
              href="mailto:info@woodrox.com"
              className="flex flex-1 items-center justify-center gap-1 rounded-lg py-2 font-medium text-[#222222] transition-colors hover:bg-[#faba00]/10 hover:text-[#c79200] active:bg-gray-50"
            >
              <Mail className="h-3.5 w-3.5 text-[#faba00]" />
              Email
            </a>
          </div>
        </div>

        {/* Main nav */}
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between sm:h-16">
            {/* Logo */}
            <Link href="/" className="shrink-0 rounded-md outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#faba00]">
              <Image
                src="/img/logo.png"
                alt="Woodrox"
                width={140}
                height={44}
                className="h-8 w-auto sm:h-9"
              />
            </Link>

            {/* Desktop nav — always black text on white header */}
            <div className="hidden items-center text-black lg:flex" onMouseLeave={closeMega}>
              {navItems.map((item) => (
                <div key={item.key} className="relative" onMouseEnter={() => openMega(item.key)}>
                  <button
                    type="button"
                    className={
                      activeMega === item.key
                        ? "header-nav-link is-active flex min-h-10 items-center gap-1 px-2.5 py-2 text-sm font-semibold transition-colors xl:px-3"
                        : "header-nav-link flex min-h-10 items-center gap-1 px-2.5 py-2 text-sm font-semibold transition-colors hover:text-[#faba00] xl:px-3"
                    }
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${
                        activeMega === item.key ? "rotate-180 text-[#faba00]" : "text-black"
                      }`}
                    />
                  </button>

                  {activeMega === item.key && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-[#faba00]" />
                  )}
                </div>
              ))}

              <div className="relative group">
                <button
                  type="button"
                  className="header-nav-link flex min-h-10 items-center gap-1 px-2.5 py-2 text-sm font-semibold transition-colors hover:text-[#faba00] xl:px-3"
                >
                  More
                  <ChevronDown className="h-3.5 w-3.5 shrink-0 text-black transition-transform duration-200 group-hover:rotate-180 group-hover:text-[#faba00]" />
                </button>
                <div className="invisible absolute top-full right-0 z-50 pt-1 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                  <div className="w-48 rounded-lg border border-gray-100 bg-white text-black py-1.5 shadow-xl">
                    {moreMenuItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-[#faba00]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile menu */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
              className="flex h-11 w-11 items-center justify-center rounded-full text-black transition-colors hover:bg-gray-100 active:bg-gray-200 lg:hidden"
            >
              <Menu className="h-6 w-6 text-black" strokeWidth={2.25} />
            </button>
          </div>
        </nav>

        {/* Centered mega panel */}
        <div
          className="absolute left-1/2 z-40 w-full max-w-7xl -translate-x-1/2 px-4 sm:px-6 lg:px-8"
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
