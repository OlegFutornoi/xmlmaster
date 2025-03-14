
export interface Feature {
  id: number;
  title: string;
  description: string;
  image: string;
  videoUrl?: string; // YouTube video ID
  features: string[];
}

interface FeaturesSettings {
  features: Feature[];
}

const featuresSettingsLocale: Record<string, FeaturesSettings> = {
  en: {
    features: [
      {
        id: 1,
        title: "XML Processing",
        description: "Advanced XML processing capabilities with intuitive interface",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
        videoUrl: "dQw4w9WgXcQ", // Example YouTube video ID
        features: [
          "Fast XML validation",
          "Schema support",
          "XPath queries",
          "XSLT transformations",
          "Custom plugins support"
        ]
      },
      {
        id: 2,
        title: "Data Integration",
        description: "Seamless integration with various data sources",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
        videoUrl: "dQw4w9WgXcQ", // Example YouTube video ID
        features: [
          "Database connectivity",
          "REST API support",
          "Real-time sync",
          "Batch processing",
          "Error handling"
        ]
      },
      {
        id: 3,
        title: "Security",
        description: "Enterprise-grade security features",
        image: "https://images.unsplash.com/photo-1639322537228-f710d846310a",
        videoUrl: "dQw4w9WgXcQ", // Example YouTube video ID
        features: [
          "Encryption",
          "Access control",
          "Audit logging",
          "Secure protocols",
          "Compliance tools"
        ]
      }
    ]
  },
  uk: {
    features: [
      {
        id: 1,
        title: "Обробка XML",
        description: "Розширені можливості обробки XML з інтуїтивним інтерфейсом",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
        videoUrl: "dQw4w9WgXcQ", // Example YouTube video ID
        features: [
          "Швидка валідація XML",
          "Підтримка схем",
          "XPath запити",
          "XSLT перетворення",
          "Підтримка власних плагінів"
        ]
      },
      {
        id: 2,
        title: "Інтеграція даних",
        description: "Безшовна інтеграція з різними джерелами даних",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
        videoUrl: "dQw4w9WgXcQ", // Example YouTube video ID
        features: [
          "Підключення до баз даних",
          "Підтримка REST API",
          "Синхронізація в реальному часі",
          "Пакетна обробка",
          "Обробка помилок"
        ]
      },
      {
        id: 3,
        title: "Безпека",
        description: "Функції безпеки корпоративного рівня",
        image: "https://images.unsplash.com/photo-1639322537228-f710d846310a",
        videoUrl: "dQw4w9WgXcQ", // Example YouTube video ID
        features: [
          "Шифрування",
          "Контроль доступу",
          "Журнал аудиту",
          "Безпечні протоколи",
          "Інструменти відповідності"
        ]
      }
    ]
  }
};

export default featuresSettingsLocale;
