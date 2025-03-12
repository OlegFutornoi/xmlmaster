
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/config/localeSettings';
import reviewsSettingsLocale from '@/config/reviewsSettings';
import dashboardSettingsLocale from '@/config/dashboardSettings';
import featuresSettingsLocale from '@/config/featuresSettings';

const Dashboard: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].dashboard;
  const reviews = reviewsSettingsLocale[language].reviews;
  const dashboardSettings = dashboardSettingsLocale[language];
  const features = featuresSettingsLocale[language].features;
  
  const [currentReview, setCurrentReview] = React.useState(0);
  const [currentFeature, setCurrentFeature] = React.useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextFeature = () => {
    setCurrentFeature((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const prevFeature = () => {
    setCurrentFeature((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  // Helper function to get the icon component
  const getIconComponent = (iconName: string) => {
    const icons = {
      Download: Download,
      Check: Check,
      TrendingUp: TrendingUp,
      MessageSquare: MessageSquare
    };
    return icons[iconName as keyof typeof icons] || Download;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">{t.title}</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">{t.lastUpdated}: Today at 09:15 AM</span>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {dashboardSettings.cards.map((card) => {
          const IconComponent = getIconComponent(card.icon);
          
          return (
            <Card key={card.id} className="backdrop-blur-sm bg-white/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                  <IconComponent className={`h-4 w-4 mr-2 text-${card.color}`} />
                  {t[card.titleKey]}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{card.value}</div>
                <p className="text-xs text-muted-foreground mt-1">{card.change} {t.fromLastMonth}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      {/* Customer Reviews - Full width */}
      <Card className="backdrop-blur-sm bg-white/50">
        <CardHeader>
          <CardTitle>{t.customerReviews}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative h-[400px] overflow-hidden">
            <button 
              onClick={prevReview} 
              className="absolute left-2 top-1/2 z-10 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <button 
              onClick={nextReview} 
              className="absolute right-2 top-1/2 z-10 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all"
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            
            <div className="flex h-full transition-all duration-500 ease-in-out" style={{ transform: `translateX(-${currentReview * 100}%)` }}>
              {reviews.map((review) => (
                <div key={review.id} className="min-w-full flex items-center p-8 gap-8">
                  <div className="w-96 h-80 rounded-lg overflow-hidden flex-shrink-0 border-2 border-gray-200">
                    <img 
                      src={review.image} 
                      alt={`${review.name} from ${review.company}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <blockquote className="text-2xl font-medium italic mb-8">
                      "{review.review}"
                    </blockquote>
                    <div className="mt-auto">
                      <p className="text-xl font-semibold">{review.name}</p>
                      <p className="text-lg text-muted-foreground">{review.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {reviews.map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => setCurrentReview(index)}
                  className={`w-2 h-2 rounded-full transition-all ${index === currentReview ? 'bg-primary w-4' : 'bg-gray-300'}`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Features Section */}
      <Card className="backdrop-blur-sm bg-white/50">
        <CardHeader>
          <CardTitle>Функціональні можливості</CardTitle>
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
                  <div className="w-96 h-80 rounded-lg overflow-hidden flex-shrink-0 border-2 border-gray-200">
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="w-full h-full object-cover"
                    />
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
    </div>
  );
};

export default Dashboard;
