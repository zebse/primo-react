import { ArrowRight, PhoneForwarded } from 'lucide-react';

export default function Cta() {
  return (
    <section className="relative py-24 bg-[#11231B] text-white overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4A373] via-transparent to-transparent pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 sm:px-12 relative z-10 text-center">
        <h2 className="text-3xl sm:text-5xl font-serif mb-6 leading-tight">
          Ready to Source Premium <br className="hidden sm:block" />
          <span className="text-[#D4A373]">Ethiopian Commodities?</span>
        </h2>
        
        <p className="text-gray-300 text-lg mb-10 leading-relaxed font-light max-w-3xl mx-auto">
          PRIMO AGRO INDUSTRIAL TRADING PLC specializes in the export of premium agricultural products—including <span className="text-white font-medium">Seeds, Beans, Peas, Cereals, Ethiopian Spices, Grains, and Pulses</span>. This focused approach enables us to cultivate deep industry expertise and streamline operations for the global market. By concentrating on these select commodities, we secure steady demand and reliably supply diverse international markets with top-tier Ethiopian produce.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <a
            href="#quote"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#D4A373] hover:bg-[#c49363] text-[#11231B] font-bold tracking-wide uppercase text-sm rounded shadow-lg transition-all group"
          >
            Request Export Quote
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="https://wa.me/251954024287"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/30 hover:border-[#D4A373] hover:text-[#D4A373] text-white font-bold tracking-wide uppercase text-sm rounded transition-all group"
          >
            <PhoneForwarded className="mr-2 w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            Connect on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}