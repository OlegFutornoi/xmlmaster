
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useLanguage } from '@/context/LanguageContext';
import { YoutubeIcon, Info, Video } from 'lucide-react';
import helpSettings from '@/config/helpSettings';
import { useIsMobile } from '@/hooks/use-mobile';

const Help = () => {
  const { language } = useLanguage();
  const isMobile = useIsMobile();
  const settings = helpSettings[language];

  return (
    <div className="container mx-auto px-2 md:px-6 py-4 md:py-6">
      <div className="flex items-center gap-1 md:gap-2 mb-4 md:mb-8">
        <Info className="h-5 w-5 md:h-6 md:w-6 text-primary" />
        <h1 className="text-2xl md:text-3xl font-bold">{settings.title}</h1>
      </div>

      <Tabs defaultValue={`tab${settings.tabs[0]?.id || 1}`} className="w-full">
        <TabsList className="mb-4 md:mb-6 w-full flex flex-wrap justify-start gap-1 md:gap-2 px-1 py-1 md:p-1 h-auto">
          {settings.tabs.map((tab) => (
            <TabsTrigger 
              key={tab.id} 
              value={`tab${tab.id}`} 
              className="flex gap-1 md:gap-2 text-xs md:text-sm py-1.5 px-2 md:py-2 md:px-3"
            >
              <Video className="h-3 w-3 md:h-4 md:w-4" />
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {settings.tabs.map((tab) => (
          <TabsContent key={tab.id} value={`tab${tab.id}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              {tab.videos.map((video) => (
                <Dialog key={video.id}>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden cursor-pointer transition-all hover:shadow-md">
                      <div className="relative">
                        <img 
                          src={video.thumbnailUrl} 
                          alt={video.title} 
                          className="w-full object-cover"
                          style={{ height: isMobile ? '120px' : settings.videoThumbnailHeight }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition-all">
                          <YoutubeIcon className="h-8 w-8 md:h-12 md:w-12 text-red-600 bg-white rounded-full p-1 md:p-2" />
                        </div>
                      </div>
                      <CardContent className="p-2 md:p-4">
                        <h3 className="font-medium text-sm md:text-base">{video.title}</h3>
                        <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2">
                          {language === 'en' ? 'Click to watch video' : 'Натисніть, щоб переглянути відео'}
                        </p>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-[95vw] md:w-auto p-0 md:p-0">
                    <DialogHeader className="p-4 md:p-6">
                      <DialogTitle className="text-base md:text-lg">{video.title}</DialogTitle>
                    </DialogHeader>
                    <div className="aspect-video w-full">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${video.youtubeId}`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Help;
