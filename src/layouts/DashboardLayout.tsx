
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import { 
  Drawer, 
  DrawerContent, 
  DrawerTrigger, 
  DrawerClose 
} from '@/components/ui/drawer';
import { useIsMobile } from '@/hooks/use-mobile';
import { X } from 'lucide-react';

const DashboardLayout: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMobileMenu = () => {
    setIsDrawerOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950">
      <Header toggleMobileMenu={toggleMobileMenu} />
      <div className="flex flex-1 overflow-hidden">
        {/* Mobile drawer for sidebar */}
        {isMobile ? (
          <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <DrawerContent 
              className="h-[85vh] p-0 fixed inset-y-0 left-0 w-3/4 max-w-sm border-r data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left"
              side="left"
            >
              <div className="h-full overflow-y-auto relative">
                <button 
                  onClick={closeMobileMenu}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-sidebar-accent transition-colors duration-200 z-10"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
                <Sidebar className="w-full h-full static" onMenuItemClick={closeMobileMenu} hideMobileToggle={true} />
              </div>
            </DrawerContent>
          </Drawer>
        ) : (
          <Sidebar />
        )}
        
        <main className="flex-1 overflow-y-auto transition-all duration-300 ease-in-out">
          <div className="container py-8 px-4 md:px-6 max-w-7xl mx-auto animate-fade-in min-h-[calc(100vh-138px)]">
            <Outlet />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
