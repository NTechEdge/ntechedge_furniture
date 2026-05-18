"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Linkedin } from "@/components/ui/social-icons"

export default function BlogDetailsPage() {
  return (
    <div className="min-h-screen">
      <article className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Blog Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 text-xs border border-gray-200 rounded-full">
                  Travel
                </span>
                <span className="px-3 py-1 text-xs border border-gray-200 rounded-full">
                  Life style
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold uppercase text-[#222222] mb-6">
                Astronomy Binoculars A Great Alternative
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                <span>By Mark wiens</span>
                <span>•</span>
                <span>12 Dec, 2017</span>
                <span>•</span>
                <span>1.2M Views</span>
                <span>•</span>
                <span>06 Comments</span>
              </div>
            </motion.div>

            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative h-96 rounded-lg overflow-hidden mb-8"
            >
              <Image
                src="/img/blog/main-blog/m-blog-1.jpg"
                alt="Blog Post"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Blog Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-gray-600 mb-6">
                MCSE boot camps have its supporters and its detractors. Some
                people do not understand why you should have to spend money on
                boot camp when you can get the MCSE study materials yourself at
                a fraction of the camp price. However, who has the willpower to
                actually sit through a self-imposed MCSE training.
              </p>

              <blockquote className="border-l-4 border-[#faba00] pl-6 py-4 my-8 bg-white shadow-lg italic text-gray-700">
                &quot;Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam.&quot;
              </blockquote>

              <p className="text-gray-600 mb-6">
                Not only do you get the content but you also get the
                personalized attention and real-world experience of the
                instructor. They can help you navigate tricky areas and provide
                real-world examples.
              </p>

              <p className="text-gray-600 mb-6">
                The convenience of attending a boot camp is also a major selling
                point. Many employers may even pay for the boot camp or you may
                be eligible for veterans education benefits. The condensed
                format means you&apos;ll get up to speed quickly, which can be
                helpful when you&apos;re trying to break into the field or
                advance your career.
              </p>
            </motion.div>

            {/* Share Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 py-8 border-t border-b border-gray-200 my-8"
            >
              <span className="font-medium text-[#222222]">Share:</span>
              <div className="flex gap-4">
                <button className="p-2 text-gray-600 hover:text-[#faba00] transition-colors">
                  <Facebook size={20} />
                </button>
                <button className="p-2 text-gray-600 hover:text-[#faba00] transition-colors">
                  <Twitter size={20} />
                </button>
                <button className="p-2 text-gray-600 hover:text-[#faba00] transition-colors">
                  <Linkedin size={20} />
                </button>
              </div>
            </motion.div>

            {/* Comments Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#f9f9ff] border border-gray-200 p-8 rounded-lg"
            >
              <h3 className="text-xl font-bold text-center text-[#222222] mb-8">
                Comments
              </h3>

              {/* Comment List */}
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div className="flex-1">
                    <h5 className="font-bold text-[#222222] mb-1">John Doe</h5>
                    <p className="text-xs text-gray-500 mb-2">12 Dec, 2017</p>
                    <p className="text-gray-600 text-sm">
                      This is a great article! I&apos;ve been considering
                      getting MCSE certified and this really helped me
                      understand the benefits of boot camps.
                    </p>
                    <button className="mt-2 px-4 py-2 text-xs border border-gray-200 rounded hover:bg-[#faba00] hover:text-white hover:border-[#faba00] transition-colors">
                      Reply
                    </button>
                  </div>
                </div>

                <div className="flex gap-4 pl-8">
                  <div className="shrink-0 w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div className="flex-1">
                    <h5 className="font-bold text-[#222222] mb-1">
                      Jane Smith
                    </h5>
                    <p className="text-xs text-gray-500 mb-2">13 Dec, 2017</p>
                    <p className="text-gray-600 text-sm">
                      I agree with John! The personalized attention you get in a
                      boot camp is invaluable.
                    </p>
                    <button className="mt-2 px-4 py-2 text-xs border border-gray-200 rounded hover:bg-[#faba00] hover:text-white hover:border-[#faba00] transition-colors">
                      Reply
                    </button>
                  </div>
                </div>
              </div>

              {/* Comment Form */}
              <div className="text-center">
                <h4 className="text-xl font-bold text-[#222222] mb-8">
                  Leave a Reply
                </h4>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-[#faba00]"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-[#faba00]"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-[#faba00]"
                  />
                  <textarea
                    placeholder="Message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-[#faba00] resize-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-[#faba00] text-white font-medium rounded hover:bg-[#e5a600] transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </article>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-t border-gray-200 py-12"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/blog" className="flex gap-4 items-start group">
              <div className="shrink-0 w-24 h-16 relative overflow-hidden rounded">
                <Image
                  src="/img/blog/prev.jpg"
                  alt="Previous Post"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#222222] group-hover:text-[#faba00] transition-colors mb-1">
                  Previous Post
                </h4>
                <p className="text-sm text-gray-600">The Night Sky</p>
              </div>
            </Link>

            <Link
              href="/blog"
              className="flex gap-4 items-start justify-end text-right group"
            >
              <div>
                <h4 className="text-lg font-bold text-[#222222] group-hover:text-[#faba00] transition-colors mb-1">
                  Next Post
                </h4>
                <p className="text-sm text-gray-600">Telescopes 101</p>
              </div>
              <div className="shrink-0 w-24 h-16 relative overflow-hidden rounded">
                <Image
                  src="/img/blog/next.jpg"
                  alt="Next Post"
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
