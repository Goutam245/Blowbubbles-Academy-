import { useCounter } from '@/hooks/useCounter';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const stats = [
  { value: 500, label: 'طفل تم تدريبهم', suffix: '+' },
  { value: 4, label: 'مدربون معتمدون', suffix: '' },
  { value: 2, label: 'فروع في عمّان', suffix: '' },
  { value: 5, label: 'سنوات خبرة', suffix: '+' },
];

function StatItem({ value, label, suffix }: { value: number; label: string; suffix: string }) {
  const { ref, isVisible } = useScrollAnimation();
  const count = useCounter(value, isVisible);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
        {count}{suffix}
      </div>
      <p className="mt-2 text-sm font-body text-primary-foreground/70">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-16 gradient-aqua">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <StatItem key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
