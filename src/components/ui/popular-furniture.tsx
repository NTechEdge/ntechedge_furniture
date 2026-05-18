"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, ChevronsRight } from "lucide-react"

const items = [
  { id: 1, title: "Cushion",              image: "/img/Freesia-113.webp" },
  { id: 2, title: "Bedroom",              image: "/img/_2LZ1987_2.webp" },
  { id: 3, title: "Bed",                  image: "/img/02.Getafe-207.jpg" },
  { id: 4, title: "King Size Bed",        image: "/img/0001256_king-size-bed_450.jpeg" },
  { id: 5, title: "Solid Wooden Door",    image: "/img/9.webp" },
  { id: 6, title: "Resident",             image: "/img/hatil-com_interior_living-07.png" },
  { id: 7, title: "Director Table",       image: "/img/Hatil_OfficeTable.jpg" },
  { id: 8, title: "Chief Executive Chair",image: "/img/0001403_chief-executive-chair_450.jpeg" },
]

export default function PopularFurniture() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  /* ── mouse drag handlers ── */
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (trackRef.current?.offsetLeft ?? 0))
    setScrollLeft(trackRef.current?.scrollLeft ?? 0)
    if (trackRef.current) trackRef.current.style.cursor = "grabbing"
  }

  const onMouseLeave = () => {
    setIsDragging(false)
    if (trackRef.current) trackRef.current.style.cursor = "grab"
  }

  const onMouseUp = () => {
    setIsDragging(false)
    if (trackRef.current) trackRef.current.style.cursor = "grab"
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return
    e.preventDefault()
    const x = e.pageX - trackRef.current.offsetLeft
    const walk = (x - startX) * 1.2
    trackRef.current.scrollLeft = scrollLeft - walk
  }

  return (
    <section className="py-12 sm:py-16 bg-white overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4 mb-6 sm:mb-10"
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#222222] uppercase tracking-wide">
              Popular Furniture
            </h2>
            <ArrowRight size={22} className="text-[#222222] shrink-0 sm:w-6 sm:h-6 max-md:hidden" aria-hidden />
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-500 sm:text-sm md:hidden">
            <ChevronsRight className="size-4 text-[#faba00] shrink-0" aria-hidden />
            <span>Swipe to explore</span>
          </div>
        </motion.div>

        <div
          ref={trackRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 scroll-pl-4 scroll-pr-4 sm:scroll-pl-0 sm:scroll-pr-0 pl-1 pr-1 sm:px-0 select-none touch-pan-x snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{
            cursor: "grab",
            msOverflowStyle: "none",
          }}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="shrink-0 flex flex-col items-center group snap-start w-[min(72vw,11.5rem)] sm:w-[min(42vw,10.5rem)] md:w-[min(30vw,11rem)] lg:w-40"
            >
              <div className="relative w-full aspect-square rounded-2xl sm:rounded-lg overflow-hidden bg-[#f5f5f5] shadow-md sm:shadow-sm ring-1 ring-black/[0.04] sm:ring-0 group-active:scale-[0.98] transition-transform duration-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  draggable={false}
                  className="object-cover transition-transform duration-400 group-hover:scale-105 pointer-events-none"
                />
              </div>

              <p className="mt-3 text-xs sm:text-sm text-[#444444] text-center font-medium leading-snug max-w-[11rem] sm:max-w-none group-hover:text-[#faba00] transition-colors duration-300 px-1">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
