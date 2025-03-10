
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
    <CardHeader className="pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <CardDescription>{subtitle}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
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
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">Reporting Period: Q2 2023</span>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
        <CardHeader>
          <CardTitle>Sales Overview</CardTitle>
          <CardDescription>Monthly sales performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f1f1" />
                <XAxis dataKey="name" stroke="#888888" fontSize={12} />
                <YAxis stroke="#888888" fontSize={12} />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" name="Sales" fill="#000000" radius={[4, 4, 0, 0]} />
                <Bar dataKey="revenue" name="Revenue" fill="#404040" radius={[4, 4, 0, 0]} />
                <Bar dataKey="profit" name="Profit" fill="#808080" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      <Card className="backdrop-blur-sm bg-white/50">
        <CardHeader>
          <CardTitle>Revenue Trends</CardTitle>
          <CardDescription>Monthly revenue growth</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f1f1" />
                <XAxis dataKey="name" stroke="#888888" fontSize={12} />
                <YAxis stroke="#888888" fontSize={12} />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  name="Revenue" 
                  stroke="#000000" 
                  strokeWidth={2} 
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="profit" 
                  name="Profit" 
                  stroke="#808080" 
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

export default Reports;
