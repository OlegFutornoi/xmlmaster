
import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn(
      "w-full bg-white bg-opacity-90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 transition-all duration-300 ease-in-out py-4 px-6",
      className
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
            XMLMASTER
          </span>
        </div>

        {/* Contact Information */}
        <div className="hidden md:flex items-center space-x-6">
          <a 
            href="tel:+12345678901" 
            className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <Phone className="h-4 w-4 mr-2" />
            <span>+1 (234) 567-8901</span>
          </a>
          <a 
            href="mailto:contact@example.com" 
            className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <Mail className="h-4 w-4 mr-2" />
            <span>contact@example.com</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
