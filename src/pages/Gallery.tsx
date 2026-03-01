import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, Play } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const categories = [
  { id: 'all', label: 'الكل' },
  { id: 'training', label: 'التدريب' },
  { id: 'competitions', label: 'المسابقات' },
  { id: 'moments', label: 'اللحظات المميزة' },
];

const photos = [
  { id: 1, src: '/images/swim-1.jpg', category: 'training', alt: 'تدريب سباحة للأطفال' },
  { id: 2, src: '/images/swim-2.jpg', category: 'moments', alt: 'لحظات فرح في المسبح' },
  { id: 3, src: '/images/swim-3.jpg', category: 'training', alt: 'تعليم السباحة للصغار' },
  { id: 4, src: '/images/swim-4.jpg', category: 'competitions', alt: 'مسابقات سباحة' },
  { id: 5, src: '/images/swim-5.jpg', category: 'moments', alt: 'إنجازات الأطفال' },
  { id: 6, src: '/images/swim-6.jpg', category: 'training', alt: 'حصة تدريب سباحة' },
  { id: 7, src: '/images/swim-7.jpg', category: 'moments', alt: 'لحظات ممتعة' },
  { id: 8, src: '/images/swim-8.jpg', category: 'training', alt: 'تدريب في المسبح' },
];

const videos = [
  {
    id: 1,
    title: 'تدريب السباحة للأطفال — الخطوات الأولى',
    thumbnail: '/images/swim-1.jpg',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 2,
    title: 'لحظات إنجاز في أكاديمية بلو بابلز',
    thumbnail: '/images/swim-3.jpg',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 3,
    title: 'برنامج البيبي — من عمر سنة',
    thumbnail: '/images/swim-5.jpg',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [videoModal, setVideoModal] = useState<string | null>(null);

  const filteredPhotos = activeCategory === 'all'
    ? photos
    : photos.filter((p) => p.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const navigateLightbox = (direction: number) => {
    if (lightboxIndex === null) return;
    const newIndex = lightboxIndex + direction;
    if (newIndex >= 0 && newIndex < filteredPhotos.length) {
      setLightboxIndex(newIndex);
    }
  };

  return (
    <div className="min-h-screen" dir="rtl">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/swim-2.jpg')` }}
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight"
          >
            استكشفوا لحظات الفرح والتعلم داخل مسابحنا!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-lg text-primary-foreground/80 leading-relaxed max-w-3xl mx-auto"
          >
            في BlowBubbles، نحرص على توثيق أجمل اللحظات التي يعيشها أطفالنا خلال تدريبات السباحة، من الخطوات الأولى في الماء إلى لحظات الإنجاز والثقة. تصفحوا ألبومنا للتعرف على أجوائنا المميزة والممتعة التي قدمناها في كل حصة تدريبية لا تُنسى.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="px-6 py-2.5 rounded-full font-body text-sm font-medium transition-all duration-300"
                style={{
                  background: activeCategory === cat.id ? 'hsl(195, 100%, 42%)' : 'transparent',
                  color: activeCategory === cat.id ? '#fff' : 'hsl(240, 20%, 14%)',
                  border: activeCategory === cat.id ? '1px solid transparent' : '1px solid hsl(195, 20%, 90%)',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredPhotos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="break-inside-avoid group cursor-pointer relative rounded-xl overflow-hidden"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <ZoomIn className="text-white" size={28} />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-padding bg-off-white">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">مقاطع الفيديو</h2>
              <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <ScrollReveal key={video.id}>
                <div
                  className="group relative rounded-xl overflow-hidden cursor-pointer card-hover bg-card shadow-sm"
                  onClick={() => setVideoModal(video.embedUrl)}
                >
                  <div className="relative aspect-video">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-secondary/90 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        <Play size={28} className="text-white ml-1" fill="white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-body text-sm font-semibold text-card-foreground">{video.title}</h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10"
            >
              <X size={32} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
              className="absolute right-4 md:right-8 text-white/60 hover:text-white transition-colors z-10"
            >
              <ChevronRight size={40} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
              className="absolute left-4 md:left-8 text-white/60 hover:text-white transition-colors z-10"
            >
              <ChevronLeft size={40} />
            </button>
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={filteredPhotos[lightboxIndex].src}
              alt={filteredPhotos[lightboxIndex].alt}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {videoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setVideoModal(null)}
          >
            <button
              onClick={() => setVideoModal(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10"
            >
              <X size={32} />
            </button>
            <div
              className="w-full max-w-4xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={videoModal}
                className="w-full h-full rounded-xl"
                allowFullScreen
                allow="autoplay; encrypted-media"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
