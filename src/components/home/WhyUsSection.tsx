import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ScrollReveal';

export default function WhyUsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="relative">
              <img src="/images/logo.png" alt="Blow Bubbles Swimming Academy" className="w-full max-w-md mx-auto" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              لماذا نحن <span className="text-accent">!!؟؟</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              نؤمن بأن البداية المبكرة هي المفتاح لبناء الثقة والأمان في الماء.
              نقدم برامج تدريبية احترافية للأطفال ابتداءً من عمر سنة واحدة، مصممة بعناية لتناسب احتياجات كل مرحلة عمرية، تحت إشراف مدربين مؤهلين وذوي خبرة عالية في التعامل مع الأطفال.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              في مركزنا، لا نعلّم السباحة فقط، بل نغرس في أطفالكم حبّ الماء، ونبني لهم أساسًا قويًا للمهارات الحركية، التركيز، والاستقلالية.
            </p>
            <Link
              to="/contact"
              className="inline-block rounded-full bg-primary px-8 py-3 font-body font-semibold text-primary-foreground btn-glow"
            >
              سجّل طفلك اليوم
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
