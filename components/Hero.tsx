import { ArrowRight, TrendingUp, Users, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Industry Insights &
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {' '}Professional Guidance
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover expert insights across healthcare services, online retail, home care, and more. 
                Stay informed with industry trends and professional advice.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <span>Explore Industries</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                Read Latest Posts
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-6 w-6 text-emerald-600" />
                <span className="text-gray-600 font-medium">Latest Trends</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-6 w-6 text-blue-600" />
                <span className="text-gray-600 font-medium">Expert Authors</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-6 w-6 text-purple-600" />
                <span className="text-gray-600 font-medium">Global Reach</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-4">
                <div className="h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded-full w-full"></div>
                <div className="h-4 bg-gray-200 rounded-full w-5/6"></div>
                <div className="flex space-x-2 pt-4">
                  <div className="h-16 w-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-lg"></div>
                  <div className="h-16 w-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg"></div>
                  <div className="h-16 w-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg"></div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              New Posts Daily
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}