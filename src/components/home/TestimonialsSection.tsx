import { Star, Quote } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const testimonials = [
  {
    name: 'أم محمد',
    text: 'ابني كان يخاف من الماء كثيرًا، وبعد شهر واحد في بلو بابلز صار يحب السباحة ويطلب يروح كل يوم! المدربين محترفين جدًا.',
    rating: 5,
  },
  {
    name: 'أبو سارة',
    text: 'بنتي عمرها سنتين وبدأت معهم، البيئة آمنة جدًا والمدربين يعرفوا كيف يتعاملوا مع الأطفال الصغار. أنصح كل أب وأم.',
    rating: 5,
  },
  {
    name: 'أم عمر',
    text: 'أفضل أكاديمية سباحة في عمان! النظافة ممتازة، والبرامج مدروسة ومناسبة لكل عمر. شكرًا بلو بابلز.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-14">
            ماذا يقول <span className="text-gradient">الأهالي</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="relative rounded-2xl bg-card border border-border p-8 card-hover h-full">
                <Quote className="absolute top-6 left-6 text-secondary/20" size={40} />
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="font-accent text-lg text-foreground leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
                <p className="font-body text-sm font-semibold text-foreground">{t.name}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
