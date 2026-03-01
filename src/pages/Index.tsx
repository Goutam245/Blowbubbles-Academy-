import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import FirstLessonSection from '@/components/home/FirstLessonSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import ProgramsSection from '@/components/home/ProgramsSection';
import PricingSection from '@/components/home/PricingSection';
import StatsSection from '@/components/home/StatsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CoachesSection from '@/components/home/CoachesSection';
import WhyUsSection from '@/components/home/WhyUsSection';
import LocationsSection from '@/components/home/LocationsSection';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FirstLessonSection />
      <FeaturesSection />
      <ProgramsSection />
      <PricingSection />
      <StatsSection />
      <WhyUsSection />
      <TestimonialsSection />
      <CoachesSection />
      <LocationsSection />
      <Footer />
    </div>
  );
}
