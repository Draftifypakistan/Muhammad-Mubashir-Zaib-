import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_CATEGORIES } from '../constants';
import { WhatsAppButton } from '../components/ui/WhatsAppButton';
import { ExternalLink, CheckCircle } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-blue-900"
          >
            Our Work Portfolio
          </motion.h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Take a look at the types of professional work we handle daily for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_CATEGORIES.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col group"
            >
              <div className="h-48 bg-gray-100 flex items-center justify-center p-8 relative overflow-hidden">
                <GridBackground />
                <div className="relative z-10 w-full h-full bg-white rounded-xl shadow-inner border border-gray-200 p-4 flex flex-col gap-2">
                   <div className="h-4 w-3/4 bg-gray-50 rounded" />
                   <div className="h-3 w-1/2 bg-gray-50 rounded" />
                   <div className="mt-auto h-2 w-full bg-gray-50 rounded" />
                </div>
                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors" />
              </div>
              <div className="p-8 flex flex-col h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-500 text-sm mb-6 flex-grow">
                  {category.description}
                </p>
                <WhatsAppButton 
                   text="Request Similar Work" 
                   variant="outline" 
                   className="w-full text-sm py-3" 
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center bg-green-50 rounded-[3rem] p-12 text-center border-2 border-dashed border-green-100">
           <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-200">
             <CheckCircle size={32} />
           </div>
           <h2 className="text-2xl font-bold text-gray-900">Your Project is Next</h2>
           <p className="text-gray-600 mt-4 max-w-xl mx-auto">
             We handle every project with same attention to detail. Whether it's a single page or a multi-year archive, we ensure professional results.
           </p>
           <div className="mt-8">
              <WhatsAppButton text="Start Your Project Today" className="px-10" />
           </div>
        </div>
      </div>
    </div>
  );
};

const GridBackground = () => (
   <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
     <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
   </div>
);

export default Portfolio;
