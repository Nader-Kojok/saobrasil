import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { SpecialtiesSection } from '@/components/sections/SpecialtiesSection';
import { FreshAndLocalSection } from '@/components/sections/FreshAndLocalSection';
import { CTASection } from '@/components/sections/CTASection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <SpecialtiesSection />
      <FreshAndLocalSection />
      <CTASection />
    </div>
  );
}
