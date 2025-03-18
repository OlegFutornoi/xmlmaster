
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/config/localeSettings';
import reviewsSettingsLocale from '@/config/reviewsSettings';
import dashboardSettingsLocale from '@/config/dashboardSettings';
import featuresSettingsLocale from '@/config/featuresSettings';
import StatsCards from '@/components/dashboard/StatsCards';
import CustomerReviews from '@/components/dashboard/CustomerReviews';
import Features from '@/components/dashboard/Features';
import { useIsMobile } from '@/hooks/use-mobile';

const Dashboard: React.FC = () => {
  const { language } = useLanguage();
  const isMobile = useIsMobile();
  const t = translations[language].dashboard;
  const reviews = reviewsSettingsLocale[language].reviews;
  const dashboardSettings = dashboardSettingsLocale[language];
  const featuresSettings = featuresSettingsLocale[language];
  const features = featuresSettings.features;
  const showSliderControls = featuresSettings.showSliderControls;

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{t.title}</h1>
      </div>
      
      <StatsCards cards={dashboardSettings.cards} />
      <Features features={features} showSliderControls={showSliderControls} />
      <CustomerReviews reviews={reviews} />
    </div>
  );
};

export default Dashboard;
