"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const gridItems = [
  {
    id: 1,
    image: "/img/Bed_417x425_Jan24.webp",
    label: "Bedroom",
  },
  {
    id: 2,
    image: "/img/BossTable_417x425_Jan24.webp",
    label: "Boss Table",
  },
  {
    id: 3,
    image: "/img/IndustrialChair_417x425_Jan24.webp",
    label: "Industrial Chair",
  },
  {
    id: 4,
    image: "/img/Dining_417x425_Jan24.webp",
    label: "Dining",
  },
  {
    id: 5,
    image: "/img/Sofa_417x425_Jan24.webp",
    label: "Living room",
  },
  {
    id: 6,
    image: "/img/Kitchen_417x425_Jan24.webp",
    label: "Kitchen",
  },
]

export default function CreationsWithPurpose() {
  return (
    <section className="py-12 sm:py-16 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/3 shrink-0 text-left lg:text-right lg:pr-4"
          >
            <p className="lg:hidden text-xs font-semibold uppercase tracking-[0.2em] text-[#faba00] mb-2">
              Shop by room
            </p>
            <h2 className="font-bold text-[#222222] leading-[1.1] mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl tracking-tight">
              Creations with <br className="hidden sm:block" /> purpose
            </h2>
            <p className="text-gray-500 mb-5 sm:mb-6 text-base sm:text-lg md:text-xl max-w-md lg:max-w-none lg:ml-auto leading-snug">
              Many choices based on your space
            </p>
            <div className="flex justify-start lg:justify-end">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 min-h-12 px-1 font-medium text-[#222222] rounded-lg hover:text-[#faba00] active:bg-[#faba00]/10 transition-colors duration-300 text-lg sm:text-xl touch-manipulation"
              >
                Explore <span className="border-b-2 border-[#faba00]">Now</span>
                <ChevronRight className="size-5 text-[#faba00] shrink-0 lg:hidden" aria-hidden />
              </Link>
            </div>
          </motion.div>

          <div className="flex-1 w-full min-w-0">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex gap-4 overflow-x-auto pb-3 -mx-4 px-4 snap-x snap-mandatory [scrollbar-width:none] lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-3 xl:gap-4 lg:overflow-visible lg:pb-0 lg:px-0 [&::-webkit-scrollbar]:hidden"
            >
              {gridItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className="snap-start shrink-0 w-[min(82vw,17.5rem)] h-[13.5rem] sm:h-[15rem] lg:w-auto lg:h-auto lg:aspect-square lg:snap-none"
                >
                  <Link
                    href="/projects"
                    className="relative block h-full w-full overflow-hidden rounded-2xl bg-neutral-100 shadow-md ring-1 ring-black/[0.06] active:scale-[0.98] transition-transform lg:rounded-sm lg:shadow-none lg:ring-0 group"
                  >
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      className="object-cover transition-transform duration-500 group-active:scale-105 lg:group-hover:scale-105"
                    />
                    {/* Mobile: always-readable title on gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent lg:hidden" />
                    <span className="absolute bottom-3 left-3 right-3 z-10 text-white font-semibold text-base leading-snug drop-shadow-md lg:hidden">
                      {item.label}
                    </span>
                    {/* Desktop: hover reveal */}
                    <div className="hidden lg:block absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                    <div className="hidden lg:flex absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none">
                      <div className="absolute inset-10 border border-white/90" />
                      <span className="relative z-10 text-white font-semibold text-xl xl:text-2xl tracking-wide text-center px-2">
                        {item.label}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            <p className="mt-2 text-center text-xs text-gray-400 lg:hidden">
              Swipe sideways to browse categories
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
