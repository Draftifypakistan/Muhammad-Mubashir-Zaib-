import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { WhatsAppButton } from '../components/ui/WhatsAppButton';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-blue-900"
          >
            Our Professional Services
          </motion.h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            We provide fast, reliable, and affordable services for students, office staff, and business owners in Pakistan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all h-full flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-white transition-all transform group-hover:rotate-6">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-8">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                   {[1, 2, 3].map(i => (
                     <li key={i} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                       <CheckCircle2 size={16} className="text-green-500" />
                       {i === 1 ? "Professional Quality" : i === 2 ? "Fast Turnaround" : "Affordable Price"}
                     </li>
                   ))}
                </ul>
              </div>
              <WhatsAppButton 
                text={`Order ${service.title}`} 
                variant="outline" 
                className="w-full py-4 text-lg"
              />
            </motion.div>
          ))}
        </div>

        {/* Custom Solution CTA */}
        <div className="mt-20 bg-gray-900 rounded-[3rem] p-8 md:p-16 text-center text-white space-y-8 relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">Don't see what you need?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              If you have a custom document or IT problem, feel free to explain it on WhatsApp. We provide tailored solutions for all kinds of office support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
               <WhatsAppButton text="Discuss Your Project" className="px-10 py-4" />
               <a href="tel:+923000000000" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full font-bold transition-all">
                 Call Now
               </a>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default Services;
