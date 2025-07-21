'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Gift,
  Zap,
  Calendar,
  Phone,
  MessageCircle,
} from 'lucide-react';

const CTASection = () => {
  const { t } = useLanguage();

  const offerFeatures = [
    'Бесплатная консультация с тренером',
    'Персональная программа тренировок',
    'Неограниченный доступ ко всем залам',
    'Групповые занятия без доплат',
    'Гостевые визиты для друзей',
    'Скидка 20% на спортивное питание',
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Позвонить',
      description: '+998 90 123 45 67',
      action: 'tel:+998901234567',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: MessageCircle,
      title: 'Telegram',
      description: 'Быстрый ответ в чате',
      action: 'https://t.me/gorillagym_bot',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: Calendar,
      title: 'Онлайн запись',
      description: 'Выбрать удобное время',
      action: '/schedule',
      color: 'from-purple-500 to-pink-600',
    },
  ];

  return (
    <section className="py-14 xs:py-16 md:py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="hidden sm:block absolute top-1/4 left-1/4 w-80 h-80 md:w-96 md:h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="hidden sm:block absolute bottom-1/4 right-1/4 w-80 h-80 md:w-96 md:h-96 bg-red-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main CTA */}
        <div className="text-center mb-12 xs:mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 xs:px-6 py-2 text-base xs:text-lg">
            <Gift className="w-5 h-5 mr-2" />
            Специальное предложение
          </Badge>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 xs:mb-6">
            Начни менять свою жизнь
            <span className="block text-transparent bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text">
              уже сегодня!
            </span>
          </h2>

          <p className="text-base xs:text-lg sm:text-xl text-zinc-400 max-w-xl sm:max-w-3xl mx-auto mb-6 xs:mb-8">
            Получите пробную тренировку абсолютно бесплатно и убедитесь, почему тысячи людей выбирают GORILLA GYM для достижения своих целей.
          </p>

          {/* Limited Time Offer */}
          <div className="inline-flex items-center space-x-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 xs:px-6 py-2 xs:py-3 mb-6 xs:mb-8">
            <Clock className="w-5 h-5 text-red-500" />
            <span className="text-red-400 font-semibold text-xs xs:text-sm">Предложение действует до конца месяца</span>
          </div>
        </div>

        {/* Offer Card */}
        <div className="max-w-2xl md:max-w-4xl mx-auto mb-12 xs:mb-16">
          <Card className="bg-gradient-to-r from-zinc-900 to-zinc-800 border-zinc-700 overflow-hidden">
            <CardContent className="p-4 xs:p-6 md:p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Side - Offer Details */}
                <div>
                  <h3 className="text-lg xs:text-2xl md:text-3xl font-bold text-white mb-4 xs:mb-6">
                    Бесплатная пробная тренировка + консультация
                  </h3>

                  <ul className="space-y-2 xs:space-y-3 mb-6 xs:mb-8">
                    {offerFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center text-zinc-300 text-xs xs:text-base">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 xs:mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button
                      className="
                        bg-gradient-to-r from-orange-500 to-red-600
                        hover:from-orange-600 hover:to-red-700
                        w-full sm:w-auto
                        text-xs xs:text-sm sm:text-lg
                        px-3 xs:px-6 sm:px-8
                        py-2 xs:py-3 sm:py-4
                        rounded-xl
                        flex items-center justify-center
                      "
                    >
                      <Zap className="w-5 h-5 mr-2" />
                      Записаться бесплатно
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>

                {/* Right Side - Contact Methods */}
                <div className="space-y-3 xs:space-y-4 mt-8 lg:mt-0">
                  <h4 className="text-base xs:text-xl font-bold text-white mb-3 xs:mb-6">
                    Как записаться:
                  </h4>
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.action}
                      target={method.action.startsWith('http') ? '_blank' : undefined}
                      rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block"
                    >
                      <Card className="bg-zinc-800 border-zinc-700 hover:border-orange-500/50 transition-all cursor-pointer group">
                        <CardContent className="p-3 xs:p-4">
                          <div className="flex items-center space-x-3 xs:space-x-4">
                            <div className={`w-10 h-10 xs:w-12 xs:h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                              <method.icon className="w-5 h-5 xs:w-6 xs:h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h5 className="text-white font-semibold text-xs xs:text-base">{method.title}</h5>
                              <p className="text-zinc-400 text-[11px] xs:text-sm">{method.description}</p>
                            </div>
                            <ArrowRight className="w-4 h-4 xs:w-5 xs:h-5 text-zinc-500 group-hover:text-orange-500 transition-colors" />
                          </div>
                        </CardContent>
                      </Card>
                    </a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Social Proof */}
        <div className="text-center mb-12 xs:mb-16">
          <p className="text-zinc-400 mb-4 xs:mb-6 text-sm xs:text-base">
            К нам уже присоединились:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 xs:gap-8 text-zinc-500">
            <div className="flex items-center space-x-2">
              <span className="text-lg xs:text-2xl font-bold text-orange-500">1000+</span>
              <span className="text-xs xs:text-base">активных участников</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-lg xs:text-2xl font-bold text-orange-500">50+</span>
              <span className="text-xs xs:text-base">тренировок в неделю</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-lg xs:text-2xl font-bold text-orange-500">98%</span>
              <span className="text-xs xs:text-base">довольных клиентов</span>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="text-lg xs:text-2xl md:text-3xl font-bold text-white mb-3 xs:mb-4">
            Не откладывай на завтра то, что можешь начать сегодня
          </h3>
          <p className="text-zinc-400 mb-6 xs:mb-8 max-w-[90vw] xs:max-w-2xl mx-auto text-xs xs:text-base">
            Каждый день промедления — это день без прогресса. Сделай первый шаг к лучшей версии себя прямо сейчас.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto">
            <Button
              className="
                bg-gradient-to-r from-orange-500 to-red-600
                hover:from-orange-600 hover:to-red-700
                w-full sm:w-auto
                text-xs xs:text-sm sm:text-lg
                px-3 xs:px-6 sm:px-8
                py-2 xs:py-3 sm:py-4
                rounded-xl
                flex items-center justify-center
              "
            >
              <Zap className="w-5 h-5 mr-2" />
              Начать прямо сейчас
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              className="
                border-zinc-600 text-zinc-300 hover:bg-zinc-800
                w-full sm:w-auto
                text-xs xs:text-sm sm:text-lg
                px-3 xs:px-6 sm:px-8
                py-2 xs:py-3 sm:py-4
                rounded-xl
                flex items-center justify-center
              "
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
