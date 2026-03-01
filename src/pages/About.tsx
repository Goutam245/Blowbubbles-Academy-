import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import CoachesSection from '@/components/home/CoachesSection';
import { Link } from 'react-router-dom';

const features = [
  'تدريب متخصص للأطفال من عمر سنة',
  'فرعان في المدينة الرياضية والصويفية',
  'مدربون محترفون وذوو خبرة',
  'بيئة آمنة وودية للأطفال والأهالي',
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="/images/swim-7.jpg" alt="من نحن" className="h-full w-full object-cover" />
          <div className="absolute inset-0 gradient-hero" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">من نحن</h1>
          <p className="mt-4 text-primary-foreground/80 font-body max-w-lg mx-auto">
            بداية طفلك معنا في عالم السباحة ستكون آمنة، ممتعة، وملهمة.
          </p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  قصتنا في <span className="text-gradient">BlowBubbles</span>
                </h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-4">
                  نؤمن أن كل فقاعة بداية، وبداية طفلك معنا في عالم السباحة ستكون آمنة، ممتعة، وملهمة. نحن أكاديمية متخصصة في تعليم السباحة للأطفال بدءًا من عمر سنة واحدة، باستخدام أساليب تربوية حديثة وتمارين مصممة خصيصًا لتناسب مراحل نمو الطفل البدني والنفسي.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="rounded-2xl overflow-hidden">
                <img src="/images/swim-4.jpg" alt="أكاديمية بلو بابلز" className="w-full h-auto object-cover rounded-2xl" loading="lazy" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <img src="/images/logo.png" alt="Blow Bubbles" className="w-full max-w-sm mx-auto" />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">رؤيتنا</h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                في BlowBubbles، نؤمن بأن السباحة أكثر من مجرد مهارة؛ إنها أسلوب حياة يبدأ من الطفولة. رؤيتنا أن نكون الأكاديمية الرائدة في تعليم السباحة للأطفال في الأردن، عبر توفير بيئة آمنة، محفّزة، ومليئة بالمرح، تساعد الأطفال على بناء الثقة بالنفس وتطوير قدراتهم منذ عمر سنة.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                رسالتنا تتمثل في تقديم برامج تدريبية احترافية بإشراف مدربين معتمدين، ندمج فيها التعليم بالمتعة لتعزيز النمو البدني والذهني للأطفال.
              </p>

              <h3 className="font-display text-xl font-bold text-foreground mb-4">مميزاتنا:</h3>
              <ul className="space-y-3">
                {features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 font-body text-foreground">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                      <Check size={14} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Coaching Philosophy */}
      <section className="section-padding gradient-navy text-primary-foreground">
        <div className="container-wide text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">فلسفتنا في التدريب</h2>
            <p className="font-body text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed text-lg">
              هدفنا أن نجعل تجربة السباحة ممتعة، آمنة، ومحفزة لكل طفل. نولي أهمية خاصة للجوانب النفسية والتربوية، مما يساعد الأطفال على تخطي الخوف من الماء وبناء ثقة بأنفسهم منذ أول يوم. في مركزنا، لا نعلّم السباحة فقط، بل نغرس في أطفالكم حبّ الماء.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              من داخل <span className="text-gradient">مسابحنا</span>
            </h2>
          </ScrollReveal>
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {['/images/swim-1.jpg', '/images/swim-2.jpg', '/images/swim-3.jpg', '/images/swim-5.jpg', '/images/swim-6.jpg', '/images/swim-7.jpg', '/images/swim-8.jpg', '/images/swim-4.jpg'].map((src, i) => (
              <ScrollReveal key={i}>
                <div className="break-inside-avoid overflow-hidden rounded-xl">
                  <img src={src} alt="صور من الأكاديمية" className="w-full h-auto hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CoachesSection />

      {/* CTA */}
      <section className="py-16 gradient-aqua text-center">
        <div className="container-wide px-4">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              سجّل طفلك اليوم
            </h2>
            <Link
              to="/contact"
              className="inline-block rounded-full bg-primary px-10 py-4 font-body font-semibold text-primary-foreground btn-glow text-lg"
            >
              تواصل معنا
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
