import { APP_TITLE, APP_URL, APP_CONTACT_EMAIL } from '@shared/const';
import { SEOMetadata } from '@shared/types';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

export default function Privacy() {
  const seoMetadata: SEOMetadata = {
    title: `Privacy Policy - ${APP_TITLE}`,
    description: 'Privacy policy for AI News Hub. Learn how we collect, use, and protect your information.',
    keywords: ['privacy', 'privacy policy', 'data protection'],
    author: 'AI News Hub',
    image: `${APP_URL}og-image.png`,
    url: `${APP_URL}privacy`,
    type: 'website',
  };

  return (
    <SEOHead metadata={seoMetadata}>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />

        <main className="flex-1 container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">Last updated: November 2024</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                {APP_TITLE} ("we," "us," "our," or "Company") operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Information Collection and Use</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect several different types of information for various purposes to provide and improve our Service to you.
              </p>
              
              <h3 className="text-xl font-bold mb-3 mt-6">Types of Data Collected:</h3>
              <ul className="space-y-3 text-gray-700 ml-4">
                <li><strong>Personal Data:</strong> While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data").</li>
                <li><strong>Usage Data:</strong> We may also collect information on how the Service is accessed and used ("Usage Data").</li>
                <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to track activity on our Service and hold certain information.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Use of Data</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {APP_TITLE} uses the collected data for various purposes:
              </p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li>• To provide and maintain our Service</li>
                <li>• To notify you about changes to our Service</li>
                <li>• To allow you to participate in interactive features of our Service</li>
                <li>• To provide customer support</li>
                <li>• To gather analysis or valuable information so that we can improve our Service</li>
                <li>• To monitor the usage of our Service</li>
                <li>• To detect, prevent and address technical issues</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Security of Data</h2>
              <p className="text-gray-700 leading-relaxed">
                The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
              </p>
            </section>

            <section className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-700">
                Email: <a href={`mailto:${APP_CONTACT_EMAIL}`} className="text-blue-600 hover:underline">{APP_CONTACT_EMAIL}</a>
              </p>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </SEOHead>
  );
}
