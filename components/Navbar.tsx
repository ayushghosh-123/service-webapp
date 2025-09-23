'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Industries', href: '/industries' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo Section */}
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-1 sm:space-x-2">
              <Image
                src="/logo.svg"
                alt="Pinakdev Logo"
                width={40}
                height={40}
                className="h-10 w-10 sm:h-12 sm:w-12"
                priority
              />
              <span className="text-lg sm:text-xl font-bold text-gray-900">
                Pinakdev
              </span>
            </Link>
          </div>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(item.href)
                    ? 'text-primary bg-primary/10'
                    : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/918617073641"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white text-sm sm:text-base font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg 
               hover:bg-gray-900 hover:scale-105 transition-all duration-300 inline-block"
            >
              Online Booking
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-4 py-4 space-y-2 bg-white border-t rounded-b-lg shadow-md">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive(item.href)
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-3 border-t flex justify-center">
                <a
                  href="https://wa.me/918617073641"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-black text-white text-base font-semibold px-4 py-2 rounded-lg shadow-md 
                   hover:bg-gray-900 transition-all duration-300"
                >
                  Online Booking
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
