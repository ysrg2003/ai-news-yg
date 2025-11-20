// Article types
export interface Article {
  id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  source: string;
  sourceUrl: string;
  imageUrl: string;
  category: string;
  tags: string[];
  publishedAt: Date;
  updatedAt: Date;
  readingTime: number;
  views: number;
  slug: string;
  keywords: string[];
  metaDescription: string;
}

export interface ArticleListItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  publishedAt: Date;
  readingTime: number;
  slug: string;
  author: string;
}

export interface Category {
  id: string;
  label: string;
  description: string;
  slug: string;
  count: number;
}

export interface NewsAPIArticle {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

export interface NewsAPIResponse {
  status: string;
  totalResults: number;
  articles: NewsAPIArticle[];
}

// SEO types
export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  image: string;
  url: string;
  type: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
}

export interface StructuredData {
  "@context": string;
  "@type": string;
  [key: string]: any;
}

// Pagination
export interface PaginationParams {
  page: number;
  pageSize: number;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
