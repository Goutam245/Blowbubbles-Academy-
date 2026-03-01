import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ScrollReveal';

const plans = [
  {
    name: 'نظام جماعي',
    subtitle: '3 أطفال بنفس الوقت',
    price: '90',
    unit: 'دينار للطفل',
    features: ['العمر من 5 إلى 12 سنة', '10 حصص', 'مدة كل حصة 60 دقيقة', 'مدربون معتمدون'],
    featured: false,
    image: '/images/swim-1.jpg',
  },
  {
    name: 'تدريب خاص',
    subtitle: 'برايفت',
    price: '130',
    unit: 'دينار',
    features: ['من عمر سنة', '10 حصص', 'مدة كل حصة 30 دقيقة', 'تدريب فردي مخصص'],
    featured: true,
    image: '/images/swim-6.jpg',
  },
  {
    name: 'نظام ثنائي',
    subtitle: 'طفلين بنفس الوقت',
    price: '90',
    unit: 'دينار للطفل',
    features: ['العمر من 5 إلى 12 سنة', '10 حصص', 'مدة كل حصة 30 دقيقة', 'مع صديق أو أخ'],
    featured: false,
    image: '/images/swim-3.jpg',
  },
];

export default function PricingSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            ابدأ رحلته معنا من عمر <span className="text-accent">سنة واحدة</span> فقط!
          </h2>
          <p className="text-center text-muted-foreground font-body max-w-xl mx-auto mb-14">
            برامج تدريبية مخصصة تناسب أعمار الأطفال وتمنحهم مهارات السباحة والأمان في الماء
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div
                className={`relative overflow-hidden rounded-2xl h-full flex flex-col ${
                  plan.featured
                    ? 'gradient-navy text-primary-foreground shadow-2xl scale-[1.02] md:scale-105'
                    : 'bg-card border border-border text-foreground'
                } card-hover`}
              >
                {plan.featured && (
                  <div className="absolute top-4 left-4 z-10 rounded-full bg-accent px-3 py-1 text-xs font-body font-bold text-accent-foreground">
                    الأكثر طلبًا
                  </div>
                )}
                <div className="relative h-48 overflow-hidden">
                  <img src={plan.image} alt={plan.name} className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-xl font-bold mb-1">{plan.name}</h3>
                  <p className={`text-sm font-body mb-4 ${plan.featured ? 'text-crystal' : 'text-muted-foreground'}`}>
                    {plan.subtitle}
                  </p>
                  <div className="mb-6">
                    <span className="font-display text-4xl font-bold">{plan.price}</span>
                    <span className={`text-sm font-body mr-1 ${plan.featured ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                      {plan.unit}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm font-body">
                        <Check size={16} className={plan.featured ? 'text-crystal' : 'text-secondary'} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`block text-center rounded-full px-6 py-3 font-body font-semibold transition-all btn-glow ${
                      plan.featured
                        ? 'bg-secondary text-secondary-foreground'
                        : 'bg-primary text-primary-foreground'
                    }`}
                  >
                    سجل الآن
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
