'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Armchair,
  Lamp,
  Monitor,
  Home as HomeIcon,
  Box,
  Users,
  Award,
  Headphones,
  Rocket,
  Star,
  MessageCircle,
} from 'lucide-react';
import SectionTitle from '@/components/ui/section-title';
import PopularFurniture from '@/components/ui/popular-furniture';
import CreationsWithPurpose from '@/components/ui/creations-with-purpose';
import NewArrivals from '@/components/ui/new-arrivals';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const furnitureItems = [
    {
      id: 1,
      title: 'Green Butter Sofa',
      description:
        "Sony laptops are among the most well known laptops on today's market.",
      image: '/img/furniture/furniture-1.jpg',
    },
    {
      id: 2,
      title: 'Green Butter Sofa',
      description:
        "Sony laptops are among the most well known laptops on today's market.",
      image: '/img/furniture/furniture-2.jpg',
    },
    {
      id: 3,
      title: 'Green Butter Sofa',
      description:
        "Sony laptops are among the most well known laptops on today's market.",
      image: '/img/furniture/furniture-3.jpg',
    },
  ];

  const projectItems = [
    {
      id: 1,
      title: 'Alex Complex for Residence',
      description:
        'LCD screens are uniquely modern in style, and the liquid crystals that make them work.',
      image: '/img/projects/projects-1.jpg',
      width: '18.23%',
    },
    {
      id: 2,
      title: 'Alex Complex for Residence',
      description:
        'LCD screens are uniquely modern in style, and the liquid crystals that make them work.',
      image: '/img/projects/projects-2.jpg',
      width: '18.23%',
    },
    {
      id: 3,
      title: 'Alex Complex for Residence',
      description:
        'LCD screens are uniquely modern in style, and the liquid crystals that make them work.',
      image: '/img/projects/projects-3.jpg',
      width: '45.31%',
    },
    {
      id: 4,
      title: 'Alex Complex for Residence',
      description:
        'LCD screens are uniquely modern in style, and the liquid crystals that make them work.',
      image: '/img/projects/projects-4.jpg',
      width: '18.23%',
    },
  ];

  const features = [
    {
      id: 1,
      title: 'Expert Technicians',
      description:
        'Usage of the Internet is becoming more common due to rapid advancement of technology.',
      icon: <Users size={32} />,
    },
    {
      id: 2,
      title: 'Professional Service',
      description:
        'Usage of the Internet is becoming more common due to rapid advancement of technology.',
      icon: <Award size={32} />,
    },
    {
      id: 3,
      title: 'Great Support',
      description:
        'Usage of the Internet is becoming more common due to rapid advancement of technology.',
      icon: <Headphones size={32} />,
    },
    {
      id: 4,
      title: 'Technical Skills',
      description:
        'Usage of the Internet is becoming more common due to rapid advancement of technology.',
      icon: <Rocket size={32} />,
    },
    {
      id: 5,
      title: 'Highly Recommended',
      description:
        'Usage of the Internet is becoming more common due to rapid advancement of technology.',
      icon: <Star size={32} />,
    },
    {
      id: 6,
      title: 'Positive Reviews',
      description:
        'Usage of the Internet is becoming more common due to rapid advancement of technology.',
      icon: <MessageCircle size={32} />,
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Low Cost Advertising',
      category: 'Travel',
      date: '31st January, 2018',
      image: '/img/our-blog/our-blog-1.jpg',
    },
    {
      id: 2,
      title: 'Low Cost Advertising',
      category: 'Travel',
      date: '31st January, 2018',
      image: '/img/our-blog/our-blog-2.jpg',
    },
    {
      id: 3,
      title: 'Low Cost Advertising',
      category: 'Travel',
      date: '31st January, 2018',
      image: '/img/our-blog/our-blog-3.jpg',
    },
  ];

  const clients = [
    '/img/clients-logo/c-logo-1.png',
    '/img/clients-logo/c-logo-2.png',
    '/img/clients-logo/c-logo-3.png',
    '/img/clients-logo/c-logo-4.png',
    '/img/clients-logo/c-logo-5.png',
  ];

  const icons = [
    <Armchair key="sofa" size={40} />,
    <Lamp key="bed" size={40} />,
    <Monitor key="computer" size={40} />,
    <HomeIcon key="mirror" size={40} />,
    <Box key="closet" size={40} />,
    <HomeIcon key="kitchen" size={40} />,
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section — pulls up behind the transparent fixed navbar */}
      <section
        className="relative min-h-screen -mt-25 mx-auto bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: "url('/img/banner/home-banner.jpg')" }}
      >
        <div className="w-10/12 mx-auto  px-4 py-20">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h2 className="text-4xl md:text-5xl font-bold uppercase mb-6 leading-tight">
                Precise concept design <br /> for stylish living
              </h2>
              <p className="text-lg mb-8 max-w-lg">
                If you are looking at blank cassettes on the web, you may be
                very confused at the difference in price. You may see some for
                as low as $.17 each.
              </p>
              <Button size="lg" className="rounded-md">
                Get Started
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex flex-wrap bg-white/10 backdrop-blur-sm border w-100 border-white/10 rounded-lg h-150"
            >
              {icons.map((icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1, backgroundColor: '#faba00' }}
                  className="w-1/2 p-4 flex items-center justify-center text-white border-r border-b border-b-white/10 border-r-white/10 cursor-pointer transition-all duration-300"
                >
                  {icon}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Furniture Section */}
      <section className="py-30 bg-[#f9f9ff]">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Most Popular Furnitures"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {furnitureItems.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold uppercase mb-3 text-[#222222] hover:text-[#faba00] transition-colors transform-all duration-300">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Popular Furniture Carousel */}
      <PopularFurniture />

      {/* Creations with Purpose */}
      <CreationsWithPurpose />

      {/* New Arrivals */}
      <NewArrivals />

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
                    <h4 className="text-lg font-bold uppercase">
                      {item.title}
                    </h4>
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
                whileHover={{
                  y: -10,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                }}
                className="bg-[#f9f9ff] rounded-lg p-8 cursor-pointer transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-[#faba00]">{feature.icon}</div>
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

      {/* CTA Section */}
      <section
        className="py-30 bg-cover bg-center bg-fixed relative"
        style={{ backgroundImage: "url('/img/notify-bg.jpg')" }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6">
              Looking for a <br /> quality and affordable Furniture?
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8 opacity-90">
              Inappropriate behavior is often laughed off as &quot;boys will be
              boys,&quot; women face higher conduct standards especially in the
              workplace.
            </p>
            <Button
              size="lg"
              className="bg-white text-[#222222] hover:bg-gray-100"
            >
              Read Details
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-30">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Recent Posts from our blog"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex gap-3 mb-4">
                    <span className="px-3 py-1 text-xs border border-gray-200 rounded-full hover:bg-[#faba00] hover:text-white hover:border-[#faba00] transition-all cursor-pointer">
                      {post.category}
                    </span>
                    <span className="px-3 py-1 text-xs border border-gray-200 rounded-full hover:bg-[#faba00] hover:text-white hover:border-[#faba00] transition-all cursor-pointer">
                      Life style
                    </span>
                  </div>
                  <h4 className="text-xl font-bold uppercase mb-3 text-[#222222] hover:text-[#faba00] transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Acres of Diamonds… you&apos;ve read the famous story, or at
                    least had it related to you A farmer.
                  </p>
                  <p className="text-sm text-[#222222]">{post.date}</p>
                </div>
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
  );
}
