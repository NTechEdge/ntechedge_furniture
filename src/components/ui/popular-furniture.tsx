"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

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

  /* ── touch handlers ── */
  const onTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].pageX - (trackRef.current?.offsetLeft ?? 0))
    setScrollLeft(trackRef.current?.scrollLeft ?? 0)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    if (!trackRef.current) return
    const x = e.touches[0].pageX - trackRef.current.offsetLeft
    const walk = (x - startX) * 1.2
    trackRef.current.scrollLeft = scrollLeft - walk
  }

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="w-10/12 mx-auto px-4">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-10"
        >
          <h2 className="text-2xl font-bold text-[#222222] uppercase tracking-wide">
            Popular Furniture
          </h2>
          <ArrowRight size={24} className="text-[#222222]" />
        </motion.div>

        {/* draggable track */}
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto pb-4 select-none"
          style={{
            cursor: "grab",
            scrollbarWidth: "none",          /* Firefox */
            msOverflowStyle: "none",         /* IE/Edge */
          }}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
        >
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="shrink-0 flex flex-col items-center group"
              style={{ width: 160 }}
            >
              {/* image box */}
              <div className="relative w-40 h-40 rounded-lg overflow-hidden bg-[#f5f5f5] shadow-sm group-hover:shadow-md transition-shadow duration-300">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  draggable={false}
                  className="object-cover transition-transform duration-400 group-hover:scale-105 pointer-events-none"
                />
              </div>

              {/* label */}
              <p className="mt-3 text-sm text-[#444444] text-center font-medium group-hover:text-[#faba00] transition-colors duration-300">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* hide webkit scrollbar via inline style tag */}
        <style>{`
          div::-webkit-scrollbar { display: none; }
        `}</style>
      </div>
    </section>
  )
}
