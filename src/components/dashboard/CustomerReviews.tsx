
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/config/localeSettings';
import { Review } from '@/config/reviewsSettings';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface CustomerReviewsProps {
  reviews: Review[];
}

const CustomerReviews: React.FC<CustomerReviewsProps> = ({ reviews }) => {
  const { language } = useLanguage();
  const t = translations[language].dashboard;
  const [currentReview, setCurrentReview] = React.useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
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
                <div className="w-96 flex-shrink-0 border-2 border-gray-200 rounded-lg overflow-hidden">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src={review.image} 
                      alt={`${review.name} from ${review.company}`} 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
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
  );
};

export default CustomerReviews;
