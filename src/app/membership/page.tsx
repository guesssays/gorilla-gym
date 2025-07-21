'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Check,
  X,
  Crown,
  Zap,
  Star,
  CreditCard,
  Smartphone,
  Calendar,
  Users,
  Clock,
  MapPin,
  Gift,
  TrendingUp
} from 'lucide-react';

interface MembershipPlan {
  id: string;
  name: string;
  type: 'basic' | 'premium' | 'vip';
  duration: string;
  originalPrice: number;
  discountPrice?: number;
  savings?: string;
  features: {
    text: string;
    included: boolean;
  }[];
  popular?: boolean;
  badge?: string;
}

const MembershipPage = () => {
  const { t } = useLanguage();
  const [selectedDuration, setSelectedDuration] = useState('month');

  const membershipPlans: Record<string, MembershipPlan[]> = {
    month: [
      {
        id: 'basic-month',
        name: 'Базовый',
        type: 'basic',
        duration: '1 месяц',
        originalPrice: 350000,
        features: [
          { text: 'Доступ в тренажёрный зал', included: true },
          { text: 'Базовые тренажёры', included: true },
          { text: 'Раздевалки и душевые', included: true },
          { text: 'Групповые занятия', included: false },
          { text: 'Персональный тренер', included: false },
          { text: 'Бассейн', included: false },
          { text: 'Сауна', included: false },
          { text: 'Массаж', included: false },
        ],
      },
      {
        id: 'premium-month',
        name: 'Премиум',
        type: 'premium',
        duration: '1 месяц',
        originalPrice: 650000,
        features: [
          { text: 'Доступ во все залы', included: true },
          { text: 'Все тренажёры и оборудование', included: true },
          { text: 'Безлимитные групповые занятия', included: true },
          { text: '4 занятия с персональным тренером', included: true },
          { text: 'Программа питания', included: true },
          { text: 'Бассейн', included: false },
          { text: 'Сауна', included: true },
          { text: 'Массаж', included: false },
        ],
        popular: true,
        badge: 'Популярный',
      },
      {
        id: 'vip-month',
        name: 'VIP',
        type: 'vip',
        duration: '1 месяц',
        originalPrice: 1200000,
        features: [
          { text: 'Премиум доступ 24/7', included: true },
          { text: 'VIP зона с эксклюзивным оборудованием', included: true },
          { text: 'Безлимитные групповые занятия', included: true },
          { text: 'Персональный тренер (8 занятий)', included: true },
          { text: 'Индивидуальная программа питания', included: true },
          { text: 'Бассейн и аквазона', included: true },
          { text: 'Сауна и хамам', included: true },
          { text: 'Еженедельный массаж', included: true },
        ],
        badge: 'Эксклюзив',
      },
    ],
    quarter: [
      {
        id: 'basic-quarter',
        name: 'Базовый',
        type: 'basic',
        duration: '3 месяца',
        originalPrice: 1050000,
        discountPrice: 945000,
        savings: 'Экономия 105,000 сум',
        features: [
          { text: 'Доступ в тренажёрный зал', included: true },
          { text: 'Базовые тренажёры', included: true },
          { text: 'Раздевалки и душевые', included: true },
          { text: 'Групповые занятия', included: false },
          { text: 'Персональный тренер', included: false },
          { text: 'Бассейн', included: false },
          { text: 'Сауна', included: false },
          { text: 'Массаж', included: false },
        ],
      },
      {
        id: 'premium-quarter',
        name: 'Премиум',
        type: 'premium',
        duration: '3 месяца',
        originalPrice: 1950000,
        discountPrice: 1565000,
        savings: 'Экономия 385,000 сум',
        features: [
          { text: 'Доступ во все залы', included: true },
          { text: 'Все тренажёры и оборудование', included: true },
          { text: 'Безлимитные групповые занятия', included: true },
          { text: '12 занятий с персональным тренером', included: true },
          { text: 'Программа питания', included: true },
          { text: 'Бассейн', included: true },
          { text: 'Сауна', included: true },
          { text: 'Массаж (2 сеанса)', included: true },
        ],
        popular: true,
        badge: 'Лучшее предложение',
      },
      {
        id: 'vip-quarter',
        name: 'VIP',
        type: 'vip',
        duration: '3 месяца',
        originalPrice: 3600000,
        discountPrice: 2880000,
        savings: 'Экономия 720,000 сум',
        features: [
          { text: 'Премиум доступ 24/7', included: true },
          { text: 'VIP зона с эксклюзивным оборудованием', included: true },
          { text: 'Безлимитные групповые занятия', included: true },
          { text: 'Персональный тренер (24 занятия)', included: true },
          { text: 'Индивидуальная программа питания', included: true },
          { text: 'Бассейн и аквазона', included: true },
          { text: 'Сауна и хамам', included: true },
          { text: 'Еженедельный массаж (12 сеансов)', included: true },
        ],
        badge: 'Максимальная экономия',
      },
    ],
    year: [
      {
        id: 'basic-year',
        name: 'Базовый',
        type: 'basic',
        duration: '12 месяцев',
        originalPrice: 4200000,
        discountPrice: 2940000,
        savings: 'Экономия 1,260,000 сум',
        features: [
          { text: 'Доступ в тренажёрный зал', included: true },
          { text: 'Базовые тренажёры', included: true },
          { text: 'Раздевалки и душевые', included: true },
          { text: 'Групповые занятия (3 в месяц)', included: true },
          { text: 'Персональный тренер', included: false },
          { text: 'Бассейн', included: false },
          { text: 'Сауна', included: false },
          { text: 'Массаж', included: false },
        ],
      },
      {
        id: 'premium-year',
        name: 'Премиум',
        type: 'premium',
        duration: '12 месяцев',
        originalPrice: 7800000,
        discountPrice: 5460000,
        savings: 'Экономия 2,340,000 сум',
        features: [
          { text: 'Доступ во все залы', included: true },
          { text: 'Все тренажёры и оборудование', included: true },
          { text: 'Безлимитные групповые занятия', included: true },
          { text: '48 занятий с персональным тренером', included: true },
          { text: 'Программа питания + консультации', included: true },
          { text: 'Бассейн', included: true },
          { text: 'Сауна', included: true },
          { text: 'Массаж (6 сеансов)', included: true },
        ],
        popular: true,
        badge: 'Самый популярный',
      },
      {
        id: 'vip-year',
        name: 'VIP',
        type: 'vip',
        duration: '12 месяцев',
        originalPrice: 14400000,
        discountPrice: 10080000,
        savings: 'Экономия 4,320,000 сум',
        features: [
          { text: 'Премиум доступ 24/7', included: true },
          { text: 'VIP зона с эксклюзивным оборудованием', included: true },
          { text: 'Безлимитные групповые занятия', included: true },
          { text: 'Персональный тренер (96 занятий)', included: true },
          { text: 'Индивидуальная программа питания', included: true },
          { text: 'Бассейн и аквазона', included: true },
          { text: 'Сауна и хамам', included: true },
          { text: 'Еженедельный массаж (48 сеансов)', included: true },
        ],
        badge: 'Максимальные преимущества',
      },
    ],
  };

  const paymentMethods = [
    {
      id: 'payme',
      name: 'Payme',
      icon: '💳',
      description: 'Мгновенная оплата через Payme',
      fees: 'Без комиссии',
    },
    {
      id: 'click',
      name: 'Click',
      icon: '📱',
      description: 'Быстрая оплата через Click',
      fees: 'Без комиссии',
    },
    {
      id: 'uzcard',
      name: 'UzCard',
      icon: '💰',
      description: 'Оплата банковской картой',
      fees: '1% комиссия',
    },
    {
      id: 'cash',
      name: 'Наличные',
      icon: '💵',
      description: 'Оплата в кассе зала',
      fees: 'Без комиссии',
    },
  ];

  const getPlanIcon = (type: string) => {
    switch (type) {
      case 'basic': return <Zap className="w-6 h-6" />;
      case 'premium': return <Star className="w-6 h-6" />;
      case 'vip': return <Crown className="w-6 h-6" />;
      default: return <Zap className="w-6 h-6" />;
    }
  };

  const getPlanColor = (type: string) => {
    switch (type) {
      case 'basic': return 'from-blue-500 to-cyan-600';
      case 'premium': return 'from-orange-500 to-red-600';
      case 'vip': return 'from-purple-500 to-pink-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };
  const periodOptions = [
  { value: 'month', label: '1 месяц' },
  { value: 'quarter', label: '3 месяца -10%' },
  { value: 'year', label: '12 месяцев -30%' }
];


  const formatPrice = (price: number) => {
    return price.toLocaleString('ru-RU');
  };

return (
  <div className="min-h-screen bg-black text-white py-8">
    <div className="container mx-auto px-2 sm:px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {t('membership')}
        </h1>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-8">
          Выберите подходящий тарифный план и начните тренироваться уже сегодня.
          Все абонементы включают доступ к современным залам и профессиональному оборудованию.
        </p>
{/* Duration Selector — адаптивный */}
<div className="mb-8">
  {/* Mobile: Stylish Select */}
{/* Mobile: Stylish & Compact Select */}
<div className="block md:hidden mb-4 flex justify-center">
  <div className="relative w-[160px]">
    <select
      value={selectedDuration}
      onChange={e => setSelectedDuration(e.target.value)}
      className="w-full appearance-none bg-zinc-900 border border-orange-500/80 rounded-lg py-2.5 pl-3 pr-8 text-white text-sm font-semibold shadow focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 outline-none text-center"
    >
      <option value="month">1 месяц</option>
      <option value="quarter">3 месяца</option>
      <option value="year">12 месяцев</option>
    </select>
    <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-orange-400">
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
    {/* Discount badge visually, not inside select */}
    {selectedDuration === 'quarter' && (
      <span className="absolute -right-14 top-1/2 -translate-y-1/2 text-xs bg-green-600 text-white rounded-full px-2 py-0.5 shadow font-bold">
        -10%
      </span>
    )}
    {selectedDuration === 'year' && (
      <span className="absolute -right-14 top-1/2 -translate-y-1/2 text-xs bg-green-600 text-white rounded-full px-2 py-0.5 shadow font-bold">
        -30%
      </span>
    )}
  </div>
</div>

  {/* Desktop: Tabs */}
  <div className="hidden md:block">
    <Tabs value={selectedDuration} onValueChange={setSelectedDuration}>
      <TabsList className="bg-zinc-900 border border-zinc-800 flex-nowrap gap-2 justify-center">
        <TabsTrigger value="month" className="data-[state=active]:bg-orange-500 min-w-[110px] px-3">
          1 месяц
        </TabsTrigger>
        <TabsTrigger value="quarter" className="data-[state=active]:bg-orange-500 min-w-[120px] px-3 flex items-center">
          3 месяца
          <Badge className="ml-2 bg-green-600 text-white text-xs whitespace-nowrap shadow font-bold">
            -10%
          </Badge>
        </TabsTrigger>
        <TabsTrigger value="year" className="data-[state=active]:bg-orange-500 min-w-[120px] px-3 flex items-center">
          12 месяцев
          <Badge className="ml-2 bg-green-600 text-white text-xs whitespace-nowrap shadow font-bold">
            -30%
          </Badge>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  </div>
</div>

      </div>

      {/* Pricing Plans */}
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(membershipPlans[selectedDuration] || []).map((plan) => (
            <Card
              key={plan.id}
              className={`relative bg-zinc-900 border-2 transition-all ${
                plan.popular
                  ? 'border-orange-500 shadow-orange-500/20 shadow-2xl'
                  : 'border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-max max-w-[90vw]">
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-2 py-1 text-xs md:text-sm whitespace-nowrap">
                    <Star className="w-4 h-4 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${getPlanColor(plan.type)} rounded-full flex items-center justify-center text-white`}>
                  {getPlanIcon(plan.type)}
                </div>

                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <p className="text-zinc-400">{plan.duration}</p>

                <div className="mt-4">
                  {plan.discountPrice ? (
                    <>
                      <div className="text-3xl font-bold text-white mb-1">
                        {formatPrice(plan.discountPrice)}
                        <span className="text-lg font-normal text-zinc-400">сум</span>
                      </div>
                      <div className="text-lg text-zinc-500 line-through">
                        {formatPrice(plan.originalPrice)} сум
                      </div>
                      {plan.savings && (
                        <Badge className="mt-2 bg-green-600 text-white">
                          {plan.savings}
                        </Badge>
                      )}
                    </>
                  ) : (
                    <div className="text-3xl font-bold text-white">
                      {formatPrice(plan.originalPrice)}
                      <span className="text-lg font-normal text-zinc-400">сум</span>
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${feature.included ? 'text-white' : 'text-zinc-500'}`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full mt-6 bg-gradient-to-r ${getPlanColor(plan.type)} hover:opacity-90`}
                  size="lg"
                >
                  Выбрать план
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Additional Benefits */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Дополнительные преимущества</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Gift className="w-8 h-8 text-orange-500" />,
              title: 'Бонусная программа',
              description: 'Накапливайте баллы и получайте скидки на дополнительные услуги',
            },
            {
              icon: <TrendingUp className="w-8 h-8 text-green-500" />,
              title: 'Отслеживание прогресса',
              description: 'Мобильное приложение для контроля тренировок и результатов',
            },
            {
              icon: <Calendar className="w-8 h-8 text-blue-500" />,
              title: 'Гибкое расписание',
              description: 'Более 50 групповых занятий в неделю в удобное время',
            },
            {
              icon: <Users className="w-8 h-8 text-purple-500" />,
              title: 'Сообщество',
              description: 'Присоединяйтесь к активному сообществу единомышленников',
            },
          ].map((benefit, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800 text-center">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-zinc-800/60">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                <p className="text-sm text-zinc-400">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Часто задаваемые вопросы</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              question: 'Можно ли заморозить абонемент?',
              answer: 'Да, абонемент можно заморозить на срок от 7 до 30 дней по медицинским показаниям или другим уважительным причинам.',
            },
            {
              question: 'Есть ли пробный период?',
              answer: 'Мы предоставляем бесплатную пробную тренировку для всех новых клиентов. Запишитесь через сайт или приложение.',
            },
            {
              question: 'Можно ли вернуть деньги за абонемент?',
              answer: 'Возврат средств возможен в течение 14 дней с момента покупки при условии отсутствия посещений.',
            },
            {
              question: 'Работают ли абонементы во всех залах?',
              answer: 'Премиум и VIP абонементы действуют во всех наших залах. Базовый абонемент привязан к конкретному залу.',
            },
          ].map((faq, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-zinc-400">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <Card className="bg-gradient-to-r from-orange-500/20 to-red-600/20 border-orange-500/30">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-4">Готовы начать?</h2>
            <p className="text-xl text-zinc-300 mb-6">
              Выберите подходящий план и начните менять свою жизнь уже сегодня
            </p>
      <Button
        size="lg"
        className="
          bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700
          w-full max-w-sm md:max-w-lg mx-auto
          text-base md:text-lg
          py-4 md:py-3
          px-2
          leading-tight
          text-center
          whitespace-normal
          rounded-none
          min-h-[56px] md:min-h-[48px]
        "
      >
        <span className="hidden md:inline">Записаться на пробную тренировку</span>
        <span className="inline md:hidden">Записаться<br />на пробную тренировку</span>
      </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
);

};

export default MembershipPage;
