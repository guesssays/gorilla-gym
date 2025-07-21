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
  Heart,
  Star,
  Leaf,
  Sun,
  Moon,
  CheckCircle,
  Calendar,
  User,
  Smile
} from 'lucide-react';
import Link from 'next/link';

const YogaPage = () => {
  const { t } = useLanguage();

  const yogaTypes = [
    {
      name: 'Хатха-йога',
      description: 'Базовые асаны и правильное дыхание для начинающих',
      duration: '75 мин',
      level: 'Начинающий',
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Виньяса-йога',
      description: 'Динамичные переходы между позами в ритме дыхания',
      duration: '60 мин',
      level: 'Средний',
      color: 'from-blue-500 to-teal-600'
    },
    {
      name: 'Инь-йога',
      description: 'Медитативная практика с длительным удержанием поз',
      duration: '90 мин',
      level: 'Для всех',
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Пранаяма',
      description: 'Дыхательные практики для очищения и энергии',
      duration: '45 мин',
      level: 'Для всех',
      color: 'from-orange-500 to-yellow-600'
    }
  ];

  const schedule = [
    { day: 'Понедельник', time: '08:00', type: 'Хатха-йога', trainer: 'Мария Светлакова', spots: '15/20' },
    { day: 'Понедельник', time: '19:00', type: 'Виньяса-йога', trainer: 'Елена Медитация', spots: '12/18' },
    { day: 'Вторник', time: '07:30', type: 'Пранаяма', trainer: 'Мария Светлакова', spots: '8/15' },
    { day: 'Среда', time: '08:00', type: 'Хатха-йога', trainer: 'Мария Светлакова', spots: '18/20' },
    { day: 'Среда', time: '19:30', type: 'Инь-йога', trainer: 'Елена Медитация', spots: '10/15' },
    { day: 'Четверг', time: '18:00', type: 'Виньяса-йога', trainer: 'Елена Медитация', spots: '14/18' },
    { day: 'Пятница', time: '08:00', type: 'Хатха-йога', trainer: 'Мария Светлакова', spots: '16/20' },
    { day: 'Суббота', time: '10:00', type: 'Инь-йога', trainer: 'Елена Медитация', spots: '8/15' },
  ];

  const benefits = [
    {
      icon: <Heart className="w-6 h-6 text-pink-500" />,
      title: 'Снятие стресса',
      description: 'Глубокое расслабление и освобождение от ежедневного напряжения'
    },
    {
      icon: <Leaf className="w-6 h-6 text-green-500" />,
      title: 'Гибкость',
      description: 'Постепенное улучшение подвижности суставов и эластичности мышц'
    },
    {
      icon: <Sun className="w-6 h-6 text-yellow-500" />,
      title: 'Энергия',
      description: 'Повышение жизненной энергии через правильное дыхание'
    },
    {
      icon: <Smile className="w-6 h-6 text-blue-500" />,
      title: 'Внутренний покой',
      description: 'Развитие осознанности и гармонии тела и разума'
    }
  ];

  const trainers = [
    {
      name: 'Мария Светлакова',
      specialization: 'Хатха-йога, Пранаяма',
      experience: '6 лет',
      education: 'Сертификат RYT-500',
      philosophy: 'Йога - это путь к внутренней гармонии и здоровью',
      achievements: ['Обучение в Ришикеше, Индия', 'Мастер медитативных практик', 'Преподаватель пранаямы'],
      photo: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Елена Медитация',
      specialization: 'Виньяса, Инь-йога',
      experience: '4 года',
      education: 'Сертификат RYT-300',
      philosophy: 'Через движение мы находим покой, через покой - мудрость',
      achievements: ['Специалист по травмобезопасности', 'Инструктор медитации', 'Мастер Инь-йоги'],
      photo: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const principles = [
    {
      name: 'Ахимса',
      description: 'Ненасилие по отношению к себе и окружающим',
      icon: <Heart className="w-5 h-5 text-pink-500" />
    },
    {
      name: 'Сатья',
      description: 'Правдивость в мыслях, словах и действиях',
      icon: <Sun className="w-5 h-5 text-yellow-500" />
    },
    {
      name: 'Сантоша',
      description: 'Удовлетворённость и принятие настоящего момента',
      icon: <Smile className="w-5 h-5 text-blue-500" />
    },
    {
      name: 'Тапас',
      description: 'Дисциплина и постоянная практика',
      icon: <Leaf className="w-5 h-5 text-green-500" />
    }
  ];

return (
  <div className="min-h-screen bg-black text-white py-4 sm:py-8">
    <div className="container mx-auto px-4 sm:px-6">
      {/* Navigation */}
      <div className="mb-6 sm:mb-8">
        <Link href="/workouts" className="inline-flex items-center text-zinc-400 hover:text-green-500 transition-colors min-h-[44px]">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Назад к направлениям
        </Link>
      </div>

      {/* Hero Section */}
      <div className="mb-12 sm:mb-16">
        <div
          className="relative h-64 sm:h-80 md:h-96 bg-cover bg-center rounded-xl sm:rounded-2xl overflow-hidden"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-emerald-600/80"></div>
          <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
            <div>
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <Leaf className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white mr-3 sm:mr-4" />
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">ЙОГА</h1>
              </div>
              {/* Скрываем подзаголовок на мобильных */}
              <p className="hidden sm:block text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 max-w-3xl mx-auto">
                Гармоничное развитие тела и духа через древние практики йоги
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                <Badge className="bg-white/20 text-white border-none backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  45-90 минут
                </Badge>
                <Badge className="bg-white/20 text-white border-none backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm">
                  <Heart className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  Низкая интенсивность
                </Badge>
                <Badge className="bg-white/20 text-white border-none backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  12-20 человек
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="types" className="space-y-6 sm:space-y-8">
        <div className="overflow-x-auto">
          <TabsList className="bg-zinc-900 border border-zinc-800 grid w-full grid-cols-4 h-11 sm:h-12 min-w-[500px] sm:min-w-0">
            <TabsTrigger value="types" className="data-[state=active]:bg-green-500 h-full flex items-center justify-center text-xs sm:text-sm">
              Виды йоги
            </TabsTrigger>
            <TabsTrigger value="schedule" className="data-[state=active]:bg-green-500 h-full flex items-center justify-center text-xs sm:text-sm">
              Расписание
            </TabsTrigger>
            <TabsTrigger value="trainers" className="data-[state=active]:bg-green-500 h-full flex items-center justify-center text-xs sm:text-sm">
              Инструкторы
            </TabsTrigger>
            <TabsTrigger value="philosophy" className="data-[state=active]:bg-green-500 h-full flex items-center justify-center text-xs sm:text-sm">
              Философия
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Types Tab */}
        <TabsContent value="types" className="space-y-6 sm:space-y-8">
          {/* Benefits */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Преимущества йоги</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
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

          {/* Yoga Types */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Виды йоги в нашей студии</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {yogaTypes.map((type, index) => (
                <Card key={index} className="bg-zinc-900 border-zinc-800 overflow-hidden">
                  <CardContent className="p-4 sm:p-6">
                    <div className={`w-full h-3 sm:h-4 bg-gradient-to-r ${type.color} rounded-lg mb-3 sm:mb-4`}></div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{type.name}</h3>
                    <p className="text-zinc-400 mb-3 sm:mb-4 text-sm sm:text-base">{type.description}</p>
                    <div className="flex items-center justify-between">
                      <Badge className="bg-green-500/20 text-green-500 border-green-500/30 text-xs sm:text-sm">
                        {type.level}
                      </Badge>
                      <span className="text-xs sm:text-sm text-zinc-500">{type.duration}</span>
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
              <Card className="bg-zinc-900 border-zinc-800 flex flex-col justify-between">
                <CardContent className="p-4 sm:p-6 text-center flex flex-col h-full">
                  <h3 className="text-base sm:text-lg font-bold mb-2">Разовое посещение</h3>
                  <div className="text-2xl sm:text-3xl font-bold text-green-500 mb-3 sm:mb-4">40,000 сум</div>
                  <p className="text-sm text-zinc-400 mb-6">
                    Идеально для знакомства с залом и инструктором. Можно прийти без записи.
                  </p>
                  <ul className="mb-6 space-y-2 text-left max-w-xs mx-auto text-sm text-zinc-300">
                    <li>✔️ 1 занятие</li>
                    <li>✔️ Использование всего оборудования студии</li>
                    <li>✔️ Индивидуальная поддержка инструктора</li>
                  </ul>
                  <Button className="w-full h-11 sm:h-12 bg-gradient-to-r from-green-500 to-emerald-600 text-sm sm:text-base mt-auto">
                    Купить
                  </Button>
                </CardContent>
              </Card>

              {/* 8 занятий */}
              <Card className="bg-zinc-900 border-zinc-800 border-green-500 flex flex-col justify-between">
                <CardContent className="p-4 sm:p-6 text-center flex flex-col h-full">
                  <Badge className="mb-3 sm:mb-4 bg-green-500 text-xs sm:text-sm mx-auto">Популярный</Badge>
                  <h3 className="text-base sm:text-lg font-bold mb-2">8 занятий</h3>
                  <div className="text-2xl sm:text-3xl font-bold text-green-500 mb-2 sm:mb-4">280,000 сум</div>
                  <div className="text-xs sm:text-sm text-green-500 mb-3 sm:mb-4">
                    Экономия 40,000 сум
                  </div>
                  <p className="text-sm text-zinc-400 mb-6">
                    Максимум пользы за выгодную цену. Можно использовать в течение месяца.
                  </p>
                  <ul className="mb-6 space-y-2 text-left max-w-xs mx-auto text-sm text-zinc-300">
                    <li>✔️ 8 занятий</li>
                    <li>✔️ Гибкий график</li>
                    <li>✔️ Индивидуальная программа развития</li>
                    <li>✔️ Бесплатные мастер-классы</li>
                  </ul>
                  <Button className="w-full h-11 sm:h-12 bg-gradient-to-r from-green-500 to-emerald-600 text-sm sm:text-base mt-auto">
                    Купить
                  </Button>
                </CardContent>
              </Card>

              {/* Безлимит в месяц */}
              <Card className="bg-zinc-900 border-zinc-800 sm:col-span-2 lg:col-span-1 flex flex-col justify-between">
                <CardContent className="p-4 sm:p-6 text-center flex flex-col h-full">
                  <h3 className="text-base sm:text-lg font-bold mb-2">Безлимит в месяц</h3>
                  <div className="text-2xl sm:text-3xl font-bold text-green-500 mb-3 sm:mb-4">450,000 сум</div>
                  <p className="text-sm text-zinc-400 mb-6">
                    Неограниченное количество занятий для быстрого прогресса и глубокого погружения.
                  </p>
                  <ul className="mb-6 space-y-2 text-left max-w-xs mx-auto text-sm text-zinc-300">
                    <li>✔️ Безлимит посещений</li>
                    <li>✔️ Доступ к утренним и вечерним практикам</li>
                    <li>✔️ Индивидуальные консультации</li>
                    <li>✔️ Участие в закрытых мероприятиях студии</li>
                  </ul>
                  <Button className="w-full h-11 sm:h-12 bg-gradient-to-r from-green-500 to-emerald-600 text-sm sm:text-base mt-auto">
                    Купить
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

          {/* Schedule Tab */}
          <TabsContent value="schedule" className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold">Расписание занятий йогой</h2>
            <div className="space-y-3 sm:space-y-4">
              {schedule.map((session, index) => (
                <Card key={index} className="bg-zinc-900 border-zinc-800 hover:border-green-500/50 transition-colors">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col space-y-3 sm:space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-2">
                            <Badge variant="outline" className="border-green-500 text-green-500 text-xs sm:text-sm">
                              {session.day}
                            </Badge>
                            <span className="text-lg sm:text-xl font-bold">{session.time}</span>
                            <Badge className="bg-green-600 text-xs sm:text-sm">{session.type}</Badge>
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
                        <Button className="w-full sm:w-auto h-11 sm:h-12 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-sm sm:text-base">
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
            <h2 className="text-2xl sm:text-3xl font-bold">Наши инструкторы йоги</h2>
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
                        <p className="text-green-500 font-semibold mb-2 text-sm sm:text-base">{trainer.specialization}</p>
                        <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-2">
                          <Badge className="bg-zinc-800 text-xs sm:text-sm">
                            <Calendar className="w-3 h-3 mr-1" />
                            {trainer.experience} опыта
                          </Badge>
                          <Badge className="bg-green-500/20 text-green-500 border-green-500/30 text-xs sm:text-sm">
                            {trainer.education}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-xs sm:text-sm font-semibold mb-2 text-green-400">Философия:</h4>
                      <p className="text-xs sm:text-sm text-zinc-400 italic">"{trainer.philosophy}"</p>
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold mb-2">Квалификация:</h4>
                      <ul className="space-y-1">
                        {trainer.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-xs sm:text-sm text-zinc-400 flex items-start">
                            <Leaf className="w-3 h-3 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
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

          {/* Philosophy Tab */}
          <TabsContent value="philosophy" className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold">Философия йоги</h2>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6 sm:p-8">
                <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-4 sm:mb-6">
                  Йога - это не просто физические упражнения, это целостная система развития человека,
                  включающая в себя работу с телом, дыханием, умом и духом. В нашей студии мы следуем
                  традиционным принципам йоги, адаптированным для современной жизни.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  {principles.map((principle, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0">{principle.icon}</div>
                      <div>
                        <h4 className="font-bold text-green-400 mb-1 text-sm sm:text-base">{principle.name}</h4>
                        <p className="text-xs sm:text-sm text-zinc-400">{principle.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 mr-3" />
                    <h3 className="text-lg sm:text-xl font-bold">Утренняя практика</h3>
                  </div>
                  <p className="text-zinc-400 text-sm sm:text-base">
                    Начните день с энергии и ясности ума. Утренние занятия помогают настроиться
                    на позитивный лад и зарядиться энергией на весь день.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <Moon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mr-3" />
                    <h3 className="text-lg sm:text-xl font-bold">Вечерняя практика</h3>
                  </div>
                  <p className="text-zinc-400 text-sm sm:text-base">
                    Завершите день расслаблением и внутренним покоем. Вечерняя йога помогает
                    снять напряжение и подготовиться к качественному сну.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <Card className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border-green-500/30">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Начните свой путь к гармонии</h2>
              <p className="text-lg sm:text-xl text-zinc-300 mb-4 sm:mb-6 px-4">
                Присоединяйтесь к нашим занятиям и откройте для себя древнюю мудрость йоги
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button
  size="lg"
  className="h-12 sm:h-14 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-sm sm:text-base flex items-center justify-center gap-1 whitespace-normal leading-snug text-center"
>
  <Leaf className="w-4 h-4 sm:w-5 sm:h-5 mr-0 sm:mr-2 flex-shrink-0" />
  <span className="break-words max-w-full">Записаться на пробное занятие</span>
</Button>

                <Button size="lg" variant="outline" className="h-12 sm:h-14 border-zinc-600 text-zinc-300 hover:bg-zinc-800 text-sm sm:text-base">
                  Консультация с инструктором
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default YogaPage;