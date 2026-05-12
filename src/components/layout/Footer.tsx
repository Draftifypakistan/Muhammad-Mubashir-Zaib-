import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { BUSINESS_NAME, WHATSAPP_NUMBER, PHONE_NUMBER, EMAIL } from '../../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-24 md:pb-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white tracking-tight">
              Drafity <span className="text-green-500">Pakistani</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Professional drafting, Urdu typing, Office files, and IT troubleshooting services in Pakistan.
            </p>
            <div className="flex space-x-4 pt-2">
               <a href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}`} className="text-gray-400 hover:text-green-500 transition-colors">
                  <MessageCircle size={20} />
               </a>
               <a href={`tel:${PHONE_NUMBER}`} className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Phone size={20} />
               </a>
               <a href={`mailto:${EMAIL}`} className="text-gray-400 hover:text-red-400 transition-colors">
                  <Mail size={20} />
               </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Serving clients across Pakistan & Online</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">{PHONE_NUMBER}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">{EMAIL}</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold mb-6">Policies</h4>
            <ul className="space-y-4">
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">Terms & Conditions</Link></li>
              <li className="pt-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="text-[10px] text-gray-500 leading-tight">
                    Privacy Note: Your files and personal information are handled carefully and are not shared with anyone.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center pb-8">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
