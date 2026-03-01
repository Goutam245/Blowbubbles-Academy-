import ScrollReveal from '@/components/ScrollReveal';

const coaches = [
  { name: 'Ahmad', image: '/images/coach-ahmad.jpg' },
  { name: 'Khaled', image: '/images/coach-khaled.jpg' },
  { name: 'Mohammad', image: '/images/coach-mohammad.jpg' },
  { name: 'Khmaies', image: '/images/swim-3.jpg' },
];

export default function CoachesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            مدربونا <span className="text-gradient">المتميزون</span>
          </h2>
          <p className="text-center text-muted-foreground font-body max-w-2xl mx-auto mb-14">
            فريقنا من المدربين المعتمدين وذوي الخبرة، متخصص في تدريب الأطفال من عمر سنة، وبيعرفوا كيف يتعاملوا مع كل طفل بأسلوب آمن ومحفز وممتع.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {coaches.map((coach, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl bg-card card-hover">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={coach.image}
                    alt={`Coach ${coach.name}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-xs font-body font-semibold text-crystal uppercase tracking-wider">Coach</p>
                  <h3 className="font-display text-lg font-bold text-primary-foreground">{coach.name}</h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
