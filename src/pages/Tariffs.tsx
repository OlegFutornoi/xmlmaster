
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Star, CreditCard, Shield } from "lucide-react";
import { tariffPlans } from "@/config/tariffsSettings";
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/config/localeSettings';

const Tariffs = () => {
  const { language } = useLanguage();
  const t = translations[language].menu;
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly' | 'lifetime'>('monthly');

  return (
    <div className="container max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{t.pricing}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Оберіть тарифний план, що найкраще відповідає вашим потребам
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {tariffPlans.map((plan) => (
          <Card key={plan.id} className={`flex flex-col h-full border-2 ${plan.popular ? 'border-primary' : 'border-border'} transition-all duration-200 hover:shadow-lg`}>
            <CardHeader className="pb-2">
              {plan.popular && (
                <div className="flex items-center justify-center bg-primary text-primary-foreground rounded-full py-1 px-3 text-sm font-medium mb-2 w-fit">
                  <Star className="h-3.5 w-3.5 mr-1" />
                  Популярний вибір
                </div>
              )}
              <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
              <div className="mt-2">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground ml-1">{plan.period}</span>
              </div>
              <CardDescription className="mt-3">{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3 mt-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="pt-4">
              <Button className="w-full gap-2" size="lg">
                <CreditCard className="h-5 w-5" />
                Обрати план
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center bg-muted p-6 rounded-lg max-w-3xl mx-auto">
        <div className="flex items-center justify-center mb-4">
          <Shield className="h-6 w-6 text-primary mr-2" />
          <h3 className="text-lg font-medium">Безпечні платежі</h3>
        </div>
        <p className="text-muted-foreground">
          Всі платежі захищені сучасними технологіями шифрування. Ми не зберігаємо дані вашої 
          кредитної картки. Обробка платежів здійснюється через надійні платіжні системи.
        </p>
      </div>
    </div>
  );
};

export default Tariffs;
