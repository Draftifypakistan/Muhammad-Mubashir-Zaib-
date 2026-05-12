import React from 'react';
import { motion } from 'motion/react';
import { WhatsAppButton } from '../components/ui/WhatsAppButton';
import { ShieldCheck, Clock, Award, Users } from 'lucide-react';
import { BUSINESS_NAME } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
               About {BUSINESS_NAME}
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Helping You Save Time with Professional Document & IT Support
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Drafity Pakistani, we understand that professional work requires precision, speed, and dedication. Founded by Muhammad Mubshirzaib, our mission is to handle your complex drafting, Urdu typing, and IT troubleshooting tasks so you can focus on what matters most to you.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We take pride in our reliability, clear communication, and commitment to delivering fast support for every client. Whether you are a student with an urgent assignment or a business owner needing official documentation, we are here to help.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 pt-6">
              {[
                { icon: ShieldCheck, title: "Reliability", desc: "Consistency you can count on for every task." },
                { icon: Clock, title: "Fast Delivery", desc: "Respecting your deadlines with quick turnarounds." },
                { icon: Award, title: "Professional", desc: "Expert formatting that meets industry standards." },
                { icon: Users, title: "Dedicated Support", desc: "Personalized attention to your specific needs." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 flex flex-wrap gap-4">
               <WhatsAppButton text="Contact Us Today" />
               <a href="tel:+923000000000" className="bg-gray-100 text-gray-800 px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-all">
                 Call Now
               </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
             <div className="aspect-[4/5] bg-gray-100 rounded-[3rem] overflow-hidden relative shadow-2xl">
                <img 
                   src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" 
                   alt="Office Environment" 
                   className="w-full h-full object-cover"
                   referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10 text-white text-center">
                   <p className="text-xl font-bold italic">"Your success is our achievement. We treat every document like it's our own."</p>
                </div>
             </div>
             {/* Decorative element */}
             <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-green-500 rounded-full blur-[80px] opacity-20" />
             <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-blue-500 rounded-full blur-[80px] opacity-20" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
