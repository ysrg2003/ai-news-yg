import { Link } from 'wouter';
import { APP_TITLE, APP_CONTACT_EMAIL, APP_GITHUB, APP_TWITTER } from '@shared/const';
import { Facebook, Twitter, Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{APP_TITLE}</h3>
            <p className="text-sm text-gray-400">
              Stay updated with the latest AI news, trends, research, and applications. Daily updates on AI breakthroughs and industry developments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <a className="text-gray-400 hover:text-white transition">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/articles">
                  <a className="text-gray-400 hover:text-white transition">Articles</a>
                </Link>
              </li>
              <li>
                <Link href="/categories">
                  <a className="text-gray-400 hover:text-white transition">Categories</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-gray-400 hover:text-white transition">About Us</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-bold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/category/news">
                  <a className="text-gray-400 hover:text-white transition">News</a>
                </Link>
              </li>
              <li>
                <Link href="/category/research">
                  <a className="text-gray-400 hover:text-white transition">Research</a>
                </Link>
              </li>
              <li>
                <Link href="/category/applications">
                  <a className="text-gray-400 hover:text-white transition">Applications</a>
                </Link>
              </li>
              <li>
                <Link href="/category/tools">
                  <a className="text-gray-400 hover:text-white transition">Tools</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-white font-bold mb-4">Connect With Us</h4>
            <div className="flex gap-4 mb-4">
              <a
                href={`https://twitter.com/${APP_TWITTER.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={APP_GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${APP_CONTACT_EMAIL}`}
                className="text-gray-400 hover:text-white transition"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              <a href={`mailto:${APP_CONTACT_EMAIL}`} className="hover:text-white transition">
                {APP_CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {currentYear} {APP_TITLE}. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy">
                <a className="hover:text-white transition">Privacy Policy</a>
              </Link>
              <Link href="/terms">
                <a className="hover:text-white transition">Terms of Service</a>
              </Link>
              <Link href="/sitemap">
                <a className="hover:text-white transition">Sitemap</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
