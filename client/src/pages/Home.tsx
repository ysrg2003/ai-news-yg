import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { APP_TITLE, APP_DESCRIPTION, APP_KEYWORDS, APP_URL } from '@shared/const';
import { Article, SEOMetadata } from '@shared/types';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import AdBanner from '@/components/AdBanner';
import SEOHead from '@/components/SEOHead';

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const seoMetadata: SEOMetadata = {
    title: `${APP_TITLE} - Latest AI News and Trends`,
    description: APP_DESCRIPTION,
    keywords: APP_KEYWORDS.split(', '),
    author: 'AI News Hub',
    image: `${APP_URL}og-image.png`,
    url: APP_URL,
    type: 'website',
  };

  useEffect(() => {
    // Load sample articles (will be replaced with API calls)
    const sampleArticles: Article[] = [
      {
        id: '1',
        title: 'OpenAI Releases GPT-5: Revolutionary Advances in AI Reasoning',
        description: 'OpenAI announces GPT-5 with significant improvements in reasoning, multimodal understanding, and real-time processing capabilities.',
        content: 'OpenAI has released GPT-5, marking a major milestone in artificial intelligence development...',
        author: 'AI News Hub',
        source: 'OpenAI',
        sourceUrl: 'https://openai.com',
        imageUrl: '/article-1.jpg',
        category: 'news',
        tags: ['OpenAI', 'GPT-5', 'AI', 'LLM'],
        publishedAt: new Date('2024-11-20'),
        updatedAt: new Date('2024-11-20'),
        readingTime: 5,
        views: 1250,
        slug: 'openai-gpt5-release',
        keywords: ['OpenAI', 'GPT-5', 'artificial intelligence', 'language model'],
        metaDescription: 'OpenAI releases GPT-5 with revolutionary advances in AI reasoning and multimodal understanding.',
      },
      {
        id: '2',
        title: 'Google DeepMind Breakthrough: New AI Model Solves Complex Protein Folding',
        description: 'Google DeepMind announces a new AI breakthrough in protein folding, advancing biological research and drug discovery.',
        content: 'Google DeepMind has achieved a significant breakthrough in protein folding prediction...',
        author: 'AI News Hub',
        source: 'Google DeepMind',
        sourceUrl: 'https://deepmind.google',
        imageUrl: '/article-2.jpg',
        category: 'research',
        tags: ['DeepMind', 'Protein Folding', 'Biology', 'AI'],
        publishedAt: new Date('2024-11-19'),
        updatedAt: new Date('2024-11-19'),
        readingTime: 6,
        views: 980,
        slug: 'deepmind-protein-folding',
        keywords: ['DeepMind', 'protein folding', 'AI research', 'biology'],
        metaDescription: 'Google DeepMind achieves breakthrough in AI-powered protein folding prediction for drug discovery.',
      },
      {
        id: '3',
        title: 'Meta Releases Llama 3.5: Open-Source AI Model Challenges Proprietary Solutions',
        description: 'Meta releases Llama 3.5, a powerful open-source language model that rivals proprietary AI solutions in performance.',
        content: 'Meta has released Llama 3.5, continuing its commitment to open-source AI development...',
        author: 'AI News Hub',
        source: 'Meta',
        sourceUrl: 'https://meta.com',
        imageUrl: '/article-3.jpg',
        category: 'news',
        tags: ['Meta', 'Llama', 'Open Source', 'LLM'],
        publishedAt: new Date('2024-11-18'),
        updatedAt: new Date('2024-11-18'),
        readingTime: 5,
        views: 1450,
        slug: 'meta-llama-3-5-release',
        keywords: ['Meta', 'Llama', 'open source', 'language model'],
        metaDescription: 'Meta releases Llama 3.5 open-source AI model with competitive performance against proprietary solutions.',
      },
    ];

    setArticles(sampleArticles);
    setLoading(false);
  }, []);



  return (
    <SEOHead metadata={seoMetadata}>

      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />

        <main className="flex-1 container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
              <h1 className="text-4xl font-bold mb-4">Welcome to AI News Hub</h1>
              <p className="text-lg mb-6">
                Stay updated with the latest artificial intelligence news, trends, research, and applications.
                Daily updates on AI breakthroughs, tools, and industry developments.
              </p>
              <Button className="bg-white text-blue-600 hover:bg-gray-100">
                Explore Latest Articles
              </Button>
            </div>
          </section>

          {/* Ad Banner */}
          <AdBanner placement="header" />

          {/* Featured Articles Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
            
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="animate-pulse">
                    <CardHeader>
                      <div className="h-4 bg-gray-300 rounded mb-2"></div>
                      <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            ) : error ? (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
                {error}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            )}
          </section>

          {/* Ad Banner */}
          <AdBanner placement="middle" />

          {/* Categories Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {['News', 'Research', 'Applications', 'Tutorials', 'Tools', 'Trends'].map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  className="h-12 text-base"
                >
                  {category}
                </Button>
              ))}
            </div>
          </section>

          {/* Ad Banner */}
          <AdBanner placement="footer" />
        </main>

        <Footer />
      </div>
    </SEOHead>
  );
}
