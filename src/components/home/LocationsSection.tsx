import { MapPin, Clock } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const locations = [
  {
    name: 'فرع المدينة الرياضية',
    address: 'مسبح الحسين — المدينة الرياضية',
    hours: 'الأحد، الثلاثاء، الخميس — 10:00 صباحًا حتى 7:30 مساءً',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.5!2d35.8754!3d31.9662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDU3JzU4LjMiTiAzNcKwNTInMzEuNCJF!5e0!3m2!1sar!2sjo!4v1',
  },
  {
    name: 'فرع الصويفية',
    address: 'خلف المدرسة الأمريكية — الصويفية',
    hours: 'السبت، الاثنين، الأربعاء — 8:00 صباحًا حتى 2:00 ظهرًا / 12:00 ظهرًا حتى 9:00 مساءً',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.5!2d35.8554!3d31.9562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDU3JzIyLjMiTiAzNcKwNTEnMTkuNCJF!5e0!3m2!1sar!2sjo!4v1',
  },
];

export default function LocationsSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            مراكزنا التدريبية في <span className="text-gradient">موقعين مميزين</span>
          </h2>
          <p className="text-center text-muted-foreground font-body max-w-xl mx-auto mb-14">
            اختار الموقع الأقرب إليك وابدأ رحلة السباحة لطفلك معنا بكل راحة وسهولة!
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((loc, i) => (
            <ScrollReveal key={i} delay={i * 0.2}>
              <div className="rounded-2xl overflow-hidden border border-border bg-card card-hover">
                <div className="aspect-video">
                  <iframe
                    src={loc.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={loc.name}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{loc.name}</h3>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground font-body mb-2">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-secondary" />
                    {loc.address}
                  </div>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground font-body">
                    <Clock size={16} className="mt-0.5 shrink-0 text-secondary" />
                    {loc.hours}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
