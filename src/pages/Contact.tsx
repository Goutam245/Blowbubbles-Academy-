import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, ChevronDown, ChevronUp, MapPin, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const faqs = [
  { q: 'من أي عمر يمكن لطفلي البدء في تعلم السباحة؟', a: 'يمكن لطفلك البدء من عمر سنة واحدة. لدينا برامج مخصصة للأطفال الصغار مع مدربين متخصصين.' },
  { q: 'هل التدريب آمن للأطفال في هذا العمر الصغير؟', a: 'نعم، نتبع أعلى معايير السلامة مع مدربين مؤهلين ومرافق مجهزة بأحدث أنظمة الأمان.' },
  { q: 'كم عدد الأطفال في كل حصة تدريبية؟', a: 'يعتمد على النظام المختار — تدريب خاص (طفل واحد)، ثنائي (طفلين)، أو جماعي (3 أطفال).' },
  { q: 'هل يجب أن يكون الطفل قد جرب السباحة من قبل؟', a: 'لا، نرحب بجميع المستويات. برامجنا مصممة للمبتدئين والمتقدمين على حد سواء.' },
  { q: 'ما المواقع المتاحة للتدريب؟', a: 'لدينا فرعان: فرع المدينة الرياضية وفرع الصويفية. يمكنك اختيار الأقرب إليك.' },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    childCount: '',
    childName: '',
    childAge: '',
    phone: '',
    email: '',
    trainingSystem: '',
    branch: '',
    time: '',
    photography: '',
    medicalNotes: '',
    howFound: [] as string[],
    additionalInfo: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (value: string) => {
    setFormData(prev => ({
      ...prev,
      howFound: prev.howFound.includes(value)
        ? prev.howFound.filter(v => v !== value)
        : [...prev.howFound, value],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `طلب تسجيل جديد:\nاسم الطفل: ${formData.childName}\nالعمر: ${formData.childAge}\nالهاتف: ${formData.phone}`;
    window.open(`https://wa.me/962790816628?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[45vh] min-h-[350px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="/images/swim-5.jpg" alt="تواصل معنا" className="h-full w-full object-cover" />
          <div className="absolute inset-0 gradient-hero" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            تواصل معنا الآن
          </h1>
          <p className="text-primary-foreground/80 font-body text-lg">
            لأن راحة طفلك تبدأ بخطوة
          </p>
          <a
            href="tel:0790816628"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-3 font-body font-semibold text-secondary-foreground btn-glow"
          >
            <Phone size={18} />
            اتصل 0790816628
          </a>
        </motion.div>
      </section>

      {/* Form */}
      <section className="section-padding bg-card">
        <div className="container-wide max-w-3xl">
          <ScrollReveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-2">
              اترك بيانات طفلك للحصول على الحصه
            </h2>
            <p className="text-center text-muted-foreground font-body mb-10">
              وسوف يقوم فريقنا بالتواصل معك بأسرع وقت ممكن
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Fields */}
              {[
                { name: 'childCount', label: 'عدد الأطفال', type: 'number' },
                { name: 'childName', label: 'اسم الطفل *', type: 'text', required: true },
                { name: 'childAge', label: 'عمر الطفل *', type: 'text', required: true },
                { name: 'phone', label: 'رقم الهاتف *', type: 'tel', required: true },
                { name: 'email', label: 'بريدك الإلكتروني', type: 'email' },
              ].map((field) => (
                <div key={field.name} className="group relative">
                  <input
                    name={field.name}
                    type={field.type}
                    required={field.required}
                    value={formData[field.name as keyof typeof formData] as string}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full border-b-2 border-border bg-transparent py-3 font-body text-foreground outline-none transition-colors focus:border-secondary placeholder-transparent"
                  />
                  <label className="pointer-events-none absolute right-0 top-3 text-sm font-body text-muted-foreground transition-all peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-secondary peer-[:not(:placeholder-shown)]:top-[-8px] peer-[:not(:placeholder-shown)]:text-xs">
                    {field.label}
                  </label>
                </div>
              ))}

              {/* Training System */}
              <div>
                <label className="block text-sm font-body text-muted-foreground mb-2">نظام التدريب *</label>
                <select
                  name="trainingSystem"
                  value={formData.trainingSystem}
                  onChange={handleChange}
                  required
                  className="w-full border-b-2 border-border bg-transparent py-3 font-body text-foreground outline-none focus:border-secondary"
                >
                  <option value="">اختر النظام</option>
                  <option value="private">تدريب خاص</option>
                  <option value="duo">نظام ثنائي</option>
                  <option value="group">نظام جماعي</option>
                </select>
              </div>

              {/* Branch */}
              <div>
                <label className="block text-sm font-body text-muted-foreground mb-2">الفرع المراد التسجيل فيه *</label>
                <div className="space-y-2">
                  <label className="flex items-start gap-2 font-body text-sm text-foreground cursor-pointer">
                    <input type="radio" name="branch" value="sweifieh" onChange={handleChange} className="mt-1 accent-secondary" />
                    <span>الصويفية (خلف المدرسة الأمريكية) — السبت والاثنين والأربعاء</span>
                  </label>
                  <label className="flex items-start gap-2 font-body text-sm text-foreground cursor-pointer">
                    <input type="radio" name="branch" value="sport-city" onChange={handleChange} className="mt-1 accent-secondary" />
                    <span>المدينة الرياضية (مسبح الحسين) — الأحد والثلاثاء والخميس</span>
                  </label>
                </div>
              </div>

              {/* Photography */}
              <div>
                <label className="block text-sm font-body text-muted-foreground mb-2">تصوير الطفل أثناء التدريب *</label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 font-body text-sm cursor-pointer">
                    <input type="radio" name="photography" value="yes" onChange={handleChange} className="accent-secondary" />
                    أرغب
                  </label>
                  <label className="flex items-center gap-2 font-body text-sm cursor-pointer">
                    <input type="radio" name="photography" value="no" onChange={handleChange} className="accent-secondary" />
                    لا أرغب
                  </label>
                </div>
              </div>

              {/* Medical Notes */}
              <div>
                <label className="block text-sm font-body text-muted-foreground mb-2">ملاحظات طبية للطفل</label>
                <textarea
                  name="medicalNotes"
                  value={formData.medicalNotes}
                  onChange={handleChange}
                  rows={3}
                  className="w-full border-b-2 border-border bg-transparent py-3 font-body text-foreground outline-none focus:border-secondary resize-none"
                />
              </div>

              {/* How found */}
              <div>
                <label className="block text-sm font-body text-muted-foreground mb-2">كيف علمت عنا *</label>
                <div className="flex flex-wrap gap-4">
                  {['Facebook', 'Instagram', 'Friends', 'Google'].map((opt) => (
                    <label key={opt} className="flex items-center gap-2 font-body text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.howFound.includes(opt)}
                        onChange={() => handleCheckbox(opt)}
                        className="accent-secondary"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              {/* Additional info */}
              <div>
                <label className="block text-sm font-body text-muted-foreground mb-2">معلومات إضافية</label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={3}
                  className="w-full border-b-2 border-border bg-transparent py-3 font-body text-foreground outline-none focus:border-secondary resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-primary py-4 font-body font-bold text-primary-foreground text-lg btn-glow"
              >
                إرسال الطلب
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ + Contact */}
      <section className="section-padding gradient-navy text-primary-foreground">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">الأسئلة الأكثر شيوعًا</h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="rounded-xl border border-primary-foreground/10 overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="flex w-full items-center justify-between p-4 font-body font-medium text-right"
                    >
                      <span>{faq.q}</span>
                      {openFaq === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 pb-4 text-sm font-body text-primary-foreground/70 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">لا تتردد بالاتصال بنا</h2>
              <p className="font-body text-primary-foreground/70 mb-6">فريقنا بخدمتك على مدار الساعة</p>
              <a
                href="tel:0790816628"
                className="inline-flex items-center gap-2 rounded-full border-2 border-secondary bg-secondary/10 px-8 py-3 font-body font-semibold text-secondary-foreground btn-glow mb-8"
              >
                <Phone size={18} />
                اتصل 0790816628
              </a>

              <h3 className="font-display text-xl font-bold mb-4">نسعد بمتابعتك</h3>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/blowbubbles_swim/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary-foreground/10 px-4 py-2 text-sm font-body hover:bg-secondary transition-colors">
                  Instagram
                </a>
                <a href="https://www.facebook.com/blowbubblesswim" target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary-foreground/10 px-4 py-2 text-sm font-body hover:bg-secondary transition-colors">
                  Facebook
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Maps */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <ScrollReveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-10">مواقعنا</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'فرع المدينة الرياضية', address: 'مسبح الحسين — المدينة الرياضية', hours: 'الأحد، الثلاثاء، الخميس' },
              { name: 'فرع الصويفية', address: 'خلف المدرسة الأمريكية', hours: 'السبت، الاثنين، الأربعاء' },
            ].map((loc, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="rounded-2xl overflow-hidden border border-border card-hover">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <div className="text-center p-8">
                      <MapPin className="mx-auto mb-3 text-secondary" size={32} />
                      <h3 className="font-display text-lg font-bold text-foreground">{loc.name}</h3>
                      <p className="text-sm text-muted-foreground font-body mt-1">{loc.address}</p>
                      <div className="flex items-center justify-center gap-1 mt-2 text-sm text-muted-foreground font-body">
                        <Clock size={14} />
                        {loc.hours}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
