import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    commodity: 'Humera Sesame',
    volume: '',
    incoterm: 'FOB Djibouti',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pre-fills a formatted WhatsApp inquiry
    const text = `Trade Inquiry from ${formData.fullName} (${formData.company}):%0A- Commodity: ${formData.commodity}%0A- Volume: ${formData.volume} MT%0A- Terms: ${formData.incoterm}%0A- Email: ${formData.email}%0A- Note: ${formData.message}`;
    window.open(`https://wa.me/251954024287?text=${text}`, '_blank');
  };

  return (
    <section id="quote" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Contact Details & Info */}
          <div className="lg:col-span-5">
            <span className="text-[#D4A373] text-sm uppercase tracking-widest font-semibold">
              Global Inquiries
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#11231B] mt-3 mb-6">
              Request an Export Quote
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Submit your commodity specifications, volume, and preferred delivery terms. 
              Our trade desk responds to all formal RFQs within 24 business hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#F9F8F6] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#11231B]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#11231B]">Headquarters</h4>
                  <p className="text-xs text-gray-600 mt-1">
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#F9F8F6] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#11231B]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#11231B]">Phone & WhatsApp Desk</h4>
                  <a href="tel:+251954024287" className="text-xs text-gray-600 mt-1 hover:text-[#11231B] block">
                    +251 95 402 4287
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#F9F8F6] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#11231B]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#11231B]">Export Sales Email</h4>
                  <a href="mailto:info@primoagro.com" className="text-xs text-gray-600 mt-1 hover:text-[#11231B] block">
                    info@primoagro.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-[#F9F8F6] rounded-xl border border-gray-100">
              <div className="flex items-center gap-3 mb-2 text-[#11231B]">
                <MessageSquare className="w-5 h-5 text-[#D4A373]" />
                <span className="font-semibold text-sm">Need immediate pricing?</span>
              </div>
              <p className="text-xs text-gray-600 mb-4">
                Direct export inquiries can be dispatched straight to our WhatsApp trading team.
              </p>
              <a
                href="https://wa.me/251954024287"
                target="_blank"
                rel="noreferrer"
                className="inline-block text-xs font-semibold px-4 py-2 bg-[#11231B] text-[#D4A373] rounded hover:bg-[#1b3b2b] transition"
              >
                Chat on WhatsApp Now
              </a>
            </div>
          </div>

          {/* RFQ Form */}
          <div className="lg:col-span-7 bg-[#F9F8F6] p-8 sm:p-10 rounded-2xl border border-gray-200">
            <h3 className="font-serif text-2xl text-[#11231B] mb-6">Trade Inquiry Form</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded focus:outline-none focus:border-[#11231B] text-sm"
                    placeholder="e.g. John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Company & Country</label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded focus:outline-none focus:border-[#11231B] text-sm"
                    placeholder="e.g. Global Foods Ltd (UAE)"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Business Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded focus:outline-none focus:border-[#11231B] text-sm"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Phone / WhatsApp</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded focus:outline-none focus:border-[#11231B] text-sm"
                    placeholder="+971 50 123 4567"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Commodity</label>
                  <select
                    name="commodity"
                    value={formData.commodity}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded focus:outline-none focus:border-[#11231B] text-sm"
                  >
                    <option>Humera Sesame</option>
                    <option>Wollega Sesame</option>
                    <option>Green Mung Beans</option>
                    <option>White Pea Beans</option>
                    <option>Other / Spices</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Volume (MT)</label>
                  <input
                    type="number"
                    name="volume"
                    value={formData.volume}
                    onChange={handleChange}
                    placeholder="e.g. 50"
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded focus:outline-none focus:border-[#11231B] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Shipping Term</label>
                  <select
                    name="incoterm"
                    value={formData.incoterm}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded focus:outline-none focus:border-[#11231B] text-sm"
                  >
                    <option>FOB Djibouti</option>
                    <option>CIF Destination Port</option>
                    <option>CFR Destination Port</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Specification Requirements</label>
                <textarea
                  rows="3"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="State required purity, packaging type (25kg/50kg PP bags), or destination port..."
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded focus:outline-none focus:border-[#11231B] text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#11231B] text-[#D4A373] hover:bg-[#1a382c] font-semibold rounded flex items-center justify-center gap-2 transition"
              >
                <Send className="w-4 h-4" /> Dispatch RFQ via WhatsApp
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}