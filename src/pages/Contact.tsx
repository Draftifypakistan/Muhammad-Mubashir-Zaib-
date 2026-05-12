import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Phone, Mail, Send, Upload, CheckCircle2 } from 'lucide-react';
import { WhatsAppButton } from '../components/ui/WhatsAppButton';
import { PHONE_NUMBER, EMAIL, SERVICES } from '../constants';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, you'd send this to a backend or use standard mailto/WA link
  };

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-black text-blue-900 leading-tight">Get in Touch</h1>
              <p className="text-lg text-gray-500 max-w-md">
                Send your file or explain your problem. We will guide you about time, price, and solution.
              </p>
            </div>

            <div className="space-y-8">
              <a 
                href={`https://wa.me/+923000000000`} 
                className="flex items-center gap-6 p-6 bg-green-50 rounded-3xl border border-green-100 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-green-500 text-white rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle size={28} />
                </div>
                <div>
                   <h4 className="text-lg font-bold text-gray-900">WhatsApp</h4>
                   <p className="text-green-700 font-medium">Chat Now for Instant Reply</p>
                </div>
              </a>

              <a 
                href={`tel:${PHONE_NUMBER}`} 
                className="flex items-center gap-6 p-6 bg-blue-50 rounded-3xl border border-blue-100 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-blue-900 text-white rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone size={28} />
                </div>
                <div>
                   <h4 className="text-lg font-bold text-gray-900">Call Now</h4>
                   <p className="text-blue-700 font-medium">{PHONE_NUMBER}</p>
                </div>
              </a>

              <a 
                href={`mailto:${EMAIL}`} 
                className="flex items-center gap-6 p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-gray-900 text-white rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail size={28} />
                </div>
                <div>
                   <h4 className="text-lg font-bold text-gray-900">Email Us</h4>
                   <p className="text-gray-600 font-medium">{EMAIL}</p>
                </div>
              </a>
            </div>

            <div className="bg-amber-50 p-6 rounded-3xl border border-amber-100 flex gap-4">
               <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center flex-shrink-0">!</div>
               <p className="text-sm text-amber-800">
                 <strong>Urgent work?</strong> We recommend using the <strong>WhatsApp</strong> button for the fastest response to emergency document requests.
               </p>
            </div>
          </div>

          {/* Lead Form */}
          <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-gray-100 relative">
            {isSubmitted ? (
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="flex flex-col items-center justify-center h-full text-center space-y-6 py-12"
               >
                 <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-200">
                   <CheckCircle2 size={40} />
                 </div>
                 <h2 className="text-3xl font-bold text-gray-900">Request Sent!</h2>
                 <p className="text-gray-600 max-w-sm">
                   Thank you for reaching out. Muhammad Mubashir Zaib will review your request and get back to you shortly via your preferred contact method.
                 </p>
                 <button 
                   onClick={() => setIsSubmitted(false)}
                   className="text-blue-900 font-bold hover:underline"
                 >
                   Send another request
                 </button>
               </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                 <div className="grid sm:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-700">Full Name</label>
                     <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900/10 transition-all" placeholder="Enter your name" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-700">WhatsApp Number</label>
                     <input required type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900/10 transition-all" placeholder="+92 300 0000000" />
                   </div>
                 </div>

                 <div className="space-y-2">
                   <label className="text-sm font-bold text-gray-700">Required Service</label>
                   <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900/10 transition-all">
                     {SERVICES.map(s => <option key={s.id}>{s.title}</option>)}
                     <option>Other / Custom Help</option>
                   </select>
                 </div>

                 <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Message / Problem Description</label>
                    <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900/10 transition-all" placeholder="How can we help you? Explain your task here..." />
                 </div>

                 <div className="grid sm:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-700">Deadline</label>
                     <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900/10 transition-all" placeholder="e.g., Today, 2 days, Urgently" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-700">Preferred Contact</label>
                     <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900/10 transition-all">
                       <option>WhatsApp</option>
                       <option>Phone Call</option>
                       <option>Email</option>
                     </select>
                   </div>
                 </div>

                 <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700 cursor-pointer p-4 border-2 border-dashed border-gray-200 rounded-xl hover:border-blue-300 transition-colors bg-gray-50/50">
                       <Upload size={18} />
                       <span>Upload File (Optional)</span>
                    </label>
                    <input type="file" className="hidden" />
                 </div>

                 <button type="submit" className="w-full bg-blue-900 text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-blue-900/20 hover:bg-blue-800 transition-all flex items-center justify-center gap-3 active:scale-[0.98]">
                   <Send size={20} />
                   SEND REQUEST
                 </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
