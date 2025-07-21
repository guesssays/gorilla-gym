'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Clock, Users, TrendingUp, Star } from 'lucide-react';

const WorkoutsPage = () => {
  const { t } = useLanguage();

  const workoutTypes = [
    {
      id: 'crossfit',
      title: 'Кроссфит',
      slug: 'crossfit',
      description: 'Функциональные тренировки высокой интенсивности для развития силы, выносливости и гибкости.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      intensity: 'Высокая',
      duration: '60 мин',
      level: 'Продвинутый',
      color: 'from-red-500 to-orange-600',
      participants: '8-12',
      price: '50,000',
      benefits: ['Развитие силы', 'Улучшение выносливости', 'Сжигание жира', 'Работа в команде']
    },
    {
      id: 'yoga',
      title: 'Йога',
      slug: 'yoga',
      description: 'Гармоничное развитие тела и духа через древние практики йоги.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      intensity: 'Низкая',
      duration: '75 мин',
      level: 'Для всех',
      color: 'from-green-500 to-emerald-600',
      participants: '12-20',
      price: '40,000',
      benefits: ['Улучшение гибкости', 'Снятие стресса', 'Укрепление мышц кора', 'Медитация и релаксация']
    },
    {
      id: 'pilates',
      title: 'Пилатес',
      slug: 'pilates',
      description: 'Система упражнений для укрепления мышц кора и улучшения осанки.',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      intensity: 'Средняя',
      duration: '50 мин',
      level: 'Для всех',
      color: 'from-purple-500 to-pink-600',
      participants: '10-15',
      price: '45,000',
      benefits: ['Укрепление кора', 'Улучшение осанки', 'Развитие координации', 'Профилактика травм']
    },
    {
      id: 'gym',
      title: 'Тренажёрный зал',
      slug: 'gym',
      description: 'Классические силовые тренировки с профессиональным оборудованием.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      intensity: 'Высокая',
      duration: '90 мин',
      level: 'Продвинутый',
      color: 'from-blue-500 to-cyan-600',
      participants: 'Индивидуально',
      price: '60,000',
      benefits: ['Набор мышечной массы', 'Увеличение силы', 'Персональный подход', 'Свободный график']
    },
    {
      id: 'women-fitness',
      title: 'Женский фитнес',
      slug: 'women-fitness',
      description: 'Специально разработанные программы для женщин всех возрастов.',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      intensity: 'Средняя',
      duration: '55 мин',
      level: 'Для всех',
      color: 'from-pink-500 to-rose-600',
      participants: '10-16',
      price: '45,000',
      benefits: ['Коррекция фигуры', 'Повышение тонуса', 'Женское сообщество', 'Гибкие программы']
    },
    {
      id: 'personal',
      title: 'Персональные тренировки',
      slug: 'personal',
      description: 'Индивидуальные занятия с персональным тренером по вашим целям.',
      image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?_gl=1*84dm6k*_ga*MjgyODg5Njc5LjE3MzgzMTMwMTg.*_ga_8JE65Q40S6*czE3NTMwOTUwMjMkbzEzJGcxJHQxNzUzMDk1MDcxJGoxMiRsMCRoMA..',
      intensity: 'Любая',
      duration: '60 мин',
      level: 'Для всех',
      color: 'from-amber-500 to-orange-600',
      participants: '1-на-1',
      price: '100,000',
      benefits: ['100% внимания тренера', 'Быстрые результаты', 'Индивидуальная программа', 'Гибкий график']
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-6 sm:py-8 mt-[1px]">
      <div className="container mx-auto px-2 sm:px-4">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Направления тренировок
          </h1>
          <p className="text-base sm:text-xl text-zinc-400 max-w-3xl sm:max-w-4xl mx-auto">
            Выберите направление, которое подходит именно вам. Каждая программа разработана
            профессиональными тренерами с учетом ваших целей и уровня подготовки.
          </p>
        </div>

        {/* Workout Types Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 mb-10 sm:mb-16">
          {workoutTypes.map((workout) => (
            <Card
              key={workout.id}
              className="group bg-zinc-900 border border-zinc-800 overflow-hidden transition-all duration-200 hover:border-orange-500 focus-within:border-orange-500"
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${workout.image})` }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${workout.color} opacity-80`} />
                {/* Price Badge */}
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
                  <Badge className="bg-white/20 text-white border-none backdrop-blur-sm text-xs sm:text-base">
                    {workout.price} сум
                  </Badge>
                </div>
                {/* Level Badge */}
                <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
                  <Badge variant="secondary" className="bg-black/30 text-white border-none text-xs sm:text-base">
                    {workout.level}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{workout.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-400 mb-3 sm:mb-4 leading-relaxed">{workout.description}</p>

                {/* Workout Details */}
                <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6">
                  <div className="flex items-center space-x-2 text-xs sm:text-sm">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span className="text-zinc-300">{workout.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs sm:text-sm">
                    <Users className="w-4 h-4 text-orange-500" />
                    <span className="text-zinc-300">{workout.participants}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs sm:text-sm">
                    <TrendingUp className="w-4 h-4 text-orange-500" />
                    <span className="text-zinc-300">{workout.intensity}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs sm:text-sm">
                    <Star className="w-4 h-4 text-orange-500" />
                    <span className="text-zinc-300">4.8/5</span>
                  </div>
                </div>

                {/* Benefits Preview */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-xs sm:text-sm font-semibold text-white mb-1 sm:mb-2">Преимущества:</h4>
                  <div className="flex flex-wrap gap-1">
                    {workout.benefits.slice(0, 2).map((benefit, idx) => (
                      <Badge key={idx} variant="outline" className="text-[10px] sm:text-xs border-zinc-600 text-zinc-400">
                        {benefit}
                      </Badge>
                    ))}
                    {workout.benefits.length > 2 && (
                      <Badge variant="outline" className="text-[10px] sm:text-xs border-zinc-600 text-zinc-400">
                        +{workout.benefits.length - 2}
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2 sm:gap-3">
                  <Link href={
                    workout.slug === 'gym'
                      ? '/workouts/gym'
                      : workout.slug === 'women-fitness'
                        ? '/workouts/women-fitness'
                        : workout.slug === 'personal'
                          ? '/workouts/personal'
                          : `/workouts/${workout.slug}`
                  }>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-sm sm:text-base">
                      Подробнее
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full border-zinc-600 text-zinc-300 hover:bg-zinc-800 text-sm sm:text-base">
                    Записаться на пробную
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-orange-500/20 to-red-600/20 border-orange-500/30">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-3xl font-bold mb-3 sm:mb-4">Не можете определиться?</h2>
              <p className="text-base sm:text-xl text-zinc-300 mb-4 sm:mb-6">
                Запишитесь на бесплатную консультацию с нашим тренером
              </p>
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-base sm:text-lg">
                Получить консультацию
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WorkoutsPage;
