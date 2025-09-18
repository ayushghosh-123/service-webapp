'use client';

import React from 'react';
import { Home, BriefcaseBusiness } from 'lucide-react';
import { url } from 'inspector';

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const Card = ({ title, description, buttonText, icon, onClick }: CardProps) => {
  return (
    <div
      className="relative p-8 rounded-3xl border border-gray-200 bg-white shadow-lg 
                 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
    >
      <div className="flex flex-col h-full justify-between">
        <div className="flex items-center mb-4 text-black">
          <div className="p-3 bg-gray-100 rounded-full mr-4 text-black">
            {icon}
          </div>
          <h2 className="text-3xl font-extrabold">{title}</h2>
        </div>
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
          {description}
        </p>
        <button
          onClick={onClick}
          className="w-full bg-black text-white py-4 rounded-full text-lg font-bold 
                     shadow-md hover:bg-white hover:text-black hover:border-black border-2 transition-all duration-300"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default function App() {
  const handleHomeServiceClick = () => {
    window.location.href = 'https://rgsrehabcare.in/';
  };

  const handleB2BClick = () => {
    console.log("Navigating to B2B connection...");
    // Implement navigation logic here
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
          body {
            font-family: 'Inter', sans-serif;
          }
          .animate-fade-in-up {
            animation: fadeInUp 1s ease-out;
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
      <main className="min-h-screen flex flex-col items-center justify-center p-6 sm:p-8 bg-gray-100 text-black">
        <div className="text-center mb-8 md:mb-12 px-4 sm:px-0 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
            Book Your Path to Wellness
          </h1>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the service that best fits your needs and start your journey with our expert physiotherapists.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-10 w-full max-w-6xl animate-fade-in-up">
          {/* Home Service Box */}
          <Card
            title="Home Service Booking"
            description="Book professional physiotherapy sessions in the comfort of your own home. Easy scheduling with trusted experts."
            buttonText="Book Home Service"
            icon={<Home size={32} strokeWidth={2.5} />}
            onClick={handleHomeServiceClick}
          />

          {/* B2B Physiotherapy Box */}
          <Card
            title="B2B Physiotherapy Connection"
            description="Connect your business with certified physiotherapists for workplace wellness programs and corporate health partnerships."
            buttonText="Connect for B2B"
            icon={<BriefcaseBusiness size={32} strokeWidth={2.5} />}
            onClick={handleB2BClick}
          />
        </div>
      </main>
    </>
  );
}
