import { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

// Image imports (ensure these files exist in src/assets/img/)
import humeraImg from '../assets/img/Sesame-Seeds.jpeg';
import wollegaImg from '../assets/img/cards-4.jpg';
import mungBeanImg from '../assets/img/cards-3.jpg';
import peaBeanImg from '../assets/img/Hulled-Vs-Unhulled-Sesame.jpg';
import spiceImg from '../assets/img/spice2.jpg';
import sunImg from '../assets/img/sunflower.jpg'

const productsData = {
  sesame: [
    {
      name: 'Humera Type Sesame Seeds',
      description: 'Known globally for its sweet taste, white color, and high oil content. Ideal for bakery and confectionery.',
      image: humeraImg,
      specs: { Purity: '99.5% Min', Moisture: '7% Max', Admixture: '0.5% Max', FFA: '1.5% Max' }
    },
    {
      name: 'Wollega Type Sesame Seeds',
      description: 'Characterized by its higher oil content, making it the preferred choice for premium edible oil extraction.',
      image: wollegaImg,
      specs: { Purity: '99% Min', Moisture: '8% Max', OilContent: '51% Min', Admixture: '1% Max' }
    },
    {
      name: 'Ethiopian Sunflower Seeds',
      description: 'Premium grade sunflower seeds sourced from fertile Ethiopian highlands, ideal for oil extraction and direct consumption.',
      image: sunImg,
      specs: { Purity: '99% Min', Moisture: '9% Max', OilContent: '45% Min', Admixture: '1% Max' }
    }
  ],
  pulses: [
    {
      name: 'Green Mung Beans',
      description: 'Shoa variety green mung beans, double machine-cleaned and color-sorted for exceptional quality.',
      image: mungBeanImg,
      specs: { Purity: '99% Min', Moisture: '10% Max', Damage: '1% Max', ForeignMatter: '0.5% Max' }
    },
    {
      name: 'White Pea Beans (Navy Beans)',
      description: 'High-protein, uniform white pea beans processed for the canning and food service industries.',
      image: peaBeanImg,
      specs: { Purity: '99% Min', Moisture: '12% Max', Size: 'Uniform', Imperfect: '2% Max' }
    }
  ],
  spices: [ 
    {
      name: 'Ethiopian Spices & Cereals',
      description: 'A diverse selection of premium Ethiopian spices and native cereals, processed and packaged to retain maximum aroma and nutritional value.',
      image: spiceImg, // Uses the spice2.jpg from your old blog section
      specs: { Purity: '99% Min', Moisture: 'Varies', Processing: 'Cleaned & Sorted', Packaging: 'Export Standard' }
    }
  ]
};

export default function Products({ selectedCategory, onCategoryChange }) {
  // Local state fallback in case props aren't passed
  const [internalTab, setInternalTab] = useState('sesame');
  
  // Use controlled prop if supplied, otherwise fallback to local state
  const currentTab = selectedCategory || internalTab;
  const setTab = onCategoryChange || setInternalTab;

  return (
    <section id="products" className="py-24 bg-[#F9F8F6]">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif text-[#11231B] mb-4">
            Premium Export Commodities
          </h2>
          <p className="text-gray-600">
            Sourced directly from Ethiopian farmers and processed in our state-of-the-art facilities to meet strict international standards.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setTab('sesame')}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              currentTab === 'sesame' 
                ? 'bg-[#11231B] text-[#D4A373]' 
                : 'bg-white text-gray-500 border border-gray-200 hover:border-[#11231B]'
            }`}
          >
            Sesame Seeds
          </button>
          <button
            onClick={() => setTab('pulses')}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              currentTab === 'pulses' 
                ? 'bg-[#11231B] text-[#D4A373]' 
                : 'bg-white text-gray-500 border border-gray-200 hover:border-[#11231B]'
            }`}
          >
            Pulses & Beans
          </button>
          <button
            onClick={() => setTab('spices')}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              currentTab === 'spices' 
                ? 'bg-[#1B3B2B] text-[#D4A373]' 
                : 'bg-white text-gray-500 border border-gray-200 hover:border-[#1B3B2B]'
            }`}
          >
            Spices & Cereals
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {productsData[currentTab].map((product, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold tracking-wider text-[#11231B] uppercase">
                  Export Grade
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-serif text-[#11231B] mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-6 line-clamp-2">{product.description}</p>
                
                {/* Specifications Grid */}
                <div className="bg-[#F9F8F6] p-4 rounded-lg mb-6">
                  <h4 className="text-sm font-bold text-[#11231B] uppercase mb-3">Export Specifications</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4A373]" />
                        <span className="text-sm text-gray-700">
                          <span className="font-semibold">{key}:</span> {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <a href="#quote" className="inline-flex items-center gap-2 text-[#11231B] font-semibold hover:text-[#D4A373] transition-colors">
                  Inquire about this product <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}