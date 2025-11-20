import { useRoute } from 'wouter';
import { useState, useEffect } from 'react';
import { Article, SEOMetadata } from '@shared/types';
import { APP_URL } from '@shared/const';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import AdBanner from '@/components/AdBanner';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, Share2, ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';

export default function ArticleDetail() {
  const [match, params] = useRoute('/article/:slug');
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching article by slug
    const sampleArticles: Record<string, Article> = {
      'openai-gpt5-release': {
        id: '1',
        title: 'OpenAI Releases GPT-5: Revolutionary Advances in AI Reasoning',
        description: 'OpenAI announces GPT-5 with significant improvements in reasoning, multimodal understanding, and real-time processing capabilities.',
        content: `OpenAI has released GPT-5, marking a major milestone in artificial intelligence development. This latest iteration brings significant improvements in reasoning capabilities, multimodal understanding, and real-time processing.

GPT-5 represents a leap forward in several key areas:

**Enhanced Reasoning**: The model demonstrates improved logical reasoning and problem-solving abilities, making it more suitable for complex analytical tasks.

**Multimodal Understanding**: GPT-5 can now process and understand information from multiple modalities simultaneously, including text, images, and audio.

**Real-time Processing**: With optimized architecture, GPT-5 can process information and generate responses in real-time, making it suitable for interactive applications.

**Improved Safety**: OpenAI has implemented additional safety measures to ensure responsible AI deployment.

The release of GPT-5 is expected to accelerate innovation across various industries, from healthcare and finance to education and creative fields. Developers and organizations can now access GPT-5 through OpenAI's API, enabling them to build more sophisticated AI-powered applications.

This breakthrough demonstrates the continued progress in large language models and reinforces OpenAI's position as a leader in AI research and development.`,
        author: 'AI News Hub',
        source: 'OpenAI',
        sourceUrl: 'https://openai.com',
        imageUrl: '/article-1.jpg',
        category: 'news',
        tags: ['OpenAI', 'GPT-5', 'AI', 'LLM', 'Artificial Intelligence'],
        publishedAt: new Date('2024-11-20'),
        updatedAt: new Date('2024-11-20'),
        readingTime: 5,
        views: 1250,
        slug: 'openai-gpt5-release',
        keywords: ['OpenAI', 'GPT-5', 'artificial intelligence', 'language model', 'AI reasoning'],
        metaDescription: 'OpenAI releases GPT-5 with revolutionary advances in AI reasoning and multimodal understanding.',
      },
    };

    const slug = params?.slug || '';
    const foundArticle = sampleArticles[slug];

    if (foundArticle) {
      setArticle(foundArticle);
    }
    setLoading(false);
  }, [params?.slug]);

  if (!match || !article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-6">The article you're looking for doesn't exist.</p>
            <Link href="/articles">
              <a className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                <ArrowLeft className="h-4 w-4" />
                Back to Articles
              </a>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const seoMetadata: SEOMetadata = {
    title: article.title,
    description: article.metaDescription,
    keywords: article.keywords,
    author: article.author,
    image: article.imageUrl,
    url: `${APP_URL}article/${article.slug}`,
    type: 'article',
    publishedTime: article.publishedAt.toISOString(),
    modifiedTime: article.updatedAt.toISOString(),
    tags: article.tags,
  };

  const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const shareArticle = (platform: string) => {
    const url = `${APP_URL}article/${article.slug}`;
    const title = article.title;
    const text = article.description;

    const shareUrls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      copy: url,
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    } else {
      window.open(shareUrls[platform], '_blank');
    }
  };

  return (
    <SEOHead metadata={seoMetadata}>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />

        <main className="flex-1 container mx-auto px-4 py-8">
          {/* Back Button */}
          <Link href="/articles">
            <a className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6">
              <ArrowLeft className="h-4 w-4" />
              Back to Articles
            </a>
          </Link>

          {/* Article Header */}
          <article className="max-w-3xl mx-auto">
            {/* Category Badge */}
            <div className="mb-4">
              <Badge variant="secondary" className="capitalize text-base">
                {article.category}
              </Badge>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold mb-4 leading-tight">{article.title}</h1>

            {/* Meta Information */}
            <div className="flex flex-wrap gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readingTime} min read</span>
              </div>
            </div>

            {/* Featured Image */}
            {article.imageUrl && (
              <div className="mb-8">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
            )}

            {/* Ad Banner */}
            <AdBanner placement="inArticle" />

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-8">
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Ad Banner */}
            <AdBanner placement="inArticle" />

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="mb-8 pb-8 border-b border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-3">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm hover:bg-blue-200 cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Share Section */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-800 mb-4">Share this article:</h3>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => shareArticle('twitter')}
                  className="gap-2"
                >
                  <Share2 className="h-4 w-4" />
                  Twitter
                </Button>
                <Button
                  variant="outline"
                  onClick={() => shareArticle('facebook')}
                  className="gap-2"
                >
                  <Share2 className="h-4 w-4" />
                  Facebook
                </Button>
                <Button
                  variant="outline"
                  onClick={() => shareArticle('linkedin')}
                  className="gap-2"
                >
                  <Share2 className="h-4 w-4" />
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  onClick={() => shareArticle('copy')}
                  className="gap-2"
                >
                  <Share2 className="h-4 w-4" />
                  Copy Link
                </Button>
              </div>
            </div>

            {/* Source Link */}
            {article.sourceUrl && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Source:</strong>{' '}
                  <a
                    href={article.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    {article.source}
                  </a>
                </p>
              </div>
            )}
          </article>

          {/* Ad Banner */}
          <div className="mt-12">
            <AdBanner placement="footer" />
          </div>
        </main>

        <Footer />
      </div>
    </SEOHead>
  );
}
