
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/config/localeSettings';
import reviewsSettingsLocale from '@/config/reviewsSettings';
import dashboardSettingsLocale from '@/config/dashboardSettings';
import featuresSettingsLocale from '@/config/featuresSettings';
import StatsCards from '@/components/dashboard/StatsCards';
import CustomerReviews from '@/components/dashboard/CustomerReviews';
import Features from '@/components/dashboard/Features';

const Dashboard: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].dashboard;
  const reviews = reviewsSettingsLocale[language].reviews;
  const dashboardSettings = dashboardSettingsLocale[language];
  const features = featuresSettingsLocale[language].features;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">{t.title}</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">{t.lastUpdated}: Today at 09:15 AM</span>
        </div>
      </div>
      
      <StatsCards cards={dashboardSettings.cards} />
      <CustomerReviews reviews={reviews} />
      <Features features={features} />
    </div>
  );
};

export default Dashboard;

