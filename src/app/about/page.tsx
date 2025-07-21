'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Target,
  Heart,
  Users,
  Award,
  MapPin,
  Calendar,
  Trophy,
  Star,
  Instagram,
  MessageCircle,
  Award as Certificate,
  Dumbbell
} from 'lucide-react';

const AboutPage = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: <Target className="w-8 h-8 text-orange-500" />,
      title: 'Индивидуальный подход',
      description: 'Каждый клиент уникален. Мы создаём персональные программы тренировок, учитывая ваши цели, уровень подготовки и особенности организма.',
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'Забота о здоровье',
      description: 'Ваше здоровье - наш приоритет. Мы следим за правильной техникой выполнения упражнений и предотвращением травм.',
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Дружественное сообщество',
      description: 'У нас царит атмосфера взаимоподдержки и мотивации. Наши клиенты становятся друзьями и вдохновляют друг друга.',
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      title: 'Профессионализм',
      description: 'Наша команда состоит из сертифицированных тренеров с многолетним опытом и постоянно повышающих квалификацию.',
    },
  ];

  const team = [
    {
      id: 1,
      name: 'Артём Волков',
      role: 'Главный тренер, Кроссфит',
      experience: '8 лет',
      specialization: 'Кроссфит, функциональный тренинг',
      achievements: ['Мастер спорта по тяжёлой атлетике', 'Сертификат CrossFit Level 3', 'Чемпион Узбекистана 2019'],
      photo: 'https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      instagram: '@artem_crossfit',
      description: 'Артём поможет вам достичь невероятных результатов в функциональном тренинге.',
    },
    {
      id: 2,
      name: 'Мария Светлакова',
      role: 'Инструктор по йоге',
      experience: '6 лет',
      specialization: 'Хатха-йога, Виньяса, медитация',
      achievements: ['Сертификат RYT-500', 'Обучение в Индии (Ришикеш)', 'Мастер медитативных практик'],
      photo: 'https://images.unsplash.com/photo-1667890786022-83bca6c4f4c2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      instagram: '@maria_yoga_uz',
      description: 'Мария научит вас находить гармонию между телом и разумом через древние практики йоги.',
    },
    {
      id: 3,
      name: 'Дмитрий Железняк',
      role: 'Персональный тренер',
      experience: '10 лет',
      specialization: 'Силовой тренинг, бодибилдинг',
      achievements: ['МСМК по пауэрлифтингу', 'Тренер высшей категории', 'Призёр международных соревнований'],
      photo: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      instagram: '@dmitry_power',
      description: 'Дмитрий поможет вам построить мускулистое и сильное тело с помощью научного подхода.',
    },
    {
      id: 4,
      name: 'Анна Фитнесова',
      role: 'Тренер по женскому фитнесу',
      experience: '5 лет',
      specialization: 'Женский фитнес, пилатес, стретчинг',
      achievements: ['Сертификат NASM-CPT', 'Специалист по коррекции фигуры', 'Эксперт по женскому здоровью'],
      photo: 'https://images.unsplash.com/photo-1606902965551-dce093cda6e7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      instagram: '@anna_womenfitness',
      description: 'Анна знает все секреты женского фитнеса и поможет достичь фигуры мечты.',
    },
  ];

  const milestones = [
    {
      year: '2019',
      title: 'Основание GORILLA GYM',
      description: 'Открытие первого зала в центре Ташкента с современным оборудованием.',
    },
    {
      year: '2020',
      title: 'Расширение команды',
      description: 'Привлечение сертифицированных тренеров и запуск групповых программ.',
    },
    {
      year: '2021',
      title: 'Второй зал',
      description: 'Открытие зала в районе Чиланзар с фокусом на женский фитнес.',
    },
    {
      year: '2022',
      title: '1000+ клиентов',
      description: 'Достижение отметки в 1000 довольных клиентов и высокого рейтинга сервиса.',
    },
    {
      year: '2023',
      title: 'Третий зал и инновации',
      description: 'Открытие зала в Юнусабаде и запуск мобильного приложения.',
    },
    {
      year: '2024',
      title: 'Лидер рынка',
      description: 'Признание лучшей сетью спортивных залов Ташкента по версии клиентов.',
    },
  ];

  const stats = [
    { number: '5+', label: 'Лет опыта', description: 'На рынке фитнес-услуг' },
    { number: '3', label: 'Зала в городе', description: 'Удобное расположение' },
    { number: '15+', label: 'Тренеров', description: 'Сертифицированных специалистов' },
    { number: '1000+', label: 'Клиентов', description: 'Довольных результатом' },
    { number: '50+', label: 'Программ', description: 'Тренировок и занятий' },
    { number: '24/7', label: 'Режим работы', description: 'Доступ когда удобно' },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-8">
      <div className="container mx-auto px-2 sm:px-4">
        {/* Hero Section */}
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            {t('about')}
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-4xl mx-auto">
            GORILLA GYM — это больше, чем просто спортзал. Мы создаём сообщество людей,
            стремящихся к лучшей версии себя, и предоставляем все необходимые инструменты для достижения целей.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-14 sm:mb-20">
          <Card className="bg-gradient-to-r from-zinc-900 to-zinc-800 border-zinc-700 overflow-hidden">
            <CardContent className="p-4 sm:p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Наша миссия</h2>
                  <p className="text-base sm:text-lg text-zinc-300 mb-4 sm:mb-6 leading-relaxed">
                    Мы верим, что каждый человек заслуживает быть здоровым, сильным и уверенным в себе.
                    Наша миссия — создать идеальную среду для трансформации тела и духа, где профессиональный
                    подход сочетается с дружественной атмосферой.
                  </p>
                  <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                    Мы не просто предоставляем оборудование и пространство — мы создаём экосистему поддержки,
                    мотивации и постоянного развития для каждого нашего клиента.
                  </p>
                </div>
                <div className="relative w-full">
                  <div
                    className="h-56 sm:h-80 md:h-96 w-full bg-cover bg-center rounded-lg"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="mb-14 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Наши ценности</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-zinc-900 border-zinc-800 hover:border-orange-500/50 transition-colors">
                <CardContent className="p-4 sm:p-8">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0">{value.icon}</div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-3">{value.title}</h3>
                      <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-14 sm:mb-20">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-4 sm:p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-1 sm:mb-2">
                      {stat.number}
                    </div>
                    <div className="text-white font-semibold mb-0.5 sm:mb-1">{stat.label}</div>
                    <div className="text-zinc-400 text-xs sm:text-sm">{stat.description}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Team Section */}
        <div className="mb-14 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Наша команда</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {team.map((member) => (
              <Card key={member.id} className="bg-zinc-900 border-zinc-800 overflow-hidden hover:border-orange-500/50 transition-colors">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-1/3 w-full">
                    <div
                      className="h-48 sm:h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${member.photo})` }}
                    />
                  </div>
                  <CardContent className="sm:w-2/3 w-full p-4 sm:p-6">
                    <div className="mb-3 sm:mb-4">
                      <h3 className="text-lg sm:text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-orange-500 font-semibold mb-1 sm:mb-2">{member.role}</p>
                      <Badge variant="secondary" className="bg-zinc-800 text-zinc-300">
                        <Calendar className="w-3 h-3 mr-1" />
                        {member.experience} опыта
                      </Badge>
                    </div>

                    <p className="text-zinc-400 text-xs sm:text-sm mb-3 sm:mb-4">{member.description}</p>

                    <div className="mb-2 sm:mb-4">
                      <div className="text-xs sm:text-sm font-semibold text-zinc-300 mb-1 sm:mb-2">Специализация:</div>
                      <div className="text-xs sm:text-sm text-zinc-400">{member.specialization}</div>
                    </div>

                    <div className="mb-2 sm:mb-4">
                      <div className="text-xs sm:text-sm font-semibold text-zinc-300 mb-1 sm:mb-2">Достижения:</div>
                      <div className="space-y-1">
                        {member.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-center text-xs sm:text-sm text-zinc-400">
                            <Certificate className="w-3 h-3 mr-2 text-orange-500" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <Button size="sm" variant="outline" className="border-zinc-600 text-zinc-300">
                        <Instagram className="w-4 h-4 mr-2" />
                        {member.instagram}
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* History Timeline */}
        <div className="mb-14 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">История развития</h2>
          <div className="max-w-4xl mx-auto px-0 sm:px-4">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-orange-500 hidden sm:block"></div>
       <div className="space-y-6 sm:space-y-8">
  {milestones.map((milestone, index) => (
    <div
      key={index}
      className="relative flex flex-col sm:flex-row items-center sm:items-start sm:space-x-6"
    >
      {/* Кружок с годом — всегда по центру на мобильных */}
      <div className="
        flex-shrink-0
        w-12 h-12 sm:w-16 sm:h-16
        bg-gradient-to-r from-orange-500 to-red-600
        rounded-full
        flex items-center justify-center
        text-white font-bold text-lg z-10
        mx-auto mb-2
        sm:mx-0 sm:mb-0
      ">
        {milestone.year.slice(2)}
      </div>
      {/* Контент таймлайна */}
      <Card className="flex-1 bg-zinc-900 border-zinc-800 mt-2 sm:mt-0 w-full">
        <CardContent className="p-4 sm:p-6">
          <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
            <span className="text-lg sm:text-xl font-bold text-orange-500">{milestone.year}</span>
            <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
          </div>
          <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">{milestone.title}</h3>
          <p className="text-zinc-400 text-xs sm:text-sm">{milestone.description}</p>
        </CardContent>
      </Card>
    </div>
  ))}
