"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const newArrivals = [
  {
    id: 1,
    image: "/img/HATIL Recliner Chair Martagon -101.webp",
    label: "Martagon-101",
  },
  {
    id: 2,
    image: "/img/Toadflax-223_2.webp",
    label: "Toadflax-223 (Multipurpose Bed) Set",
  },
  {
    id: 3,
    image: "/img/Rockrose-221.webp",
    label: "Rockrose-221",
  },
]

export default function NewArrivals() {
  return (
    <section className="py-12 sm:py-16 bg-[#fafafa] lg:bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-6 sm:mb-8"
        >
          <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <ArrowRight size={20} className="text-[#faba00] shrink-0" aria-hidden />
              <span className="text-xl sm:text-2xl font-bold text-[#222222]">New Arrivals</span>
            </div>
            <span className="text-sm sm:text-lg text-gray-500 pl-7 sm:pl-0">
              What&apos;s trending this season
            </span>
          </div>
        </motion.div>

        {/* Mobile / tablet: horizontal cards · lg+: grid */}
        <div className="flex gap-4 overflow-x-auto pb-3 -mx-4 px-4 snap-x snap-mandatory [scrollbar-width:none] lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:pb-0 lg:px-0 [&::-webkit-scrollbar]:hidden">
          {newArrivals.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="snap-start shrink-0 w-[min(88vw,22rem)] lg:w-auto lg:snap-none flex flex-col"
            >
              <Link href="/projects" className="group flex flex-col h-full rounded-2xl bg-white p-3 shadow-md ring-1 ring-black/[0.06] lg:rounded-none lg:bg-transparent lg:p-0 lg:shadow-none lg:ring-0 touch-manipulation">
                <div className="relative w-full overflow-hidden rounded-xl bg-[#f5f5f5] aspect-[4/3] lg:rounded-sm">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover transition-transform duration-500 group-active:scale-[1.02] lg:group-hover:scale-105"
                  />
                </div>
                <p className="mt-3 text-sm sm:text-base text-[#222] font-medium leading-snug group-hover:text-[#faba00] transition-colors px-1">
                  {item.label}
                </p>
                <span className="mt-2 text-xs font-semibold uppercase tracking-wide text-[#faba00] lg:hidden">
                  View in catalogue →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="mt-2 text-center text-xs text-gray-400 lg:hidden">
          Swipe for more new pieces
        </p>
      </div>
    </section>
  )
}
