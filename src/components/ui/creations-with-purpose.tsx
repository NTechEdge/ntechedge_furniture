"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const gridItems = [
  {
    id: 1,
    image: "/img/Bed_417x425_Jan24.webp",
    label: "Bedroom",
    row: "top",
  },
  {
    id: 2,
    image: "/img/BossTable_417x425_Jan24.webp",
    label: "Boss Table",
    row: "top",
  },
  {
    id: 3,
    image: "/img/IndustrialChair_417x425_Jan24.webp",
    label: "Industrial Chair",
    row: "top",
  },
  {
    id: 4,
    image: "/img/Dining_417x425_Jan24.webp",
    label: "Dining",
    row: "bottom",
  },
  {
    id: 5,
    image: "/img/Sofa_417x425_Jan24.webp",
    label: "Living room",
    row: "bottom",
  },
  {
    id: 6,
    image: "/img/Kitchen_417x425_Jan24.webp",
    label: "Kitchen",
    row: "bottom",
  },
]

export default function CreationsWithPurpose() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className=" px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* ── Left: text ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 shrink-0 text-right"
          >
            <h2
              className="font-bold text-[#222222] leading-tight mb-4"
              style={{ fontSize: '4em' }}
            >
              Creations with <br /> purpose
            </h2>
            <p
              className="text-gray-500 mb-6"
              style={{ fontSize: '2em' }}
            >
              Many choices based on your space
            </p>
            <div className="flex justify-end">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1 font-medium text-[#222222] pb-0.5 hover:text-[#faba00] hover:border-[#faba00] transition-colors duration-300"
              style={{ fontSize: '1.75em' }}
            >
              Explore <span className="border-b border-b-gray-400">Now</span>
            </Link>
            </div>
          </motion.div>

          {/* ── Right: 2-row grid ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1 grid grid-cols-3 grid-rows-2 gap-3"
          >
            {gridItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative group overflow-hidden rounded-sm aspect-square cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* dark overlay — fade-in on hover */}
                <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* inset white border box + label */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  {/* white inset border — 16px inset from each edge */}
                  <div className="absolute inset-10 border border-white pointer-events-none" />

                  {/* label text */}
                  <span className="relative z-10 text-white font-semibold text-2xl tracking-wide">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
