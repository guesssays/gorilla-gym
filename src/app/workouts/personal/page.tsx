'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  ArrowLeft,
  Clock,
  Users,
  TrendingUp,
  Star,
  UserCheck,
  Target,
  Zap,
  CheckCircle,
  Calendar,
  User,
  Trophy,
  Crown,
  Lightbulb
} from 'lucide-react';
import Link from 'next/link';

const PersonalPage = () => {
  const { t } = useLanguage();

  const availableSlots = [
    { day: 'Понедельник', time: '07:00', trainer: 'Дмитрий Железо', available: true },
    { day: 'Понедельник', time: '09:00', trainer: 'Анна Стройность', available: true },
    { day: 'Понедельник', time: '18:00', trainer: 'Максим Мощь', available: false },
    { day: 'Вторник', time: '08:00', trainer: 'Елена Красота', available: true },
    { day: 'Вторник', time: '19:00', trainer: 'Дмитрий Железо', available: true },
    { day: 'Среда', time: '07:00', trainer: 'Максим Мощь', available: true },
    { day: 'Среда', time: '10:00', trainer: 'Анна Стройность', available: false },
    { day: 'Четверг', time: '18:30', trainer: 'Елена Красота', available: true },
    { day: 'Пятница', time: '07:00', trainer: 'Дмитрий Железо', available: true },
    { day: 'Суббота', time: '10:00', trainer: 'Максим Мощь', available: true },
  ];

  const personalTrainers = [
    {
      name: 'Дмитрий Железо',
      specialization: 'Силовой тренинг, бодибилдинг',
      experience: '10 лет',
      rate: '150,000 сум/час',
      achievements: ['Мастер спорта по пауэрлифтингу', 'Сертификат ACSM', 'Чемпион Узбекистана'],
      clients: '50+ клиентов',
      description: 'Специалист по набору мышечной массы и силовым показателям',
      photo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Анна Стройность',
      specialization: 'Женский фитнес, коррекция фигуры',
      experience: '7 лет',
      rate: '120,000 сум/час',
      achievements: ['Сертификат Women\'s Fitness', 'Специалист по женскому здоровью', 'Мастер по стретчингу'],
      clients: '80+ клиентов',
      description: 'Эксперт по женскому фитнесу и коррекции фигуры',
      photo: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Максим Мощь',
      specialization: 'Функциональный тренинг, кроссфит',
      experience: '8 лет',
      rate: '130,000 сум/час',
      achievements: ['CrossFit Level 2 Trainer', 'Сертификат NSCA', 'Специалист по реабилитации'],
      clients: '40+ клиентов',
      description: 'Мастер функционального тренинга и подготовки спортсменов',
      photo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Елена Красота',
      specialization: 'Функциональный тренинг для женщин',
      experience: '5 лет',
      rate: '110,000 сум/час',
      achievements: ['Сертификат TRX', 'Специалист по Booty тренировкам', 'Нутрициолог'],
      clients: '60+ клиентов',
      description: 'Специалист по функциональному тренингу и женскому фитнесу',
      photo: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const benefits = [
    {
      icon: <UserCheck className="w-6 h-6 text-amber-500" />,
      title: '100% внимания тренера',
      description: 'Полная концентрация на ваших целях и потребностях'
    },
    {
      icon: <Target className="w-6 h-6 text-green-500" />,
      title: 'Индивидуальная программа',
      description: 'Программа, созданная специально под ваши цели и особенности'
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      title: 'Быстрые результаты',
      description: 'Максимальная эффективность каждой тренировки'
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      title: 'Гибкий график',
      description: 'Тренировки в удобное для вас время'
    }
  ];

  const packages = [
    {
      name: 'Пробная тренировка',
      sessions: '1 занятие',
      price: '80,000',
      description: 'Знакомство с тренером и составление программы',
      includes: [
        'Консультация и тестирование',
        'Пробная тренировка 60 мин',
        'Индивидуальные рекомендации',
        'План питания'
      ],
      popular: false
    },
    {
      name: 'Стартовый пакет',
      sessions: '4 тренировки',
      price: '400,000',
      description: 'Идеальный старт для новичков',
      includes: [
        'Подробная консультация',
        '4 персональные тренировки',
        'Программа питания',
        'Поддержка между тренировками'
      ],
      popular: true
    },
    {
      name: 'Интенсивный курс',
      sessions: '8 тренировок',
      price: '720,000',
      description: 'Для серьезного достижения целей',
      includes: [
        'Комплексное обследование',
        '8 персональных тренировок',
        'Детальный план питания',
        'Еженедельная корректировка программы'
      ],
      popular: false
    },
    {
      name: 'Профессиональный',
      sessions: '12 тренировок',
      price: '1,000,000',
      description: 'Максимальный результат с экономией',
      includes: [
        'Полная диагностика',
        '12 персональных тренировок',
        'Программа спортивного питания',
        'Постоянная поддержка тренера'
      ],
      popular: false
    }
  ];

  const goals = [
    {
      title: 'Похудение',
      description: 'Эффективное снижение веса с сохранением мышечной массы',
      icon: <Target className="w-8 h-8 text-green-500" />
    },
    {
      title: 'Набор массы',
      description: 'Увеличение мышечной массы и силовых показателей',
      icon: <Trophy className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'Коррекция фигуры',
      description: 'Работа над проблемными зонами и улучшение пропорций',
      icon: <Crown className="w-8 h-8 text-purple-500" />
    },
    {
      title: 'Реабилитация',
      description: 'Восстановление после травм и операций',
      icon: <UserCheck className="w-8 h-8 text-orange-500" />
    }
  ];

return (
  <div className="min-h-screen bg-black text-white py-4 sm:py-8">
    <div className="container mx-auto px-2 sm:px-6">
      {/* Navigation */}
      <div className="mb-6 sm:mb-8">
        <Link href="/workouts" className="inline-flex items-center text-zinc-400 hover:text-amber-500 transition-colors min-h-[44px]">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Назад к направлениям
        </Link>
      </div>

 {/* Hero Section */}
<div className="mb-8 sm:mb-16">
  <div
    className="relative h-40 xs:h-52 sm:h-80 md:h-96 bg-cover bg-center rounded-xl sm:rounded-2xl overflow-hidden"
    style={{
      backgroundImage: `url('https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?_gl=1*84dm6k*_ga*MjgyODg5Njc5LjE3MzgzMTMwMTg.*_ga_8JE65Q40S6*czE3NTMwOTUwMjMkbzEzJGcxJHQxNzUzMDk1MDcxJGoxMiRsMCRoMA..')`
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-amber-600/80 to-orange-600/80"></div>
    <div className="relative z-10 h-full flex items-center justify-center text-center px-1">
      <div>
        <div className="flex flex-wrap items-center justify-center mb-2 sm:mb-4">
          <UserCheck className="w-6 h-6 xs:w-7 xs:h-7 sm:w-10 sm:h-10 text-white mr-1 sm:mr-4" />
          <h1 className="font-bold break-words max-w-[82vw] text-lg xs:text-xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            ПЕРСОНАЛЬНЫЕ<br className="block sm:hidden" /> ТРЕНИРОВКИ
          </h1>
        </div>
        {/* Подзаголовок только для sm и выше */}
        <p className="hidden sm:block text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 max-w-3xl mx-auto">
          Индивидуальные занятия с персональным тренером по вашим целям
        </p>
        <div className="flex flex-wrap justify-center gap-1 sm:gap-4">
          <Badge className="bg-white/20 text-white border-none backdrop-blur-sm px-2 py-1 sm:px-4 sm:py-2 text-[10px] xs:text-xs sm:text-sm">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            60 минут
          </Badge>
          <Badge className="bg-white/20 text-white border-none backdrop-blur-sm px-2 py-1 sm:px-4 sm:py-2 text-[10px] xs:text-xs sm:text-sm">
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            Любая интенсивность
          </Badge>
          <Badge className="bg-white/20 text-white border-none backdrop-blur-sm px-2 py-1 sm:px-4 sm:py-2 text-[10px] xs:text-xs sm:text-sm">
            <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            1-на-1
          </Badge>
        </div>
      </div>
    </div>
  </div>
</div>



        {/* Main Content */}
        <Tabs defaultValue="benefits" className="space-y-6 sm:space-y-8">
          <div className="overflow-x-auto">
            <TabsList className="bg-zinc-900 border border-zinc-800 grid w-full grid-cols-4 h-11 sm:h-12 min-w-[500px] sm:min-w-0">
              <TabsTrigger value="benefits" className="data-[state=active]:bg-amber-500 h-full flex items-center justify-center text-xs sm:text-sm">
                Преимущества
              </TabsTrigger>
              <TabsTrigger value="trainers" className="data-[state=active]:bg-amber-500 h-full flex items-center justify-center text-xs sm:text-sm">
                Тренеры
              </TabsTrigger>
              <TabsTrigger value="packages" className="data-[state=active]:bg-amber-500 h-full flex items-center justify-center text-xs sm:text-sm">
                Пакеты
              </TabsTrigger>
              <TabsTrigger value="schedule" className="data-[state=active]:bg-amber-500 h-full flex items-center justify-center text-xs sm:text-sm">
                Расписание
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Benefits Tab */}
          <TabsContent value="benefits" className="space-y-6 sm:space-y-8">
            {/* Benefits */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Преимущества персональных тренировок</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="bg-zinc-900 border-zinc-800">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="flex-shrink-0">{benefit.icon}</div>
                        <div>
                          <h3 className="text-base sm:text-lg font-bold mb-2">{benefit.title}</h3>
                          <p className="text-zinc-400 text-sm sm:text-base">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Goals */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Цели тренировок</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {goals.map((goal, index) => (
                  <Card key={index} className="bg-zinc-900 border-zinc-800 text-center">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex justify-center mb-3 sm:mb-4">
                        {goal.icon}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold mb-2">{goal.title}</h3>
                      <p className="text-zinc-400 text-xs sm:text-sm">{goal.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Process */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Как проходят тренировки</h2>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      { step: '01', title: 'Консультация', desc: 'Определяем ваши цели и особенности' },
                      { step: '02', title: 'Тестирование', desc: 'Оцениваем текущий уровень подготовки' },
                      { step: '03', title: 'Программа', desc: 'Создаем индивидуальный план тренировок' },
                      { step: '04', title: 'Результат', desc: 'Достигаем поставленных целей' }
                    ].map((item, idx) => (
                      <div key={idx} className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center font-bold text-black mx-auto mb-3">
                          {item.step}
                        </div>
                        <h4 className="font-bold mb-2 text-sm sm:text-base">{item.title}</h4>
                        <p className="text-zinc-400 text-xs sm:text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Trainers Tab */}
          <TabsContent value="trainers" className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold">Персональные тренеры</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {personalTrainers.map((trainer, index) => (
                <Card key={index} className="bg-zinc-900 border-zinc-800">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
                      <div
                        className="w-20 h-20 sm:w-24 sm:h-24 bg-cover bg-center rounded-full flex-shrink-0 mx-auto sm:mx-0"
                        style={{ backgroundImage: `url(${trainer.photo})` }}
                      />
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-lg sm:text-xl font-bold mb-1">{trainer.name}</h3>
                        <p className="text-amber-500 font-semibold mb-2 text-sm sm:text-base">{trainer.specialization}</p>
                        <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-2">
                          <Badge className="bg-zinc-800 text-xs sm:text-sm">
                            <Calendar className="w-3 h-3 mr-1" />
                            {trainer.experience}
                          </Badge>
                          <Badge className="bg-amber-500/20 text-amber-500 border-amber-500/30 text-xs sm:text-sm">
                            {trainer.rate}
                          </Badge>
                        </div>
                        <p className="text-zinc-400 text-xs sm:text-sm mb-2">{trainer.description}</p>
                        <p className="text-zinc-500 text-xs">{trainer.clients}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold mb-2">Достижения:</h4>
                      <ul className="space-y-1">
                        {trainer.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-xs sm:text-sm text-zinc-400 flex items-start">
                            <Trophy className="w-3 h-3 mr-2 text-amber-500 flex-shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

 <TabsContent value="packages" className="space-y-6 sm:space-y-8">
  <h2 className="text-2xl sm:text-3xl font-bold">Пакеты тренировок</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
    {packages.map((pkg, index) => (
      <Card
        key={index}
        className={`bg-zinc-900 border-zinc-800 ${pkg.popular ? 'border-amber-500' : ''} h-full`}
      >
        <CardContent className="p-4 sm:p-6 text-center flex flex-col h-full">
          <div className="flex-1 flex flex-col justify-between">
            <div>
              {pkg.popular && (
                <Badge className="mb-3 sm:mb-4 bg-amber-500 text-xs sm:text-sm">Популярный</Badge>
              )}
              <h3 className="text-base sm:text-lg font-bold mb-2">{pkg.name}</h3>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-amber-500 mb-2 sm:mb-4">{pkg.price}</div>
              <div className="text-xs sm:text-sm text-zinc-400 mb-3 sm:mb-4">сум</div>
              <p className="text-zinc-500 mb-3 sm:mb-4 text-xs sm:text-sm">{pkg.description}</p>
              <Badge className="mb-3 sm:mb-4 bg-amber-500/20 text-amber-500 border-amber-500/30 text-xs sm:text-sm">
                {pkg.sessions}
              </Badge>
              <div className="mb-4 sm:mb-6">
                <ul className="space-y-1 text-left">
                  {pkg.includes.map((item, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-zinc-400 flex items-center">
                      <CheckCircle className="w-3 h-3 mr-2 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <Button className="w-full h-10 sm:h-12 bg-gradient-to-r from-amber-500 to-orange-600 text-xs sm:text-base mt-auto">
            Выбрать пакет
          </Button>
        </CardContent>
      </Card>
    ))}
  </div>
</TabsContent>


          {/* Schedule Tab */}
          <TabsContent value="schedule" className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold">Доступные слоты</h2>
            <div className="space-y-3 sm:space-y-4">
              {availableSlots.map((slot, index) => (
                <Card key={index} className="bg-zinc-900 border-zinc-800 hover:border-amber-500/50 transition-colors">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col space-y-3 sm:space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-2">
                            <Badge variant="outline" className="border-amber-500 text-amber-500 text-xs sm:text-sm">
                              {slot.day}
                            </Badge>
                            <span className="text-lg sm:text-xl font-bold">{slot.time}</span>
                            <Badge className={`text-xs sm:text-sm ${slot.available ? 'bg-green-600' : 'bg-red-600'}`}>
                              {slot.available ? 'Свободно' : 'Занято'}
                            </Badge>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-zinc-400">
                            <div className="flex items-center space-x-2">
                              <User className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span>{slot.trainer}</span>
                            </div>
                          </div>
                        </div>
                        <Button
                          disabled={!slot.available}
                          className="w-full sm:w-auto h-11 sm:h-12 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 disabled:opacity-50 text-sm sm:text-base"
                        >
                          {slot.available ? 'Забронировать' : 'Недоступно'}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <Card className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 border-amber-500/30">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Готовы к персональному подходу?</h2>
              <p className="text-lg sm:text-xl text-zinc-300 mb-4 sm:mb-6 px-4">
                Запишитесь на консультацию и получите индивидуальную программу тренировок
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button size="lg" className="h-12 sm:h-14 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-sm sm:text-base">
                  <UserCheck className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Записаться на консультацию
                </Button>
                <Button size="lg" variant="outline" className="h-12 sm:h-14 border-zinc-600 text-zinc-300 hover:bg-zinc-800 text-sm sm:text-base">
                  Выбрать тренера
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PersonalPage;
