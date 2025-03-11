import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Download, 
  HelpCircle, 
  Receipt, 
  ChevronLeft,
  Menu
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/config/localeSettings';

interface SidebarProps {
  className?: string;
}

export interface MenuItem {
  titleKey: string;
  path: string;
  icon: React.ElementType;
}

const getMenuItems = (): MenuItem[] => [
  {
    titleKey: 'xmlmaster',
    path: '/',
    icon: Download
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

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].menu;
  const menuItems = getMenuItems();

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <aside 
      className={cn(
        "h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out",
        collapsed ? "w-[70px]" : "w-[240px]",
        className
      )}
    >
      <div className="h-full flex flex-col">
        <div className="p-4 flex justify-end">
          <button 
            onClick={toggleCollapse}
            className="p-2 rounded-full hover:bg-sidebar-accent transition-colors duration-200"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <Menu size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-6">
          <ul className="space-y-1 px-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center px-3 py-2 rounded-md text-sidebar-foreground hover:bg-sidebar-accent transition-colors duration-200",
                    "hover:text-sidebar-accent-foreground focus:outline-none",
                    window.location.pathname === item.path && "bg-sidebar-accent text-sidebar-accent-foreground"
                  )}
                >
                  <item.icon className={cn("h-5 w-5", collapsed ? "mx-auto" : "mr-3")} />
                  {!collapsed && <span className="text-sm font-medium">{t[item.titleKey]}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
