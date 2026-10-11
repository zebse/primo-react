import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowUpRight, Phone } from 'lucide-react';

export default function Navbar({ onSelectCategory }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [processingOpen, setProcessingOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState(null); // 'products' | 'processing' | null

  const productItems = [
    { name: 'Humera Sesame Seeds', tab: 'sesame', desc: 'Whitish, sweet taste for confectionery' },
    { name: 'Wollega Sesame Seeds', tab: 'sesame', desc: 'High oil yield for crushing & industrial use' },
    { name: 'Green Mung Beans', tab: 'pulses', desc: 'Shoa origin, double-cleaned & sorted' },
    { name: 'White Pea Beans', tab: 'pulses', desc: 'Export grade for canning & food service' },
    { name: 'Ethiopian Spices', tab: 'spices', desc: 'Premium native spices and cereals' }, // Added here
  ];

  const processingItems = [
    { name: 'Cleaning & Sourcing', anchor: '#processing', desc: 'Multi-stage destoning and farm-gate intake' },
    { name: 'Dry De-Hulling', anchor: '#processing', desc: 'Pioneer dry hulling technology in Ethiopia' },
    { name: 'Sorting & Grading', anchor: '#processing', desc: 'Optical color sorting and size calibration' },
    { name: 'Roasting', anchor: '#processing', desc: 'Even dry-heat roast for enhanced flavor' },
    { name: 'Quality Assurance', anchor: '#processing', desc: 'Phytosanitary & purity lab verification' },
  ];

  const handleProductClick = (tabKey) => {
    if (onSelectCategory) {
      onSelectCategory(tabKey);
    }
    const elem = document.getElementById('products');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    setProductsOpen(false);
    setMobileOpen(false);
  };

  const handleProcessingClick = () => {
    const elem = document.getElementById('processing');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    setProcessingOpen(false);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#11231B] text-white border-b border-white/10 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="font-serif text-2xl tracking-wider text-white font-bold">
            PRIMO<span className="text-[#D4A373]">.</span>
          </span>
          <span className="text-[10px] tracking-widest uppercase text-gray-400 border-l border-gray-700 pl-2 hidden sm:inline">
            Agro Industrial Trading
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            Home
          </a>

          {/* Products Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button 
              className="flex items-center gap-1 text-gray-300 hover:text-[#D4A373] py-2 transition-colors cursor-pointer"
              onClick={() => setProductsOpen(!productsOpen)}
            >
              Commodities <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productsOpen ? 'rotate-180 text-[#D4A373]' : ''}`} />
            </button>

            {productsOpen && (
              <div className="absolute top-full left-0 w-80 pt-2 z-50">
                <div className="bg-[#162E23] border border-white/15 rounded-xl shadow-2xl p-3 space-y-1">
                  <div className="px-3 py-1.5 text-[10px] uppercase tracking-widest text-[#D4A373] font-bold">
                    Export Specifications
                  </div>
                  {productItems.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleProductClick(item.tab)}
                      className="w-full text-left p-2.5 rounded-lg hover:bg-white/5 transition flex items-start justify-between group"
                    >
                      <div>
                        <div className="text-sm font-medium text-white group-hover:text-[#D4A373] transition">
                          {item.name}
                        </div>
                        <div className="text-xs text-gray-400 mt-0.5">
                          {item.desc}
                        </div>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#D4A373] shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Processing Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setProcessingOpen(true)}
            onMouseLeave={() => setProcessingOpen(false)}
          >
            <button 
              className="flex items-center gap-1 text-gray-300 hover:text-[#D4A373] py-2 transition-colors cursor-pointer"
              onClick={() => setProcessingOpen(!processingOpen)}
            >
              Processing <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${processingOpen ? 'rotate-180 text-[#D4A373]' : ''}`} />
            </button>

            {processingOpen && (
              <div className="absolute top-full left-0 w-80 pt-2 z-50">
                <div className="bg-[#162E23] border border-white/15 rounded-xl shadow-2xl p-3 space-y-1">
                  <div className="px-3 py-1.5 text-[10px] uppercase tracking-widest text-[#D4A373] font-bold">
                    Capabilities & Quality
                  </div>
                  {processingItems.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={handleProcessingClick}
                      className="w-full text-left p-2.5 rounded-lg hover:bg-white/5 transition flex items-start justify-between group"
                    >
                      <div>
                        <div className="text-sm font-medium text-white group-hover:text-[#D4A373] transition">
                          {item.name}
                        </div>
                        <div className="text-xs text-gray-400 mt-0.5">
                          {item.desc}
                        </div>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#D4A373] shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a href="#about" className="text-gray-300 hover:text-white transition-colors">
            About Us
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#quote"
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#D4A373] text-[#11231B] hover:bg-[#c29160] rounded transition"
          >
            Request Quote
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-white"
          aria-label="Toggle Navigation"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-white" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#162E23] border-b border-white/10 px-6 py-6 space-y-4">
          <a 
            href="#" 
            onClick={() => setMobileOpen(false)}
            className="block text-base font-medium text-white"
          >
            Home
          </a>

          {/* Mobile Accordion 1: Commodities */}
          <div>
            <button
              onClick={() => setMobileSubMenu(mobileSubMenu === 'products' ? null : 'products')}
              className="w-full flex items-center justify-between text-base font-medium text-white py-1"
            >
              <span>Commodities</span>
              <ChevronDown className={`w-4 h-4 transition ${mobileSubMenu === 'products' ? 'rotate-180 text-[#D4A373]' : ''}`} />
            </button>
            {mobileSubMenu === 'products' && (
              <div className="pl-4 mt-2 space-y-2 border-l border-white/10">
                {productItems.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleProductClick(item.tab)}
                    className="block text-sm text-gray-300 hover:text-[#D4A373] text-left py-1"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Accordion 2: Processing */}
          <div>
            <button
              onClick={() => setMobileSubMenu(mobileSubMenu === 'processing' ? null : 'processing')}
              className="w-full flex items-center justify-between text-base font-medium text-white py-1"
            >
              <span>Processing</span>
              <ChevronDown className={`w-4 h-4 transition ${mobileSubMenu === 'processing' ? 'rotate-180 text-[#D4A373]' : ''}`} />
            </button>
            {mobileSubMenu === 'processing' && (
              <div className="pl-4 mt-2 space-y-2 border-l border-white/10">
                {processingItems.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={handleProcessingClick}
                    className="block text-sm text-gray-300 hover:text-[#D4A373] text-left py-1"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a 
            href="#about" 
            onClick={() => setMobileOpen(false)}
            className="block text-base font-medium text-white"
          >
            About Us
          </a>

          <div className="pt-4 border-t border-white/10">
            <a
              href="#quote"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center py-3 text-sm font-semibold uppercase bg-[#D4A373] text-[#11231B] rounded"
            >
              Request Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}