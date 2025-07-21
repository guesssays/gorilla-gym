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
  Flame,
  Target,
  Award,
  CheckCircle,
  Calendar,
  MapPin,
  User
} from 'lucide-react';
import Link from 'next/link';

const CrossfitPage = () => {
  const { t } = useLanguage();

  const workoutSchedule = [
    { day: 'Понедельник', time: '07:00', trainer: 'Артём Волков', level: 'Продвинутый', spots: '12/15' },
    { day: 'Понедельник', time: '18:00', trainer: 'Максим Сила', level: 'Начинающий', spots: '8/15' },
    { day: 'Среда', time: '07:00', trainer: 'Артём Волков', level: 'Продвинутый', spots: '15/15' },
    { day: 'Среда', time: '19:00', trainer: 'Максим Сила', level: 'Средний', spots: '10/15' },
    { day: 'Пятница', time: '07:00', trainer: 'Артём Волков', level: 'Продвинутый', spots: '11/15' },
    { day: 'Пятница', time: '18:30', trainer: 'Максим Сила', level: 'Начинающий', spots: '7/15' },
  ];

  const equipment = [
    'Гири различного веса',
    'Олимпийские штанги',
    'Функциональные тренажеры',
    'Медболы и слэмболы',
    'Канаты для кроссфит',
    'Гимнастические кольца',
    'Боксы для запрыгивания',
    'Гребные тренажеры'
  ];

  const benefits = [
    {
      icon: <Flame className="w-6 h-6 text-red-500" />,
      title: 'Сжигание калорий',
      description: 'До 800 калорий за тренировку благодаря высокой интенсивности'
    },
    {
      icon: <Target className="w-6 h-6 text-orange-500" />,
      title: 'Функциональная сила',
      description: 'Развитие силы, которая пригодится в повседневной жизни'
    },
    {
      icon: <Award className="w-6 h-6 text-yellow-500" />,
      title: 'Быстрые результаты',
      description: 'Видимые изменения уже через 2-3 недели регулярных тренировок'
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: 'Командный дух',
      description: 'Мотивация и поддержка единомышленников'
    }
  ];

  const trainers = [
    {
      name: 'Артём Волков',
      specialization: 'Главный тренер по кроссфиту',
      experience: '8 лет',
      achievements: ['Мастер спорта по тяжёлой атлетике', 'CrossFit Level 3 Trainer', 'Чемпион Узбекистана 2019'],
      photo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Максим Сила',
      specialization: 'Функциональный тренинг',
      experience: '6 лет',
      achievements: ['CrossFit Level 2 Trainer', 'Сертификат Olympic Lifting', 'Финалист региональных соревнований'],
      photo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const programs = [
    {
      level: 'Начинающий',
      duration: '4 недели',
      description: 'Изучение базовых движений и техники безопасности',
      includes: [
        'Обучение базовым движениям',
        'Развитие выносливости',
        'Работа с собственным весом',
        'Введение в олимпийские упражнения'
      ]
    },
    {
      level: 'Средний',
      duration: '8 недель',
      description: 'Совершенствование техники и увеличение нагрузок',
      includes: [
        'Комплексные WOD тренировки',
        'Работа со штангой',
        'Гимнастические элементы',
        'Развитие силовой выносливости'
      ]
    },
    {
      level: 'Продвинутый',
      duration: 'Постоянно',
      description: 'Максимальные нагрузки и участие в соревнованиях',
      includes: [
        'Высокоинтенсивные WOD',
        'Олимпийская тяжёлая атлетика',
        'Сложные гимнастические элементы',
        'Подготовка к соревнованиям'
      ]
    }
  ];

return (
  <div className="min-h-screen bg-black text-white py-4 sm:py-8">
    <div className="container mx-auto px-4 sm:px-6">
      {/* Navigation */}
      <div className="mb-6 sm:mb-8">
        <Link href="/workouts" className="inline-flex items-center text-zinc-400 hover:text-orange-500 transition-colors min-h-[44px]">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Назад к направлениям
        </Link>
      </div>

      {/* Hero Section */}
      <div className="mb-12 sm:mb-16">
        <div
          className="relative h-64 sm:h-80 md:h-96 bg-cover bg-center rounded-xl sm:rounded-2xl overflow-hidden"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 to-orange-600/80"></div>
          <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
            <div>
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <Flame className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white mr-3 sm:mr-4" />
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">КРОССФИТ</h1>
              </div>
              {/* Скрываем подзаголовок на мобильных */}
              <p className="hidden sm:block text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 max-w-3xl mx-auto">
                Функциональные тренировки высокой интенсивности для развития силы, выносливости и гибкости
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                <Badge className="bg-white/20 text-white border-none backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  60 минут
                </Badge>
                <Badge className="bg-white/20 text-white border-none backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  Высокая интенсивность
                </Badge>
                <Badge className="bg-white/20 text-white border-none backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  8-15 человек
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
            <TabsTrigger value="overview" className="data-[state=active]:bg-orange-500 h-full flex items-center justify-center text-xs sm:text-sm">
              Обзор
            </TabsTrigger>
            <TabsTrigger value="schedule" className="data-[state=active]:bg-orange-500 h-full flex items-center justify-center text-xs sm:text-sm">
              Расписание
            </TabsTrigger>
            <TabsTrigger value="trainers" className="data-[state=active]:bg-orange-500 h-full flex items-center justify-center text-xs sm:text-sm">
              Тренеры
            </TabsTrigger>
            <TabsTrigger value="programs" className="data-[state=active]:bg-orange-500 h-full flex items-center justify-center text-xs sm:text-sm">
              Программы
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6 sm:space-y-8">
          {/* Benefits */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Преимущества кроссфита</h2>
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
              {/* Разовое посещение */}
              <Card className="bg-zinc-900 border-zinc-800 flex flex-col justify-between">
                <CardContent className="p-4 sm:p-6 text-center flex flex-col h-full">
                  <h3 className="text-base sm:text-lg font-bold mb-2">Разовое посещение</h3>
                  <div className="text-2xl sm:text-3xl font-bold text-orange-500 mb-3 sm:mb-4">50,000 сум</div>
                  <p className="text-sm text-zinc-400 mb-6">
                    Идеально для знакомства с залом и тренером. Можно прийти без записи.
                  </p>
                  <ul className="mb-6 space-y-2 text-left max-w-xs mx-auto text-sm text-zinc-300">
                    <li>✔️ 1 тренировка</li>
                    <li>✔️ Безлимит по времени</li>
                    <li>✔️ Возможность подарить другу</li>
                    <li>✔️ Использование всего оборудования зала</li>
                  </ul>
                  <Button className="w-full h-11 sm:h-12 bg-gradient-to-r from-orange-500 to-red-600 text-sm sm:text-base mt-auto">
                    Купить
                  </Button>
                </CardContent>
              </Card>

              {/* 8 тренировок */}
              <Card className="bg-zinc-900 border-zinc-800 border-orange-500 flex flex-col justify-between">
                <CardContent className="p-4 sm:p-6 text-center flex flex-col h-full">
                  <Badge className="mb-3 sm:mb-4 bg-orange-500 text-xs sm:text-sm mx-auto">Популярный</Badge>
                  <h3 className="text-base sm:text-lg font-bold mb-2">8 тренировок</h3>
                  <div className="text-2xl sm:text-3xl font-bold text-orange-500 mb-2 sm:mb-4">350,000 сум</div>
                  <div className="text-xs sm:text-sm text-green-500 mb-3 sm:mb-4">
                    Экономия 50,000 сум
                  </div>
                  <p className="text-sm text-zinc-400 mb-6">
                    Максимум пользы за выгодную цену. Можно использовать в течение месяца.
                  </p>
                  <ul className="mb-6 space-y-2 text-left max-w-xs mx-auto text-sm text-zinc-300">
                    <li>✔️ 8 посещений</li>
                    <li>✔️ Гибкий график</li>
                    <li>✔️ Экономия 50,000 сум</li>
                    <li>✔️ Бесплатное участие в разовых мастер-классах</li>
                  </ul>
                  <Button className="w-full h-11 sm:h-12 bg-gradient-to-r from-orange-500 to-red-600 text-sm sm:text-base mt-auto">
                    Купить
                  </Button>
                </CardContent>
              </Card>

              {/* Безлимит в месяц */}
              <Card className="bg-zinc-900 border-zinc-800 sm:col-span-2 lg:col-span-1 flex flex-col justify-between">
                <CardContent className="p-4 sm:p-6 text-center flex flex-col h-full">
                  <h3 className="text-base sm:text-lg font-bold mb-2">Безлимит в месяц</h3>
                  <div className="text-2xl sm:text-3xl font-bold text-orange-500 mb-3 sm:mb-4">600,000 сум</div>
                  <p className="text-sm text-zinc-400 mb-6">
                    Идеально для тех, кто хочет быстрый результат и не пропускать тренировки.
                  </p>
                  <ul className="mb-6 space-y-2 text-left max-w-xs mx-auto text-sm text-zinc-300">
                    <li>✔️ Безлимит посещений</li>
                    <li>✔️ Доступ в любое время</li>
                    <li>✔️ Включено: душ, сауна</li>
                    <li>✔️ Персональный план тренировок</li>
                  </ul>
                  <Button className="w-full h-11 sm:h-12 bg-gradient-to-r from-orange-500 to-red-600 text-sm sm:text-base mt-auto">
                    Купить
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

          {/* Schedule Tab */}
          <TabsContent value="schedule" className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold">Расписание кроссфит тренировок</h2>
            <div className="space-y-3 sm:space-y-4">
              {workoutSchedule.map((session, index) => (
                <Card key={index} className="bg-zinc-900 border-zinc-800 hover:border-orange-500/50 transition-colors">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col space-y-3 sm:space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-2">
                            <Badge variant="outline" className="border-orange-500 text-orange-500 text-xs sm:text-sm">
                              {session.day}
                            </Badge>
                            <span className="text-lg sm:text-xl font-bold">{session.time}</span>
                            <Badge className={`text-xs sm:text-sm ${
                              session.level === 'Начинающий' ? 'bg-green-600' :
                              session.level === 'Средний' ? 'bg-yellow-600' :
                              'bg-red-600'
                            }`}>
                              {session.level}
                            </Badge>
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
                          className="w-full sm:w-auto h-11 sm:h-12 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 disabled:opacity-50 text-sm sm:text-base"
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
            <h2 className="text-2xl sm:text-3xl font-bold">Наши тренеры по кроссфиту</h2>
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
                        <p className="text-orange-500 font-semibold mb-2 text-sm sm:text-base">{trainer.specialization}</p>
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
                                <Award className="w-3 h-3 mr-2 text-orange-500 flex-shrink-0 mt-0.5" />
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
            <h2 className="text-2xl sm:text-3xl font-bold">Программы обучения</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {programs.map((program, index) => (
                <Card key={index} className="bg-zinc-900 border-zinc-800">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{program.level}</h3>
                    <Badge className="mb-3 sm:mb-4 bg-orange-500/20 text-orange-500 border-orange-500/30 text-xs sm:text-sm">
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
          <Card className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border-orange-500/30">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Готовы начать?</h2>
              <p className="text-lg sm:text-xl text-zinc-300 mb-4 sm:mb-6 px-4">
                Записывайтесь на бесплатную пробную тренировку и почувствуйте силу кроссфита
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button size="lg" className="h-12 sm:h-14 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-sm sm:text-base">
                  <Flame className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Записаться на пробную
                </Button>
                <Button size="lg" variant="outline" className="h-12 sm:h-14 border-zinc-600 text-zinc-300 hover:bg-zinc-800 text-sm sm:text-base">
                  Задать вопрос тренеру
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CrossfitPage;