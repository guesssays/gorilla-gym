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
  Heart,
  Sparkles,
  Flower,
  CheckCircle,
  Calendar,
  User,
  Crown,
  Smile
} from 'lucide-react';
import Link from 'next/link';

const WomenFitnessPage = () => {
  const { t } = useLanguage();

  const workoutSchedule = [
    { day: 'Понедельник', time: '09:00', type: 'Lady Fit', trainer: 'Анна Стройность', level: 'Для всех', spots: '12/16' },
    { day: 'Понедельник', time: '18:00', type: 'Booty Pump', trainer: 'Елена Красота', level: 'Средний', spots: '14/16' },
    { day: 'Вторник', time: '10:00', type: 'Stretch & Relax', trainer: 'Анна Стройность', level: 'Для всех', spots: '8/12' },
    { day: 'Среда', time: '09:00', type: 'Lady Fit', trainer: 'Анна Стройность', level: 'Для всех', spots: '15/16' },
    { day: 'Среда', time: '19:00', type: 'Functional Ladies', trainer: 'Елена Красота', level: 'Средний', spots: '10/14' },
    { day: 'Четверг', time: '18:30', type: 'Booty Pump', trainer: 'Елена Красота', level: 'Средний', spots: '13/16' },
    { day: 'Пятница', time: '09:00', type: 'Lady Fit', trainer: 'Анна Стройность', level: 'Для всех', spots: '11/16' },
    { day: 'Суббота', time: '11:00', type: 'Stretch & Relax', trainer: 'Анна Стройность', level: 'Для всех', spots: '6/12' },
  ];

  const workoutTypes = [
    {
      name: 'Lady Fit',
      description: 'Комплексная тренировка для всего тела с акцентом на проблемные зоны',
      duration: '55 мин',
      focus: 'Коррекция фигуры',
      color: 'from-pink-500 to-rose-600'
    },
    {
      name: 'Booty Pump',
      description: 'Специальная программа для укрепления ягодиц и ног',
      duration: '45 мин',
      focus: 'Ягодицы и ноги',
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Functional Ladies',
      description: 'Функциональные упражнения, адаптированные для женщин',
      duration: '50 мин',
      focus: 'Функциональность',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      name: 'Stretch & Relax',
      description: 'Растяжка и релаксация для восстановления после тренировок',
      duration: '40 мин',
      focus: 'Растяжка',
      color: 'from-violet-500 to-purple-600'
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-6 h-6 text-pink-500" />,
      title: 'Женское сообщество',
      description: 'Поддержка единомышленниц и комфортная атмосфера'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-purple-500" />,
      title: 'Коррекция фигуры',
      description: 'Специальные программы для женских проблемных зон'
    },
    {
      icon: <Crown className="w-6 h-6 text-yellow-500" />,
      title: 'Повышение уверенности',
      description: 'Почувствуйте себя красивой и сильной'
    },
    {
      icon: <Smile className="w-6 h-6 text-green-500" />,
      title: 'Позитивная атмосфера',
      description: 'Мотивирующая и дружелюбная среда для тренировок'
    }
  ];

  const trainers = [
    {
      name: 'Анна Стройность',
      specialization: 'Женский фитнес, коррекция фигуры',
      experience: '7 лет',
      achievements: ['Сертификат Women\'s Fitness', 'Специалист по женскому здоровью', 'Мастер по стретчингу'],
      philosophy: 'Красота - это здоровье, уверенность и гармония с собой',
      photo: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Елена Красота',
      specialization: 'Функциональный тренинг для женщин',
      experience: '5 лет',
      achievements: ['Сертификат TRX', 'Специалист по Booty тренировкам', 'Нутрициолог'],
      philosophy: 'Сильная женщина - это красивая женщина',
      photo: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const programs = [
    {
      level: 'Новичок',
      duration: '6 недель',
      description: 'Мягкое введение в мир фитнеса для женщин',
      includes: [
        'Адаптация к нагрузкам',
        'Изучение техники упражнений',
        'Программа питания',
        'Поддержка наставника'
      ]
    },
    {
      level: 'Активная',
      duration: '10 недель',
      description: 'Интенсивная программа для достижения результатов',
      includes: [
        'Коррекция проблемных зон',
        'Кардио и силовые тренировки',
        'Индивидуальные рекомендации',
        'Групповая мотивация'
      ]
    },
    {
      level: 'Опытная',
      duration: 'Постоянно',
      description: 'Продвинутые программы для поддержания формы',
      includes: [
        'Сложные функциональные упражнения',
        'Работа над рельефом',
        'Спортивное питание',
        'Участие в челленджах'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-4 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Navigation */}
        <div className="mb-6 sm:mb-8">
          <Link href="/workouts" className="inline-flex items-center text-zinc-400 hover:text-pink-500 transition-colors min-h-[44px]">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад к направлениям
          </Link>
        </div>

 {/* Hero Section */}
<div className="mb-8 sm:mb-16">
  <div
    className="relative h-40 xs:h-52 sm:h-80 md:h-96 bg-cover bg-center rounded-xl sm:rounded-2xl overflow-hidden"
    style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-pink-600/80 to-rose-600/80"></div>
    <div className="relative z-10 h-full flex items-center justify-center text-center px-1">
      <div>
        <div className="flex flex-wrap items-center justify-center mb-2 sm:mb-4">
          <Sparkles className="w-6 h-6 xs:w-7 xs:h-7 sm:w-10 sm:h-10 text-white mr-1 sm:mr-4" />
          <h1 className="font-bold break-words max-w-[82vw] text-lg xs:text-xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            ЖЕНСКИЙ<br className="block sm:hidden" /> ФИТНЕС
          </h1>
        </div>
        {/* Подзаголовок только для sm и выше */}
        <p className="hidden sm:block text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 max-w-3xl mx-auto">
          Специально разработанные программы для женщин всех возрастов
        </p>
        <div className="flex flex-wrap justify-center gap-1 sm:gap-4">
          <Badge className="bg-white/20 text-white border-none backdrop-blur-sm px-2 py-1 sm:px-4 sm:py-2 text-[10px] xs:text-xs sm:text-sm">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            40-55 минут
          </Badge>
          <Badge className="bg-white/20 text-white border-none backdrop-blur-sm px-2 py-1 sm:px-4 sm:py-2 text-[10px] xs:text-xs sm:text-sm">
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            Средняя интенсивность
          </Badge>
          <Badge className="bg-white/20 text-white border-none backdrop-blur-sm px-2 py-1 sm:px-4 sm:py-2 text-[10px] xs:text-xs sm:text-sm">
            <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            10-16 человек
          </Badge>
        </div>
      </div>
    </div>
  </div>
</div>

        {/* Main Content */}
        <Tabs defaultValue="programs" className="space-y-6 sm:space-y-8">
          <div className="overflow-x-auto">
            <TabsList className="bg-zinc-900 border border-zinc-800 grid w-full grid-cols-4 h-11 sm:h-12 min-w-[500px] sm:min-w-0">
              <TabsTrigger value="programs" className="data-[state=active]:bg-pink-500 h-full flex items-center justify-center text-xs sm:text-sm">
                Программы
              </TabsTrigger>
              <TabsTrigger value="schedule" className="data-[state=active]:bg-pink-500 h-full flex items-center justify-center text-xs sm:text-sm">
                Расписание
              </TabsTrigger>
              <TabsTrigger value="trainers" className="data-[state=active]:bg-pink-500 h-full flex items-center justify-center text-xs sm:text-sm">
                Тренеры
              </TabsTrigger>
              <TabsTrigger value="benefits" className="data-[state=active]:bg-pink-500 h-full flex items-center justify-center text-xs sm:text-sm">
                Преимущества
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Programs Tab */}
          <TabsContent value="programs" className="space-y-6 sm:space-y-8">
            {/* Workout Types */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Виды тренировок</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {workoutTypes.map((type, index) => (
                  <Card key={index} className="bg-zinc-900 border-zinc-800 overflow-hidden">
                    <CardContent className="p-4 sm:p-6">
                      <div className={`w-full h-3 sm:h-4 bg-gradient-to-r ${type.color} rounded-lg mb-3 sm:mb-4`}></div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2">{type.name}</h3>
                      <p className="text-zinc-400 mb-3 sm:mb-4 text-sm sm:text-base">{type.description}</p>
                      <div className="flex items-center justify-between">
                        <Badge className="bg-pink-500/20 text-pink-500 border-pink-500/30 text-xs sm:text-sm">
                          {type.focus}
                        </Badge>
                        <span className="text-xs sm:text-sm text-zinc-500">{type.duration}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Training Programs */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Программы обучения</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {programs.map((program, index) => (
                  <Card key={index} className="bg-zinc-900 border-zinc-800">
                    <CardContent className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold mb-2">{program.level}</h3>
                      <Badge className="mb-3 sm:mb-4 bg-pink-500/20 text-pink-500 border-pink-500/30 text-xs sm:text-sm">
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
            </div>

      {/* Pricing */}
         <div>
  <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Стоимость</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
    {/* Разовое посещение */}
    <Card className="bg-zinc-900 border-zinc-800 flex flex-col h-full">
      <CardContent className="p-4 sm:p-6 flex flex-col h-full justify-between text-center">
        <div>
          <h3 className="text-base sm:text-lg font-bold mb-2">Разовое посещение</h3>
          <div className="text-2xl sm:text-3xl font-bold text-pink-500 mb-3 sm:mb-4">45,000 сум</div>
          <p className="text-xs sm:text-sm text-zinc-400 mb-2">
            Пробное занятие без абонемента — подходит для знакомства с программой и тренером.
          </p>
          <ul className="mb-4 sm:mb-6 text-xs sm:text-sm text-zinc-400 text-left space-y-1 max-w-[240px] mx-auto">
            <li className="flex items-center">
              <CheckCircle className="w-3 h-3 mr-2 text-green-500" />
              Доступ к любому классу в расписании
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-3 h-3 mr-2 text-green-500" />
              Индивидуальная консультация
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-3 h-3 mr-2 text-green-500" />
              Гибкий выбор времени
            </li>
          </ul>
        </div>
        <Button className="w-full h-10 sm:h-12 bg-gradient-to-r from-pink-500 to-rose-600 text-xs sm:text-base mt-auto">
          Купить
        </Button>
      </CardContent>
    </Card>
    {/* 8 занятий */}
    <Card className="bg-zinc-900 border-zinc-800 border-pink-500 flex flex-col h-full">
      <CardContent className="p-4 sm:p-6 flex flex-col h-full justify-between text-center">
        <div>
          <Badge className="mb-3 sm:mb-4 bg-pink-500 text-xs sm:text-sm">Популярный</Badge>
          <h3 className="text-base sm:text-lg font-bold mb-2">8 занятий</h3>
          <div className="text-2xl sm:text-3xl font-bold text-pink-500 mb-2 sm:mb-4">320,000 сум</div>
          <div className="text-xs sm:text-sm text-green-500 mb-3 sm:mb-4">Экономия 40,000 сум</div>
          <p className="text-xs sm:text-sm text-zinc-400 mb-2">
            Лучший выбор для регулярных тренировок и быстрого результата.
          </p>
          <ul className="mb-4 sm:mb-6 text-xs sm:text-sm text-zinc-400 text-left space-y-1 max-w-[240px] mx-auto">
            <li className="flex items-center">
              <CheckCircle className="w-3 h-3 mr-2 text-green-500" />
              Индивидуальное сопровождение тренера
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-3 h-3 mr-2 text-green-500" />
              Поддержка и мотивация в чате
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-3 h-3 mr-2 text-green-500" />
              Персональная консультация по питанию
            </li>
          </ul>
        </div>
        <Button className="w-full h-10 sm:h-12 bg-gradient-to-r from-pink-500 to-rose-600 text-xs sm:text-base mt-auto">
          Купить
        </Button>
      </CardContent>
    </Card>
    {/* Безлимит в месяц */}
    <Card className="bg-zinc-900 border-zinc-800 flex flex-col h-full">
      <CardContent className="p-4 sm:p-6 flex flex-col h-full justify-between text-center">
        <div>
          <h3 className="text-base sm:text-lg font-bold mb-2">Безлимит в месяц</h3>
          <div className="text-2xl sm:text-3xl font-bold text-pink-500 mb-3 sm:mb-4">550,000 сум</div>
          <p className="text-xs sm:text-sm text-zinc-400 mb-2">
            Неограниченное количество посещений всех классов и мероприятий клуба.
          </p>
          <ul className="mb-4 sm:mb-6 text-xs sm:text-sm text-zinc-400 text-left space-y-1 max-w-[240px] mx-auto">
            <li className="flex items-center">
              <CheckCircle className="w-3 h-3 mr-2 text-green-500" />
              Безлимит на групповые тренировки
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-3 h-3 mr-2 text-green-500" />
              Доступ к мастер-классам
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-3 h-3 mr-2 text-green-500" />
              Приоритетная запись на занятия
            </li>
          </ul>
        </div>
        <Button className="w-full h-10 sm:h-12 bg-gradient-to-r from-pink-500 to-rose-600 text-xs sm:text-base mt-auto">
          Купить
        </Button>
      </CardContent>
    </Card>
  </div>
</div>

          </TabsContent>
  {/* Schedule Tab */}
          <TabsContent value="schedule" className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold">Расписание женского фитнеса</h2>
            <div className="space-y-3 sm:space-y-4">
              {workoutSchedule.map((session, index) => (
                <Card key={index} className="bg-zinc-900 border-zinc-800 hover:border-pink-500/50 transition-colors">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col space-y-3 sm:space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-2">
                            <Badge variant="outline" className="border-pink-500 text-pink-500 text-xs sm:text-sm">
                              {session.day}
                            </Badge>
                            <span className="text-lg sm:text-xl font-bold">{session.time}</span>
                            <Badge className="bg-pink-600 text-xs sm:text-sm">{session.level}</Badge>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs sm:text-sm text-zinc-400 mb-1">
                            <span className="font-medium text-pink-400">{session.type}</span>
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
                        <Button className="w-full sm:w-auto h-11 sm:h-12 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-sm sm:text-base">
                          Записаться
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
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
              {trainers.map((trainer, index) => (
                <Card key={index} className="bg-zinc-900 border-zinc-800">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
                      <div
                        className="w-16 h-16 sm:w-20 sm:h-20 bg-cover bg-center rounded-full flex-shrink-0 mx-auto sm:mx-0"
                        style={{ backgroundImage: `url(${trainer.photo})` }}
                      />
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-lg sm:text-xl font-bold mb-1">{trainer.name}</h3>
                        <p className="text-pink-500 font-semibold mb-2 text-sm sm:text-base">{trainer.specialization}</p>
                        <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-2">
                          <Badge className="bg-zinc-800 text-xs sm:text-sm">
                            <Calendar className="w-3 h-3 mr-1" />
                            {trainer.experience} опыта
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-xs sm:text-sm font-semibold mb-2 text-pink-400">Философия:</h4>
                      <p className="text-xs sm:text-sm text-zinc-400 italic">"{trainer.philosophy}"</p>
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold mb-2">Сертификация:</h4>
                      <ul className="space-y-1">
                        {trainer.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-xs sm:text-sm text-zinc-400 flex items-start">
                            <Crown className="w-3 h-3 mr-2 text-pink-500 flex-shrink-0 mt-0.5" />
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

          {/* Benefits Tab */}
          <TabsContent value="benefits" className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold">Преимущества женского фитнеса</h2>
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

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center">
                  <Flower className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500 mr-3" />
                  Почему выбирают женский фитнес?
                </h3>
                <p className="text-zinc-400 mb-6 text-sm sm:text-base">
                  Наша программа женского фитнеса создана специально для потребностей женского организма.
                  Мы учитываем физиологические особенности, гормональные циклы и эмоциональные аспекты
                  тренировочного процесса.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-pink-400">Специальная программа:</h4>
                    <ul className="space-y-1">
                      {[
                        'Коррекция проблемных зон',
                        'Безопасные нагрузки',
                        'Гибкий график',
                        'Поддержка и мотивация'
                      ].map((item, idx) => (
                        <li key={idx} className="text-xs sm:text-sm text-zinc-400 flex items-center">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-pink-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-pink-400">Результаты:</h4>
                    <ul className="space-y-1">
                      {[
                        'Стройная фигура',
                        'Повышение тонуса',
                        'Уверенность в себе',
                        'Хорошее настроение'
                      ].map((item, idx) => (
                        <li key={idx} className="text-xs sm:text-sm text-zinc-400 flex items-center">
                          <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-pink-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

{/* CTA Section */}
<div className="mt-10 sm:mt-16 text-center">
  <Card className="bg-gradient-to-r from-pink-600/20 to-rose-600/20 border-pink-500/30">
    <CardContent className="p-4 sm:p-8">
      <h2 className="text-xl sm:text-3xl font-bold mb-3 sm:mb-4">Станьте лучшей версией себя</h2>
      <p className="text-base sm:text-xl text-zinc-300 mb-4 sm:mb-6 px-2 sm:px-4">
        Присоединяйтесь к нашему женскому сообществу и достигайте целей вместе
      </p>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
        <Button size="lg" className="h-10 sm:h-14 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-xs sm:text-base">
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          Записаться на пробное занятие
        </Button>
        <Button size="lg" variant="outline" className="h-10 sm:h-14 border-zinc-600 text-zinc-300 hover:bg-zinc-800 text-xs sm:text-base">
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

export default WomenFitnessPage;
