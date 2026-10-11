import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1611] text-gray-300 pt-20 pb-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <span className="font-serif text-2xl tracking-wider text-white font-bold">
                PRIMO<span className="text-[#D4A373]">.</span>
              </span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed mb-6 pr-4">
              Your trusted partner in the export of premium Ethiopian seeds, beans, peas, cereals, spices, and pulses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-[#D4A373] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> About Us</a></li>
              <li><a href="#processing" className="hover:text-[#D4A373] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Processing Capabilities</a></li>
              <li><a href="#portfolio" className="hover:text-[#D4A373] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Operations Portfolio</a></li>
              <li><a href="#blog" className="hover:text-[#D4A373] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Industry News</a></li>
            </ul>
          </div>

          {/* Commodities */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Export Commodities</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#products" className="hover:text-[#D4A373] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Humera & Wollega Sesame</a></li>
              <li><a href="#products" className="hover:text-[#D4A373] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Pulses & Beans</a></li>
              <li><a href="#products" className="hover:text-[#D4A373] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Ethiopian Cereals</a></li>
              <li><a href="#products" className="hover:text-[#D4A373] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Spices & Native Grains</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Trade Desk</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4A373] shrink-0" />
                <span>Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D4A373] shrink-0" />
                <a href="tel:+251954024287" className="hover:text-white transition-colors">+251 95 402 4287</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D4A373] shrink-0" />
                <a href="mailto:info@primoagro.com" className="hover:text-white transition-colors">info@primoagro.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {currentYear} PRIMO AGRO INDUSTRIAL TRADING PLC. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Trade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}