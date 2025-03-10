
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  AreaChart, 
  Area,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { Download, Check, TrendingUp, MessageSquare } from 'lucide-react';

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
        <Card className="lg:col-span-4 backdrop-blur-sm bg-white/50">
          <CardHeader>
            <CardTitle>Огляд доходів</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f1f1" />
                  <XAxis dataKey="name" stroke="#888888" fontSize={12} />
                  <YAxis stroke="#888888" fontSize={12} />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#000"
                    strokeWidth={2}
                    fill="rgba(0, 0, 0, 0.1)"
                  />
                </AreaChart>
              </ResponsiveContainer>
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
