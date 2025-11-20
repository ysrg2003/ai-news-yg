import { Link } from 'wouter';
import { APP_LOGO, APP_TITLE } from '@shared/const';
import { Button } from '@/components/ui/button';
import { Menu, X, Search } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <Link href="/">
            <a className="flex items-center gap-2 hover:opacity-80 transition">
              {APP_LOGO && <img src={APP_LOGO} alt={APP_TITLE} className="h-8 w-8" />}
              <span className="text-xl font-bold text-blue-600">{APP_TITLE}</span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/">
              <a className="text-gray-700 hover:text-blue-600 transition">Home</a>
            </Link>
            <Link href="/articles">
              <a className="text-gray-700 hover:text-blue-600 transition">Articles</a>
            </Link>
            <Link href="/categories">
              <a className="text-gray-700 hover:text-blue-600 transition">Categories</a>
            </Link>
            <Link href="/about">
              <a className="text-gray-700 hover:text-blue-600 transition">About</a>
            </Link>
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4 space-y-2">
            <Link href="/">
              <a className="block text-gray-700 hover:text-blue-600 py-2">Home</a>
            </Link>
            <Link href="/articles">
              <a className="block text-gray-700 hover:text-blue-600 py-2">Articles</a>
            </Link>
            <Link href="/categories">
              <a className="block text-gray-700 hover:text-blue-600 py-2">Categories</a>
            </Link>
            <Link href="/about">
              <a className="block text-gray-700 hover:text-blue-600 py-2">About</a>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
