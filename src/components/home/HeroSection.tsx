import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const words = ['ابدأ', 'رحلة', 'طفلك', 'في', 'عالم', 'السباحة', 'بثقة', 'ومهارة'];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/swim-4.jpg"
          alt="أكاديمية تعليم السباحة"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-6"
        >
          <span className="inline-block rounded-full border border-crystal/30 bg-crystal/10 px-5 py-1.5 text-sm font-body text-crystal">
            أكاديمية بلو بابلز للسباحة
          </span>
        </motion.div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              className="inline-block mx-1"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="max-w-2xl mx-auto text-lg text-primary-foreground/80 font-body mb-10 leading-relaxed"
        >
          نقدم دروس سباحة ممتعة وآمنة للأطفال من جميع الأعمار مع مدربين محترفين وبرامج تدريب معتمدة تساعدهم على بناء الثقة بالنفس ومهارات الحياة.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            to="/contact"
            className="rounded-full bg-secondary px-8 py-3.5 font-body font-semibold text-secondary-foreground btn-glow"
          >
            احجز الآن
          </Link>
          <Link
            to="/about"
            className="rounded-full border-2 border-primary-foreground/30 px-8 py-3.5 font-body font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
          >
            اعرف أكثر
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="text-primary-foreground/60" size={28} />
      </motion.div>
    </section>
  );
}
