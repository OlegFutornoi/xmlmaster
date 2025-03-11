
import React from 'react';
import { Mail, Phone, Youtube, Facebook, Instagram, Globe, Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import contactSettingsLocale from '@/config/contactSettings';
import { translations } from '@/config/localeSettings';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  
  const contactSettings = contactSettingsLocale[language];
  const t = translations[language];

  // Custom Telegram icon since it's not available in lucide-react
  const TelegramIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path d="M22 3 2 10l7 3 3 7 4-9 6-8Z" />
      <path d="m10 13-1.5 9 4.5-9" />
    </svg>
  );

  return (
    <header className={cn(
      "w-full bg-white bg-opacity-90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 transition-all duration-300 ease-in-out py-4 px-6",
      theme === 'dark' && 'bg-sidebar border-sidebar-border text-white',
      className
    )}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center">
          <span className={cn(
            "text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700",
            theme === 'dark' && 'from-slate-100 to-slate-300'
          )}>
            XMLMASTER
          </span>
        </div>

        {/* Social Media and Contact Information */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            <a 
              href={contactSettings.socialMedia.youtube.url}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <Youtube className="h-4 w-4" />
            </a>
            <a 
              href={contactSettings.socialMedia.facebook.url}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a 
              href={contactSettings.socialMedia.instagram.url}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a 
              href={contactSettings.socialMedia.telegram.url}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <TelegramIcon />
            </a>
          </div>
          
          {/* Contact Information */}
          <a 
            href={`tel:${contactSettings.contactInfo.phone}`} 
            className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <Phone className="h-4 w-4 mr-2" />
            <span className="text-sm">{contactSettings.contactInfo.phone}</span>
          </a>
          <a 
            href={`mailto:${contactSettings.contactInfo.email}`} 
            className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <Mail className="h-4 w-4 mr-2" />
            <span className="text-sm">{contactSettings.contactInfo.email}</span>
          </a>
          
          {/* Language Switcher */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setLanguage(language === 'en' ? 'uk' : 'en')}
            title={language === 'en' ? 'Switch to Ukrainian' : 'Switch to English'}
            className="h-8 w-8"
          >
            <Globe className="h-4 w-4" />
          </Button>
          
          {/* Theme Toggler */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            className="h-8 w-8"
          >
            {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
