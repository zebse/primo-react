import { Calendar, User, ArrowRight } from 'lucide-react';

// Import the images from your local assets folder
import spiceImg from '../assets/img/spice2.jpg';
import exportImg from '../assets/img/cards-4.jpg';

const blogPosts = [
  {
    title: 'Agro processing',
    author: 'Ibsera',
    date: 'Dec 12',
    image: spiceImg,
    excerpt: 'PRIMO AGRO INDUSTRIAL TRADING PLC specializes in exporting agricultural products like seeds, beans, peas, cereals, Ethiopian spices, grains, and pulses. By focusing on these commodities, the company develops expertise and secures demand in diverse international markets.',
    link: '#'
  },
  {
    title: 'Your trusted partner in Ethiopian agricultural exports',
    author: 'Yonas Alemayehu',
    date: 'Sep 05',
    image: exportImg,
    excerpt: 'At Primo Agro Industrial Trading PLC, we specialize in exporting a wide range of high-quality agricultural products. Our focused approach allows us to cultivate expertise and streamline operations within the global agricultural market, ensuring we meet diverse needs.',
    link: '#'
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#D4A373] text-sm uppercase tracking-widest font-semibold">
              Industry Insights
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#11231B] mt-3">
              Recent News & Updates
            </h2>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-2 text-[#11231B] font-semibold hover:text-[#D4A373] transition-colors">
            View All Posts <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {blogPosts.map((post, index) => (
            <article key={index} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative h-72 w-full overflow-hidden rounded-2xl mb-6">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              {/* Meta Info */}
              <div className="flex items-center gap-4 text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#D4A373]" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-[#D4A373]" />
                  {post.author}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-serif text-[#11231B] mb-3 group-hover:text-[#D4A373] transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-5 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Read More Link */}
              <div className="inline-flex items-center gap-2 text-sm font-bold text-[#11231B] group-hover:text-[#D4A373] transition-colors uppercase tracking-wider">
                Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-10 text-center md:hidden">
          <a href="#" className="inline-flex items-center gap-2 text-[#11231B] font-semibold hover:text-[#D4A373] transition-colors border-b-2 border-[#11231B] hover:border-[#D4A373] pb-1">
            View All Posts <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}