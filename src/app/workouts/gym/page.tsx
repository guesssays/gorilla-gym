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
  Dumbbell,
  Target,
  Trophy,
  CheckCircle,
  Calendar,
  User,
  Zap,
  Shield
} from 'lucide-react';
import Link from 'next/link';

const GymPage = () => {
  const { t } = useLanguage();

  const workoutSchedule = [
    { day: 'Понедельник', time: '06:00', type: 'Силовая тренировка', trainer: 'Дмитрий Железо', level: 'Продвинутый', spots: '10/12' },
    { day: 'Понедельник', time: '18:00', type: 'Функциональный тренинг', trainer: 'Максим Мощь', level: 'Средний', spots: '8/10' },
    { day: 'Вторник', time: '07:00', type: 'Круговая тренировка', trainer: 'Дмитрий Железо', level: 'Для всех', spots: '6/8' },
    { day: 'Среда', time: '06:00', type: 'Силовая тренировка', trainer: 'Дмитрий Железо', level: 'Продвинутый', spots: '12/12' },
    { day: 'Среда', time: '19:00', type: 'Пауэрлифтинг', trainer: 'Максим Мощь', level: 'Продвинутый', spots: '5/6' },
    { day: 'Четверг', time: '18:30', type: 'Функциональный тренинг', trainer: 'Максим Мощь', level: 'Средний', spots: '7/10' },
    { day: 'Пятница', time: '06:00', type: 'Силовая тренировка', trainer: 'Дмитрий Железо', level: 'Продвинутый', spots: '9/12' },
    { day: 'Суббота', time: '10:00', type: 'Круговая тренировка', trainer: 'Максим Мощь', level: 'Для всех', spots: '4/8' },
  ];

  const equipment = [
    'Олимпийские штанги и диски',
    'Гантели от 1 до 50 кг',
    'Силовые тренажеры',
    'Кардио-зона с беговыми дорожками',
    'Функциональная зона TRX',
    'Стойки для приседаний',
    'Скамьи регулируемые',
    'Кроссоверы и блочные тренажеры'
  ];

  const benefits = [
    {
      icon: <Dumbbell className="w-6 h-6 text-blue-500" />,
      title: 'Набор массы',
      description: 'Эффективные программы для увеличения мышечной массы и силы'
    },
    {
      icon: <Target className="w-6 h-6 text-green-500" />,
      title: 'Персональный подход',
      description: 'Индивидуальные программы тренировок под ваши цели'
    },
    {
      icon: <Trophy className="w-6 h-6 text-yellow-500" />,
      title: 'Профессиональное оборудование',
      description: 'Новейшие тренажеры от ведущих мировых производителей'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-500" />,
      title: 'Быстрые результаты',
      description: 'Видимые изменения уже через 4-6 недель при регулярных тренировках'
    }
  ];

  const trainers = [
    {
      name: 'Дмитрий Железо',
      specialization: 'Силовой тренинг, бодибилдинг',
      experience: '10 лет',
      achievements: ['Мастер спорта по пауэрлифтингу', 'Сертификат ACSM', 'Чемпион Узбекистана по бодибилдингу'],
      photo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Максим Мощь',
      specialization: 'Функциональный тренинг, кроссфит',
      experience: '8 лет',
      achievements: ['CrossFit Level 2 Trainer', 'Сертификат NSCA', 'Специалист по реабилитации'],
      photo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const programs = [
    {
      level: 'Начинающий',
      duration: '8 недель',
      description: 'Изучение техники базовых упражнений и основ тренировок',
      includes: [
        'Обучение технике безопасности',
        'Базовые упражнения',
        'Программа питания',
        'Постановка техники'
      ]
    },
    {
      level: 'Средний',
      duration: '12 недель',
      description: 'Прогрессивные программы для роста силы и массы',
      includes: [
        'Сплит-программы',
        'Работа с большими весами',
        'Продвинутые техники',
        'Спортивное питание'
      ]
    },
    {
      level: 'Продвинутый',
      duration: 'Постоянно',
      description: 'Соревновательная подготовка и максимальные результаты',
      includes: [
        'Подготовка к соревнованиям',
        'Периодизация нагрузок',
        'Индивидуальные программы',
        'Работа с тренером'
      ]
    }
  ];

return (
  <div className="min-h-screen bg-black text-white py-4 sm:py-8">
    <div className="container mx-auto px-2 sm:px-6">
      {/* Navigation */}
      <div className="mb-6 sm:mb-8">
        <Link href="/workouts" className="inline-flex items-center text-zinc-400 hover:text-blue-500 transition-colors min-h-[44px]">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Назад к направлениям
        </Link>
      </div>

      {/* Hero Section */}
      <div className="mb-10 sm:mb-16">
        <div
          className="relative h-52 xs:h-64 sm:h-80 md:h-96 bg-cover bg-center rounded-xl sm:rounded-2xl overflow-hidden"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-cyan-600/80"></div>
          <div className="relative z-10 h-full flex items-center justify-center text-center px-1">
            <div>
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <Dumbbell className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 text-white mr-2 sm:mr-4" />
                <h1 className="font-bold break-all max-w-[90vw] text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                  ТРЕНАЖЁРНЫЙ ЗАЛ
                </h1>
              </div>
              <p className="hidden sm:block text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 max-w-3xl mx-auto">
                Классические силовые тренировки с профессиональным оборудованием
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                <Badge className="bg-white/20 text-white border-none backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  60-90 минут
                </Badge>
                <Badge className="bg-white/20 text-white border-none backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  Высокая интенсивность
                </Badge>
                <Badge className="bg-white/20 text-white border-none backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  Индивидуально
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="overview" className="space-y-6 sm:space-y-8">
        <div className="overflow-x-auto">
          <TabsList className="bg-zinc-900 border border-zinc-800 grid w-full grid-cols-4 h-11 sm:h-12 min-w-[500px] sm:min-w-0">
            <TabsTrigger value="overview" className="data-[state=active]:bg-blue-500 h-full flex items-center justify-center text-xs sm:text-sm">
              Обзор
            </TabsTrigger>
            <TabsTrigger value="schedule" className="data-[state=active]:bg-blue-500 h-full flex items-center justify-center text-xs sm:text-sm">
              Расписание
            </TabsTrigger>
            <TabsTrigger value="trainers" className="data-[state=active]:bg-blue-500 h-full flex items-center justify-center text-xs sm:text-sm">
              Тренеры
            </TabsTrigger>
            <TabsTrigger value="programs" className="data-[state=active]:bg-blue-500 h-full flex items-center justify-center text-xs sm:text-sm">
              Программы
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6 sm:space-y-8">
          {/* Benefits */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Преимущества тренажерного зала</h2>
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

          {/* Equipment */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Оборудование</h2>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-4 sm:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {equipment.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                      <span className="text-zinc-300 text-sm sm:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Pricing */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Стоимость</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-4 sm:p-6 text-center flex flex-col">
                  <h3 className="text-base sm:text-lg font-bold mb-2">Разовое посещение</h3>
                  <div className="text-2xl sm:text-3xl font-bold text-blue-500 mb-3 sm:mb-4">60,000 сум</div>
                  <p className="text-xs sm:text-sm text-zinc-400 mb-2">
                    Разовый вход, все зоны и консультация тренера.
                  </p>
                  <ul className="mb-2 flex flex-col gap-1 items-center text-zinc-400 text-xs sm:text-sm">
                    <li>— Индивидуальная программа на занятие</li>
                    <li>— Без абонемента и обязательств</li>
                    <li>— Доступен гостевой доступ</li>
                  </ul>
                  <p className="text-xs sm:text-sm text-zinc-400 mb-4">
                    Подходит для знакомства с залом и разовых тренировок.
                  </p>
                  <Button className="w-full h-11 sm:h-12 bg-gradient-to-r from-blue-500 to-cyan-600 text-xs sm:text-base flex justify-center items-center gap-2 whitespace-normal min-w-0">
                    Купить
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-zinc-900 border-zinc-800 border-blue-500">
                <CardContent className="p-4 sm:p-6 text-center flex flex-col">
                  <Badge className="mb-3 sm:mb-4 bg-blue-500 text-xs sm:text-sm mx-auto">Популярный</Badge>
                  <h3 className="text-base sm:text-lg font-bold mb-2">8 тренировок</h3>
                  <div className="text-2xl sm:text-3xl font-bold text-blue-500 mb-2 sm:mb-4">420,000 сум</div>
                  <div className="text-xs sm:text-sm text-green-500 mb-3 sm:mb-4">Экономия 60,000 сум</div>
                  <ul className="mb-2 flex flex-col gap-1 items-center text-zinc-400 text-xs sm:text-sm">
                    <li>— Гибкий график в течение месяца</li>
                    <li>— Персональная поддержка тренера</li>
                    <li>— Бонусные мастер-классы</li>
                    <li>— Доступ к группам по уровню</li>
                  </ul>
                  <p className="text-xs sm:text-sm text-zinc-400 mb-4">
                    Для тех, кто тренируется регулярно и хочет максимального результата.
                  </p>
                  <Button className="w-full h-11 sm:h-12 bg-gradient-to-r from-blue-500 to-cyan-600 text-xs sm:text-base flex justify-center items-center gap-2 whitespace-normal min-w-0">
                    Купить
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-zinc-900 border-zinc-800 sm:col-span-2 lg:col-span-1">
                <CardContent className="p-4 sm:p-6 text-center flex flex-col">
                  <h3 className="text-base sm:text-lg font-bold mb-2">Безлимит в месяц</h3>
                  <div className="text-2xl sm:text-3xl font-bold text-blue-500 mb-3 sm:mb-4">800,000 сум</div>
                  <ul className="mb-2 flex flex-col gap-1 items-center text-zinc-400 text-xs sm:text-sm">
                    <li>— Неограниченное посещение и групповые тренировки</li>
                    <li>— Индивидуальный план на месяц</li>
                    <li>— Скидки на персональные тренировки</li>
                    <li>— Приоритет на новые группы</li>
                  </ul>
                  <p className="text-xs sm:text-sm text-zinc-400 mb-4">
                    Лучший выбор для тех, кто хочет быстро прогрессировать и получить максимум сервиса.
                  </p>
                  <Button className="w-full h-11 sm:h-12 bg-gradient-to-r from-blue-500 to-cyan-600 text-xs sm:text-base flex justify-center items-center gap-2 whitespace-normal min-w-0">
                    Купить
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Schedule Tab */}
        <TabsContent value="schedule" className="space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Расписание тренировок в зале</h2>
          <div className="space-y-3 sm:space-y-4">
            {workoutSchedule.map((session, index) => (
              <Card key={index} className="bg-zinc-900 border-zinc-800 hover:border-blue-500/50 transition-colors">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col space-y-3 sm:space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-2">
                          <Badge variant="outline" className="border-blue-500 text-blue-500 text-xs sm:text-sm">
                            {session.day}
                          </Badge>
                          <span className="text-lg sm:text-xl font-bold">{session.time}</span>
                          <Badge
                            className={`text-xs sm:text-sm ${
                              session.level === 'Начинающий'
                                ? 'bg-green-600'
                                : session.level === 'Средний'
                                ? 'bg-yellow-600'
                                : session.level === 'Продвинутый'
                                ? 'bg-red-600'
                                : 'bg-blue-600'
                            }`}
                          >
                            {session.level}
                          </Badge>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs sm:text-sm text-zinc-400 mb-1">
                          <span className="font-medium text-blue-400">{session.type}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-zinc-400">
                          <div className="flex items-center space-x-2">
                            <User className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>{session.trainer}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>{session.spots}</span>
                          </div>
                        </div>
                      </div>
                      <Button
                        disabled={session.spots.split('/')[0] === session.spots.split('/')[1]}
                        className="w-full sm:w-auto h-11 sm:h-12 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 disabled:opacity-50 text-sm sm:text-base whitespace-nowrap"
                      >
                        {session.spots.split('/')[0] === session.spots.split('/')[1] ? 'Группа заполнена' : 'Записаться'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Trainers Tab */}
        <TabsContent value="trainers" className="space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Наши тренеры</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {trainers.map((trainer, index) => (
              <Card key={index} className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <div
                      className="w-16 h-16 sm:w-20 sm:h-20 bg-cover bg-center rounded-full flex-shrink-0 mx-auto sm:mx-0"
                      style={{ backgroundImage: `url(${trainer.photo})` }}
                    />
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl font-bold mb-1">{trainer.name}</h3>
                      <p className="text-blue-500 font-semibold mb-2 text-sm sm:text-base">{trainer.specialization}</p>
                      <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-3 sm:mb-4">
                        <Badge className="bg-zinc-800 text-xs sm:text-sm">
                          <Calendar className="w-3 h-3 mr-1" />
                          {trainer.experience} опыта
                        </Badge>
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold mb-2">Достижения:</h4>
                        <ul className="space-y-1">
                          {trainer.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-xs sm:text-sm text-zinc-400 flex items-start">
                              <Trophy className="w-3 h-3 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Programs Tab */}
        <TabsContent value="programs" className="space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Программы тренировок</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{program.level}</h3>
                  <Badge className="mb-3 sm:mb-4 bg-blue-500/20 text-blue-500 border-blue-500/30 text-xs sm:text-sm">
                    {program.duration}
                  </Badge>
                  <p className="text-zinc-400 mb-4 sm:mb-6 text-sm sm:text-base">{program.description}</p>
                  <div>
                    <h4 className="font-semibold mb-3 text-sm sm:text-base">Что включено:</h4>
                    <ul className="space-y-2">
                      {program.includes.map((item, idx) => (
                        <li key={idx} className="text-xs sm:text-sm text-zinc-400 flex items-center">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-green-500 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* CTA Section */}
      <div className="mt-12 sm:mt-16 text-center">
        <Card className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-blue-500/30">
          <CardContent className="p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Начните строить тело мечты</h2>
            <p className="text-lg sm:text-xl text-zinc-300 mb-4 sm:mb-6 px-4">
              Присоединяйтесь к нам и достигните максимальных результатов в тренажерном зале
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <Button
                size="lg"
                className="h-12 sm:h-14 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-sm sm:text-base flex justify-center items-center gap-2 whitespace-nowrap w-full sm:w-auto"
              >
                <Dumbbell className="w-4 h-4 sm:w-5 sm:h-5" />
                Записаться на пробную
              </Button>
              <Button size="lg" variant="outline" className="h-12 sm:h-14 border-zinc-600 text-zinc-300 hover:bg-zinc-800 text-sm sm:text-base w-full sm:w-auto">
                Консультация с тренером
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
);


};

export default GymPage;
