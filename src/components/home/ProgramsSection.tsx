import { Baby, Users, Award } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const programs = [
  {
    icon: Baby,
    title: 'برنامج البيبيات',
    age: 'من عمر سنة حتى 4 سنوات',
    description: 'نوفّر بيئة آمنة وداعمة للأطفال الصغار ليتعرفوا على الماء، يكتسبوا الثقة، ويتعلموا الأساسيات من خلال اللعب والتفاعل الممتع مع المدرب.',
  },
  {
    icon: Users,
    title: 'برنامج الأطفال',
    age: 'من عمر 5 إلى 12 سنة',
    description: 'يركّز هذا البرنامج على تعليم مهارات السباحة الأساسية والمتقدّمة، مع متابعة دقيقة لكل طفل لضمان تطوره خطوة بخطوة.',
  },
  {
    icon: Award,
    title: 'نظام المستويات',
    age: 'مبتدئ — متقدم',
    description: 'يبدأ الطفل من المستوى المبتدئ ويتدرّج حتى يصل إلى مستويات متقدمة تؤهّله للمشاركة في البطولات والمسابقات المحلية.',
  },
];

export default function ProgramsSection() {
  return (
    <section className="section-padding gradient-navy text-primary-foreground">
      <div className="container-wide">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            نظامنا التعليمي والتدريبي
          </h2>
          <p className="text-center text-primary-foreground/70 font-body max-w-2xl mx-auto mb-14">
            نؤمن أن لكل عمر احتياجاته وطريقته الخاصة في التعلّم — لذلك صمّمنا أكثر من نظام تعليمي وتدريبي
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((program, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="group relative rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 hover:bg-primary-foreground/10 transition-all duration-500 h-full">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/20 text-crystal mb-5">
                  <program.icon size={28} />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{program.title}</h3>
                <span className="inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-body font-semibold text-accent mb-4">
                  {program.age}
                </span>
                <p className="text-primary-foreground/70 font-body text-sm leading-relaxed">{program.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
