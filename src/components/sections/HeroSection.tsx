'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  IconCalendar,
  IconPhone
} from '@tabler/icons-react';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section
      className="
        relative
        min-h-[unset] sm:min-h-screen
        flex items-center justify-center
        overflow-hidden
        py-8 sm:py-0
      "
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
        }}
      />
      <div className="absolute inset-0 bg-black/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-3 xs:px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="
            text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl
            font-extrabold font-heading mb-4 sm:mb-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3
            leading-tight tracking-tight whitespace-nowrap
          ">
            <span className="text-white drop-shadow-lg">GORILLA</span>
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
              GYM
            </span>
          </h1>

          {/* Tagline */}
          <h2 className="text-base xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-orange-400 mb-2 sm:mb-6">
            Твоя сила — наша гордость
          </h2>

          <p className="text-xs xs:text-base sm:text-lg md:text-2xl text-white/90 max-w-md xs:max-w-xl sm:max-w-3xl mx-auto leading-normal font-body mb-6 sm:mb-12">
            Современная сеть спортивных залов в Ташкенте. Профессиональные тренеры, качественное оборудование, индивидуальный подход.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 w-full sm:w-auto mb-8 sm:mb-16">
            <Button
              size="lg"
              className={`
                w-full sm:w-auto
                bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700
                text-white font-semibold
                rounded-full shadow-xl transition-all duration-300 transform hover:scale-105
                flex items-center justify-center
                min-h-[40px] py-2 px-4 text-sm
                sm:min-h-[56px] sm:py-4 sm:px-8 sm:text-lg
              `}
            >
              <IconCalendar className="!w-6 !h-6 sm:!w-8 sm:!h-8 mr-2 sm:mr-3 flex-shrink-0" />
              <span className="truncate block sm:hidden">Записаться</span>
              <span className="truncate hidden sm:block">Записаться на тренировку</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className={`
                w-full sm:w-auto
                border-2 border-white/40 text-white hover:bg-white/10
                backdrop-blur-sm font-semibold
                rounded-full transition-all duration-300 hover:border-orange-400 hover:scale-105
                flex items-center justify-center
                min-h-[40px] py-2 px-4 text-sm
                sm:min-h-[56px] sm:py-4 sm:px-8 sm:text-lg
              `}
            >
              <IconPhone className="!w-6 !h-6 sm:!w-8 sm:!h-8 mr-2 sm:mr-3 flex-shrink-0" />
              <span className="truncate block sm:hidden">Позвонить</span>
              <span className="truncate hidden sm:block">Позвонить</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
