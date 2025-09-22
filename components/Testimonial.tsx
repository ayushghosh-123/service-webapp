'use client'
import React, { useState } from 'react';

// Define the type for a single testimonial object.
interface Testimonial {
    id: number;
    name: string;
    quote: string;
    avatar: string;
    rating: number;
}

// Sample testimonial data.
const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Jane Doe",
        quote: "The service exceeded all my expectations. The team was responsive, professional, and delivered incredible results. I highly recommend them!",
        avatar: "https://placehold.co/100x100/A0B9D9/FFFFFF?text=JD",
        rating: 5,
    },
    {
        id: 2,
        name: "John Smith",
        quote: "A truly seamless experience from start to finish. The quality of their work is unmatched, and I'm very impressed with their dedication.",
        avatar: "https://placehold.co/100x100/F4C470/FFFFFF?text=JS",
        rating: 5,
    },
    {
        id: 3,
        name: "Emily White",
        quote: "I was a bit skeptical at first, but they proved me wrong! Fantastic support and a product that really works. I'll be a returning customer.",
        avatar: "https://placehold.co/100x100/98DD8B/FFFFFF?text=EW",
        rating: 4,
    },
    {
        id: 4,
        name: "Michael Chen",
        quote: "Excellent value for the price. The customer service was top-notch and they quickly resolved all my questions. Great job!",
        avatar: "https://placehold.co/100x100/F2A7A4/FFFFFF?text=MC",
        rating: 5,
    },
    {
        id: 5,
        name: "Sarah Parker",
        quote: "The team's creativity and attention to detail were amazing. They listened to my needs and brought my vision to life. A pleasure to work with.",
        avatar: "https://placehold.co/100x100/CE87B5/FFFFFF?text=SP",
        rating: 5,
    },
    {
        id: 6,
        name: "David Lee",
        quote: "I've used many services, but this one stands out. The communication was clear, the process was transparent, and the final outcome was perfect.",
        avatar: "https://placehold.co/100x100/80C4E7/FFFFFF?text=DL",
        rating: 4,
    },
];

// Component to render a single testimonial card with type-checked props.
const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-xl transition-all duration-500 ease-in-out">
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
                <div className="flex text-black mt-1">
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

// This is the main component of the application.
export default function App() {
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
    const testimonialsPerPage = 3;

    const nextTestimonial = () => {
        setCurrentTestimonialIndex((prev) => (prev + testimonialsPerPage) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonialIndex((prev) => (prev - testimonialsPerPage + testimonials.length) % testimonials.length);
    };

    // Get the three testimonials to display based on the current index.
    // Use a slice and handle the wrap-around logic for the carousel.
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
                    Hear from real people about their experiences with our service. Their feedback drives us to be better every day.
                </p>
            </div>

            {/* Main container for the carousel */}
            <div className="flex items-center justify-center w-full max-w-7xl gap-4 md:gap-8">

                {/* Previous button - now outside the main testimonial card container */}
                <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-full bg-slate-200 text-slate-700 hover:bg-slate-300 transition-colors z-10"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Current testimonial cards container */}
                <div className="flex flex-row gap-5 justify-center flex-1">
                    {displayedTestimonials.map((testimonial) => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    ))}
                </div>

                {/* Next button - now outside the main testimonial card container */}
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
