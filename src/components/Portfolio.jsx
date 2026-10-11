import { Maximize2 } from 'lucide-react';

// You can replace these with actual photos of your factory, warehouse, and shipments
import sortImg from '../assets/img/sorting.jpg'
import packImg from '../assets/img/about1.jpg'
import cleanImg from '../assets/img/cleaning.jpg'

const galleryItems = [
  {
    title: 'Farm-Level Aggregation',
    category: 'Sourcing',
    image: packImg
  },
  {
    title: 'Modern Dry-Hulling Line',
    category: 'Processing',
    image: cleanImg
  },
  {
    title: 'Color Sorting Machinery',
    category: 'Quality Control',
    image: sortImg
  },
  {
    title: 'Export Packaging',
    category: 'Logistics',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-[#F9F8F6]">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#D4A373] text-sm uppercase tracking-widest font-semibold">
            Our Operations
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#11231B] mt-3 mb-4">
            Supply Chain Portfolio
          </h2>
          <p className="text-gray-600">
            A visual tour of our facilities, from raw material sourcing in the Ethiopian highlands to final export-grade packaging.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <div key={index} className="group relative h-64 overflow-hidden rounded-xl cursor-pointer">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#11231B]/90 via-[#11231B]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Text Content */}
              <div className="absolute bottom-0 left-0 w-full p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-[#D4A373] text-[10px] uppercase tracking-widest font-bold mb-1">
                  {item.category}
                </div>
                <h3 className="text-white font-serif text-lg leading-tight">
                  {item.title}
                </h3>
              </div>

              {/* Hover Icon */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 className="w-4 h-4 text-white" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}