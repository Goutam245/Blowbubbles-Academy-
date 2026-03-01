import ScrollReveal from '@/components/ScrollReveal';
import { Link } from 'react-router-dom';

export default function FirstLessonSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide">
        <ScrollReveal>
          <div className="text-center mb-4">
            <span className="text-sm font-body font-semibold text-secondary tracking-wider">ابدأ اليوم!</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            احصل على أول حصة سباحة <span className="text-gradient">لطفلك!</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Photos grid */}
          <ScrollReveal>
            <div className="grid grid-cols-2 gap-3">
              {['/images/swim-1.jpg', '/images/swim-2.jpg', '/images/swim-3.jpg', '/images/swim-5.jpg'].map((src, i) => (
                <div key={i} className="relative overflow-hidden rounded-xl aspect-[3/4]">
                  <img
                    src={src}
                    alt="تعليم السباحة للأطفال"
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Offer card */}
          <ScrollReveal delay={0.2}>
            <div className="gradient-navy rounded-2xl p-8 md:p-10 text-primary-foreground">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                أول حصة سباحة <br />لطفلك!
              </h3>
              <p className="text-primary-foreground/80 font-body leading-relaxed mb-6">
                خلال أسبوعين فقط، سيرى طفلك فرقًا كبيرًا في ثقته داخل الماء! دروس ممتعة وآمنة تحت إشراف مدربين محترفين.
              </p>
              <Link
                to="/contact"
                className="inline-block rounded-full bg-secondary px-8 py-3 font-body font-semibold text-secondary-foreground btn-glow"
              >
                سجل الآن
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
