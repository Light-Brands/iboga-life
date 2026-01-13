import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Jay' },
  { path: '/iboga', label: 'Iboga & Healing' },
  { path: '/journey', label: 'The Journey' },
  { path: '/contact', label: 'Contact' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Scroll to top when clicking navigation links
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isHomePage = location.pathname === '/';
  const headerBg = isScrolled || !isHomePage
    ? 'bg-forest-deep/95 backdrop-blur-md shadow-lg'
    : 'bg-transparent';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}
    >
      <div className="container-content">
        <nav className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            aria-label="Iboga Life Change - Home"
            onClick={scrollToTop}
          >
            <Leaf
              className="w-8 h-8 text-sacred-gold transition-transform duration-500 group-hover:rotate-12"
              strokeWidth={1.5}
            />
            <div className="flex flex-col">
              <span className="font-accent text-lg text-cream tracking-wider">
                Iboga Life Change
              </span>
              <span className="text-xs text-sacred-gold/80 tracking-widest uppercase hidden sm:block">
                Sacred Medicine
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${
                  location.pathname === link.path ? 'nav-link-active' : ''
                }`}
                onClick={scrollToTop}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-primary text-sm py-3 px-6"
              onClick={scrollToTop}
            >
              Begin Your Journey
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-cream hover:text-sacred-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-forest-deep border-t border-sacred-gold/20 transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-4'
        }`}
      >
        <div className="container-content py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block py-3 text-lg font-secondary tracking-wide ${
                location.pathname === link.path
                  ? 'text-sacred-gold'
                  : 'text-cream hover:text-sacred-gold'
              } transition-colors`}
              onClick={scrollToTop}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-sacred-gold/20">
            <Link
              to="/contact"
              className="btn-primary w-full text-center"
              onClick={scrollToTop}
            >
              Begin Your Journey
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
