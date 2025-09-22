'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function AboutPage() {
  const team = [
    {
      name: "Tanmoy Saha",
      bio: "Former VP of Operations at TechCorp with 15+ years of B2B experience.",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Sanhita Ghosh",
      bio: "Ex-Google engineer specializing in enterprise automation and AI solutions.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400"
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
            We're on a mission to service best quality healthcare service and best quality hospitality 
          </p>
        </section>

        {/* Story Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  At <span className="font-semibold text-primary">Pinakdev Healthcare & Hospitality</span>,
                  our journey began with a simple belief —{" "}
                  <span className="italic">healing should be compassionate, accessible, and dignified</span>.
                  We recognized that both healthcare and hospitality share one powerful foundation:{" "}
                  <span className="font-medium text-gray-900">care for people</span>.
                </p>

                <p>
                  Our healthcare services has been designed to ensure the best possible patient care in a comfortable and relaxed environment along with ease of access. This is an excellent facility for patients recovering from injury, sports injury, or post-operative rehabilitation. At RGS REHABCARE our goal is to provide the highest level of patient care.
                </p>

                <p>
                  In hospitality, we extend the same principles of comfort and trust.
                  Whether it’s through curated patient accommodations, supportive environments,
                  or staff trained to prioritize empathy, we make sure every individual
                  feels at home during their journey with us.
                </p>

                <p className="text-lg font-semibold text-primary">
                  For us, healthcare and hospitality are not two industries —
                  they are one shared mission:{" "}
                  <span className="underline decoration-primary">to serve people with excellence and compassion</span>.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/6749779/pexels-photo-6749779.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Caring healthcare team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white shadow-md rounded-lg p-4 w-64">
                <p className="text-sm font-medium text-gray-800">
                  <span className="text-primary font-bold">7+ Years</span> of trusted
                  service in patient care and hospitality excellence.
                </p>
              </div>
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