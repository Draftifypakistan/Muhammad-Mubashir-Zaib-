import React from 'react';
import { motion } from 'motion/react';
import { Bell, Calendar, ArrowRight } from 'lucide-react';
import { WhatsAppButton } from '../components/ui/WhatsAppButton';

const Updates: React.FC = () => {
  const news = [
    {
      date: "May 12, 2026",
      title: "New Service: Official Agreement Drafting",
      description: "We are now offering specialized drafting for legal and business agreements in both English and Urdu."
    },
    {
      date: "May 10, 2026",
      title: "Ramadan Special Office Support",
      description: "Get 20% off on bulk Urdu typing and PowerPoint presentation work this month."
    },
    {
      date: "May 05, 2026",
      title: "Remote IT Troubleshooting Enhanced",
      description: "Our team can now help you fix printer and software issues remotely via AnyDesk more efficiently."
    }
  ];

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
          >
            <Bell size={14} />
            News & Updates
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-black text-blue-900">What's New at Draftify Pakistan</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Stay updated with our latest services, offers, and company announcements.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {news.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="w-16 h-16 bg-blue-50 text-blue-900 rounded-2xl flex flex-col items-center justify-center flex-shrink-0">
                <Calendar size={20} />
                <span className="text-[10px] font-bold mt-1 uppercase text-center leading-tight">May<br/>2026</span>
              </div>
              <div className="flex-grow space-y-3">
                <p className="text-sm font-bold text-green-600 uppercase tracking-widest">{item.date}</p>
                <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
                <div className="pt-2">
                  <WhatsAppButton text="Inquire About This" variant="outline" className="text-sm" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-blue-900 text-white p-12 rounded-[3rem] text-center space-y-6">
           <h2 className="text-3xl font-bold">Subscribe via WhatsApp</h2>
           <p className="text-blue-100 max-w-xl mx-auto">
             Want to receive updates directly on your phone? Message us "UPDATE" to join our broadcast list for exclusive discounts.
           </p>
           <WhatsAppButton text="Join Update List" className="px-10" />
        </div>
      </div>
    </div>
  );
};

export default Updates;
