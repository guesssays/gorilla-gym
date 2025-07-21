'use client';

import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import WorkoutCategories from '@/components/sections/WorkoutCategories';
import FeaturesSection from '@/components/sections/FeaturesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <div className="relative">
      <HeroSection />
      <WorkoutCategories />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
