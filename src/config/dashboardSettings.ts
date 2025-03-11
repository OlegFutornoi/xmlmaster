
export interface DashboardCardSetting {
  id: string;
  titleKey: string;
  icon: string;
  value: string | number;
  change: string;
  color: string;
}

export interface DashboardSettings {
  cards: DashboardCardSetting[];
}

// Locale-specific dashboard settings
const dashboardSettingsLocale: Record<string, DashboardSettings> = {
  en: {
    cards: [
      {
        id: "activeDownloads",
        titleKey: "activeDownloads",
        icon: "Download",
        value: "1,521",
        change: "+20.1%",
        color: "blue-500"
      },
      {
        id: "successfulSellers",
        titleKey: "successfulSellers",
        icon: "Check",
        value: "729",
        change: "+10.1%",
        color: "green-500"
      },
      {
        id: "revenueOver1000",
        titleKey: "revenueOver1000",
        icon: "TrendingUp",
        value: "597",
        change: "+19%",
        color: "indigo-500"
      },
      {
        id: "customerReviews",
        titleKey: "customerReviews",
        icon: "MessageSquare",
        value: "1,298",
        change: "+4.3%",
        color: "amber-500"
      }
    ]
  },
  uk: {
    cards: [
      {
        id: "activeDownloads",
        titleKey: "activeDownloads",
        icon: "Download",
        value: "1,521",
        change: "+20.1%",
        color: "blue-500"
      },
      {
        id: "successfulSellers",
        titleKey: "successfulSellers",
        icon: "Check",
        value: "729",
        change: "+10.1%",
        color: "green-500"
      },
      {
        id: "revenueOver1000",
        titleKey: "revenueOver1000",
        icon: "TrendingUp",
        value: "597",
        change: "+19%",
        color: "indigo-500"
      },
      {
        id: "customerReviews",
        titleKey: "customerReviews",
        icon: "MessageSquare",
        value: "1,298",
        change: "+4.3%",
        color: "amber-500"
      }
    ]
  }
};

export default dashboardSettingsLocale;
