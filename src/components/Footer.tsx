import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { MenuItem } from './Sidebar';
import { 
  LayoutDashboard,
  Download, 
  HelpCircle, 
  Receipt,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/config/localeSettings';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const { language } = useLanguage();
  const t = translations[language].menu;
  
  const menuItems: MenuItem[] = [
    {
      titleKey: 'xmlmaster',
      path: '/',
      icon: LayoutDashboard
    },
    {
      titleKey: 'download',
      path: '/profile',
      icon: Download
    },
    {
      titleKey: 'pricing',
      path: '/reports',
      icon: Receipt
    },
    {
      titleKey: 'help',
      path: '/settings',
      icon: HelpCircle
    }
  ];

  return (
    <footer className={cn(
      "w-full border-t border-gray-100 py-6 bg-white bg-opacity-90 backdrop-blur-md mt-auto dark:bg-sidebar dark:border-sidebar-border",
      className
    )}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} XmlMaster. All rights reserved.
            </p>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center"
              >
                <item.icon className="h-3 w-3 mr-1" />
                <span>{t[item.titleKey]}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
