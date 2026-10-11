import { ShieldCheck, Flame, Filter, Leaf, Settings } from 'lucide-react';

const processes = [
  {
    title: 'Cleaning & Sourcing',
    icon: Leaf,
    description: 'Quality control begins at the farm level. We inspect samples for residue, moisture, and purity, ensuring raw materials are transported in sealed trucks and processed through advanced cleaning lines.',
  },
  {
    title: 'Dry De-Hulling',
    icon: Settings,
    description: 'As pioneers of dry hulling in Ethiopia, we remove the outer husk from grains and seeds. This improves quality, removes bitter compounds, and secures the pure edible kernel.',
  },
  {
    title: 'Sorting & Grading',
    icon: Filter,
    description: 'Our systematic separation processes classify seeds based on size, shape, color, and maturity, ensuring only premium-grade agricultural commodities are exported.',
  },
  {
    title: 'Roasting',
    icon: Flame,
    description: 'Using controlled dry heat, our roasting process creates rich flavors and aromas through precise caramelization, enhancing the profile of seeds and pulses.',
  },
  {
    title: 'Quality Assurance',
    icon: ShieldCheck,
    description: 'Delivery of top-tier products is guaranteed through rigorous lab testing, full traceability, and strict adherence to international export standards.',
  }
];

export default function Processing() {
  return (
    <section id="processing" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#D4A373] text-sm uppercase tracking-widest font-semibold">
            Value Addition
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#11231B] mt-4 mb-4">
            Advanced Processing Capabilities
          </h2>
          <p className="text-gray-600">
            From the initial harvest to final packaging, Primo utilizes state-of-the-art 
            machinery to clean, sort, and process agricultural commodities for global export.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processes.map((process, index) => {
            const Icon = process.icon;
            return (
              <div 
                key={index} 
                className="p-8 border border-gray-100 rounded-xl hover:border-[#D4A373] hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-[#F9F8F6] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#11231B] transition-colors duration-300">
                  <Icon className="w-7 h-7 text-[#11231B] group-hover:text-[#D4A373] transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-serif text-[#11231B] mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {process.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}