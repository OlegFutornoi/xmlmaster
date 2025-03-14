
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Star, CreditCard, Shield } from "lucide-react";
import { tariffPlans } from "@/config/tariffsSettings";
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/config/localeSettings';
import { useIsMobile } from '@/hooks/use-mobile';

const Tariffs = () => {
  const { language } = useLanguage();
  const isMobile = useIsMobile();
  const t = translations[language].menu;

  return (
    <div className="container px-2 md:px-4 py-6 md:py-12 mx-auto">
      <div className="text-center mb-6 md:mb-12">
        <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">{t.pricing}</h1>
        <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Оберіть тарифний план, що найкраще відповідає вашим потребам
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-4 md:mt-8">
        {tariffPlans.map((plan) => (
          <Card key={plan.id} className={`flex flex-col h-full border-2 ${plan.popular ? 'border-primary' : 'border-border'} transition-all duration-200 hover:shadow-lg`}>
            <CardHeader className="pb-2 px-3 py-3 md:p-6">
              {plan.popular && (
                <div className="flex items-center justify-center bg-primary text-primary-foreground rounded-full py-0.5 px-2 md:py-1 md:px-3 text-xs md:text-sm font-medium mb-1 md:mb-2 w-fit">
                  <Star className="h-3 w-3 md:h-3.5 md:w-3.5 mr-1" />
                  Популярний вибір
                </div>
              )}
              <CardTitle className="text-xl md:text-2xl font-bold">{plan.name}</CardTitle>
              <div className="mt-1 md:mt-2">
                <span className="text-2xl md:text-3xl font-bold">{plan.price}</span>
                <span className="text-sm md:text-base text-muted-foreground ml-1">{plan.period}</span>
              </div>
              <CardDescription className="mt-2 md:mt-3 text-xs md:text-sm">{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow px-3 py-2 md:px-6 md:py-4">
              <ul className="space-y-2 md:space-y-3 mt-2 md:mt-4 text-sm md:text-base">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-primary shrink-0 mr-1.5 md:mr-2 mt-0.5" />
                    <span className="text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="pt-2 md:pt-4 px-3 pb-4 md:px-6 md:pb-6">
              <Button className="w-full gap-1 md:gap-2 text-sm md:text-base" size={isMobile ? "default" : "lg"} asChild>
                <a href={plan.paymentUrl}>
                  <CreditCard className="h-4 w-4 md:h-5 md:w-5" />
                  Обрати план
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-8 md:mt-16 text-center bg-muted p-4 md:p-6 rounded-lg max-w-3xl mx-auto">
        <div className="flex items-center justify-center mb-2 md:mb-4">
          <Shield className="h-5 w-5 md:h-6 md:w-6 text-primary mr-1.5 md:mr-2" />
          <h3 className="text-base md:text-lg font-medium">Безпечні платежі</h3>
        </div>
        <p className="text-sm md:text-base text-muted-foreground">
          Всі платежі захищені сучасними технологіями шифрування. Ми не зберігаємо дані вашої 
          кредитної картки. Обробка платежів здійснюється через надійні платіжні системи.
        </p>
      </div>
    </div>
  );
};

export default Tariffs;
