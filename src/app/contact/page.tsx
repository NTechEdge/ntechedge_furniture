"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <section
        className="relative h-[430px] bg-cover bg-center bg-no-repeat flex items-center"
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
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4">Contact Us</h2>
            <div className="flex items-center justify-center gap-4 text-sm">
              <Link href="/" className="hover:text-[#faba00] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span>Contact Us</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-[120px]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#faba00]/10 rounded-full flex items-center justify-center">
                  <MapPin className="text-[#faba00]" size={20} />
                </div>
                <div>
                  <h6 className="font-bold text-[#222222] mb-1">California, United States</h6>
                  <p className="text-gray-600 text-sm">Santa monica bullevard</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#faba00]/10 rounded-full flex items-center justify-center">
                  <Phone className="text-[#faba00]" size={20} />
                </div>
                <div>
                  <h6 className="font-bold text-[#222222] mb-1">
                    <Link href="tel:004409865562" className="hover:text-[#faba00] transition-colors">
                      00 (440) 9865 562
                    </Link>
                  </h6>
                  <p className="text-gray-600 text-sm">Mon to Fri 9am to 6 pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#faba00]/10 rounded-full flex items-center justify-center">
                  <Mail className="text-[#faba00]" size={20} />
                </div>
                <div>
                  <h6 className="font-bold text-[#222222] mb-1">
                    <Link href="mailto:support@colorlib.com" className="hover:text-[#faba00] transition-colors">
                      support@colorlib.com
                    </Link>
                  </h6>
                  <p className="text-gray-600 text-sm">Send us your query anytime!</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-[#faba00] transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-[#faba00] transition-colors"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Enter Subject"
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-[#faba00] transition-colors"
                />
                <textarea
                  placeholder="Enter Message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-[#faba00] transition-colors resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#faba00] text-white font-medium rounded-md hover:bg-[#e5a600] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[420px] mb-20">
        <div className="w-full h-full bg-gray-200 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.639290621062!2d-122.08424968469227!3d37.42199997982517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  )
}
