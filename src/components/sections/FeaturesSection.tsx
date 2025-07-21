'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Clock, Users, Trophy, Smartphone, MapPin, Shield,
  Calendar, Heart, Star, Zap, Target, Award
} from 'lucide-react';

const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Clock,
      title: '24/7 Доступ',
      description: 'Тренируйтесь в удобное для вас время. Залы открыты круглосуточно для максимального комфорта.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Users,
      title: 'Профессиональные тренеры',
      description: 'Сертифицированные специалисты с многолетним опытом помогут достичь ваших целей.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Trophy,
      title: 'Современное оборудование',
      description: 'Новейшие тренажеры и оборудование от ведущих мировых производителей.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Smartphone,
      title: 'Мобильное приложение',
      description: 'Записывайтесь на тренировки, следите за прогрессом и получайте уведомления.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: MapPin,
      title: 'Удобное расположение',
      description: '3 зала в разных районах Ташкента с удобной транспортной доступностью.',
      color: 'from-teal-500 to-blue-500',
    },
    {
      icon: Shield,
      title: 'Безопасность',
      description: 'Строгие протоколы безопасности, чистота и дезинфекция всех поверхностей.',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  const additionalFeatures = [
    {
      icon: Calendar,
      title: 'Гибкое расписание',
      description: 'Более 50 групповых занятий в неделю',
    },
    {
      icon: Heart,
      title: 'Индивидуальный подход',
      description: 'Персональные программы тренировок',
    },
    {
      icon: Star,
      title: 'Программы питания',
      description: 'Консультации по правильному питанию',
    },
    {
      icon: Zap,
      title: 'Быстрые результаты',
      description: 'Видимые результаты уже через месяц',
    },
    {
      icon: Target,
      title: 'Фитнес-тестирование',
      description: 'Регулярная оценка прогресса',
    },
    {
      icon: Award,
      title: 'Лучший сервис',
      description: 'Награды за качество обслуживания',
    },
  ];

  return (
    <section className="py-10 xs:py-12 sm:py-16 md:py-20 bg-black">
      <div className="container mx-auto px-2 xs:px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 xs:mb-12 sm:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 xs:mb-6">
            Почему выбирают GORILLA GYM?
          </h2>
          <p className="text-base xs:text-lg sm:text-xl text-zinc-400 max-w-md sm:max-w-3xl mx-auto">
            Мы создаем идеальные условия для ваших тренировок и достижения спортивных целей
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 mb-10 xs:mb-14 sm:mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group bg-zinc-900 border-zinc-800 overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:scale-[1.03]"
            >
              <CardContent className="p-4 xs:p-6 sm:p-8">
                <div className="flex items-center mb-4 xs:mb-6">
                  <div className={`w-12 h-12 xs:w-16 xs:h-16 bg-gradient-to-r ${feature.color} rounded-xl xs:rounded-2xl flex items-center justify-center mr-3 xs:mr-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-6 h-6 xs:w-8 xs:h-8 text-white" />
                  </div>
                  <h3 className="text-base xs:text-lg sm:text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-zinc-400 text-sm xs:text-base leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-zinc-900 rounded-2xl sm:rounded-3xl p-4 xs:p-6 sm:p-10 md:p-12">
          <div className="text-center mb-8 xs:mb-10 sm:mb-12">
            <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-white mb-2 xs:mb-4">
              Дополнительные преимущества
            </h3>
            <p className="text-zinc-400 text-sm xs:text-base">
              Полный спектр услуг для комфортных и эффективных тренировок
            </p>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-6">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 xs:space-x-4 p-3 xs:p-4 rounded-xl hover:bg-zinc-800 transition-colors">
                <div className="w-8 h-8 xs:w-12 xs:h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg xs:rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 xs:w-6 xs:h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white text-sm xs:text-base font-semibold mb-0.5">{feature.title}</h4>
                  <p className="text-zinc-400 text-xs xs:text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-10 xs:mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 xs:gap-8">
          {[
            { number: '98%', label: 'Довольных клиентов', desc: 'Высочайший рейтинг сервиса' },
            { number: '24/7', label: 'Часов доступности', desc: 'Тренируйтесь когда удобно' },
            { number: '50+', label: 'Видов тренировок', desc: 'Для любых целей и уровня' },
            { number: '10+', label: 'Лет опыта', desc: 'Проверенная экспертиза' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent mb-1 xs:mb-2">
                {stat.number}
              </div>
              <div className="text-white font-semibold text-xs xs:text-sm sm:text-base mb-0.5 xs:mb-1">{stat.label}</div>
              <div className="text-zinc-500 text-[10px] xs:text-xs sm:text-sm">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
