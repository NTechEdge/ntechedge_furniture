"use client"

import { motion } from "framer-motion"
import Image from "next/image"
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
    <section className="py-16 bg-white">
      <div className=" px-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-4 mb-8"
        >
          <ArrowRight size={20} className="text-[#222222] shrink-0" />
          <span className="text-2xl font-semibold text-[#222222]">New Arrivals</span>
          <span className="text-2xl text-gray-300">What&apos;s Trending</span>
        </motion.div>

        {/* ── Three equal-width image cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {newArrivals.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="flex flex-col group cursor-pointer"
            >
              {/* image — 4:3 landscape ratio matching screenshot */}
              <div className="relative w-full overflow-hidden bg-[#f5f5f5]" style={{ aspectRatio: "4/3" }}>
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* label */}
              <p className="mt-3 text-sm text-[#444444] text-center group-hover:text-[#faba00] transition-colors duration-300">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
