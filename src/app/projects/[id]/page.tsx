"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"

export default function ProjectDetailsPage() {
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
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4">Project Details</h2>
            <div className="flex items-center justify-center gap-4 text-sm">
              <Link href="/" className="hover:text-[#faba00] transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/projects" className="hover:text-[#faba00] transition-colors">
                Projects
              </Link>
              <span>/</span>
              <span>Project Details</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Details Section */}
      <section className="py-30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <Image
                    src="/img/project-details-1.jpg"
                    alt="Project Details"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-bold uppercase mb-6 text-[#222222]">
                  Lavendar ambient colorlib
                </h4>
                <p className="text-gray-600 mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation.
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="font-bold text-[#222222]">Rating:</span>
                    <div className="flex gap-1 text-[#faba00]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="font-bold text-[#222222]">Client:</span>
                    <span className="text-gray-600">colorlib</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="font-bold text-[#222222]">Website:</span>
                    <span className="text-gray-600">colorlib.com</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="font-bold text-[#222222]">Completed:</span>
                    <span className="text-gray-600">17 Aug 2018</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6 max-w-4xl">
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit.
              </p>
              <p className="text-gray-600">
                Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
