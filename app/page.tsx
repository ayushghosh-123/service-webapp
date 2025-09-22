import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Clock, ScanHeart, ShoppingBag, House } from 'lucide-react';
import Hero from '@/components/Hero';
import Services from '@/components/Services'
import About from '@/components/About'
import Testimonial from '@/components/Testimonial'


export default function HomePage() {
  const features = [
    {
      icon: <ScanHeart className="h-8 w-8" />,
      title: "Health Care Service",
      description: "Provides best ."
    },
    {
      icon: <ShoppingBag  className="h-6 w-6" />,
      title: " Online Garment ",
      description: "Bank-grade security to protect your sensitive business data."
    },
    {
      icon: <House  className="h-6 w-6" />,
      title: "Home Care Services",
      description: "Solutions that grow with your business, from startup to enterprise."
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of B2B Automation: Trends to Watch in 2024",
      excerpt: "Discover the latest trends shaping the B2B automation landscape and how they can transform your business operations.",
      category: "Automation",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Building Scalable B2B SaaS: Lessons from Industry Leaders",
      excerpt: "Learn from successful B2B SaaS companies and discover the key strategies for building scalable solutions.",
      category: "SaaS",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/3184164/pexels-photo-3184164.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Data-Driven Decision Making: A Complete Guide for B2B Companies",
      excerpt: "Transform your business strategy with data-driven insights and advanced analytics tools.",
      category: "Analytics",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      
      <main className="space-y-16 pb-16">
        {/* Hero Section */}
        <Hero/>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Pinakdev healthcare and hospitality?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We Provides you the best Healtcare , online Garment and Home Care services 
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-600">Enterprise Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-gray-600">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-gray-600">Expert Support</div>
              </div>
            </div>
          </div>
        </section>

        
        {/* Industry and Services  */}

          <Services/>

        {/* About Us */}
        <About/>

        {/* Blog Preview Section */}
           <Testimonial/>       

      
      </main>
    </div>
  );
}