
export interface Review {
  id: number;
  name: string;
  company: string;
  review: string;
  image: string;
}

// Locale-specific reviews
interface ReviewsSettings {
  reviews: Review[];
}

export const reviewsSettingsLocale: Record<string, ReviewsSettings> = {
  en: {
    reviews: [
      {
        id: 1,
        name: "Oksana Petrenko",
        company: "IT Solutions",
        review: "XmlMaster significantly improved our workflow. The tool is easy to use and very effective!",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" // Laptop computer
      },
      {
        id: 2,
        name: "Ivan Kovalchuk",
        company: "WebDev Ukraine",
        review: "Thanks to XmlMaster, we've increased productivity by 40%. Great tool for working with XML!",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475" // Circuit board
      },
      {
        id: 3,
        name: "Maria Shevchenko",
        company: "Data Analytics Pro",
        review: "XmlMaster is the best tool for working with XML that I've ever used. Highly recommended!",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6" // Programming monitor
      },
      {
        id: 4,
        name: "Petro Melnyk",
        company: "Tech Innovations",
        review: "We've been using XmlMaster for 2 years, and it's the best solution for our team. Excellent support!",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" // Person using MacBook
      },
      {
        id: 5,
        name: "Natalia Kravchuk",
        company: "Digital Solutions",
        review: "XmlMaster helped us optimize our data processing. We save hours of work every week!",
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1" // Gray and black laptop
      }
    ]
  },
  uk: {
    reviews: [
      {
        id: 1,
        name: "Оксана Петренко",
        company: "IT Solutions",
        review: "XmlMaster значно покращив наш робочий процес. Інструмент простий у використанні та дуже ефективний!",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" // Laptop computer
      },
      {
        id: 2,
        name: "Іван Ковальчук",
        company: "WebDev Ukraine",
        review: "Завдяки XmlMaster ми збільшили продуктивність на 40%. Чудовий інструмент для роботи з XML!",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475" // Circuit board
      },
      {
        id: 3,
        name: "Марія Шевченко",
        company: "Data Analytics Pro",
        review: "XmlMaster - найкращий інструмент для роботи з XML, який я коли-небудь використовувала. Рекомендую!",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6" // Programming monitor
      },
      {
        id: 4,
        name: "Петро Мельник",
        company: "Tech Innovations",
        review: "Використовуємо XmlMaster вже 2 роки, і це найкраще рішення для нашої команди. Відмінна підтримка!",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" // Person using MacBook
      },
      {
        id: 5,
        name: "Наталія Кравчук",
        company: "Digital Solutions",
        review: "XmlMaster допоміг нам оптимізувати процеси обробки даних. Економимо години роботи щотижня!",
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1" // Gray and black laptop
      }
    ]
  }
};

export default reviewsSettingsLocale;
