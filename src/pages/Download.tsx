
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import downloadSettings from '@/config/downloadSettings';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Apple, Monitor, Terminal, Smartphone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

const Download: React.FC = () => {
  const { language } = useLanguage();
  const isMobile = useIsMobile();
  const settings = downloadSettings[language];
  const { toast } = useToast();

  const getIconComponent = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      'Apple': <Apple className="h-4 w-4 md:h-5 md:w-5" />,
      'Monitor': <Monitor className="h-4 w-4 md:h-5 md:w-5" />,
      'Terminal': <Terminal className="h-4 w-4 md:h-5 md:w-5" />,
      'Smartphone': <Smartphone className="h-4 w-4 md:h-5 md:w-5" />
    };
    return icons[iconName] || <Monitor className="h-4 w-4 md:h-5 md:w-5" />;
  };

  const handleDownload = (platform: string, link: string) => {
    window.open(link, '_blank');
    toast({
      title: language === 'en' ? 'Download started' : 'Завантаження почалося',
      description: language === 'en' 
        ? `Your ${platform} download has started.` 
        : `Ваше завантаження для ${platform} почалося.`,
      duration: 5000,
    });
  };

  // Filter visible platforms
  const visiblePlatforms = settings.downloadLinks.filter(platform => platform.visible);
  // Calculate grid columns based on number of visible platforms
  const gridClass = visiblePlatforms.length === 1 
    ? "w-full" 
    : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-4";

  return (
    <div className="space-y-6 md:space-y-8 pb-6 md:pb-10 px-2 md:px-0">
      <div className="flex flex-col items-center justify-center text-center space-y-2 md:space-y-4 pt-4 md:pt-10">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight">{settings.title}</h1>
        <p className="text-sm md:text-xl text-muted-foreground max-w-3xl">{settings.description}</p>
      </div>

      {/* Platforms section */}
      <div className="space-y-4 md:space-y-6">
        <h2 className="text-xl md:text-2xl font-bold text-center">
          {language === 'en' ? 'Available Platforms' : 'Доступні платформи'}
        </h2>
        
        <div className={gridClass}>
          {visiblePlatforms.map((downloadLink) => (
            <Button
              key={downloadLink.id}
              variant="outline"
              size={isMobile ? "default" : "lg"}
              className={`h-16 md:h-20 backdrop-blur-sm bg-white/30 border-0 shadow-md hover:shadow-lg transition-all justify-start gap-2 md:gap-4 group ${
                visiblePlatforms.length === 1 ? "mx-auto max-w-md" : "w-full"
              }`}
              onClick={() => handleDownload(downloadLink.platform, downloadLink.link)}
            >
              <div className="bg-primary/10 p-1.5 md:p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                {getIconComponent(downloadLink.icon)}
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xs md:text-sm text-muted-foreground">
                  {language === 'en' ? 'Download for' : 'Завантажити для'}
                </span>
                <span className="text-sm md:text-base font-semibold">{downloadLink.platform}</span>
              </div>
            </Button>
          ))}
        </div>
      </div>

      {/* App image */}
      <Card className="overflow-hidden backdrop-blur-sm bg-white/30 border-0 shadow-xl">
        <CardContent className="p-0">
          <img 
            src={settings.appImage} 
            alt="XmlMaster App" 
            className="w-full h-auto object-cover rounded-md"
            style={{ maxHeight: settings.appImageHeight }}
          />
        </CardContent>
      </Card>

      {/* System Requirements - only shown if enabled in settings */}
      {settings.showSystemRequirements && (
        <Card className="backdrop-blur-sm bg-white/30 border-0 shadow-md">
          <CardContent className="p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
              {language === 'en' ? 'System Requirements' : 'Системні вимоги'}
            </h3>
            <div className="space-y-2 text-sm md:text-base">
              <p className="flex items-center gap-2">
                <span className="font-medium">
                  {language === 'en' ? 'OS:' : 'ОС:'}
                </span> 
                <span className="text-muted-foreground">
                  {language === 'en' 
                    ? 'Windows 10/11, macOS 11+, Linux (Ubuntu 20.04+)' 
                    : 'Windows 10/11, macOS 11+, Linux (Ubuntu 20.04+)'}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-medium">
                  {language === 'en' ? 'RAM:' : 'ОЗУ:'}
                </span> 
                <span className="text-muted-foreground">
                  {language === 'en' ? '4 GB minimum, 8 GB recommended' : '4 ГБ мінімум, 8 ГБ рекомендовано'}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-medium">
                  {language === 'en' ? 'Storage:' : 'Сховище:'}
                </span> 
                <span className="text-muted-foreground">
                  {language === 'en' ? '500 MB free space' : '500 МБ вільного місця'}
                </span>
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Download;
