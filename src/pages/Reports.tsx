
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const data = [
  { name: 'Jan', sales: 4000, revenue: 2400, profit: 2400 },
  { name: 'Feb', sales: 3000, revenue: 1398, profit: 1800 },
  { name: 'Mar', sales: 2000, revenue: 9800, profit: 2400 },
  { name: 'Apr', sales: 2780, revenue: 3908, profit: 2200 },
  { name: 'May', sales: 1890, revenue: 4800, profit: 2100 },
  { name: 'Jun', sales: 2390, revenue: 3800, profit: 2300 },
];

interface ReportCardProps {
  title: string;
  subtitle: string;
  value: string;
  change: string;
  isPositive: boolean;
}

const ReportCard: React.FC<ReportCardProps> = ({ title, subtitle, value, change, isPositive }) => (
  <Card className="backdrop-blur-sm bg-white/50">
    <CardHeader className="pb-2 px-3 py-3 md:p-6">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <CardDescription className="text-xs md:text-sm">{subtitle}</CardDescription>
    </CardHeader>
    <CardContent className="px-3 pb-3 md:px-6 md:pb-6">
      <div className="text-xl md:text-2xl font-bold">{value}</div>
      <p className={cn(
        "text-xs mt-1", 
        isPositive ? "text-green-600" : "text-red-600"
      )}>
        {change}
      </p>
    </CardContent>
  </Card>
);

const Reports: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Reports</h1>
        <div className="flex items-center">
          <span className="text-xs md:text-sm text-muted-foreground">Reporting Period: Q2 2023</span>
        </div>
      </div>
      
      <div className="grid gap-2 sm:gap-4 md:gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        <ReportCard 
          title="Total Sales" 
          subtitle="Last 30 days" 
          value="$45,231.89" 
          change="+20.1% from previous period" 
          isPositive={true} 
        />
        
        <ReportCard 
          title="Average Order Value" 
          subtitle="Last 30 days" 
          value="$259.35" 
          change="+12.3% from previous period" 
          isPositive={true} 
        />
        
        <ReportCard 
          title="Conversion Rate" 
          subtitle="Last 30 days" 
          value="24.5%" 
          change="+4.3% from previous period" 
          isPositive={true} 
        />
        
        <ReportCard 
          title="Churn Rate" 
          subtitle="Last 30 days" 
          value="2.4%" 
          change="-0.5% from previous period" 
          isPositive={true} 
        />
      </div>
      
      <Card className="backdrop-blur-sm bg-white/50">
        <CardHeader className="px-4 py-3 md:p-6">
          <CardTitle className="text-lg md:text-xl">Sales Overview</CardTitle>
          <CardDescription className="text-xs md:text-sm">Monthly sales performance</CardDescription>
        </CardHeader>
        <CardContent className="px-2 pb-4 md:px-6 md:pb-6">
          <div className="h-[250px] md:h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f1f1" />
                <XAxis dataKey="name" stroke="#888888" fontSize={isMobile ? 10 : 12} />
                <YAxis stroke="#888888" fontSize={isMobile ? 10 : 12} />
                <Tooltip contentStyle={{ fontSize: isMobile ? '10px' : '12px' }} />
                <Legend wrapperStyle={{ fontSize: isMobile ? '10px' : '12px' }} />
                <Bar dataKey="sales" name="Sales" fill="#000000" radius={[4, 4, 0, 0]} />
                <Bar dataKey="revenue" name="Revenue" fill="#404040" radius={[4, 4, 0, 0]} />
                <Bar dataKey="profit" name="Profit" fill="#808080" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      <Card className="backdrop-blur-sm bg-white/50">
        <CardHeader className="px-4 py-3 md:p-6">
          <CardTitle className="text-lg md:text-xl">Revenue Trends</CardTitle>
          <CardDescription className="text-xs md:text-sm">Monthly revenue growth</CardDescription>
        </CardHeader>
        <CardContent className="px-2 pb-4 md:px-6 md:pb-6">
          <div className="h-[250px] md:h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f1f1" />
                <XAxis dataKey="name" stroke="#888888" fontSize={isMobile ? 10 : 12} />
                <YAxis stroke="#888888" fontSize={isMobile ? 10 : 12} />
                <Tooltip contentStyle={{ fontSize: isMobile ? '10px' : '12px' }} />
                <Legend wrapperStyle={{ fontSize: isMobile ? '10px' : '12px' }} />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  name="Revenue" 
                  stroke="#000000" 
                  strokeWidth={isMobile ? 1.5 : 2} 
                  dot={{ r: isMobile ? 3 : 4 }}
                  activeDot={{ r: isMobile ? 5 : 6 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="profit" 
                  name="Profit" 
                  stroke="#808080" 
                  strokeWidth={isMobile ? 1.5 : 2} 
                  dot={{ r: isMobile ? 3 : 4 }}
                  activeDot={{ r: isMobile ? 5 : 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;
