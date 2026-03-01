import { GraduationCap, Shield, Clock } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const features = [
  {
    icon: Shield,
    title: 'بيئة تعليمية آمنة',
    description: 'تم تجهيز مرافقنا وفقًا لأعلى معايير السلامة والنظافة. حمامات السباحة مجهزة بأرضيات غير قابلة للانزلاق وفلاتر حديثة ونظام مراقبة.',
  },
  {
    icon: GraduationCap,
    title: 'مدربون معتمدون',
    description: 'فريقنا من المدربين حاصل على شهادات معترف بها دوليًا في تعليم السباحة، ويتميز بخبرة كبيرة في التعامل مع الأطفال.',
  },
  {
    icon: Clock,
    title: 'برامج تدريب مخصصة',
    description: 'نقدم برامج سباحة مصممة بعناية لتناسب مختلف الفئات العمرية والمستويات — من الطفو الأساسي إلى تقنيات السباحة المتقدمة.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            لماذا <span className="text-gradient">تختارنا</span>؟
          </h2>
          <p className="text-center text-muted-foreground font-body max-w-xl mx-auto mb-14">
            نؤمن بأن البداية المبكرة هي المفتاح لبناء الثقة والأمان في الماء
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="group relative bg-card rounded-2xl p-8 border border-border hover:border-secondary/40 card-hover h-full">
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-l from-secondary to-crystal opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary mb-5">
                  <feature.icon size={28} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
