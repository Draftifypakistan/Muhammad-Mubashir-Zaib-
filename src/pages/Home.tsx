import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Zap,
  Check,
  ChevronDown,
  FileText,
  MessageCircle
} from 'lucide-react';
import { WhatsAppButton } from '../components/ui/WhatsAppButton';
import { SERVICES, FAQS, BUSINESS_NAME } from '../constants';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-green-50/30 py-16 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 size={14} />
                Professional Services in Pakistan
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1]">
                Need Professional <span className="relative inline-block">
                  <span className="relative z-10 text-blue-900">Document Work</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-100 rounded-sm -z-0"></span>
                </span> or <span className="relative inline-block">
                  <span className="relative z-10 text-green-600">IT Help?</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-green-100 rounded-sm -z-0"></span>
                </span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                From Word formatting and Excel sheets to PowerPoint presentations, Urdu typing, drafting, and IT troubleshooting, we help you complete your work quickly and professionally.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <WhatsAppButton text="Chat on WhatsApp" className="w-full sm:w-auto" />
                <a href="tel:+923000000000" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-900 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-800 transition-all shadow-md">
                  Call Now
                </a>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 pt-6 border-t border-gray-100">
                {[
                  "Fast delivery", "Affordable charges", "Online support",
                  "Professional formatting", "Urdu & English work", "Pakistan based"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm font-medium text-gray-500">
                    <Check className="text-green-500" size={16} />
                    {point}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 bg-white p-4 rounded-3xl shadow-2xl border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" 
                  alt="Work Desk" 
                  className="rounded-2xl w-full h-[450px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -left-6 bg-blue-900 text-white p-6 rounded-2xl shadow-xl space-y-2">
                   <p className="text-3xl font-bold">100%</p>
                   <p className="text-xs uppercase tracking-widest font-semibold opacity-80">Accuracy Guaranteed</p>
                </div>
                <div className="absolute -top-6 -right-6 bg-green-500 text-white p-6 rounded-2xl shadow-xl space-y-2">
                   <p className="text-3xl font-bold">Fast</p>
                   <p className="text-xs uppercase tracking-widest font-semibold opacity-80">Express Delivery</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Professional Services</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We provide a wide range of document-related and IT services to help students, professionals, and business owners.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.slice(0, 4).map((service, idx) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-8 rounded-3xl border border-gray-100 transition-all hover:bg-white hover:shadow-xl group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.description.substring(0, 80)}...
                </p>
                <Link to="/services" className="text-blue-900 font-bold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 text-green-600 font-bold hover:underline">
              View All 8+ Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Why Hundreds of Customers Trust Draftify Pakistan</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Fast Response", desc: "We reply within minutes to start your work immediately." },
                  { title: "Clean Formatting", desc: "Professional layouts that stand out for any audience." },
                  { title: "Affordable Pricing", desc: "High-quality work at rates that suit everyone." },
                  { title: "Urdu & English", desc: "Expert support for both national and international needs." },
                  { title: "Online Service", desc: "Direct support via WhatsApp, no need to visit in person." },
                  { title: "Confidential", desc: "We handle your files and data with total privacy." }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 size={20} />
                      <span className="font-bold">{item.title}</span>
                    </div>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-900 rounded-[3rem] p-10 text-white space-y-8 relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <blockquote className="text-2xl font-medium leading-relaxed italic">
                  "Our goal is to save your time by handling professional document work and IT problems with 100% accuracy and speed."
                </blockquote>
                <div className="flex items-center gap-4 mt-8 pt-8 border-t border-blue-800">
                  <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center font-bold text-lg">M</div>
                  <div>
                    <p className="font-bold">Muhammad Mubashir Zaib</p>
                    <p className="text-blue-300 text-sm">Founder, Draftify Pakistan</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
                 <FileText size={200} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-500">4 easy steps to get your professional work done.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Send Request", desc: "Send your requirements or file on WhatsApp." },
              { step: "02", title: "Get Quote", desc: "Receive transparent pricing and delivery time." },
              { step: "03", title: "Work Starts", desc: "Work starts immediately after your confirmation." },
              { step: "04", title: "Receive File", desc: "Get your completed file and request changes if needed." }
            ].map((item, idx) => (
              <div key={idx} className="relative group p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                <span className="text-6xl font-black text-gray-100 absolute -top-4 left-4 group-hover:text-blue-50 transition-colors z-0">
                  {item.step}
                </span>
                <div className="relative z-10 pt-4">
                  <h3 className="font-bold text-xl mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgent Work CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center md:text-left">
               <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                 <Zap size={12} />
                 Special Offer
               </div>
               <h2 className="text-3xl md:text-4xl font-bold">Need urgent work today?</h2>
               <p className="text-green-50 max-w-xl text-lg">
                 Send your file now and get quick support for urgent typing, formatting, presentations, Excel sheets, and IT issues.
               </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
               <a 
                 href={`https://wa.me/+923000000000`} 
                 className="bg-white text-green-600 px-8 py-4 rounded-xl font-black shadow-lg text-center hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
               >
                 <MessageCircle size={24} />
                 SEND FILE NOW
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500 text-sm">Everything you need to know about our services.</p>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-gray-900 group-open:bg-gray-50">
                  {faq.question}
                  <ChevronDown className="transition-transform group-open:rotate-180 text-gray-400" size={20} />
                </summary>
                <div className="p-6 pt-2 text-gray-600 text-sm leading-relaxed border-t border-gray-50">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final WhatsApp CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-blue-900 leading-tight">
              Ready to Get Your Work Done Professionally?
            </h2>
            <p className="text-xl text-gray-500">Join our happy customers and save time today.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <WhatsAppButton text="Chat on WhatsApp" className="text-xl px-12 py-5" />
            <div className="flex -space-x-3 items-center">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="rounded-full" referrerPolicy="no-referrer" />
                </div>
              ))}
              <span className="ml-4 text-sm font-bold text-gray-400">Trusted by 500+ Clients</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
