
interface SocialMedia {
  name: string;
  url: string;
  icon: string;
}

interface ContactInfo {
  phone: string;
  email: string;
}

interface ContactSettings {
  socialMedia: {
    youtube: SocialMedia;
    facebook: SocialMedia;
    instagram: SocialMedia;
    telegram: SocialMedia;
  };
  contactInfo: ContactInfo;
}

// Define translations for both languages
export const contactSettingsLocale: Record<string, ContactSettings> = {
  en: {
    socialMedia: {
      youtube: {
        name: "YouTube",
        url: "https://www.youtube.com/@XmlRozetka",
        icon: "youtube"
      },
      facebook: {
        name: "Facebook",
        url: "https://www.facebook.com/xmltrend",
        icon: "facebook"
      },
      instagram: {
        name: "Instagram",
        url: "#",
        icon: "instagram"
      },
      telegram: {
        name: "Telegram",
        url: "https://t.me/XMLConvert_bot?start=ZGw6MTg4MTMx",
        icon: "telegram"
      }
    },
    contactInfo: {
      phone: "+1 (234) 567-8901",
      email: "contact@example.com"
    }
  },
  uk: {
    socialMedia: {
      youtube: {
        name: "YouTube",
        url: "https://www.youtube.com/@XmlRozetka",
        icon: "youtube"
      },
      facebook: {
        name: "Facebook",
        url: "https://www.facebook.com/xmltrend",
        icon: "facebook"
      },
      instagram: {
        name: "Instagram",
        url: "#",
        icon: "instagram"
      },
      telegram: {
        name: "Telegram",
        url: "https://t.me/XMLConvert_bot?start=ZGw6MTg4MTMx",
        icon: "telegram"
      }
    },
    contactInfo: {
      phone: "+1 (234) 567-8901",
      email: "contact@example.com"
    }
  }
};

export default contactSettingsLocale;
