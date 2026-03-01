import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { Badge } from '@/components/ui/badge';

const allArticles = [
  {
    id: 1,
    category: 'BABY SWIMMING',
    title: 'Baby Swimming Classes In Amman – Start From 1 Year Old',
    date: 'سبتمبر 10, 2025',
    author: 'BiBubbles',
    excerpt: 'Introducing your baby to the water at an early age is one of the best gifts you can give them. Baby swimming classes help develop motor skills, build confidence, and create a lifelong love for water.',
    image: '/images/swim-1.jpg',
  },
  {
    id: 2,
    category: 'BABY SWIMMING',
    title: 'Top Benefits Of Swimming Lessons For Kids',
    date: 'أكتوبر 11, 2025',
    author: 'BiBubbles',
    excerpt: 'Swimming is more than just a fun activity for children—it is a vital life skill that promotes safety, physical fitness, and emotional well-being from an early age.',
    image: '/images/swim-2.jpg',
  },
  {
    id: 3,
    category: 'غير مصنف',
    title: 'Tips For Parents To Encourage Kids To Swim Safely',
    date: 'أكتوبر 11, 2025',
    author: 'BiBubbles',
    excerpt: 'Swimming is not only a fun activity for children but also a vital life skill that promotes safety and confidence in and around water.',
    image: '/images/swim-3.jpg',
  },
  {
    id: 4,
    category: 'BEST SWIMMING',
    title: 'Best Swimming Academy In Amman: Why Parents Choose Blow Bubbles Swim Academy',
    date: 'سبتمبر 10, 2025',
    author: 'BiBubbles',
    excerpt: 'Swimming is one of the most important life skills a child can learn. It is not only a way to stay active, but also essential for water safety.',
    image: '/images/swim-4.jpg',
  },
  {
    id: 5,
    category: 'BEST SWIMMING',
    title: 'Group Swimming Lessons In Amman – Learn Together, Swim Better',
    date: 'سبتمبر 10, 2025',
    author: 'BiBubbles',
    excerpt: 'Group Swimming Lessons in Amman – Learn Together, Swim Better. Why Choose Group Swimming Lessons? Group swimming lessons offer a unique and effective way to learn.',
    image: '/images/swim-5.jpg',
  },
  {
    id: 6,
    category: 'BEST SWIMMING',
    title: 'Top Benefits Of Swimming For Kids',
    date: 'سبتمبر 10, 2025',
    author: 'BiBubbles',
    excerpt: 'Swimming is not only one of the most enjoyable activities for children—it is also one of the most beneficial for their physical, mental, and emotional development.',
    image: '/images/swim-6.jpg',
  },
  {
    id: 7,
    category: 'السباحة',
    title: 'لماذا تُعتَبر السباحة من أفضل الرياضات للأطفال؟',
    date: 'مايو 7, 2025',
    author: 'BiBubbles',
    excerpt: 'تعد السباحة من الرياضات المتكاملة التي تجمع بين المتعة والفائدة، وهي من الأنشطة القليلة التي يوصى بها لجميع الأعمار.',
    image: '/images/swim-7.jpg',
  },
  {
    id: 8,
    category: 'السباحة',
    title: 'كيف تؤثر السباحة على الصحة النفسية المذهلة',
    date: 'مايو 7, 2025',
    author: 'BiBubbles',
    excerpt: 'في عالم سريع الإيقاع، يعاني الكثير من التوتر، القلق، والاكتئاب. وسط هذا الزخام، تبرز السباحة كوسيلة فعّالة لتحسين الصحة النفسية.',
    image: '/images/swim-8.jpg',
  },
  {
    id: 9,
    category: 'تعليم السباحة للأطفال',
    title: 'متى أبدأ بتعليم طفلي السباحة؟ دليل الآباء الشامل لتوقيت وفوائد السباحة للأطفال',
    date: 'مايو 7, 2025',
    author: 'BiBubbles',
    excerpt: 'تعليم السباحة للأطفال يُعدّ أكثر من مجرد نشاط ترفيهي، فهو استثمار في صحتهم وسلامتهم على المدى الطويل.',
    image: '/images/swim-1.jpg',
  },
];

const ITEMS_PER_PAGE = 6;

export default function Articles() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [currentPage, setCurrentPage] = useState(1);

  const uniqueCategories = ['الكل', ...Array.from(new Set(allArticles.map((a) => a.category)))];

  const filtered = useMemo(() => {
    let result = allArticles;
    if (activeCategory !== 'الكل') {
      result = result.filter((a) => a.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (a) => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q)
      );
    }
    return result;
  }, [searchQuery, activeCategory]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen" dir="rtl">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden gradient-navy">
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto pt-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4"
          >
            مقالاتنا
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-lg text-primary-foreground/70"
          >
            اقرأ أحدث مقالاتنا حول السباحة وتعليم الأطفال
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          {/* Search & Filters */}
          <div className="mb-10 space-y-6">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                placeholder="ابحث في المقالات..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                className="w-full pr-12 pl-4 py-3 rounded-full border border-border bg-card font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {uniqueCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className="px-4 py-2 rounded-full font-body text-xs font-medium transition-all duration-300"
                  style={{
                    background: activeCategory === cat ? 'hsl(195, 100%, 42%)' : 'transparent',
                    color: activeCategory === cat ? '#fff' : 'hsl(240, 20%, 14%)',
                    border: activeCategory === cat ? '1px solid transparent' : '1px solid hsl(195, 20%, 90%)',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          {paginated.length === 0 ? (
            <p className="text-center text-muted-foreground font-body py-20">لا توجد مقالات مطابقة للبحث</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginated.map((article) => (
                <ScrollReveal key={article.id}>
                  <div className="group bg-card rounded-xl overflow-hidden shadow-sm card-hover border border-transparent hover:border-secondary/30 transition-all duration-500">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-secondary text-secondary-foreground text-[10px] font-body">
                          {article.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-5 space-y-3">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground font-body">
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.author}</span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-card-foreground leading-snug line-clamp-2 group-hover:text-secondary transition-colors">
                        {article.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <button className="flex items-center gap-1 font-body text-sm font-semibold text-secondary hover:gap-2 transition-all duration-300">
                        إقرأ المزيد
                        <ArrowLeft size={14} />
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-12">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => { setCurrentPage(page); window.scrollTo({ top: 400, behavior: 'smooth' }); }}
                  className="w-10 h-10 rounded-full font-body text-sm font-medium transition-all duration-300"
                  style={{
                    background: currentPage === page ? 'hsl(195, 100%, 42%)' : 'transparent',
                    color: currentPage === page ? '#fff' : 'hsl(240, 20%, 14%)',
                    border: currentPage === page ? 'none' : '1px solid hsl(195, 20%, 90%)',
                  }}
                >
                  {page}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
