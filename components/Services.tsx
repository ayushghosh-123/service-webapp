import { Heart, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Industries() {
  const industries = [
    {
      icon: Heart,
      title: "Healthcare Services",
      description:
        "Comprehensive insights into medical practices, patient care, healthcare technology, and industry regulations.",
      features: [
        "Medical Technology",
        "Patient Care",
        "Healthcare Policy",
        "Industry Trends",
      ],
      color: "from-blue-500 to-teal-400",
      bgColor: "bg-blue-100",
      link: "/healtcare", // internal page
      posts: 12,
      type: "explore", // ✅ mark as explore
    },
    {
      icon: ShoppingBag,
      title: "Online Garments",
      description:
        "Fashion industry insights, e-commerce trends, sustainable fashion, and digital retail strategies.",
      features: [
        "Fashion Trends",
        "E-commerce",
        "Sustainable Fashion",
        "Retail Technology",
      ],
      color: "from-green-500 to-indigo-600",
      bgColor: "bg-green-50",
      link: "https://wa.me/917718535104", // WhatsApp
      posts: 8,
      type: "contact", // ✅ mark as contact
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-5xl mx-auto">
            Explore our comprehensive coverage across healthcare and online garment services,
            featuring expert insights, online booking, B2B Physiotherapy services, and home
            services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-row-2 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={index}
                className={`group ${industry.bgColor} rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-100`}
              >
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div
                      className={`bg-gradient-to-r ${industry.color} p-4 rounded-xl shadow-lg`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                      {industry.posts} posts
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {industry.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {industry.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                      Key Topics
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {industry.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-2 text-sm text-gray-700"
                        >
                          <div
                            className={`h-2 w-2 rounded-full bg-gradient-to-r ${industry.color}`}
                          ></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ✅ Conditional Button (Styled) */}
                  <div className="pt-6 border-t border-gray-200">
                    {industry.type === "contact" ? (
                      <a
                        href={industry.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-5 py-2 rounded-xl bg-green-500 text-white font-medium hover:bg-green-600 transition-colors shadow-md"
                      >
                        <span>Contact</span>
                        
                      </a>
                    ) : (
                      <Link
                        href={industry.link}
                        className="inline-flex items-center px-5 py-2 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors shadow-md"
                      >
                        <span>Explore More</span>
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
