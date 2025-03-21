
export interface TariffPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  paymentUrl?: string; // New parameter for payment link
}

export const tariffPlans: TariffPlan[] = [
  {
    id: "monthly",
    name: "Місячний",
    price: "399",
    period: "грн / місяць",
    description: "Ідеальний варіант для короткострокових проектів та тестування функціоналу.",
    features: [
      "Повний доступ до всіх функцій",
      "Регулярні оновлення",
      "Базова технічна підтримка",
      "Доступ до бібліотеки XML шаблонів",
      "Обробка до 1000 файлів на місяць"
    ],
    paymentUrl: "#" // Placeholder URL that you can update later
  },
  {
    id: "yearly",
    name: "Річний",
    price: "1499",
    period: "грн / рік",
    description: "Економічно вигідне рішення для постійного використання протягом року.",
    features: [
      "Все, що включено в місячний тариф",
      "Пріоритетна технічна підтримка",
      "Розширена бібліотека шаблонів",
      "Обробка до 5000 файлів на місяць",
      "Резервне копіювання даних"
    ],
    popular: true,
    paymentUrl: "#" // Placeholder URL that you can update later
  },
  {
    id: "lifetime",
    name: "Довічний",
    price: "2999",
    period: "грн / назавжди",
    description: "Постійна ліцензія без додаткових платежів для довгострокового використання.",
    features: [
      "Все, що включено в річний тариф",
      "Пожиттєвий доступ до оновлень",
      "Преміум технічна підтримка 24/7",
      "Необмежена кількість файлів",
      "Доступ до ексклюзивних функцій",
      "Персональний консультант"
    ],
    paymentUrl: "#" // Placeholder URL that you can update later
  }
];
