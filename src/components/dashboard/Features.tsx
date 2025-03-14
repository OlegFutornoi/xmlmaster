
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Feature } from '@/config/featuresSettings';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/config/localeSettings';

interface FeaturesProps {
  features: Feature[];
}

const Features: React.FC<FeaturesProps> = ({ features }) => {
  const { language } = useLanguage();
  const t = translations[language].dashboard;
  const [currentFeature, setCurrentFeature] = React.useState(0);

  const nextFeature = () => {
    setCurrentFeature((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const prevFeature = () => {
    setCurrentFeature((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  return (
    <Card className="backdrop-blur-sm bg-white/50">
      <CardHeader>
        <CardTitle>{language === 'uk' ? 'Функціональні можливості' : 'Features'}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-[400px] overflow-hidden">
          <button 
            onClick={prevFeature} 
            className="absolute left-2 top-1/2 z-10 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all"
            aria-label="Previous feature"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button 
            onClick={nextFeature} 
            className="absolute right-2 top-1/2 z-10 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all"
            aria-label="Next feature"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          
          <div className="flex h-full transition-all duration-500 ease-in-out" style={{ transform: `translateX(-${currentFeature * 100}%)` }}>
            {features.map((feature) => (
              <div key={feature.id} className="min-w-full flex items-center p-8 gap-8">
                <div className="w-96 flex-shrink-0 border-2 border-gray-200 rounded-lg overflow-hidden">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-lg mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.features.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {features.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setCurrentFeature(index)}
                className={`w-2 h-2 rounded-full transition-all ${index === currentFeature ? 'bg-primary w-4' : 'bg-gray-300'}`}
                aria-label={`Go to feature ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Features;
