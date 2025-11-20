// Session and cookies
export const COOKIE_NAME = "app_session_id";
export const ONE_YEAR_MS = 1000 * 60 * 60 * 24 * 365;

// Site Information
export const APP_LOGO = "/ai-logo.svg";
export const APP_TITLE = "AI News Hub";
export const APP_DESCRIPTION = "Stay updated with the latest AI news, trends, and applications. Daily AI news and insights for tech enthusiasts and professionals.";
export const APP_URL = "https://ysrg2003.github.io/ai-news-hub/";
export const APP_AUTHOR = "AI News Hub";
export const APP_KEYWORDS = "AI news, artificial intelligence, machine learning, AI trends, AI applications, deep learning, neural networks, AI technology, AI research, AI updates";
export const APP_LANGUAGE = "en";
export const APP_LOCALE = "en_US";

// Social Media
export const APP_TWITTER = "@AINewsHub";
export const APP_GITHUB = "https://github.com/ysrg2003/ai-news-hub";
export const APP_CONTACT_EMAIL = "contact@ainewshub.com";

// Google Services (Replace with your actual IDs)
export const GOOGLE_ADSENSE_ID = "ca-pub-xxxxxxxxxxxxxxxx"; // Replace with your AdSense ID
export const GOOGLE_ANALYTICS_ID = "G-XXXXXXXXXX"; // Replace with your Google Analytics ID

// Article Categories
export const ARTICLE_CATEGORIES = [
  { id: "news", label: "News", description: "Latest AI news and announcements" },
  { id: "research", label: "Research", description: "AI research papers and studies" },
  { id: "applications", label: "Applications", description: "Real-world AI applications" },
  { id: "tutorials", label: "Tutorials", description: "AI learning and tutorials" },
  { id: "tools", label: "Tools", description: "AI tools and frameworks" },
  { id: "trends", label: "Trends", description: "AI industry trends" },
];

// SEO Configuration
export const SEO_CONFIG = {
  siteName: "AI News Hub",
  siteUrl: APP_URL,
  defaultImage: "/og-image.png",
  twitterHandle: APP_TWITTER,
  language: APP_LANGUAGE,
  locale: APP_LOCALE,
};

// API Configuration
export const API_CONFIG = {
  newsApiKey: process.env.VITE_NEWS_API_KEY || "", // Free tier: https://newsapi.org
  newsApiUrl: "https://newsapi.org/v2",
  timeout: 10000,
};

// Ad Configuration
export const AD_CONFIG = {
  enabled: true,
  adSenseId: GOOGLE_ADSENSE_ID,
  adSlots: {
    headerBanner: "1234567890", // Replace with your ad slot IDs
    sidebarTop: "1234567891",
    sidebarMiddle: "1234567892",
    footerBanner: "1234567893",
    inArticle: "1234567894",
  },
};
