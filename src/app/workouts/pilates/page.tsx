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
  Target,
  Star,
  Zap,
  Shield,
  Sparkles,
  CheckCircle,
  Calendar,
  User,
  Activity
} from 'lucide-react';
import Link from 'next/link';

const PilatesPage = () => {
  const { t } = useLanguage();

  const pilatesStyles = [
    {
      name: 'Классический пилатес',
      description: 'Основные упражнения по методу Джозефа Пилатеса',
      duration: '50 мин',
      equipment: 'Коврик',
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Пилатес с оборудованием',
      description: 'Занятия с использованием мячей, резинок и роллов',
      duration: '55 мин',
      equipment: 'Мячи, резинки',
      color: 'from-blue-500 to-purple-600'
    },
    {
      name: 'Реформер пилатес',
      description: 'Тренировки на специальном тренажере-реформере',
      duration: '60 мин',
      equipment: 'Реформер',
      color: 'from-green-500 to-blue-600'
    },
    {
      name: 'Пилатес-стретчинг',
      description: 'Комбинация укрепления и растяжки мышц',
      duration: '50 мин',
      equipment: 'Коврик, ремни',
      color: 'from-pink-500 to-rose-600'
    }
  ];

  const schedule = [
    { day: 'Понедельник', time: '09:00', type: 'Классический пилатес', trainer: 'Анна Фитнесова', level: 'Начинающий', spots: '12/15' },
    { day: 'Понедельник', time: '18:00', type: 'Реформер пилатес', trainer: 'Елена Кор', level: 'Продвинутый', spots: '6/8' },
    { day: 'Вторник', time: '10:00', type: 'Пилатес с оборудованием', trainer: 'Анна Фитнесова', level: 'Средний', spots: '10/12' },
    { day: 'Среда', time: '09:00', type: 'Классический пилатес', trainer: 'Анна Фитнесова', level: 'Начинающий', spots: '14/15' },
    { day: 'Среда', time: '19:00', type: 'Пилатес-стретчинг', trainer: 'Елена Кор', level: 'Для всех', spots: '8/12' },
    { day: 'Четверг', time: '18:30', type: 'Реформер пилатес', trainer: 'Елена Кор', level: 'Средний', spots: '5/8' },
    { day: 'Пятница', time: '09:00', type: 'Классический пилатес', trainer: 'Анна Фитнесова', level: 'Начинающий', spots: '13/15' },
    { day: 'Суббота', time: '11:00', type: 'Пилатес с оборудованием', trainer: 'Елена Кор', level: 'Средний', spots: '9/12' },
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6 text-purple-500" />,
      title: 'Укрепление кора',
      description: 'Глубокие мышцы живота, спины и таза становятся сильнее и выносливее'
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: 'Улучшение осанки',
      description: 'Коррекция положения позвоночника и устранение мышечных дисбалансов'
    },
    {
      icon: <Activity className="w-6 h-6 text-green-500" />,
      title: 'Координация',
      description: 'Развитие нейромышечной связи и улучшение контроля движений'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-pink-500" />,
      title: 'Гибкость',
      description: 'Увеличение амплитуды движений и эластичности мышц'
    }
  ];

  const trainers = [
    {
      name: 'Анна Фитнесова',
      specialization: 'Классический пилатес, женский фитнес',
      experience: '5 лет',
      education: 'Сертификат BASI Pilates',
      approach: 'Индивидуальный подход к каждому телу',
      achievements: ['Специалист по коррекции осанки', 'Сертификат Stott Pilates', 'Эксперт по женскому здоровью'],
      photo: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Елена Кор',
      specialization: 'Реформер пилатес, реабилитация',
      experience: '7 лет',
      education: 'Сертификат Romana\'s Pilates',
      approach: 'Восстановление через осознанное движение',
      achievements: ['Специалист по реабилитации', 'Мастер реформер пилатеса', 'Тренер инструкторов'],
      photo: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const principles = [
    {
      name: 'Концентрация',
      description: 'Полное внимание к каждому движению и ощущению в теле',
      number: '01'
    },
    {
      name: 'Контроль',
      description: 'Осознанное управление каждым движением без резких рывков',
      number: '02'
    },
    {
      name: 'Центрирование',
      description: 'Все движения исходят из сильного центра - мышц кора',
      number: '03'
    },
    {
      name: 'Плавность',
      description: 'Грациозные переходы между упражнениями как в танце',
      number: '04'
    },
    {
      name: 'Точность',
      description: 'Качество движения важнее количества повторений',
      number: '05'
    },
    {
      name: 'Дыхание',
      description: 'Координация дыхания с движением для максимального эффекта',
      number: '06'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-4 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Navigation */}
        <div className="mb-6 sm:mb-8">
          <Link href="/workouts" className="inline-flex items-center text-zinc-400 hover:text-purple-500 transition-colors min-h-[44px]">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад к направлениям
          </Link>
        </div>

        {/* Hero Section */}
        <div className="mb-12 sm:mb-16">
          <div
            className="relative h-64 sm:h-80 md:h-96 bg-cover bg-center rounded-xl sm:rounded-2xl overflow-hidden"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-pink-600/80"></div>
            <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
              <div>
                <div className="flex items-center justify-center mb-3 sm:mb-4">
                  <Zap className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white mr-3 sm:mr-4" />
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">ПИЛАТЕС</h1>
                </div>
                {/* Скрываем подзаголовок на мобильных */}
                <p className="hidden sm:block text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 max-w-3xl mx-auto">
                  Система упражнений для укрепления мышц кора и улучшения осанки
                </p>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                  <Badge className="bg-white/20 text-white border-none backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    50-60 минут
                  </Badge>
                  <Badge className="bg-white/20 text-white border-none backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm">
                    <Target className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Средняя интенсивность
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
        <Tabs defaultValue="styles" className="space-y-6 sm:space-y-8">
          <div className="overflow-x-auto">
            <TabsList className="bg-zinc-900 border border-zinc-800 grid w-full grid-cols-4 h-11 sm:h-12 min-w-[500px] sm:min-w-0">
              <TabsTrigger value="styles" className="data-[state=active]:bg-purple-500 h-full flex items-center justify-center text-xs sm:text-sm">
                Стили
              </TabsTrigger>
              <TabsTrigger value="schedule" className="data-[state=active]:bg-purple-500 h-full flex items-center justify-center text-xs sm:text-sm">
                Расписание
              </TabsTrigger>
              <TabsTrigger value="trainers" className="data-[state=active]:bg-purple-500 h-full flex items-center justify-center text-xs sm:text-sm">
                Инструкторы
              </TabsTrigger>
              <TabsTrigger value="principles" className="data-[state=active]:bg-purple-500 h-full flex items-center justify-center text-xs sm:text-sm">
                Принципы
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Styles Tab */}
          <TabsContent value="styles" className="space-y-6 sm:space-y-8">
            {/* Benefits */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Преимущества пилатеса</h2>
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

            {/* Pilates Styles */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Виды пилатеса</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {pilatesStyles.map((style, index) => (
                  <Card key={index} className="bg-zinc-900 border-zinc-800 overflow-hidden">
                    <CardContent className="p-4 sm:p-6">
                      <div className={`w-full h-3 sm:h-4 bg-gradient-to-r ${style.color} rounded-lg mb-3 sm:mb-4`}></div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2">{style.name}</h3>
                      <p className="text-zinc-400 mb-3 sm:mb-4 text-sm sm:text-base">{style.description}</p>
                      <div className="flex items-center justify-between">
                        <Badge className="bg-purple-500/20 text-purple-500 border-purple-500/30 text-xs sm:text-sm">
                          {style.equipment}
                        </Badge>
                        <span className="text-xs sm:text-sm text-zinc-500">{style.duration}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Стоимость</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {/* Разовое */}
                <Card className="bg-zinc-900 border-zinc-800 flex flex-col justify-between">
                  <CardContent className="p-4 sm:p-6 text-center flex flex-col h-full">
                    <h3 className="text-sm sm:text-lg font-bold mb-2">Разовое</h3>
                    <div className="text-xl sm:text-3xl font-bold text-purple-500 mb-2 sm:mb-4">45,000</div>
                    <div className="text-xs sm:text-sm text-zinc-400 mb-3 sm:mb-4">сум</div>
                    <p className="text-sm text-zinc-400 mb-6">
                      Идеально для знакомства с методом и инструкторами. Можно прийти без записи.
                    </p>
                    <ul className="mb-6 space-y-2 text-left max-w-xs mx-auto text-sm text-zinc-300">
                      <li>✔️ 1 занятие</li>
                      <li>✔️ Использование оборудования студии</li>
                      <li>✔️ Поддержка инструктора во время занятия</li>
                    </ul>
                    <Button className="w-full h-11 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-600 text-sm sm:text-base mt-auto whitespace-normal leading-snug text-center">
                      Купить
                    </Button>
                  </CardContent>
                </Card>

                {/* 4 занятия */}
                <Card className="bg-zinc-900 border-zinc-800 flex flex-col justify-between">
                  <CardContent className="p-4 sm:p-6 text-center flex flex-col h-full">
                    <h3 className="text-sm sm:text-lg font-bold mb-2">4 занятия</h3>
                    <div className="text-xl sm:text-3xl font-bold text-purple-500 mb-2 sm:mb-4">160,000</div>
                    <div className="text-xs sm:text-sm text-zinc-400 mb-3 sm:mb-4">сум</div>
                    <p className="text-sm text-zinc-400 mb-6">
                      Оптимальный курс для начального этапа с гибким графиком.
                    </p>
                    <ul className="mb-6 space-y-2 text-left max-w-xs mx-auto text-sm text-zinc-300">
                      <li>✔️ 4 занятия</li>
                      <li>✔️ Индивидуальная программа развития</li>
                      <li>✔️ Использование разного оборудования</li>
                      <li>✔️ Консультации инструктора</li>
                    </ul>
                    <Button className="w-full h-11 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-600 text-sm sm:text-base mt-auto whitespace-normal leading-snug text-center">
                      Купить
                    </Button>
                  </CardContent>
                </Card>

                {/* 8 занятий */}
                <Card className="bg-zinc-900 border-zinc-800 border-purple-500 flex flex-col justify-between">
                  <CardContent className="p-4 sm:p-6 text-center flex flex-col h-full">
                    <Badge className="mb-3 sm:mb-4 bg-purple-500 text-xs mx-auto">Популярный</Badge>
                    <h3 className="text-sm sm:text-lg font-bold mb-2">8 занятий</h3>
                    <div className="text-xl sm:text-3xl font-bold text-purple-500 mb-1 sm:mb-4">300,000</div>
                    <div className="text-xs text-green-500 mb-3 sm:mb-4">-60,000 сум</div>
                    <p className="text-sm text-zinc-400 mb-6">
                      Максимальный результат за курс. Подходит для постоянных занятий.
                    </p>
                    <Button className="w-full h-11 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-600 text-sm sm:text-base mt-auto whitespace-normal leading-snug text-center">
                      Купить
                    </Button>
                  </CardContent>
                </Card>

                {/* Безлимит */}
                <Card className="bg-zinc-900 border-zinc-800 flex flex-col justify-between">
                  <CardContent className="p-4 sm:p-6 text-center flex flex-col h-full">
                    <h3 className="text-sm sm:text-lg font-bold mb-2">Безлимит</h3>
                    <div className="text-xl sm:text-3xl font-bold text-purple-500 mb-2 sm:mb-4">500,000</div>
                    <div className="text-xs sm:text-sm text-zinc-400 mb-3 sm:mb-4">сум/месяц</div>
                    <p className="text-sm text-zinc-400 mb-6">
                      Неограниченное количество занятий для быстрого прогресса и глубокого погружения.
                    </p>
                    <ul className="mb-6 space-y-2 text-left max-w-xs mx-auto text-sm text-zinc-300">
                      <li>✔️ Безлимит посещений</li>
                      <li>✔️ Доступ ко всем видам пилатеса</li>
                      <li>✔️ Индивидуальные консультации</li>
                      <li>✔️ Приоритетная запись</li>
                    </ul>
                    <Button className="w-full h-11 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-600 text-sm sm:text-base mt-auto whitespace-normal leading-snug text-center">
                      Купить
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Schedule Tab */}
          <TabsContent value="schedule" className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold">Расписание занятий пилатесом</h2>
            <div className="space-y-3 sm:space-y-4">
              {schedule.map((session, index) => (
                <Card key={index} className="bg-zinc-900 border-zinc-800 hover:border-purple-500/50 transition-colors">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col space-y-3 sm:space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-2">
                            <Badge variant="outline" className="border-purple-500 text-purple-500 text-xs sm:text-sm">
                              {session.day}
                            </Badge>
                            <span className="text-lg sm:text-xl font-bold">{session.time}</span>
                            <Badge className={`text-xs sm:text-sm ${
                              session.level === 'Начинающий' ? 'bg-green-600' :
                              session.level === 'Средний' ? 'bg-yellow-600' :
                              session.level === 'Продвинутый' ? 'bg-red-600' :
                              'bg-blue-600'
                            }`}>
                              {session.level}
                            </Badge>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs sm:text-sm text-zinc-400 mb-1">
                            <span className="font-medium text-purple-400">{session.type}</span>
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
                        <Button className="w-full sm:w-auto h-11 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-sm sm:text-base">
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
            <h2 className="text-2xl sm:text-3xl font-bold">Наши инструкторы пилатеса</h2>
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
                        <p className="text-purple-500 font-semibold mb-2 text-sm sm:text-base">{trainer.specialization}</p>
                        <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-2">
                          <Badge className="bg-zinc-800 text-xs sm:text-sm">
                            <Calendar className="w-3 h-3 mr-1" />
                            {trainer.experience} опыта
                          </Badge>
                          <Badge className="bg-purple-500/20 text-purple-500 border-purple-500/30 text-xs sm:text-sm">
                            {trainer.education}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-xs sm:text-sm font-semibold mb-2 text-purple-400">Подход:</h4>
                      <p className="text-xs sm:text-sm text-zinc-400 italic">"{trainer.approach}"</p>
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold mb-2">Сертификация:</h4>
                      <ul className="space-y-1">
                        {trainer.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-xs sm:text-sm text-zinc-400 flex items-start">
                            <Zap className="w-3 h-3 mr-2 text-purple-500 flex-shrink-0 mt-0.5" />
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

          {/* Principles Tab */}
          <TabsContent value="principles" className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold">6 принципов пилатеса</h2>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6 sm:p-8">
                <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-6 sm:mb-8">
                  Метод пилатеса основан на шести ключевых принципах, разработанных Джозефом Пилатесом.
                  Эти принципы делают каждое упражнение максимально эффективным и безопасным.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                  {principles.map((principle, index) => (
                    <Card key={index} className="bg-zinc-800 border-zinc-700">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-center mb-3 sm:mb-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center font-bold text-white mr-3 sm:mr-4 text-sm sm:text-base">
                            {principle.number}
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-purple-400">{principle.name}</h3>
                        </div>
                        <p className="text-xs sm:text-sm text-zinc-400">{principle.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center">
                    <Target className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 mr-3" />
                    Для кого подходит
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Люди с болями в спине',
                      'Офисные работники',
                      'Спортсмены для восстановления',
                      'Беременные женщины',
                      'Пожилые люди',
                      'Новички в фитнесе'
                    ].map((item, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-zinc-400 flex items-center">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-purple-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500 mr-3" />
                    Результаты
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Укрепление глубоких мышц',
                      'Улучшение баланса',
                      'Повышение гибкости',
                      'Снижение стресса',
                      'Лучшая координация',
                      'Красивая осанка'
                    ].map((item, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-zinc-400 flex items-center">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-pink-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <Card className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Укрепите свой кор</h2>
              <p className="text-lg sm:text-xl text-zinc-300 mb-4 sm:mb-6 px-4">
                Начните заниматься пилатесом и почувствуйте разницу уже после первого занятия
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button
                  size="lg"
                  className="h-12 sm:h-14 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-sm sm:text-base flex items-center justify-center gap-1 whitespace-normal leading-snug text-center"
                >
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-0 sm:mr-2 flex-shrink-0" />
                  <span className="break-words max-w-full">Записаться на пробное занятие</span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 sm:h-14 border-zinc-600 text-zinc-300 hover:bg-zinc-800 text-sm sm:text-base"
                >
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

export default PilatesPage;
