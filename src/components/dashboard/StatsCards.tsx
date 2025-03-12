
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Check, TrendingUp, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/config/localeSettings';
import { DashboardCardSetting } from '@/config/dashboardSettings';

interface StatsCardsProps {
  cards: DashboardCardSetting[];
}

const getIconComponent = (iconName: string) => {
  const icons = {
    Download,
    Check,
    TrendingUp,
    MessageSquare
  };
  return icons[iconName as keyof typeof icons] || Download;
};

const StatsCards: React.FC<StatsCardsProps> = ({ cards }) => {
  const { language } = useLanguage();
  const t = translations[language].dashboard;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => {
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
  );
};

export default StatsCards;

