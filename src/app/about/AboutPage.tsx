"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import SectionTitle from "@/components/ui/section-title"
import { Users, Award, Headphones, Rocket, Star, MessageCircle } from "lucide-react"

export default function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const projectItems = [
    { id: 1, title: "Alex Complex for Residence", description: "LCD screens are uniquely modern in style, and the liquid crystals that make them work.", image: "/img/projects/projects-1.jpg", width: "18.23%" },
    { id: 2, title: "Alex Complex for Residence", description: "LCD screens are uniquely modern in style, and the liquid crystals that make them work.", image: "/img/projects/projects-2.jpg", width: "18.23%" },
    { id: 3, title: "Alex Complex for Residence", description: "LCD screens are uniquely modern in style, and the liquid crystals that make them work.", image: "/img/projects/projects-3.jpg", width: "45.31%" },
    { id: 4, title: "Alex Complex for Residence", description: "LCD screens are uniquely modern in style, and the liquid crystals that make them work.", image: "/img/projects/projects-4.jpg", width: "18.23%" },
  ]

  const features = [
    { id: 1, title: "Expert Technicians", description: "Usage of the Internet is becoming more common due to rapid advancement of technology.", icon: <Users size={32} /> },
    { id: 2, title: "Professional Service", description: "Usage of the Internet is becoming more common due to rapid advancement of technology.", icon: <Award size={32} /> },
    { id: 3, title: "Great Support", description: "Usage of the Internet is becoming more common due to rapid advancement of technology.", icon: <Headphones size={32} /> },
    { id: 4, title: "Technical Skills", description: "Usage of the Internet is becoming more common due to rapid advancement of technology.", icon: <Rocket size={32} /> },
    { id: 5, title: "Highly Recommended", description: "Usage of the Internet is becoming more common due to rapid advancement of technology.", icon: <Star size={32} /> },
    { id: 6, title: "Positive Reviews", description: "Usage of the Internet is becoming more common due to rapid advancement of technology.", icon: <MessageCircle size={32} /> },
  ]

  const clients = [
    "/img/clients-logo/c-logo-1.png",
    "/img/clients-logo/c-logo-2.png",
    "/img/clients-logo/c-logo-3.png",
    "/img/clients-logo/c-logo-4.png",
    "/img/clients-logo/c-logo-5.png",
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
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4">About Us</h2>
            <div className="flex items-center justify-center gap-4 text-sm">
              <Link href="/" className="hover:text-[#faba00] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span>About Us</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#c6b069] uppercase text-sm tracking-wider">Brand new app to blow your mind</span>
              <h3 className="text-3xl md:text-4xl font-bold uppercase mt-4 mb-6 text-[#222222]">
                We&apos;ve made a life <br /> that will change you
              </h3>
              <h5 className="text-lg text-[#222222] mb-6">We are here to listen from you deliver excellence</h5>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
              </p>
              <Button size="lg">Get Started Now</Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/img/about-1.jpg"
                alt="About Us"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative">
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
              <div className="relative h-120">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 bg-[#faba00] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-center py-6">
                  <div className="text-[#222222] text-center py-2">
                    <h4 className="text-lg font-bold uppercase">{item.title}</h4>
                    <p className="text-sm px-5">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-30">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Some Features that Made us Unique"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                variants={fadeInUp}
                whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                className="bg-[#f9f9ff] rounded-lg p-8 cursor-pointer transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-[#faba00]">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-bold uppercase text-[#222222]">
                    {feature.title}
                  </h4>
                </div>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Clients Logo Section */}
      <section className="py-30 bg-[#f9f9ff]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-20"
          >
            {clients.map((logo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, opacity: 1 }}
                className="opacity-50 hover:opacity-100 transition-all cursor-pointer"
              >
                <Image
                  src={logo}
                  alt={`Client ${index + 1}`}
                  width={150}
                  height={60}
                  className="h-20 w-auto"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
