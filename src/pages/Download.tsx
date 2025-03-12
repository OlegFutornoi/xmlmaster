
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/config/localeSettings';
import downloadSettings from '@/config/downloadSettings';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Apple, Windows, Terminal, Smartphone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Download: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].dashboard;
  const settings = downloadSettings[language];
  const { toast } = useToast();

  const getIconComponent = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      'Apple': <Apple className="h-5 w-5" />,
      'Windows': <Windows className="h-5 w-5" />,
      'Terminal': <Terminal className="h-5 w-5" />,
      'Smartphone': <Smartphone className="h-5 w-5" />
    };
    return icons[iconName] || <Windows className="h-5 w-5" />;
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

  return (
    <div className="space-y-10 pb-10">
      <div className="flex flex-col items-center justify-center text-center space-y-4 pt-10">
        <h1 className="text-4xl font-bold tracking-tight">{settings.title}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">{settings.description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <Card className="overflow-hidden backdrop-blur-sm bg-white/30 border-0 shadow-xl">
          <CardContent className="p-0">
            <img 
              src={settings.appImage} 
              alt="XmlMaster App" 
              className="w-full h-auto object-cover rounded-md"
            />
          </CardContent>
        </Card>

        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              {language === 'en' ? 'Available Platforms' : 'Доступні платформи'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {settings.downloadLinks.map((downloadLink) => (
                <Button
                  key={downloadLink.id}
                  variant="outline"
                  size="lg"
                  className="h-20 backdrop-blur-sm bg-white/30 border-0 shadow-md hover:shadow-lg transition-all justify-start gap-4 group"
                  onClick={() => handleDownload(downloadLink.platform, downloadLink.link)}
                >
                  <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                    {getIconComponent(downloadLink.icon)}
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-sm text-muted-foreground">
                      {language === 'en' ? 'Download for' : 'Завантажити для'}
                    </span>
                    <span className="font-semibold">{downloadLink.platform}</span>
                  </div>
                </Button>
              ))}
            </div>
          </div>

          <Card className="backdrop-blur-sm bg-white/30 border-0 shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                {language === 'en' ? 'System Requirements' : 'Системні вимоги'}
              </h3>
              <div className="space-y-2">
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
        </div>
      </div>
    </div>
  );
};

export default Download;
