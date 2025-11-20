import { useState, useEffect } from 'react';
import { Article, SEOMetadata } from '@shared/types';
import { APP_TITLE, APP_URL } from '@shared/const';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

export default function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  const seoMetadata: SEOMetadata = {
    title: `All Articles - ${APP_TITLE}`,
    description: 'Browse all AI news articles, research papers, and industry updates. Stay informed with the latest artificial intelligence trends.',
    keywords: ['AI articles', 'AI news', 'machine learning', 'deep learning', 'neural networks'],
    author: 'AI News Hub',
    image: `${APP_URL}og-image.png`,
    url: `${APP_URL}articles`,
    type: 'website',
  };

  useEffect(() => {
    // Load sample articles
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
    setFilteredArticles(sampleArticles);
    setLoading(false);
  }, []);

  useEffect(() => {
    let filtered = articles;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((article) => article.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    setFilteredArticles(filtered);
  }, [searchQuery, selectedCategory, articles]);

  const categories = ['all', 'news', 'research', 'applications', 'tutorials', 'tools', 'trends'];

  return (
    <SEOHead metadata={seoMetadata}>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />

        <main className="flex-1 container mx-auto px-4 py-8">
          {/* Page Header */}
          <section className="mb-8">
            <h1 className="text-4xl font-bold mb-4">All Articles</h1>
            <p className="text-gray-600 text-lg">
              Explore our comprehensive collection of AI news, research, and insights.
            </p>
          </section>

          {/* Search and Filter */}
          <section className="mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {/* Search Bar */}
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles by title, description, or tags..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-3">Filter by Category:</p>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? 'default' : 'outline'}
                      onClick={() => setSelectedCategory(category)}
                      className="capitalize"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Articles Grid */}
          <section>
            {loading ? (
              <div className="text-center py-12">
                <p className="text-gray-500">Loading articles...</p>
              </div>
            ) : filteredArticles.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
              </div>
            ) : (
              <>
                <p className="text-gray-600 mb-6">
                  Showing {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </>
            )}
          </section>
        </main>

        <Footer />
      </div>
    </SEOHead>
  );
}
