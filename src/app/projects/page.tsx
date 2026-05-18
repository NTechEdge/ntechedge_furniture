"use client"

import SectionTitle from "@/components/ui/section-title"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"


export default function ProjectsPage() {
  const projectItems = [
    { id: 1, title: "Alex Complex for Residence", description: "LCD screens are uniquely modern in style, and the liquid crystals that make them work.", image: "/img/projects/projects-1.jpg", width: "18.23%" },
    { id: 2, title: "Alex Complex for Residence", description: "LCD screens are uniquely modern in style, and the liquid crystals that make them work.", image: "/img/projects/projects-2.jpg", width: "18.23%" },
    { id: 3, title: "Alex Complex for Residence", description: "LCD screens are uniquely modern in style, and the liquid crystals that make them work.", image: "/img/projects/projects-3.jpg", width: "45.31%" },
    { id: 4, title: "Alex Complex for Residence", description: "LCD screens are uniquely modern in style, and the liquid crystals that make them work.", image: "/img/projects/projects-4.jpg", width: "18.23%" },
  ]

  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <section
        className="relative h-107.5 bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: "url('/img/banner/banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4">Projects</h2>
            <div className="flex items-center justify-center gap-4 text-sm">
              <Link href="/" className="hover:text-[#faba00] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span>Projects</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="pt-30">
        <div className="container mx-auto px-4 mb-16">
          <SectionTitle
            title="Latest Completed Projects"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>

        <div className="flex flex-wrap">
          {projectItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group overflow-hidden"
              style={{ width: item.width }}
            >
              <div className="relative h-80">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#faba00] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-center p-6">
                  <div className="text-[#222222] text-center">
                    <h4 className="text-xl font-bold uppercase mb-4">{item.title}</h4>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
