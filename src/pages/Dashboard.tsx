import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { Download, Check, TrendingUp, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/config/localeSettings';
import reviewsSettingsLocale from '@/config/reviewsSettings';
import dashboardSettingsLocale from '@/config/dashboardSettings';

// Sample data for charts
const data = [
  { name: 'Jan', value: 4000, users: 2400, visits: 2400 },
  { name: 'Feb', value: 3000, users: 1398, visits: 2210 },
  { name: 'Mar', value: 2000, users: 9800, visits: 2290 },
  { name: 'Apr', value: 2780, users: 3908, visits: 2000 },
  { name: 'May', value: 1890, users: 4800, visits: 2181 },
  { name: 'Jun', value: 2390, users: 3800, visits: 2500 },
  { name: 'Jul', value: 3490, users: 4300, visits: 2100 },
];

const Dashboard: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].dashboard;
  const reviews = reviewsSettingsLocale[language].reviews;
  const dashboardSettings = dashboardSettingsLocale[language];
  
  const [currentReview, setCurrentReview] = React.useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
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
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        {/* User Reviews Slider - replacing the revenue overview chart */}
        <Card className="lg:col-span-4 backdrop-blur-sm bg-white/50">
          <CardHeader>
            <CardTitle>{t.customerReviews}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative h-[300px] overflow-hidden">
              {/* Slider navigation buttons */}
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
              
              {/* Slider content */}
              <div className="flex h-full transition-all duration-500 ease-in-out" style={{ transform: `translateX(-${currentReview * 100}%)` }}>
                {reviews.map((review) => (
                  <div key={review.id} className="min-w-full flex flex-col md:flex-row items-center p-4 gap-4">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden flex-shrink-0 border-2 border-gray-200">
                      <img 
                        src={review.image} 
                        alt={`${review.name} from ${review.company}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-center md:items-start">
                      <blockquote className="text-lg font-medium italic mb-4 text-center md:text-left">
                        "{review.review}"
                      </blockquote>
                      <div className="mt-auto">
                        <p className="font-semibold">{review.name}</p>
                        <p className="text-sm text-muted-foreground">{review.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Slider indicators */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
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
        
        <Card className="lg:col-span-3 backdrop-blur-sm bg-white/50">
          <CardHeader>
            <CardTitle>{t.userActivity}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f1f1" />
                  <XAxis dataKey="name" stroke="#888888" fontSize={12} />
                  <YAxis stroke="#888888" fontSize={12} />
                  <Tooltip />
                  <Bar dataKey="users" fill="#000" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="backdrop-blur-sm bg-white/50">
        <CardHeader>
          <CardTitle>{t.performanceMetrics}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f1f1" />
                <XAxis dataKey="name" stroke="#888888" fontSize={12} />
                <YAxis stroke="#888888" fontSize={12} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="visits"
                  stroke="#000"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
