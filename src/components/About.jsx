import { Award, Globe2, Truck, Check } from 'lucide-react';

export default function About() {
  const highlights = [
    'Pioneered modern dry-hulling technology in Ethiopia',
    'Direct farm-gate aggregation and traceable supply chains',
    'Dedicated quality control lab for moisture, purity, and FFA tests',
    'Experienced export logistics through the Djibouti corridor'
  ];

  return (
    <section id="about" className="py-24 bg-[#F9F8F6]">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <span className="text-[#D4A373] text-sm uppercase tracking-widest font-semibold">
              About Primo Agro
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#11231B] mt-3 mb-6">
              Bridging Ethiopian Agriculture with Global Markets
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Primo Agro Industrial Trading PLC is a premier agricultural processor and exporter 
              headquartered in Ethiopia. We specialize in oilseeds, pulses, and select grains, 
              focusing on value-added processing that guarantees purity and food safety.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              By introducing industrial dry-hulling and multi-stage color grading, we provide international 
              buyers with export-ready commodities that conform to stringent European, Middle Eastern, 
              and Asian food standards.
            </p>

            <div className="space-y-3 mb-8">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#11231B] text-[#D4A373] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Value proposition cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <Award className="w-10 h-10 text-[#D4A373] mb-4" />
              <h3 className="font-serif text-lg text-[#11231B] mb-2">Quality First</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Standardized multi-tier inspection protocols from farm-gate intake to container stuffing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm sm:translate-y-6">
              <Truck className="w-10 h-10 text-[#D4A373] mb-4" />
              <h3 className="font-serif text-lg text-[#11231B] mb-2">Reliable Logistics</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Seamless multimodal transit and customs clearance via the Djibouti maritime gateway.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <Globe2 className="w-10 h-10 text-[#D4A373] mb-4" />
              <h3 className="font-serif text-lg text-[#11231B] mb-2">Global Standards</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Phytosanitary documentation, fumigation certificates, and third-party inspection readiness (SGS).
              </p>
            </div>

            <div className="bg-[#11231B] text-white p-6 rounded-xl shadow-sm sm:translate-y-6 flex flex-col justify-center">
              <div className="text-3xl font-serif text-[#D4A373] mb-1">100%</div>
              <div className="text-xs text-gray-300">
                Ethical sourcing and value addition within Ethiopian borders.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}