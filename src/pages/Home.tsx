import React from 'react';
import { HeroSlider, QuickActions } from '@/components/sections/HeroAndActions';
import { AboutSection, ServicesSection, TowingServicesHomeSection } from '@/components/sections/AboutAndServices';
import { FeaturedVehicles, RentalFleet } from '@/components/sections/VehiclesAndRentals';
import { AutoParts, WhyChooseUs } from '@/components/sections/PartsAndWhyUs';
import { TowingAppPromo, FAQ, Partners, ContactSection, BlogSection } from '@/components/sections/BottomSections';
import SEO from '@/components/seo/SEO';

export default function Home() {
  return (
    <main>
      <SEO title="Santa Towing | 24/7 Towing, Repairs & Rentals in Ghana" description="Expert 24/7 towing, professional auto repairs, vehicle sales, and premium car rentals in Ghana. Reliable, fast, and affordable auto services." canonical="/" />
      <HeroSlider />
      <QuickActions />
      <AboutSection />
      <ServicesSection />
      <TowingServicesHomeSection />
      <TowingAppPromo />
      <FeaturedVehicles />
      <RentalFleet />
      <AutoParts />
      <WhyChooseUs />
      <BlogSection />
      <FAQ />
      <Partners />
      <ContactSection />
    </main>
  );
}
