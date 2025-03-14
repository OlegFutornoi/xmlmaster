
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useLanguage } from '@/context/LanguageContext';
import { YoutubeIcon, Info, Video } from 'lucide-react';
import helpSettings from '@/config/helpSettings';

const Help = () => {
  const { language } = useLanguage();
  const settings = helpSettings[language];

  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center gap-2 mb-8">
        <Info className="h-6 w-6 text-primary" />
        <h1 className="text-3xl font-bold">{settings.title}</h1>
      </div>

      <Tabs defaultValue={`tab${settings.tabs[0]?.id || 1}`} className="w-full">
        <TabsList className="mb-6 w-full flex flex-wrap justify-start gap-2">
          {settings.tabs.map((tab) => (
            <TabsTrigger key={tab.id} value={`tab${tab.id}`} className="flex gap-2">
              <Video className="h-4 w-4" />
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {settings.tabs.map((tab) => (
          <TabsContent key={tab.id} value={`tab${tab.id}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tab.videos.map((video) => (
                <Dialog key={video.id}>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden cursor-pointer transition-all hover:shadow-md">
                      <div className="relative">
                        <img 
                          src={video.thumbnailUrl} 
                          alt={video.title} 
                          className="w-full object-cover"
                          style={{ height: settings.videoThumbnailHeight }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition-all">
                          <YoutubeIcon className="h-12 w-12 text-red-600 bg-white rounded-full p-2" />
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium">{video.title}</h3>
                        <p className="text-sm text-muted-foreground mt-2">
                          {language === 'en' ? 'Click to watch video' : 'Натисніть, щоб переглянути відео'}
                        </p>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-full">
                    <DialogHeader>
                      <DialogTitle>{video.title}</DialogTitle>
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
