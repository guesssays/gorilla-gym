'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Clock,
  Users,
  TrendingUp,
  Heart,
  ArrowRight,
  Flame,
  Target,
  Shield
} from 'lucide-react';

const WorkoutCategories = () => {
  const { t } = useLanguage();

  const categories = [
    {
      id: 'crossfit',
      title: 'CrossFit',
      description: 'Высокоинтенсивные тренировки для развития силы, выносливости и координации',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      duration: '45-60 мин',
      intensity: 'Высокая',
      participants: '8-12 человек',
      calories: '400-600',
      features: ['Функциональные движения', 'Работа с весами', 'Кардио нагрузки', 'Групповая мотивация'],
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: 'from-red-500 to-orange-600',
      trending: true
    },
    {
      id: 'yoga',
      title: 'Йога',
      description: 'Древняя практика для развития гибкости, силы и внутренней гармонии',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      duration: '60-90 мин',
      intensity: 'Низкая-Средняя',
      participants: '10-15 человек',
      calories: '200-350',
      features: ['Улучшение гибкости', 'Снятие стресса', 'Баланс и координация', 'Дыхательные техники'],
      icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: 'from-green-500 to-emerald-600',
      trending: false
    },
    {
      id: 'pilates',
      title: 'Пилатес',
      description: 'Система упражнений для укрепления мышц кора и улучшения осанки',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      duration: '45-60 мин',
      intensity: 'Средняя',
      participants: '8-12 человек',
      calories: '250-400',
      features: ['Укрепление кора', 'Улучшение осанки', 'Контроль движений', 'Растяжка'],
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: 'from-purple-500 to-pink-600',
      trending: true
    }
  ];

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-gradient-to-b from-zinc-900 to-black">
      <div className="container mx-auto px-2 xs:px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 sm:mb-6">
            <span className="text-white">Направления</span>{' '}
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Тренировок
            </span>
          </h2>
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-zinc-400 max-w-xl sm:max-w-4xl mx-auto leading-relaxed font-body">
            Выберите подходящее направление и начните свой путь к совершенству
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 mb-10 sm:mb-16">
          {categories.map((category, index) => (
            <Card
              key={category.id}
              className="group bg-zinc-900/50 backdrop-blur-medium border-zinc-800 overflow-hidden hover:border-orange-500/50 transition-all duration-500 hover:scale-[1.03] animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Image Header */}
              <div className="relative h-44 xs:h-52 sm:h-64 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Badges */}
                <div className="absolute top-2 left-2 flex gap-1 sm:top-4 sm:left-4 sm:gap-2">
                  <Badge className={`bg-gradient-to-r ${category.color} text-white border-none font-ui px-2 py-1 xs:px-3 xs:py-1.5`}>
                    {category.icon}
                    <span className="ml-1 xs:ml-2 text-xs xs:text-sm">{category.title}</span>
                  </Badge>
                  {category.trending && (
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white border-none font-ui px-2 py-1 xs:px-3 xs:py-1.5">
                      <Flame className="w-3 h-3 xs:w-4 xs:h-4 mr-1" />
                      <span className="text-xs xs:text-sm">Популярно</span>
                    </Badge>
                  )}
                </div>

                {/* Stats Overlay */}
                <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4">
                  <div className="grid grid-cols-2 gap-2 text-white text-xs xs:text-sm">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-orange-400" />
                      <span className="font-body">{category.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-orange-400" />
                      <span className="font-body">{category.participants}</span>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-3 xs:p-4 sm:p-6">
                {/* Title and Description */}
                <h3 className="text-xl xs:text-2xl font-bold mb-2 xs:mb-3 font-heading group-hover:text-orange-500 transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-zinc-400 mb-3 xs:mb-6 font-body leading-relaxed text-sm xs:text-base">
                  {category.description}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-2 xs:gap-4 mb-4 xs:mb-6">
                  <div className="bg-zinc-800/50 p-2 xs:p-3 rounded-lg text-center">
                    <div className="text-orange-400 font-semibold text-xs xs:text-sm font-ui">Интенсивность</div>
                    <div className="text-white font-bold font-body text-sm xs:text-base">{category.intensity}</div>
                  </div>
                  <div className="bg-zinc-800/50 p-2 xs:p-3 rounded-lg text-center">
                    <div className="text-orange-400 font-semibold text-xs xs:text-sm font-ui">Калории</div>
                    <div className="text-white font-bold font-body text-sm xs:text-base">{category.calories}</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4 xs:mb-6">
                  <h4 className="text-xs xs:text-sm font-semibold text-orange-400 mb-2 xs:mb-3 font-ui">Что включено:</h4>
                  <ul className="space-y-1 xs:space-y-2">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="text-zinc-300 text-xs xs:text-sm font-body flex items-center">
                        <div className="w-1 h-1 xs:w-1.5 xs:h-1.5 bg-orange-500 rounded-full mr-2 xs:mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="flex flex-col xs:flex-row items-center justify-between gap-3">
                  <Link href={`/workouts/${category.id}`} className="w-full xs:w-auto">
                    <Button className="w-full xs:w-auto bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 font-ui shadow-glow hover:shadow-glow-lg transition-all duration-300 group text-sm xs:text-base py-2 xs:py-3  rounded-xl">
                      Подробнее
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                  <div className="text-xs text-zinc-500 font-body flex items-center mt-2 xs:mt-0">
                    <TrendingUp className="w-4 h-4 inline mr-1" />
                    Популярность
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-in px-2 xs:px-0">
          <h3 className="text-xl xs:text-2xl md:text-3xl font-bold mb-2 xs:mb-4 font-heading">
            Не знаете, что выбрать?
          </h3>
          <p className="text-base xs:text-lg text-zinc-400 mb-5 xs:mb-8 font-body max-w-xs xs:max-w-2xl mx-auto leading-relaxed">
            Наши тренеры помогут подобрать идеальное направление под ваши цели и уровень подготовки
          </p>
          <Button
            size="lg"
            className="w-full xs:w-auto bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 font-ui text-base xs:text-lg px-5 xs:px-8 py-3 xs:py-4 shadow-glow hover:shadow-glow-lg transition-all duration-300  rounded-xl"
          >
            Получить консультацию
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkoutCategories;
