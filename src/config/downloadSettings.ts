
export type AppDownloadLink = {
  id: string;
  platform: string;
  link: string;
  icon: string;
  visible: boolean; // Whether the platform should be displayed
};

export type DownloadSettings = {
  title: string;
  description: string;
  appImage: string;
  appImageHeight: string; // CSS value for app image height
  downloadLinks: AppDownloadLink[];
  showSystemRequirements: boolean; // Whether to show system requirements section
};

// Settings for different languages
const downloadSettings: Record<string, DownloadSettings> = {
  en: {
    title: "Download XmlMaster",
    description: "Get our application on your device and start managing XML files efficiently. Available for all major platforms.",
    appImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    appImageHeight: "400px",
    showSystemRequirements: false,
    downloadLinks: [
      {
        id: "windows",
        platform: "Windows",
        link: "https://example.com/download/windows",
        icon: "Monitor",
        visible: true
      },
      {
        id: "mac",
        platform: "MacOS",
        link: "https://example.com/download/mac",
        icon: "Apple",
        visible: true
      },
      {
        id: "linux",
        platform: "Linux",
        link: "https://example.com/download/linux",
        icon: "Terminal",
        visible: true
      },
      {
        id: "android",
        platform: "Android",
        link: "https://example.com/download/android",
        icon: "Smartphone",
        visible: true
      },
      {
        id: "ios",
        platform: "iOS",
        link: "https://example.com/download/ios",
        icon: "Smartphone",
        visible: true
      }
    ]
  },
  uk: {
    title: "Завантажити XmlMaster",
    description: "Отримайте наш додаток на свій пристрій та почніть ефективно управляти XML-файлами. Доступно для всіх основних платформ.",
    appImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    appImageHeight: "400px",
    showSystemRequirements: false,
    downloadLinks: [
      {
        id: "windows",
        platform: "Windows",
        link: "https://example.com/download/windows",
        icon: "Monitor",
        visible: true
      },
      {
        id: "mac",
        platform: "MacOS",
        link: "https://example.com/download/mac",
        icon: "Apple",
        visible: true
      },
      {
        id: "linux",
        platform: "Linux",
        link: "https://example.com/download/linux",
        icon: "Terminal",
        visible: true
      },
      {
        id: "android",
        platform: "Android",
        link: "https://example.com/download/android",
        icon: "Smartphone",
        visible: true
      },
      {
        id: "ios",
        platform: "iOS",
        link: "https://example.com/download/ios",
        icon: "Smartphone",
        visible: true
      }
    ]
  }
};

export default downloadSettings;
