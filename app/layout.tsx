import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'B2B Solutions - Transform Your Business',
  description: 'Empowering businesses with innovative B2B solutions. From automation to analytics, we help companies scale and succeed in the digital age.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <Navbar />
      <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
      </html>
      <Footer/>
    </ClerkProvider>
  );
}
