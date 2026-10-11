import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Globe, Ship, Settings } from 'lucide-react';

// Modules
import Navbar from './components/Navbar';
import Products from './components/Products';
import Processing from './components/Processing';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Blog from './components/Blog';
import Cta from './components/Cta';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Hero Images
import heroImg1 from './assets/img/sesame.jpg'; 
import heroImg2 from './assets/img/cards-3.jpg';
import heroImg3 from './assets/img/Hulled-Vs-Unhulled-Sesame.jpg';
import heroImg4 from './assets/img/pulse.jpg'

const heroImages = [heroImg1, heroImg2, heroImg3, heroImg4];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    // ADDED: bg-[#11231B] here ensures the background is always dark, preventing white flashes
    <section id="home" className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 sm:px-8 overflow-hidden min-h-screen flex items-center bg-[#11231B]">
      
      {/* Background Slider */}
      {heroImages.map((img, index) => (
        <div
          key={index}
          // REMOVED: z-index toggling. Just using opacity creates a flawless crossfade
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={img} 
            alt="Primo Agro Facility" 
            className="w-full h-full object-cover scale-105" 
          />
          {/* The dark overlay that sits on top of each image */}
          <div className="absolute inset-0 bg-[#11231B]/85"></div>
        </div>
      ))}

      {/* Static Foreground Content */}
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="max-w-3xl">
          <span className="inline-flex items-center text-[#D4A373] text-sm uppercase tracking-[0.2em] font-semibold mb-6">
            <span className="w-10 h-[2px] bg-[#D4A373] mr-4"></span>
            Ethiopian Agricultural Exporter
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif mt-2 mb-8 leading-[1.15] text-white">
            Premium Sesame & <br />
            <span className="text-[#D4A373]">Agricultural Pulses.</span>
          </h1>
          
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl font-light">
            Primo Agro Industrial Trading PLC delivers sustainably sourced, dry-hulled, 
            and precision-sorted commodities to international markets worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 mb-16">
            <a
              href="#quote"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#D4A373] hover:bg-[#c49363] text-[#11231B] font-semibold text-base rounded transition-all shadow-lg hover:shadow-xl group"
            >
              Request Export Quote
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#D4A373] hover:bg-[#D4A373]/10 text-[#D4A373] font-medium text-base rounded transition-all"
            >
              Explore Products
            </a>
          </div>
        </div>

        {/* Export Metric Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 mt-16 pt-12 border-t border-white/20">
          <div className="group">
            <div className="flex items-center text-3xl sm:text-4xl font-serif text-[#D4A373] mb-3">
              <CheckCircle2 size={28} className="mr-3 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
              99.5%+
            </div>
            <div className="text-sm sm:text-base text-white font-medium tracking-wide">Purity Grade</div>
            <div className="text-sm text-gray-300 mt-1 font-light">Export quality guaranteed</div>
          </div>
          
          <div className="group">
            <div className="flex items-center text-3xl sm:text-4xl font-serif text-[#D4A373] mb-3">
              <Settings size={28} className="mr-3 opacity-80 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-500" />
              Pioneer
            </div>
            <div className="text-sm sm:text-base text-white font-medium tracking-wide">Dry Hulling Tech</div>
            <div className="text-sm text-gray-300 mt-1 font-light">Advanced processing facilities</div>
          </div>
          
          <div className="group">
            <div className="flex items-center text-3xl sm:text-4xl font-serif text-[#D4A373] mb-3">
              <Ship size={28} className="mr-3 opacity-80 group-hover:opacity-100 group-hover:-translate-y-1 transition-all" />
              FOB / CIF
            </div>
            <div className="text-sm sm:text-base text-white font-medium tracking-wide">Global Shipping</div>
            <div className="text-sm text-gray-300 mt-1 font-light">Djibouti port logistics</div>
          </div>
          
          <div className="group">
            <div className="flex items-center text-3xl sm:text-4xl font-serif text-[#D4A373] mb-3">
              <Globe size={28} className="mr-3 opacity-80 group-hover:opacity-100 group-hover:rotate-12 transition-all" />
              Global
            </div>
            <div className="text-sm sm:text-base text-white font-medium tracking-wide">Export Reach</div>
            <div className="text-sm text-gray-300 mt-1 font-light">Asia, Europe & Middle East</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('sesame');

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-[#D4A373] selection:text-[#11231B]">
      <Navbar onSelectCategory={setSelectedCategory} />
      
      <main>
        <Hero />
        <Products 
          selectedCategory={selectedCategory} 
          onCategoryChange={setSelectedCategory} 
        />
        <Processing />
        <Portfolio />
        <About />
        <Blog />
        <Cta />
        <Contact />
      </main>

      <Footer />

      {/* WhatsApp Quick Trigger */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/251954024287"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-all text-sm font-semibold"
        >
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}