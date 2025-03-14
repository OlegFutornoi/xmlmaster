
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Check, TrendingUp, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/config/localeSettings';
import { DashboardCardSetting } from '@/config/dashboardSettings';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const isMobile = useIsMobile();
  const t = translations[language].dashboard;

  return (
    <div className="grid gap-2 sm:gap-4 md:gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => {
        const IconComponent = getIconComponent(card.icon);
        
        return (
          <Card key={card.id} className="backdrop-blur-sm bg-white/50">
            <CardHeader className="pb-1 md:pb-2 px-3 py-2 md:p-6">
              <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground flex items-center">
                <IconComponent className={`h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2 text-${card.color}`} />
                {t[card.titleKey]}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-3 pb-3 md:px-6 md:pb-6">
              <div className="text-base md:text-2xl font-bold">{card.value}</div>
              <p className="text-[10px] md:text-xs text-muted-foreground mt-1">{card.change} {t.fromLastMonth}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default StatsCards;
