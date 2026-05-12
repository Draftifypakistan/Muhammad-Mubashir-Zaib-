import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../../constants';

interface WhatsAppButtonProps {
  className?: string;
  text?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  className = "", 
  text = "Chat on WhatsApp",
  variant = 'primary'
}) => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}`;
  
  const variants = {
    primary: "bg-[#25D366] text-white hover:bg-[#128C7E]",
    secondary: "bg-blue-900 text-white hover:bg-blue-800",
    outline: "border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"
  };

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      id="whatsapp-cta"
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md ${variants[variant]} ${className}`}
    >
      <MessageCircle size={20} className="fill-current" />
      <span>{text}</span>
    </a>
  );
};
