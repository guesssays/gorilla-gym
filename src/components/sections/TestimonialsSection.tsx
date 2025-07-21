'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Анна Петрова',
      age: 28,
      program: 'Женский фитнес',
      avatar: 'https://images.unsplash.com/photo-1626519186046-e2886a4fa341?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      quote: 'За 6 месяцев тренировок в GORILLA GYM я похудела на 15 кг и впервые в жизни чувствую себя действительно сильной. Тренеры здесь не просто показывают упражнения - они мотивируют и поддерживают на каждом этапе.',
      result: 'Похудела на 15 кг',
      duration: '6 месяцев',
      rating: 5,
      videoTestimonial: true,
    },
    {
      id: 2,
      name: 'Дмитрий Соколов',
      age: 35,
      program: 'Кроссфит',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      quote: 'Пришел в зал после долгого перерыва в спорте. Команда GORILLA GYM помогла мне не только вернуть форму, но и превзойти свои прежние результаты. Кроссфит здесь - это не просто тренировки, это образ жизни.',
      result: 'Набрал 8 кг мышечной массы',
      duration: '4 месяца',
      rating: 5,
      videoTestimonial: false,
    },
    {
      id: 3,
      name: 'Елена Кузнецова',
      age: 42,
      program: 'Йога и Пилатес',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      quote: 'После 40 я думала, что время для серьезного спорта прошло. Но в GORILLA GYM я открыла для себя йогу и пилатес. Теперь я гибче и энергичнее, чем была в 30! Спасибо замечательным инструкторам.',
      result: 'Улучшила гибкость на 40%',
      duration: '8 месяцев',
      rating: 5,
      videoTestimonial: true,
    },
    {
      id: 4,
      name: 'Искандер Рахимов',
      age: 26,
      program: 'Тренажёрный зал',
      avatar: 'https://images.unsplash.com/photo-1635090431958-170491953c6e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      quote: 'Готовился к соревнованиям по бодибилдингу. Персональный тренер составил идеальную программу, а команда зала всегда была готова помочь. Занял 2-е место на региональных соревнованиях!',
      result: '2-е место на соревнованиях',
      duration: '10 месяцев',
      rating: 5,
      videoTestimonial: false,
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentClient = testimonials[currentTestimonial];

  return (
    <section className="relative py-10 xs:py-14 sm:py-20">
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center -z-10"
        style={{
          backgroundImage:
            "url('https://img1.akspic.ru/crops/2/1/6/0/20612/20612-sportzal-struktura-ves-komnata-uprazhnenie-3840x2160.jpg')",
        }}
        aria-hidden="true"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 -z-10" aria-hidden="true" />

      <div className="container mx-auto px-2 xs:px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 xs:mb-12 sm:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 xs:mb-6">
            Истории наших клиентов
          </h2>
          <p className="text-base xs:text-lg sm:text-xl text-zinc-300 max-w-md sm:max-w-3xl mx-auto">
            Реальные люди, реальные результаты. Узнайте, как GORILLA GYM изменил жизни наших клиентов.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-2xl sm:max-w-4xl mx-auto mb-10 xs:mb-14 sm:mb-16">
          <Card className="border-zinc-800 overflow-hidden rounded-xl sm:rounded-2xl shadow-xl bg-black/80">
            <CardContent className="p-4 xs:p-6 sm:p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-5 xs:space-y-6 md:space-y-0 md:space-x-8">
                {/* Avatar and Info */}
                <div className="flex-shrink-0 text-center md:text-left">
                  <div className="relative flex justify-center md:justify-start">
                    <Avatar className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto md:mx-0 rounded-full border-2 xs:border-4 border-zinc-800">
                      <AvatarImage
                        src={currentClient.avatar}
                        alt={currentClient.name}
                        className="object-cover rounded-full w-full h-full"
                        style={{ aspectRatio: '1/1' }}
                      />
                      <AvatarFallback className="bg-gradient-to-r from-orange-500 to-red-600 text-white text-xl xs:text-2xl rounded-full">
                        {currentClient.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <h3 className="text-base xs:text-lg sm:text-xl font-bold text-white mt-3 xs:mt-4">{currentClient.name}</h3>
                  <p className="text-zinc-300 text-xs xs:text-sm">{currentClient.age} лет</p>
                  <Badge className="mt-2 bg-orange-500/20 text-orange-500 border-orange-500/30 text-xs xs:text-sm">
                    {currentClient.program}
                  </Badge>
                </div>

                {/* Quote and Details */}
                <div className="flex-1">
                  <Quote className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-orange-500 mb-3 xs:mb-4" />
                  <blockquote className="text-sm xs:text-base sm:text-lg text-zinc-100 leading-relaxed mb-4 xs:mb-6">
                    {currentClient.quote}
                  </blockquote>

                  {/* Rating */}
                  <div className="flex items-center justify-center md:justify-start space-x-1 mb-4 xs:mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 xs:w-5 xs:h-5 fill-orange-500 text-orange-500" />
                    ))}
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4">
                    <div className="bg-zinc-900 rounded-lg p-3 xs:p-4 text-center">
                      <div className="text-orange-500 font-semibold text-xs xs:text-sm">Результат</div>
                      <div className="text-white text-xs xs:text-sm mt-1">{currentClient.result}</div>
                    </div>
                    <div className="bg-zinc-900 rounded-lg p-3 xs:p-4 text-center">
                      <div className="text-orange-500 font-semibold text-xs xs:text-sm">Время</div>
                      <div className="text-white text-xs xs:text-sm mt-1">{currentClient.duration}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-6 xs:mt-8 pt-6 xs:pt-8 border-t border-zinc-800">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevTestimonial}
                  className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 px-3 xs:px-4"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  <span className="hidden xs:inline">Предыдущий</span>
                </Button>
                <div className="flex space-x-1 xs:space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2.5 h-2.5 xs:w-3 xs:h-3 rounded-full transition-colors ${
                        index === currentTestimonial
                          ? 'bg-orange-500'
                          : 'bg-zinc-600 hover:bg-zinc-500'
                      }`}
                      aria-label={`Открыть отзыв ${index + 1}`}
                    />
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextTestimonial}
                  className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 px-3 xs:px-4"
                >
                  <span className="hidden xs:inline">Следующий</span>
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-white mb-2 xs:mb-4">
            Готовы написать свою историю успеха?
          </h3>
          <p className="text-zinc-300 mb-5 xs:mb-8 text-sm xs:text-base">
            Начните свой путь к лучшей версии себя уже сегодня
          </p>
<Button
  className="
    mx-auto block
    w-[200px] sm:w-auto
    bg-gradient-to-r from-orange-500 to-red-600
    hover:from-orange-600 hover:to-red-700
    text-xs sm:text-base
    px-3 sm:px-8
    py-2 sm:py-4
   rounded-xl
    flex items-center justify-center
    break-words whitespace-normal
    text-center
    h-auto
  "
>
  {t('bookTrial')}
</Button>





        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
