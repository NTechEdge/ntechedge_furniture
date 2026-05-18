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
      widthClass: 'w-full sm:w-1/2 lg:w-[18.23%]',
    },
    {
      id: 2,
      title: 'Alex Complex for Residence',
      description:
        'LCD screens are uniquely modern in style, and the liquid crystals that make them work.',
      image: '/img/projects/projects-2.jpg',
      widthClass: 'w-full sm:w-1/2 lg:w-[18.23%]',
    },
    {
      id: 3,
      title: 'Alex Complex for Residence',
      description:
        'LCD screens are uniquely modern in style, and the liquid crystals that make them work.',
      image: '/img/projects/projects-3.jpg',
      widthClass: 'w-full sm:w-full lg:w-[45.31%]',
    },
    {
      id: 4,
      title: 'Alex Complex for Residence',
      description:
        'LCD screens are uniquely modern in style, and the liquid crystals that make them work.',
      image: '/img/projects/projects-4.jpg',
      widthClass: 'w-full sm:w-1/2 lg:w-[18.23%]',
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
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section — pulls up behind the transparent fixed navbar */}
      <section
        className="relative min-h-[100dvh] min-h-screen -mt-25 mx-auto bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: "url('/img/banner/home-banner.jpg')" }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/50 lg:bg-gradient-to-r lg:from-black/50 lg:via-black/25 lg:to-black/20"
          aria-hidden
        />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-28 lg:py-20 pb-[max(6rem,env(safe-area-inset-bottom))] sm:pb-28">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white max-w-xl lg:max-w-lg max-lg:rounded-2xl max-lg:border max-lg:border-white/20 max-lg:bg-black/35 max-lg:backdrop-blur-md max-lg:p-6 max-lg:shadow-xl"
            >
              <p className="lg:hidden text-xs font-semibold uppercase tracking-[0.2em] text-[#faba00] mb-3">
                Woodrox Furniture
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase max-lg:normal-case mb-4 sm:mb-6 leading-[1.15] tracking-tight">
                Precise concept design <br /> for stylish living
              </h2>
              <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-lg text-white/90 leading-relaxed max-lg:text-[0.9375rem]">
                If you are looking at blank cassettes on the web, you may be
                very confused at the difference in price. You may see some for
                as low as $.17 each.
              </p>
              <Button size="lg" className="rounded-md w-full sm:w-auto touch-manipulation min-h-12 max-lg:text-base">
                Get Started
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex lg:flex-wrap w-64 h-96 xl:w-72 xl:h-[28rem] shrink-0 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden"
            >
              {icons.map((icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1, backgroundColor: '#faba00' }}
                  className="w-1/2 h-1/3 p-4 flex items-center justify-center text-white border-r border-b border-b-white/10 border-r-white/10 cursor-pointer transition-all duration-300 [&:nth-child(2n)]:border-r-0 [&:nth-child(n+5)]:border-b-0"
                >
                  {icon}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Furniture Section — mobile: compact list rows; md+: card grid */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-[#f9f9ff] max-md:rounded-t-3xl max-md:-mt-2 max-md:relative max-md:z-[1]">
        <div className="container mx-auto px-4 max-md:max-w-lg max-md:mx-auto">
          <SectionTitle
            title="Most Popular Furnitures"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8"
          >
            {furnitureItems.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl md:rounded-lg overflow-hidden shadow-md md:shadow-lg cursor-pointer transition-all duration-300 max-md:flex max-md:flex-row max-md:items-stretch max-md:active:scale-[0.99]"
              >
                <div className="relative w-32 h-32 shrink-0 sm:w-36 sm:h-36 md:w-full md:h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-4 sm:p-6 flex flex-col justify-center min-w-0 flex-1 md:block">
                  <h4 className="text-base sm:text-xl font-bold uppercase mb-1 sm:mb-3 text-[#222222] md:hover:text-[#faba00] transition-colors transform-all duration-300 line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3 md:line-clamp-none">{item.description}</p>
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

      {/* Projects Section — mobile: stacked cards; lg: filmstrip */}
      <section className="relative max-md:bg-[#ececf5] max-md:py-8">
        <div className="flex flex-col gap-4 max-md:container max-md:mx-auto max-md:px-4 sm:flex-row sm:flex-wrap sm:gap-0 sm:px-0 lg:flex-nowrap">
          {projectItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group overflow-hidden shrink-0 max-md:rounded-2xl max-md:shadow-lg max-md:ring-1 max-md:ring-black/[0.06] ${item.widthClass}`}
            >
              <div className="relative min-h-[200px] h-52 sm:h-72 lg:h-[28rem] xl:h-[32rem] max-md:min-h-[220px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 bg-[#faba00]/95 lg:bg-[#faba00] flex items-center justify-center py-4 sm:py-6 translate-y-0 lg:translate-y-full lg:group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-[#222222] text-center py-2">
                    <h4 className="text-lg font-bold uppercase">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm px-3 sm:px-5 leading-relaxed line-clamp-4">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section — mobile: horizontal snap carousel */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-4">
          <SectionTitle
            title="Some Features that Made us Unique"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <p className="-mt-6 mb-5 text-center text-xs text-gray-400 md:hidden">Swipe sideways to see all features</p>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex gap-4 overflow-x-auto pb-3 -mx-4 px-4 snap-x snap-mandatory [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8 md:overflow-visible md:pb-0 md:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                variants={fadeInUp}
                whileHover={{
                  y: -10,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                }}
                className="bg-[#f9f9ff] rounded-xl md:rounded-lg p-5 sm:p-8 cursor-pointer transition-all duration-300 snap-start shrink-0 w-[min(88vw,22rem)] min-h-[11rem] flex flex-col justify-center md:w-auto md:min-h-0 md:snap-none"
              >
                <div className="flex items-start gap-4 mb-3 md:mb-4">
                  <div className="text-[#faba00] shrink-0 rounded-lg bg-white p-2 shadow-sm md:bg-transparent md:p-0 md:shadow-none [&_svg]:size-7 md:[&_svg]:size-8">
                    {feature.icon}
                  </div>
                  <h4 className="text-base font-bold uppercase text-[#222222] leading-snug pt-0.5">
                    {feature.title}
                  </h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-12 sm:py-16 md:py-24 lg:py-32 bg-cover bg-center bg-scroll lg:bg-fixed relative"
        style={{ backgroundImage: "url('/img/notify-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50 sm:bg-black/45" aria-hidden />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase mb-4 sm:mb-6 px-1 leading-snug">
              Looking for a <br className="hidden sm:block" /> quality and affordable Furniture?
            </h2>
            <p className="text-base sm:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 opacity-90 px-1 leading-relaxed">
              Inappropriate behavior is often laughed off as &quot;boys will be
              boys,&quot; women face higher conduct standards especially in the
              workplace.
            </p>
            <Button
              size="lg"
              className="bg-white text-[#222222] hover:bg-gray-100 w-full sm:w-auto touch-manipulation"
            >
              Read Details
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Blog Section — mobile: swipeable cards */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-4">
          <SectionTitle
            title="Recent Posts from our blog"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <p className="-mt-6 mb-5 text-center text-xs text-gray-400 md:hidden">Swipe for more posts</p>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex gap-4 overflow-x-auto pb-3 -mx-4 px-4 snap-x snap-mandatory [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8 md:overflow-visible md:pb-0 md:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl md:rounded-lg overflow-hidden shadow-md md:shadow-lg cursor-pointer transition-all duration-300 snap-start shrink-0 w-[min(88vw,22rem)] md:w-auto md:snap-none"
              >
                <div className="relative aspect-[4/3] sm:h-64 sm:aspect-auto md:h-64 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <span className="px-3 py-1.5 text-xs border border-gray-200 rounded-full hover:bg-[#faba00] hover:text-white hover:border-[#faba00] transition-all cursor-pointer min-h-9 inline-flex items-center">
                      {post.category}
                    </span>
                    <span className="px-3 py-1.5 text-xs border border-gray-200 rounded-full hover:bg-[#faba00] hover:text-white hover:border-[#faba00] transition-all cursor-pointer min-h-9 inline-flex items-center">
                      Life style
                    </span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold uppercase mb-2 sm:mb-3 text-[#222222] md:hover:text-[#faba00] transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3 sm:mb-4 leading-relaxed">
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

      {/* Clients Logo Section — mobile: auto-play marquee · desktop: wrapped grid */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-[#f9f9ff]">
        <div className="container mx-auto px-4 md:px-4">
          <p className="md:hidden text-center text-xs font-semibold uppercase tracking-widest text-gray-500 mb-6">
            Trusted partners
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:hidden overflow-hidden -mx-4"
          >
            <div className="flex w-max animate-partners-marquee items-center gap-6 sm:gap-8">
              {[...clients, ...clients].map((logo, index) => (
                <div
                  key={index}
                  className="flex h-10 w-20 shrink-0 items-center justify-center opacity-80 sm:h-12 sm:w-24"
                >
                  <Image
                    src={logo}
                    alt={`Client ${(index % clients.length) + 1}`}
                    width={96}
                    height={48}
                    className="h-full w-full object-contain object-center"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20"
          >
            {clients.map((logo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, opacity: 1 }}
                className="opacity-50 hover:opacity-100 transition-all cursor-pointer shrink-0"
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
