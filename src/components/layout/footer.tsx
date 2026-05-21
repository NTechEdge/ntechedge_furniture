import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Facebook, Twitter, Instagram, Linkedin } from "@/components/ui/social-icons"

export default function Footer() {
  return (
    <footer className="bg-[#222222] text-white py-30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold uppercase mb-6">About Me</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Do you want to be even more successful? Learn to love learning and growth.
              The more effort you put into improving your skills.
            </p>
            <p className="text-gray-400 text-xs">
              Copyright © {new Date().getFullYear()} All rights reserved | This template is made with{" "}
              <span className="text-red-500">♥</span> by{" "}
              <Link href="https://ntechedge.com/" target="_blank" className="text-[#faba00] hover:underline">
                NTechEdge
              </Link>
            </p>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl font-bold uppercase mb-6">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-6">Stay updated with our latest trends</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter email address"
                className="flex-1 px-4 py-2 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#faba00]"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#faba00] hover:bg-[#e5a600] transition-colors"
              >
                <ArrowRight size={20} />
              </button>
            </form>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-xl font-bold uppercase mb-6">Follow Me</h3>
            <p className="text-gray-400 text-sm mb-4">Let us be social</p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-[#faba00] transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#faba00] transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#faba00] transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#faba00] transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
