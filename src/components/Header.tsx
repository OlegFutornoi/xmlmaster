
import React from 'react';
import { Mail, Phone, Youtube, Facebook, Instagram, Telegram, Moon, Sun, Globe } from 'lucide-react';
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

  return (
    <header className={cn(
      "w-full bg-white bg-opacity-90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 transition-all duration-300 ease-in-out py-4 px-6",
      theme === 'dark' && 'bg-sidebar border-sidebar-border text-white',
      className
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
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
        <div className="hidden md:flex items-center space-x-6">
          {/* Social Media Icons */}
          <div className="flex items-center space-x-4 mr-4">
            <a 
              href={contactSettings.socialMedia.youtube.url}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="h-4 w-4" />
            </a>
            <a 
              href={contactSettings.socialMedia.facebook.url}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a 
              href={contactSettings.socialMedia.instagram.url}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a 
              href={contactSettings.socialMedia.telegram.url}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Telegram className="h-4 w-4" />
            </a>
          </div>
          
          {/* Contact Information */}
          <a 
            href={`tel:${contactSettings.contactInfo.phone}`} 
            className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <Phone className="h-4 w-4 mr-2" />
            <span>{contactSettings.contactInfo.phone}</span>
          </a>
          <a 
            href={`mailto:${contactSettings.contactInfo.email}`} 
            className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <Mail className="h-4 w-4 mr-2" />
            <span>{contactSettings.contactInfo.email}</span>
          </a>
          
          {/* Language Switcher */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setLanguage(language === 'en' ? 'uk' : 'en')}
            title={language === 'en' ? 'Switch to Ukrainian' : 'Switch to English'}
          >
            <Globe className="h-4 w-4" />
          </Button>
          
          {/* Theme Toggler */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          >
            {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
