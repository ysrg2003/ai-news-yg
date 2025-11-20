import { APP_TITLE, APP_DESCRIPTION, APP_URL } from '@shared/const';
import { SEOMetadata } from '@shared/types';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

export default function About() {
  const seoMetadata: SEOMetadata = {
    title: `About ${APP_TITLE}`,
    description: 'Learn more about AI News Hub, our mission, and our commitment to delivering quality AI news and insights.',
    keywords: ['about', 'AI News Hub', 'mission', 'AI news'],
    author: 'AI News Hub',
    image: `${APP_URL}og-image.png`,
    url: `${APP_URL}about`,
    type: 'website',
  };

  return (
    <SEOHead metadata={seoMetadata}>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />

        <main className="flex-1 container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">About {APP_TITLE}</h1>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {APP_TITLE} is dedicated to bringing you the latest news, trends, research, and applications in the field of artificial intelligence. Our mission is to make AI knowledge accessible to everyone, from beginners to experts.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We believe that artificial intelligence is transforming the world, and it's crucial for people to stay informed about the latest developments, breakthroughs, and applications.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Daily AI News:</strong> Stay updated with the latest announcements and developments in AI.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Research Insights:</strong> Deep dives into AI research papers and academic findings.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Real-World Applications:</strong> Explore how AI is being used in various industries.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Tutorials and Guides:</strong> Learn AI concepts and tools through practical tutorials.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Tool Reviews:</strong> Discover and review the latest AI tools and frameworks.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Industry Trends:</strong> Understand the direction of AI development and market trends.</span>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-blue-600 mb-2">Curated Content</h3>
                  <p className="text-gray-700 text-sm">
                    We carefully select and curate the most relevant and important AI news from around the world.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-blue-600 mb-2">Expert Analysis</h3>
                  <p className="text-gray-700 text-sm">
                    Our team provides in-depth analysis and insights on AI developments and trends.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-blue-600 mb-2">Daily Updates</h3>
                  <p className="text-gray-700 text-sm">
                    Stay informed with fresh content added daily, ensuring you never miss important updates.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-blue-600 mb-2">Community Focused</h3>
                  <p className="text-gray-700 text-sm">
                    We're building a community of AI enthusiasts, professionals, and learners.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-700 mb-4">
                Have questions, suggestions, or want to contribute? We'd love to hear from you!
              </p>
              <p className="text-gray-700">
                Email us at: <a href="mailto:contact@ainewshub.com" className="text-blue-600 hover:underline">contact@ainewshub.com</a>
              </p>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </SEOHead>
  );
}
