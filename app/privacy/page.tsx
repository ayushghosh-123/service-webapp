import React from "react";
import { Shield, Eye, Lock, Users, FileText, Clock } from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: [
        "Personal information you provide when subscribing to our newsletter",
        "Usage data and analytics to improve our content and user experience",
        "Cookies and similar tracking technologies for website functionality",
        "Comments and feedback you share on our blog posts",
      ],
    },
    {
      icon: Lock,
      title: "How We Use Your Information",
      content: [
        "Deliver personalized content and industry insights",
        "Send newsletters and updates about new blog posts",
        "Analyze website performance and user engagement",
        "Respond to your inquiries and provide customer support",
      ],
    },
    {
      icon: Users,
      title: "Information Sharing",
      content: [
        "We do not sell, trade, or rent your personal information to third parties",
        "We may share aggregated, non-personal data for analytics purposes",
        "Legal compliance: we may disclose information when required by law",
        "Service providers who help us operate our website (under strict confidentiality)",
      ],
    },
    {
      icon: Shield,
      title: "Data Security",
      content: [
        "Industry-standard encryption for all data transmission",
        "Secure servers with regular security updates and monitoring",
        "Limited access to personal data on a need-to-know basis",
        "Regular security audits and vulnerability assessments",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full">
              <Shield className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your information.
          </p>
          <div className="flex items-center justify-center space-x-2 mt-4 text-gray-500">
            <Clock className="h-4 w-4" />
            <span>Last updated: March 1, 2024</span>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-600 leading-relaxed">
            At IndustryBlog, we are committed to protecting your privacy and
            maintaining the confidentiality of your personal information. This
            Privacy Policy describes how we collect, use, disclose, and protect
            your information when you visit our website and use our services. By
            using our website, you consent to the practices described in this
            policy.
          </p>
        </div>

        {/* Main Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-3 rounded-lg">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {section.title}
                  </h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start space-x-3"
                    >
                      <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Additional Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900">Your Rights</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Access your personal data</li>
              <li>• Request data correction or deletion</li>
              <li>• Opt-out of marketing communications</li>
              <li>• Data portability rights</li>
              <li>• Lodge complaints with authorities</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-4">
              <Clock className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900">Data Retention</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We retain your personal information only for as long as necessary
              to fulfill the purposes outlined in this policy, comply with legal
              obligations, and resolve disputes.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mt-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h3>
          <p className="text-gray-600 mb-4">
            If you have any questions about this Privacy Policy or our data
            practices, please contact us:
          </p>
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>Email:</strong> privacy@industryblog.com
            </p>
            <p>
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
            <p>
              <strong>Address:</strong> 123 Privacy Lane, New York, NY 10001
            </p>
          </div>
        </div>

        {/* Cookies Policy */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Cookie Policy
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            We use cookies and similar technologies to enhance your browsing
            experience, analyze site traffic, and personalize content. You can
            manage your cookie preferences through your browser settings.
          </p>
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">
              Types of Cookies We Use:
            </h4>
            <ul className="space-y-1 text-gray-600">
              <li>
                • <strong>Essential Cookies:</strong> Required for website
                functionality
              </li>
              <li>
                • <strong>Analytics Cookies:</strong> Help us understand user
                behavior
              </li>
              <li>
                • <strong>Marketing Cookies:</strong> Used to deliver relevant
                advertisements
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
