import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Instagram, Facebook, MapPin, Clock, ArrowUp, MessageCircle } from 'lucide-react';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <footer
        className="relative text-primary-foreground overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, hsl(207, 82%, 24%) 0%, #060F1E 100%)',
        }}
      >
        {/* Subtle bubble pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='20' cy='20' r='8' fill='%2300B4D8' fill-opacity='0.5'/%3E%3Ccircle cx='70' cy='50' r='12' fill='%2390E0EF' fill-opacity='0.3'/%3E%3Ccircle cx='40' cy='80' r='6' fill='%2300B4D8' fill-opacity='0.4'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="container-wide relative z-10" style={{ padding: '80px 1rem 0' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

            {/* Column 1 — Brand */}
            <div className="space-y-5">
              <img src="/images/logo.png" alt="Blow Bubbles" className="h-16 w-auto" />
              <p className="text-sm text-primary-foreground/70 font-body leading-relaxed">
                نُعلّم أطفالكم السباحة بأمان وثقة ومتعة
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/blowbubbles_swim/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 hover:bg-secondary transition-colors duration-300"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.facebook.com/blowbubblesswim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 hover:bg-secondary transition-colors duration-300"
                >
                  <Facebook size={18} />
                </a>
              </div>
              <a
                href="https://wa.me/962790816628"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-body font-semibold transition-all duration-300"
                style={{ background: '#25D366', color: '#fff' }}
              >
                <MessageCircle size={16} />
                تواصل عبر واتساب
              </a>
            </div>

            {/* Column 2 — Quick Links */}
            <div className="space-y-5">
              <h4 className="font-display text-lg font-semibold text-secondary">روابط سريعة</h4>
              <div className="w-8 h-0.5 bg-secondary/50 rounded-full" />
              <div className="flex flex-col gap-2.5">
                {[
                  { label: 'الرئيسية', path: '/' },
                  { label: 'من نحن', path: '/about' },
                  { label: 'البرامج والأسعار', path: '/#pricing' },
                  { label: 'البوم الصور', path: '/gallery' },
                  { label: 'مقالاتنا', path: '/articles' },
                  { label: 'تواصل معنا', path: '/contact' },
                ].map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors font-body relative inline-block w-fit after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:right-0 after:bg-secondary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 3 — Programs */}
            <div className="space-y-5">
              <h4 className="font-display text-lg font-semibold text-secondary">برامجنا</h4>
              <div className="w-8 h-0.5 bg-secondary/50 rounded-full" />
              <div className="flex flex-col gap-2.5">
                {[
                  'برنامج البيبي (من عمر سنة)',
                  'برنامج الأطفال (4-12 سنة)',
                  'تدريب خاص',
                  'نظام المجموعات',
                ].map((item) => (
                  <span key={item} className="text-sm text-primary-foreground/70 font-body">
                    {item}
                  </span>
                ))}
                <Link
                  to="/contact"
                  className="mt-2 inline-flex w-fit items-center gap-1 rounded-full bg-secondary px-5 py-2 text-xs font-body font-semibold text-secondary-foreground transition-all duration-300 hover:brightness-110"
                >
                  التسجيل الآن
                </Link>
              </div>
            </div>

            {/* Column 4 — Contact */}
            <div className="space-y-5">
              <h4 className="font-display text-lg font-semibold text-secondary">تواصل معنا</h4>
              <div className="w-8 h-0.5 bg-secondary/50 rounded-full" />
              <div className="flex flex-col gap-3">
                <a
                  href="tel:0790816628"
                  className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-secondary transition-colors font-body"
                >
                  <Phone size={15} className="shrink-0" />
                  0790816628
                </a>
                <div className="flex items-start gap-2 text-sm text-primary-foreground/70 font-body">
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  <span>فرع المدينة الرياضية</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-primary-foreground/70 font-body">
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  <span>فرع الصويفية</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-primary-foreground/70 font-body">
                  <Clock size={15} className="mt-0.5 shrink-0" />
                  <span>السبت–الأربعاء: 9:00ص–12:00ظ و 2:00م–9:00م</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            className="mt-16 pt-6 pb-8 flex flex-col sm:flex-row items-center justify-between gap-3"
            style={{ borderTop: '1px solid rgba(0, 180, 216, 0.2)' }}
          >
            <p className="text-xs text-primary-foreground/50 font-body">
              © {new Date().getFullYear()} Blow Bubbles Swimming Academy. جميع الحقوق محفوظة.
            </p>
            <p className="text-xs text-primary-foreground/40 font-body">
              تم التصميم والتطوير بعناية 💙
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-lg transition-all duration-300"
        style={{
          opacity: showBackToTop ? 1 : 0,
          pointerEvents: showBackToTop ? 'auto' : 'none',
          transform: showBackToTop ? 'translateY(0)' : 'translateY(20px)',
        }}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
}
