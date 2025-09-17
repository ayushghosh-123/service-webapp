import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Clock, Search, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of B2B Automation: Trends to Watch in 2024",
      excerpt: "Discover the latest trends shaping the B2B automation landscape and how they can transform your business operations for maximum efficiency.",
      category: "Automation",
      readTime: "5 min read",
      date: "Dec 15, 2024",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true
    },
    {
      id: 2,
      title: "Building Scalable B2B SaaS: Lessons from Industry Leaders",
      excerpt: "Learn from successful B2B SaaS companies and discover the key strategies for building scalable solutions that grow with your business.",
      category: "SaaS",
      readTime: "7 min read",
      date: "Dec 12, 2024",
      image: "https://images.pexels.com/photos/3184164/pexels-photo-3184164.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false
    },
    {
      id: 3,
      title: "Data-Driven Decision Making: A Complete Guide for B2B Companies",
      excerpt: "Transform your business strategy with data-driven insights and advanced analytics tools to stay ahead of the competition.",
      category: "Analytics",
      readTime: "6 min read",
      date: "Dec 10, 2024",
      image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false
    },
    {
      id: 4,
      title: "Cloud Migration Strategies for Enterprise B2B Companies",
      excerpt: "A comprehensive guide to successfully migrating your enterprise systems to the cloud while maintaining security and performance.",
      category: "Cloud",
      readTime: "8 min read",
      date: "Dec 8, 2024",
      image: "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false
    },
    {
      id: 5,
      title: "Maximizing ROI with B2B Marketing Automation",
      excerpt: "Discover how marketing automation can revolutionize your B2B marketing efforts and deliver measurable results for your business.",
      category: "Marketing",
      readTime: "5 min read",
      date: "Dec 5, 2024",
      image: "https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false
    },
    {
      id: 6,
      title: "The Rise of AI in B2B Customer Service",
      excerpt: "Explore how artificial intelligence is transforming B2B customer service and creating better experiences for clients and customers.",
      category: "AI",
      readTime: "6 min read",
      date: "Dec 3, 2024",
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false
    }
  ];

  const categories = ["All", "Automation", "SaaS", "Analytics", "Cloud", "Marketing", "AI"];

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            B2B Insights & Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay ahead with expert insights, industry trends, and practical strategies to grow your B2B business.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col lg:flex-row gap-4 mb-12">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input 
              placeholder="Search articles..." 
              className="pl-10 h-12"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post) => (
          <Card key={post.id} className="mb-12 overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="aspect-video lg:aspect-auto overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-primary/10 text-primary">Featured</Badge>
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                  <span>{post.date}</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 hover:text-primary transition-colors">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <Button className="w-fit">
                  <Link href={`/blog/${post.id}`} className="flex items-center">
                    Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        ))}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.featured).map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <CardTitle className="text-xl hover:text-primary transition-colors line-clamp-2">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </CardDescription>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                  <Button variant="ghost" className="p-0 h-auto">
                    <Link href={`/blog/${post.id}`} className="flex items-center text-primary">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}