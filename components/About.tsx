'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function AboutPage() {
  const team = [
    {
      name: "Alex Rodriguez",
      role: "CEO & Co-Founder",
      bio: "Former VP of Operations at TechCorp with 15+ years of B2B experience.",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Sarah Chen",
      role: "CTO & Co-Founder",
      bio: "Ex-Google engineer specializing in enterprise automation and AI solutions.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Michael Johnson",
      role: "Head of Sales",
      bio: "B2B sales veteran with a track record of scaling revenue from $1M to $50M.",
      image: "https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="space-y-16 py-12">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About Pinakdev healthcare and hospitality
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're on a mission to empower businesses with intelligent automation and data-driven solutions 
            that drive growth, efficiency, and competitive advantage in the modern marketplace.
          </p>
        </section>

        {/* Story Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2020, B2B Solutions emerged from a simple observation: businesses were 
                  struggling to keep up with the pace of digital transformation. Our founders, 
                  Alex and Sarah, witnessed firsthand how manual processes and disconnected systems 
                  were holding back even the most innovative companies.
                </p>
                <p>
                  With backgrounds in enterprise technology and operations, they set out to build 
                  a platform that would make advanced automation and analytics accessible to 
                  businesses of all sizes. Today, we're proud to serve over 500 companies worldwide, 
                  helping them streamline operations and accelerate growth.
                </p>
                <p>
                  Our journey is just beginning. As we continue to innovate and expand our platform, 
                  we remain committed to our core mission: empowering businesses to achieve their 
                  full potential through intelligent technology solutions.
                </p>
              </div>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our team at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The experienced leaders driving innovation and growth at B2B Solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <Badge variant="secondary" className="mx-auto w-fit">{member.role}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {member.bio}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}