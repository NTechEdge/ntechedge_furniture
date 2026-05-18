"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Eye, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Astronomy Binoculars A Great Alternative",
      category: "Food",
      tags: ["Food", "Technology", "Politics", "Lifestyle"],
      author: "Mark wiens",
      date: "12 Dec, 2017",
      views: "1.2M",
      comments: "06",
      image: "/img/blog/main-blog/m-blog-1.jpg",
      excerpt: "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.",
    },
    {
      id: 2,
      title: "The Basics Of Buying A Telescope",
      category: "Technology",
      tags: ["Food", "Technology", "Politics", "Lifestyle"],
      author: "Mark wiens",
      date: "12 Dec, 2017",
      views: "1.2M",
      comments: "06",
      image: "/img/blog/main-blog/m-blog-2.jpg",
      excerpt: "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.",
    },
    {
      id: 3,
      title: "The Glossary Of Telescopes",
      category: "Lifestyle",
      tags: ["Food", "Technology", "Politics", "Lifestyle"],
      author: "Mark wiens",
      date: "12 Dec, 2017",
      views: "1.2M",
      comments: "06",
      image: "/img/blog/main-blog/m-blog-3.jpg",
      excerpt: "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.",
    },
    {
      id: 4,
      title: "The Night Sky",
      category: "Food",
      tags: ["Food", "Technology", "Politics", "Lifestyle"],
      author: "Mark wiens",
      date: "12 Dec, 2017",
      views: "1.2M",
      comments: "06",
      image: "/img/blog/main-blog/m-blog-4.jpg",
      excerpt: "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.",
    },
    {
      id: 5,
      title: "Telescopes 101",
      category: "Technology",
      tags: ["Food", "Technology", "Politics", "Lifestyle"],
      author: "Mark wiens",
      date: "12 Dec, 2017",
      views: "1.2M",
      comments: "06",
      image: "/img/blog/main-blog/m-blog-5.jpg",
      excerpt: "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.",
    },
  ]

  const categories = [
    { name: "Technology", count: 37 },
    { name: "Lifestyle", count: 24 },
    { name: "Fashion", count: 59 },
    { name: "Art", count: 29 },
    { name: "Food", count: 15 },
    { name: "Architecture", count: 9 },
    { name: "Adventure", count: 44 },
  ]

  const popularPosts = [
    { id: 1, title: "Space The Final Frontier", time: "02 Hours ago", image: "/img/blog/popular-post/post1.jpg" },
    { id: 2, title: "The Amazing Hubble", time: "02 Hours ago", image: "/img/blog/popular-post/post2.jpg" },
    { id: 3, title: "Astronomy Or Astrology", time: "03 Hours ago", image: "/img/blog/popular-post/post3.jpg" },
    { id: 4, title: "Asteroids telescope", time: "01 Hours ago", image: "/img/blog/popular-post/post4.jpg" },
  ]

  const tags = [
    "Technology", "Fashion", "Architecture", "Fashion", "Food", "Technology", "Lifestyle", "Art", "Adventure", "Food", "Lifestyle", "Adventure",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section
        className="relative min-h-195 bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/img/banner/banner-2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h2 className="text-5xl md:text-6xl font-bold uppercase mb-6 leading-tight">
              Dude You&apos;re Getting <br /> a Telescope
            </h2>
            <p className="text-lg mb-8 opacity-90">
              There is a moment in the life of any aspiring astronomer that it is time to buy
              that first telescope
            </p>
            <button className="px-8 py-3 bg-white text-[#222222] font-medium rounded hover:bg-[#faba00] transition-colors">
              View More
            </button>
          </motion.div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Social Life", "Politics", "Food"].map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group cursor-pointer overflow-hidden rounded-lg"
              >
                <div className="relative h-64">
                  <Image
                    src={`/img/blog/cat-post/cat-post-${3 - index}.jpg`}
                    alt={category}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-4 bg-[#222222]/80 flex items-center justify-center transition-colors group-hover:bg-[#faba00]">
                    <div className="text-center text-white">
                      <h5 className="text-xl font-bold uppercase mb-2">{category}</h5>
                      <div className="w-12 h-0.5 bg-white mx-auto mb-2"></div>
                      <p className="text-sm">
                        {index === 0 && "Enjoy your social life together"}
                        {index === 1 && "Be a part of politics"}
                        {index === 2 && "Let the food be finished"}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Blog Posts */}
            <div className="lg:col-span-2 space-y-12">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="grid grid-cols-1 md:grid-cols-4 gap-6"
                >
                  <div className="md:col-span-1 text-right space-y-4">
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      {post.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className={`text-xs px-2 py-1 rounded ${
                            i === 1
                              ? "bg-[#faba00] text-white"
                              : "text-gray-600 hover:text-[#faba00] cursor-pointer"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600 md:justify-end flex flex-col md:items-end">
                      <li className="flex items-center gap-2">
                        <span>{post.author}</span>
                        <User size={14} />
                      </li>
                      <li className="flex items-center gap-2">
                        <span>{post.date}</span>
                        <Calendar size={14} />
                      </li>
                      <li className="flex items-center gap-2">
                        <span>{post.views} Views</span>
                        <Eye size={14} />
                      </li>
                      <li className="flex items-center gap-2">
                        <span>{post.comments} Comments</span>
                        <MessageCircle size={14} />
                      </li>
                    </ul>
                  </div>

                  <div className="md:col-span-3">
                    <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold uppercase mb-4 text-[#222222] hover:text-[#faba00] transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-block px-6 py-2 border border-gray-200 text-[#222222] text-sm font-medium rounded hover:bg-[#faba00] hover:text-white hover:border-[#faba00] transition-colors"
                    >
                      View More
                    </Link>
                  </div>
                </motion.article>
              ))}

              {/* Pagination */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex justify-center items-center gap-2 pt-8"
              >
                <button className="p-2 border border-gray-200 rounded hover:bg-[#faba00] hover:text-white hover:border-[#faba00] transition-colors">
                  <ChevronLeft size={20} />
                </button>
                {[1, 2, 3, 4, 9].map((page) => (
                  <button
                    key={page}
                    className={`w-10 h-10 rounded ${
                      page === 2
                        ? "bg-[#faba00] text-white"
                        : "border border-gray-200 hover:bg-[#faba00] hover:text-white hover:border-[#faba00] transition-colors"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button className="p-2 border border-gray-200 rounded hover:bg-[#faba00] hover:text-white hover:border-[#faba00] transition-colors">
                  <ChevronRight size={20} />
                </button>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Search Widget */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search Posts"
                    className="w-full px-4 py-2 pr-10 border border-gray-200 rounded focus:outline-none focus:border-[#faba00]"
                  />
                </div>
              </div>

              {/* Author Widget */}
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/img/blog/author.png"
                    alt="Author"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-bold text-[#222222] mb-1">Charlie Barber</h4>
                <p className="text-sm text-gray-600 mb-4">Senior blog writer</p>
                <p className="text-sm text-gray-600 mb-4">
                  Boot camps have its supporters andit sdetractors. Some people do not understand why you should have to spend money on boot camp when you can get.
                </p>
              </div>

              {/* Popular Posts Widget */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-center bg-[#faba00] text-white py-2 -mx-6 mb-6">
                  Popular Posts
                </h3>
                <div className="space-y-4">
                  {popularPosts.map((post) => (
                    <div key={post.id} className="flex gap-4">
                      <div className="relative w-16 h-16 rounded overflow-hidden shrink-0">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#222222] hover:text-[#faba00] transition-colors cursor-pointer mb-1">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-600">{post.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories Widget */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-bold text-center bg-[#faba00] text-white py-2 -mx-6 mb-6">
                  Post Categories
                </h4>
                <ul className="space-y-3">
                  {categories.map((category) => (
                    <li
                      key={category.name}
                      className="flex justify-between items-center border-b border-dotted border-gray-200 pb-2 hover:border-[#faba00] transition-colors cursor-pointer"
                    >
                      <span className="text-gray-700 hover:text-[#faba00]">{category.name}</span>
                      <span className="text-gray-600">{category.count}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags Widget */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-bold text-center bg-[#faba00] text-white py-2 -mx-6 mb-6">
                  Tag Clouds
                </h4>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs border border-gray-200 rounded hover:bg-[#faba00] hover:text-white hover:border-[#faba00] transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
