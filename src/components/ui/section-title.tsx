import { motion } from "framer-motion"

interface SectionTitleProps {
  title: string
  description: string
  white?: boolean
  className?: string
}

/**
 * Section title component with animated entrance
 * Used for consistent page section headers
 */
export default function SectionTitle({ title, description, white = false, className = "" }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`text-center mb-10 md:mb-16 px-1 ${className}`}
    >
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold uppercase mb-3 sm:mb-4 text-balance ${white ? "text-white" : "text-[#222222]"}`}>
        {title}
      </h2>
      <p className={`text-sm max-w-2xl mx-auto leading-relaxed ${white ? "text-white/70" : "text-gray-600"}`}>
        {description}
      </p>
    </motion.div>
  )
}
