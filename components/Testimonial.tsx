'use client'
import React, { useState, useEffect } from 'react';

// Define the type for a single testimonial object.
interface Testimonial {
  id: number;
  name: string;
  quote: string;
  avatar: string;
  rating: number;
}

// ✅ Updated testimonial data with Indian names & feedback
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Amit Sharma",
    quote: "The service was excellent. The team handled everything professionally and delivered results on time. Very reliable!",
    avatar: "https://placehold.co/100x100/FFA500/FFFFFF?text=AS",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Patel",
    quote: "I had a wonderful experience. They understood my needs clearly and provided great support throughout. Highly recommended.",
    avatar: "https://placehold.co/100x100/FF69B4/FFFFFF?text=PP",
    rating: 5,
  },
  {
    id: 3,
    name: "Rahul Verma",
    quote: "Very smooth and transparent process. The customer service team was always available to guide me whenever I had questions.",
    avatar: "https://placehold.co/100x100/4682B4/FFFFFF?text=RV",
    rating: 4,
  },
  {
    id: 4,
    name: "Sneha Iyer",
    quote: "They really care about customer satisfaction. The results were beyond my expectations. I would love to work with them again.",
    avatar: "https://placehold.co/100x100/9370DB/FFFFFF?text=SI",
    rating: 5,
  },
  {
    id: 5,
    name: "Vikram Singh",
    quote: "Affordable, efficient, and trustworthy. The team resolved my issues quickly and explained everything in detail.",
    avatar: "https://placehold.co/100x100/32CD32/FFFFFF?text=VS",
    rating: 5,
  },
  {
    id: 6,
    name: "Anjali Gupta",
    quote: "Fantastic experience! I was a bit unsure initially, but they delivered exactly what they promised. Great value for money.",
    avatar: "https://placehold.co/100x100/DC143C/FFFFFF?text=AG",
    rating: 4,
  },
];

// Component to render a single testimonial card
const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-xl transition-all duration-500 ease-in-out w-full">
    <div className="flex items-center mb-4">
      <img
        className="w-16 h-16 rounded-full mr-4 object-cover border-4 border-slate-200"
        src={testimonial.avatar}
        alt={testimonial.name}
        onError={(e) => {
          e.currentTarget.src = 'https://placehold.co/100x100/CCCCCC/333333?text=N/A';
        }}
      />
      <div>
        <h3 className="text-xl font-bold text-slate-800">{testimonial.name}</h3>
        {/* Display star ratings */}
        <div className="flex text-yellow-500 mt-1">
          {Array(testimonial.rating).fill(null).map((_, i) => (
            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.786.57-1.841-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
    <p className="text-slate-600 leading-relaxed italic text-center">{testimonial.quote}</p>
  </div>
);

export default function App() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [testimonialsPerPage, setTestimonialsPerPage] = useState(3);

  // Adjust testimonials per page based on screen size
  useEffect(() => {
    const updatePerPage = () => {
      if (window.innerWidth < 640) {
        setTestimonialsPerPage(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setTestimonialsPerPage(2); // Tablet
      } else {
        setTestimonialsPerPage(3); // Desktop
      }
    };

    updatePerPage();
    window.addEventListener("resize", updatePerPage);
    return () => window.removeEventListener("resize", updatePerPage);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + testimonialsPerPage) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - testimonialsPerPage + testimonials.length) % testimonials.length);
  };

  const displayedTestimonials = testimonials.slice(currentTestimonialIndex, currentTestimonialIndex + testimonialsPerPage);
  if (displayedTestimonials.length < testimonialsPerPage) {
    displayedTestimonials.push(...testimonials.slice(0, testimonialsPerPage - displayedTestimonials.length));
  }

  return (
    <div className="min-h-screen py-16 px-4 font-inter antialiased flex flex-col items-center">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
          What Our Customers Say
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Hear from real people about their experiences with our service. Their feedback motivates us to improve every day.
        </p>
      </div>

      {/* Main container for the carousel */}
      <div className="flex items-center justify-center w-full max-w-7xl gap-4 md:gap-8">
        {/* Previous button */}
        <button
          onClick={prevTestimonial}
          className="p-2 rounded-full bg-slate-200 text-slate-700 hover:bg-slate-300 transition-colors z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Testimonial cards */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center flex-1">
          {displayedTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={nextTestimonial}
          className="p-2 rounded-full bg-slate-200 text-slate-700 hover:bg-slate-300 transition-colors z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
