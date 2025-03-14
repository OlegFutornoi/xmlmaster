
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Play } from 'lucide-react';
import { Feature } from '@/config/featuresSettings';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/config/localeSettings';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

interface FeaturesProps {
  features: Feature[];
  showSliderControls?: boolean;
}

const Features: React.FC<FeaturesProps> = ({ features, showSliderControls }) => {
  const { language } = useLanguage();
  const isMobile = useIsMobile();
  const t = translations[language].dashboard;
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedFeatureId, setSelectedFeatureId] = useState<number | null>(null);
  
  // Determine if we should show slider controls
  // If showSliderControls is explicitly provided, use it
  // Otherwise, only show controls if there's more than one feature
  const shouldShowControls = showSliderControls !== undefined 
    ? showSliderControls 
    : features.length > 1;

  const handleFeatureClick = (featureId: number) => {
    setSelectedFeatureId(featureId);
    setOpenDialog(true);
  };

  return (
    <Card className="backdrop-blur-sm bg-white/50">
      <CardHeader className="px-4 py-3 md:p-6">
        <CardTitle className="text-xl md:text-2xl">{language === 'uk' ? 'Функціональні можливості' : 'Features'}</CardTitle>
      </CardHeader>
      <CardContent className="px-4 pb-4 md:px-6 md:pb-6">
        <Carousel className="w-full">
          <CarouselContent>
            {features.map((feature) => (
              <CarouselItem key={feature.id}>
                <div 
                  className="cursor-pointer relative group" 
                  onClick={() => handleFeatureClick(feature.id)}
                >
                  <AspectRatio ratio={16/9} className="overflow-hidden rounded-lg border-2 border-gray-200">
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-black/60 p-2 md:p-4 rounded-full">
                        <Play className="h-6 w-6 md:h-8 md:w-8 text-white" />
                      </div>
                    </div>
                  </AspectRatio>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {shouldShowControls && (
            <>
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 md:h-10 md:w-10" />
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 md:h-10 md:w-10" />
            </>
          )}
        </Carousel>

        {/* Video Dialog */}
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogContent className="max-w-4xl p-0 w-[95vw] md:w-auto">
            {selectedFeatureId && (
              <div className="aspect-video">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={`https://www.youtube.com/embed/${features.find(f => f.id === selectedFeatureId)?.videoUrl || 'dQw4w9WgXcQ'}`} 
                  title={features.find(f => f.id === selectedFeatureId)?.title || 'Video'} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default Features;
