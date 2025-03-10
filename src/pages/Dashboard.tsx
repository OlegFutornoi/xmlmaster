
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

// Sample reviews data for slider with placeholder images
const reviewsData = [
  {
    id: 1,
    name: "Оксана Петренко",
    company: "IT Solutions",
    review: "XmlMaster значно покращив наш робочий процес. Інструмент простий у використанні та дуже ефективний!",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" // Laptop computer
  },
  {
    id: 2,
    name: "Іван Ковальчук",
    company: "WebDev Ukraine",
    review: "Завдяки XmlMaster ми збільшили продуктивність на 40%. Чудовий інструмент для роботи з XML!",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475" // Circuit board
  },
  {
    id: 3,
    name: "Марія Шевченко",
    company: "Data Analytics Pro",
    review: "XmlMaster - найкращий інструмент для роботи з XML, який я коли-небудь використовувала. Рекомендую!",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6" // Programming monitor
  },
  {
    id: 4,
    name: "Петро Мельник",
    company: "Tech Innovations",
    review: "Використовуємо XmlMaster вже 2 роки, і це найкраще рішення для нашої команди. Відмінна підтримка!",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" // Person using MacBook
  },
  {
    id: 5,
    name: "Наталія Кравчук",
    company: "Digital Solutions",
    review: "XmlMaster допоміг нам оптимізувати процеси обробки даних. Економимо години роботи щотижня!",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1" // Gray and black laptop
  }
];

const Dashboard: React.FC = () => {
  const [currentReview, setCurrentReview] = React.useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1));
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">XmlMaster</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">Last updated: Today at 09:15 AM</span>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="backdrop-blur-sm bg-white/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
              <Download className="h-4 w-4 mr-2 text-blue-500" />
              Активні завантаження
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,521</div>
            <p className="text-xs text-muted-foreground mt-1">+20.1% від минулого місяця</p>
          </CardContent>
        </Card>
        
        <Card className="backdrop-blur-sm bg-white/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
              <Check className="h-4 w-4 mr-2 text-green-500" />
              Успішні продавці
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">729</div>
            <p className="text-xs text-muted-foreground mt-1">+10.1% від минулого місяця</p>
          </CardContent>
        </Card>
        
        <Card className="backdrop-blur-sm bg-white/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
              <TrendingUp className="h-4 w-4 mr-2 text-indigo-500" />
              Дохід більше 1000 $
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">597</div>
            <p className="text-xs text-muted-foreground mt-1">+19% від минулого місяця</p>
          </CardContent>
        </Card>
        
        <Card className="backdrop-blur-sm bg-white/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
              <MessageSquare className="h-4 w-4 mr-2 text-amber-500" />
              Відгуки клієнтів
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,298</div>
            <p className="text-xs text-muted-foreground mt-1">+4.3% від минулого місяця</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        {/* User Reviews Slider - replacing the revenue overview chart */}
        <Card className="lg:col-span-4 backdrop-blur-sm bg-white/50">
          <CardHeader>
            <CardTitle>Відгуки користувачів</CardTitle>
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
                {reviewsData.map((review, index) => (
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
                {reviewsData.map((_, index) => (
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
            <CardTitle>Активність користувачів</CardTitle>
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
          <CardTitle>Показники ефективності</CardTitle>
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
