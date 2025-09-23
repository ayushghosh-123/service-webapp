"use client";

import { ArrowRight, Users, Globe, TrendingUp } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Slide {
  title: string;
  desc: string;
  highlight: string;
  image: string;
}

// Slides moved outside the component to remain constant
const slides: Slide[] = [
  {
    title: "Trusted Healthcare Services",
    desc: "Get professional rehabilitation, patient care, and modern health solutions at your fingertips.",
    highlight: "Healthcare",
    image: "/logo.svg",
  },
  {
    title: "Premium Online Garments",
    desc: "Explore luxury fashion and everyday essentials with our trusted ecommerce garment platform.",
    highlight: "Online Garments",
    image: "/onlinegarment.svg",
  },
];

export default function Hero() {
  const [index, setIndex] = useState<number>(0);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-black text-white py-20 lg:py-32 overflow-hidden">
      {/* Background gradients and blobs for visual interest */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
                  {slides[index].title.split(slides[index].highlight)[0]}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                    {slides[index].highlight}
                  </span>
                  {slides[index].title.split(slides[index].highlight)[1]}
                </h1>
                <p className="text-lg lg:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0">
                  {slides[index].desc}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="bg-white text-black px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:bg-gray-200"
                >
                  <span>Book Here</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:border-white hover:text-white"
                >
                  Know More
                </Link>
              </div>

              {/* Features with updated styles */}
              <div className="flex items-center space-x-8 pt-4 justify-center lg:justify-start">
                <div className="flex flex-col items-center space-y-1">
                  <TrendingUp className="h-8 w-8 text-blue-400 drop-shadow-md" />
                  <span className="text-sm text-gray-400 font-medium">Trends</span>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <Users className="h-8 w-8 text-blue-400 drop-shadow-md" />
                  <span className="text-sm text-gray-400 font-medium">Experts</span>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <Globe className="h-8 w-8 text-blue-400 drop-shadow-md" />
                  <span className="text-sm text-gray-400 font-medium">Global</span>
                </div>
              </div>
            </div>

            {/* Right illustration */}
            <motion.div
              key={`image-${index}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-[300px] lg:h-[450px] flex items-center justify-center"
            >
              <Image
                src={slides[index].image}
                alt={slides[index].highlight}
                fill
                className="object-contain bg-white rounded-2xl drop-shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}