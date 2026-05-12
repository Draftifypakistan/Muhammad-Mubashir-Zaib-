import React from 'react';
import { MessageCircle, Phone, Grid } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WHATSAPP_NUMBER, PHONE_NUMBER } from '../../constants';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-[60] px-2 py-3 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-between gap-2">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#25D366] text-white flex items-center justify-center gap-1.5 py-3 rounded-xl font-bold text-sm shadow-sm active:scale-95 transition-transform"
        >
          <MessageCircle size={18} />
          <span>WhatsApp</span>
        </a>
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="flex-1 bg-blue-900 text-white flex items-center justify-center gap-1.5 py-3 rounded-xl font-bold text-sm shadow-sm active:scale-95 transition-transform"
        >
          <Phone size={18} />
          <span>Call Now</span>
        </a>
        <Link
          to="/services"
          className="flex-1 bg-gray-100 text-gray-800 flex items-center justify-center gap-1.5 py-3 rounded-xl font-bold text-sm shadow-sm active:scale-95 transition-transform"
        >
          <Grid size={18} />
          <span>Services</span>
        </Link>
      </div>
    </div>
  );
};