</div>

            </div>
          </div>
        </div>

        {/* Locations */}
        <div className="mb-14 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Наши залы</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: 'GORILLA GYM Центр',
                address: 'ул. Амира Темура, 123',
                features: ['Кроссфит зона', 'Тренажёрный зал', 'Групповые занятия', 'VIP зона'],
                hours: '24/7',
                phone: '+998 90 123 45 67',
              },
              {
                name: 'GORILLA GYM Чиланзар',
                address: 'ул. Бунёдкор, 45',
                features: ['Женский фитнес', 'Йога студия', 'Детская зона', 'Кафе'],
                hours: '6:00 - 24:00',
                phone: '+998 90 123 45 68',
              },
              {
                name: 'GORILLA GYM Юнусабад',
                address: 'ул. Шахрисабз, 78',
                features: ['Бассейн', 'Сауна', 'Массажный кабинет', 'Парковка','VIP зона'],
                hours: '6:00 - 24:00',
                phone: '+998 90 123 45 69',
              },
            ].map((location, index) => (
              <Card key={index} className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{location.name}</h3>
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    <div className="flex items-center space-x-2 text-zinc-400">
                      <MapPin className="w-4 h-4 text-orange-500" />
                      <span>{location.address}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-zinc-400">
                      <MessageCircle className="w-4 h-4 text-orange-500" />
                      <span>{location.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-zinc-400">
                      <Calendar className="w-4 h-4 text-orange-500" />
                      <span>{location.hours}</span>
                    </div>
                  </div>
                  <div className="mb-4 sm:mb-6">
                    <div className="text-xs sm:text-sm font-semibold text-zinc-300 mb-1 sm:mb-2">Особенности:</div>
                    <div className="flex flex-wrap gap-2">
                      {location.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-zinc-800 text-zinc-300">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full border-zinc-600 text-zinc-300 hover:bg-zinc-800">
                    Посетить зал
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-orange-500/20 to-red-600/20 border-orange-500/30">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">Присоединяйтесь к нашей семье</h2>
              <p className="text-base sm:text-xl text-zinc-300 mb-4 sm:mb-6">
                Станьте частью сообщества GORILLA GYM и начните свой путь к лучшей версии себя
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
  size="lg"
  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 w-full sm:w-auto text-sm sm:text-base"
>
  <Dumbbell className="w-5 h-5 mr-2" />
  <span className="block sm:hidden">Записаться</span>
  <span className="hidden sm:block">Записаться на пробную тренировку</span>
</Button>

                <Button size="lg" variant="outline" className="border-zinc-600 text-zinc-300 hover:bg-zinc-800">
                  Выбрать абонемент
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
