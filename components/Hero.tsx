"use client";

import { ArrowRight, Users, Globe, TrendingUp } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      title: "Trusted Healthcare Services",
      desc: "Get professional rehabilitation, patient care, and modern health solutions at your fingertips.",
      highlight: "Healthcare",
      image: "", // Upload in public/images/healthcare.jpg
    },
    {
      title: "Premium Online Garments",
      desc: "Explore luxury fashion and everyday essentials with our trusted ecommerce garment platform.",
      highlight: "Online Garments",
      image: "", // Upload in public/images/garments.jpg
    },
  ];

  // have some todo 
  
  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  {slides[index].title.split(slides[index].highlight)[0]}
                  <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">
                    {slides[index].highlight}
                  </span>
                  {slides[index].title.split(slides[index].highlight)[1]}
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {slides[index].desc}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-black px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <span>Book Here</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-gray-500 text-gray-200 px-8 py-4 rounded-lg font-semibold hover:border-white hover:text-white transition-all duration-300"
                >
                  Know More
                </Link>
              </div>

              {/* Features */}
              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-6 w-6 text-gray-300" />
                  <span className="text-gray-300 font-medium">Trends</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-gray-300" />
                  <span className="text-gray-300 font-medium">Experts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="h-6 w-6 text-gray-300" />
                  <span className="text-gray-300 font-medium">Global</span>
                </div>
              </div>
            </div>

            {/* Right illustration */}
            <motion.div
              key={`image-${index}`}
              initial={{ opacity: 0, rotate: 5 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -5 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* <Image src={slides[index].image} alt={slides[index].highlight} fill className="object-cover"/> */}
              </div>
              <div className="absolute -top-4 -right-4 bg-white text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Updated Daily
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
