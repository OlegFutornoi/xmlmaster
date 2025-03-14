
export interface HelpVideo {
  id: number;
  title: string;
  thumbnailUrl: string;
  youtubeId: string;
}

export interface HelpTab {
  id: number;
  title: string;
  videos: HelpVideo[];
}

export interface HelpSettings {
  title: string;
  tabs: HelpTab[];
  videoThumbnailHeight: string; // CSS value for video thumbnail height
}

// Settings for different languages
const helpSettings: Record<string, HelpSettings> = {
  en: {
    title: "Help",
    videoThumbnailHeight: "200px",
    tabs: [
      {
        id: 1,
        title: "Getting Started",
        videos: [
          {
            id: 101,
            title: "Introduction to XmlMaster",
            thumbnailUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
            youtubeId: "dQw4w9WgXcQ"
          },
          {
            id: 102,
            title: "Installation Guide",
            thumbnailUrl: "https://images.unsplash.com/photo-1518770660539-4636190af476",
            youtubeId: "dQw4w9WgXcQ"
          },
          {
            id: 103,
            title: "Basic Operations",
            thumbnailUrl: "https://images.unsplash.com/photo-1518770660639-4636190af477",
            youtubeId: "dQw4w9WgXcQ"
          }
        ]
      },
      {
        id: 2,
        title: "Advanced Features",
        videos: [
          {
            id: 201,
            title: "Advanced XML Editing",
            thumbnailUrl: "https://images.unsplash.com/photo-1519770660839-4636190af575",
            youtubeId: "dQw4w9WgXcQ"
          },
          {
            id: 202,
            title: "Validation Tools",
            thumbnailUrl: "https://images.unsplash.com/photo-1519770660939-4636190af576",
            youtubeId: "dQw4w9WgXcQ"
          }
        ]
      },
      {
        id: 3,
        title: "XML Schemas",
        videos: [
          {
            id: 301,
            title: "Working with Schemas",
            thumbnailUrl: "https://images.unsplash.com/photo-1520770660039-4636190af675",
            youtubeId: "dQw4w9WgXcQ"
          },
          {
            id: 302,
            title: "Schema Validation",
            thumbnailUrl: "https://images.unsplash.com/photo-1520770660139-4636190af676",
            youtubeId: "dQw4w9WgXcQ"
          }
        ]
      },
      {
        id: 4,
        title: "Troubleshooting",
        videos: [
          {
            id: 401,
            title: "Common Errors",
            thumbnailUrl: "https://images.unsplash.com/photo-1521770660239-4636190af775",
            youtubeId: "dQw4w9WgXcQ"
          },
          {
            id: 402,
            title: "Performance Issues",
            thumbnailUrl: "https://images.unsplash.com/photo-1521770660339-4636190af776",
            youtubeId: "dQw4w9WgXcQ"
          }
        ]
      },
      {
        id: 5,
        title: "Tips & Tricks",
        videos: [
          {
            id: 501,
            title: "Productivity Tips",
            thumbnailUrl: "https://images.unsplash.com/photo-1522770660439-4636190af875",
            youtubeId: "dQw4w9WgXcQ"
          },
          {
            id: 502,
            title: "Keyboard Shortcuts",
            thumbnailUrl: "https://images.unsplash.com/photo-1522770660539-4636190af876",
            youtubeId: "dQw4w9WgXcQ"
          }
        ]
      }
    ]
  },
  uk: {
    title: "Довідка",
    videoThumbnailHeight: "200px",
    tabs: [
      {
        id: 1,
        title: "Початок Роботи",
        videos: [
          {
            id: 101,
            title: "Вступ до XmlMaster",
            thumbnailUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
            youtubeId: "dQw4w9WgXcQ"
          },
          {
            id: 102,
            title: "Інструкція з Встановлення",
            thumbnailUrl: "https://images.unsplash.com/photo-1518770660539-4636190af476",
            youtubeId: "dQw4w9WgXcQ"
          },
          {
            id: 103,
            title: "Основні Операції",
            thumbnailUrl: "https://images.unsplash.com/photo-1518770660639-4636190af477",
            youtubeId: "dQw4w9WgXcQ"
          }
        ]
      },
      {
        id: 2,
        title: "Розширені Функції",
        videos: [
          {
            id: 201,
            title: "Розширене Редагування XML",
            thumbnailUrl: "https://images.unsplash.com/photo-1519770660839-4636190af575",
            youtubeId: "dQw4w9WgXcQ"
          },
          {
            id: 202,
            title: "Інструменти Валідації",
            thumbnailUrl: "https://images.unsplash.com/photo-1519770660939-4636190af576",
            youtubeId: "dQw4w9WgXcQ"
          }
        ]
      },
      {
        id: 3,
        title: "XML Схеми",
        videos: [
          {
            id: 301,
            title: "Робота зі Схемами",
            thumbnailUrl: "https://images.unsplash.com/photo-1520770660039-4636190af675",
            youtubeId: "dQw4w9WgXcQ"
          },
          {
            id: 302,
            title: "Валідація Схем",
            thumbnailUrl: "https://images.unsplash.com/photo-1520770660139-4636190af676",
            youtubeId: "dQw4w9WgXcQ"
          }
        ]
      },
      {
        id: 4,
        title: "Вирішення Проблем",
        videos: [
          {
            id: 401,
            title: "Поширені Помилки",
            thumbnailUrl: "https://images.unsplash.com/photo-1521770660239-4636190af775",
            youtubeId: "dQw4w9WgXcQ"
          },
          {
            id: 402,
            title: "Проблеми з Продуктивністю",
            thumbnailUrl: "https://images.unsplash.com/photo-1521770660339-4636190af776",
            youtubeId: "dQw4w9WgXcQ"
          }
        ]
      },
      {
        id: 5,
        title: "Поради та Хитрощі",
        videos: [
          {
            id: 501,
            title: "Поради з Продуктивності",
            thumbnailUrl: "https://images.unsplash.com/photo-1522770660439-4636190af875",
            youtubeId: "dQw4w9WgXcQ"
          },
          {
            id: 502,
            title: "Гарячі Клавіші",
            thumbnailUrl: "https://images.unsplash.com/photo-1522770660539-4636190af876",
            youtubeId: "dQw4w9WgXcQ"
          }
        ]
      }
    ]
  }
};

export default helpSettings;
