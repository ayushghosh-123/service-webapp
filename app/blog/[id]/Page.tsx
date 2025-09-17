import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Clock, Calendar, User, Share2, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BlogPost({ params }: { params: { id: string } }) {
  // Mock blog post data
  const post = {
    id: 1,
    title: "The Future of B2B Automation: Trends to Watch in 2024",
    content: `
      <p>The B2B landscape is evolving rapidly, with automation at the forefront of this transformation. As we move through 2024, businesses are increasingly recognizing the critical role that intelligent automation plays in driving efficiency, reducing costs, and enhancing customer experiences.</p>
      
      <h2>Key Automation Trends Shaping B2B</h2>
      
      <p>Artificial Intelligence and Machine Learning are no longer buzzwords—they're becoming essential components of successful B2B operations. From predictive analytics that help forecast demand to intelligent chatbots that handle customer inquiries, AI-driven automation is revolutionizing how businesses operate.</p>
      
      <h3>1. Intelligent Process Automation (IPA)</h3>
      <p>IPA combines traditional robotic process automation (RPA) with AI capabilities, creating systems that can learn and adapt. This technology is particularly valuable for complex B2B workflows that require decision-making capabilities beyond simple rule-based automation.</p>
      
      <h3>2. Customer Journey Automation</h3>
      <p>Modern B2B buyers expect personalized experiences throughout their journey. Advanced automation tools can now track and respond to buyer behavior in real-time, delivering the right content at the right moment to move prospects through the sales funnel more effectively.</p>
      
      <h3>3. Integration-First Approach</h3>
      <p>The most successful B2B automation implementations focus on seamless integration across all business systems. This holistic approach ensures data flows smoothly between departments, creating a unified view of customer interactions and business performance.</p>
      
      <h2>Implementation Best Practices</h2>
      
      <p>Successfully implementing B2B automation requires careful planning and execution. Start with a comprehensive audit of existing processes to identify automation opportunities that will deliver the highest ROI. Focus on processes that are:</p>
      
      <ul>
        <li>Repetitive and time-consuming</li>
        <li>Prone to human error</li>
        <li>Critical to business operations</li>
        <li>Data-driven with clear rules</li>
      </ul>
      
      <h2>Looking Ahead</h2>
      
      <p>As automation technology continues to advance, we can expect to see even more sophisticated applications in the B2B space. The companies that embrace these changes now will be best positioned to compete effectively in the increasingly digital marketplace.</p>
      
      <p>The future of B2B automation is bright, with endless possibilities for innovation and improvement. By staying informed about emerging trends and best practices, businesses can harness the full potential of automation to drive growth and success.</p>
    `,
    category: "Automation",
    readTime: "5 min read",
    date: "December 15, 2024",
    author: "Sarah Chen",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200"
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Button variant="ghost" className="mb-8" asChild>
          <Link href="/blog">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </Button>

        {/* Article Header */}
        <div className="mb-8">
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="aspect-video rounded-lg overflow-hidden mb-12">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div 
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="space-y-6 leading-relaxed [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-12 [&>h2]:mb-6 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-8 [&>h3]:mb-4 [&>p]:mb-6 [&>ul]:mb-6 [&>ul]:ml-6 [&>li]:mb-2"
          />
        </div>

        <Separator className="my-12" />

        {/* Author Bio */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
              {post.author.charAt(0)}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{post.author}</h3>
              <p className="text-gray-600 leading-relaxed">
                Sarah is a B2B technology strategist with over 10 years of experience helping companies implement 
                automation solutions. She specializes in digital transformation and has worked with Fortune 500 
                companies across various industries.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Automate Your B2B Processes?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Discover how our automation solutions can transform your business operations and drive growth.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
            Get Started Today
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}