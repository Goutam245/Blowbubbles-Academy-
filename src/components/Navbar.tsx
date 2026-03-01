import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'الرئيسية', path: '/' },
  { label: 'من نحن', path: '/about' },
  { label: 'البوم الصور', path: '/gallery' },
  { label: 'مقالاتنا', path: '/articles' },
  { label: 'تواصل معنا', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled
          ? 'rgba(255, 255, 255, 0.92)'
          : 'rgba(10, 61, 107, 0.95)',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(0, 0, 0, 0.08)'
          : '1px solid rgba(0, 180, 216, 0.3)',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.06)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
      }}
    >
      <div className="container-wide flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Phone CTA */}
        <a
          href="tel:0790816628"
          className="hidden md:flex items-center gap-2 rounded-full px-4 py-2 text-sm font-body font-semibold transition-all duration-300"
          style={{
            border: scrolled ? '1px solid hsl(207 82% 24% / 0.3)' : '1px solid rgba(255,255,255,0.4)',
            color: scrolled ? 'hsl(207, 82%, 24%)' : '#fff',
            background: scrolled ? 'hsl(207 82% 24% / 0.06)' : 'rgba(255,255,255,0.1)',
          }}
        >
          <Phone size={16} />
          <span>0790816628</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="relative font-body text-sm font-medium transition-all duration-300 after:absolute after:bottom-[-4px] after:right-0 after:h-[2px] after:w-0 after:bg-secondary after:transition-all after:duration-300 hover:after:w-full"
              style={{
                color: location.pathname === item.path
                  ? 'hsl(195, 100%, 42%)'
                  : scrolled ? '#1A1A2E' : 'rgba(255,255,255,0.9)',
              }}
            >
              {item.label}
              {location.pathname === item.path && (
                <span className="absolute bottom-[-4px] right-0 h-[2px] w-full bg-secondary" />
              )}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <Link to="/" className="animate-breathe">
          <img
            src="/images/logo.png"
            alt="Blow Bubbles Swimming Academy"
            className="h-12 w-auto"
            style={{
              filter: scrolled ? 'none' : 'brightness(0) invert(1)',
              transition: 'filter 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          />
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg transition-colors"
          style={{ color: scrolled ? '#1A1A2E' : '#fff' }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{ background: 'rgba(10, 61, 107, 0.98)' }}
          >
            <div className="flex flex-col items-center gap-4 py-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="font-body text-base font-medium transition-colors"
                  style={{
                    color: location.pathname === item.path ? 'hsl(195, 100%, 42%)' : '#fff',
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:0790816628"
                className="mt-2 flex items-center gap-2 rounded-full bg-secondary px-6 py-2.5 text-sm font-semibold text-secondary-foreground"
              >
                <Phone size={16} />
                0790816628
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
