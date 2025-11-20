import { Link } from 'wouter';
import { Article } from '@shared/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <Link href={`/article/${article.slug}`}>
      <a className="block h-full">
        <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
          {/* Article Image */}
          {article.imageUrl && (
            <div className="w-full h-48 bg-gray-200 overflow-hidden">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          )}

          <CardHeader>
            {/* Category Badge */}
            <div className="mb-2">
              <Badge variant="secondary" className="capitalize">
                {article.category}
              </Badge>
            </div>

            {/* Title */}
            <CardTitle className="line-clamp-2 hover:text-blue-600 transition">
              {article.title}
            </CardTitle>

            {/* Description */}
            <CardDescription className="line-clamp-2 mt-2">
              {article.description}
            </CardDescription>
          </CardHeader>

          <CardContent>
            {/* Metadata */}
            <div className="space-y-3 text-sm text-gray-600">
              {/* Author and Date */}
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{formattedDate}</span>
                </div>
              </div>

              {/* Reading Time */}
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{article.readingTime} min read</span>
              </div>

              {/* Tags */}
              {article.tags && article.tags.length > 0 && (
                <div className="flex gap-2 flex-wrap pt-2">
                  {article.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                  {article.tags.length > 2 && (
                    <span className="text-xs text-gray-500">+{article.tags.length - 2} more</span>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </a>
    </Link>
  );
}
