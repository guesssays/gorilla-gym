'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  User,
  Calendar,
  TrendingUp,
  Award,
  Target,
  Clock,
  Flame,
  CheckCircle,
  Settings,
  CreditCard,
  Bell,
  MapPin,
  Phone,
  Mail,
  Edit,
  Camera,
  Activity,
  BarChart3,
  Trophy,
  Zap,
  Heart
} from 'lucide-react';

const ProfilePage = () => {
  const { t } = useLanguage();
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Mock authentication

  // Mock user data
  const userData = {
    name: 'Анна Петрова',
    email: 'anna.petrova@email.com',
    phone: '+998 90 123 45 67',
    avatar: 'https://images.unsplash.com/photo-1684225358042-601c070e0f4c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    memberSince: '2023-06-15',
    currentPlan: 'Премиум',
    planExpiry: '2024-02-15',
    age: 28,
    height: 165,
    weight: 58,
    goal: 'Поддержание формы',
    favoriteWorkouts: ['Женский фитнес', 'Йога', 'Пилатес'],
    achievements: [
      { id: 1, title: 'Первая тренировка', description: 'Завершили первое занятие', icon: '🎯', unlocked: true },
      { id: 2, title: 'Неделя силы', description: '7 дней подряд тренировок', icon: '💪', unlocked: true },
      { id: 3, title: 'Месяц постоянства', description: '30 дней активности', icon: '🏆', unlocked: true },
      { id: 4, title: 'Мастер йоги', description: '20 занятий йогой', icon: '🧘‍♀️', unlocked: false },
      { id: 5, title: 'Гуру фитнеса', description: '100 тренировок', icon: '👑', unlocked: false },
    ],
    workoutStats: {
      totalWorkouts: 45,
      totalTime: 2700, // minutes
      currentStreak: 5,
      longestStreak: 12,
      favoriteTime: '18:00',
      caloriesBurned: 15750
    },
    recentWorkouts: [
      { date: '2024-01-20', workout: 'Женский фитнес', trainer: 'Анна Фитнесова', duration: 55, calories: 420 },
      { date: '2024-01-18', workout: 'Йога', trainer: 'Мария Светлакова', duration: 75, calories: 280 },
      { date: '2024-01-16', workout: 'Пилатес', trainer: 'Елена Кор', duration: 50, calories: 300 },
      { date: '2024-01-14', workout: 'Женский фитнес', trainer: 'Анна Фитнесова', duration: 55, calories: 410 },
      { date: '2024-01-12', workout: 'Йога', trainer: 'Мария Светлакова', duration: 75, calories: 290 },
    ],
    upcomingBookings: [
      { date: '2024-01-22', time: '18:00', workout: 'Женский фитнес', trainer: 'Анна Фитнесова', location: 'Чиланзар' },
      { date: '2024-01-24', time: '08:00', workout: 'Йога', trainer: 'Мария Светлакова', location: 'Центр' },
      { date: '2024-01-26', time: '19:00', workout: 'Пилатес', trainer: 'Елена Кор', location: 'Юнусабад' },
    ]
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}ч ${mins}м`;
  };

  if (!isAuthenticated) {
    // Login/Register form would go here
    return (
      <div className="min-h-screen bg-black text-white py-8">
        <div className="container mx-auto px-4 max-w-md">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-8 text-center">
              <User className="w-16 h-16 text-orange-500 mx-auto mb-6" />
              <h1 className="text-2xl font-bold mb-4">Войдите в личный кабинет</h1>
              <p className="text-zinc-400 mb-6">
                Войдите или зарегистрируйтесь, чтобы отслеживать прогресс и управлять тренировками
              </p>
              <div className="space-y-4">
                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600">
                  Войти
                </Button>
                <Button variant="outline" className="w-full border-zinc-700 text-zinc-300">
                  Регистрация
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

 return (
  <div className="min-h-screen bg-black text-white py-8">
    <div className="container mx-auto px-2 sm:px-4">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0">
          {/* Лево: Аватар + имя */}
          <div className="flex flex-col xs:flex-row items-center md:items-center gap-4 md:gap-4 w-full md:w-auto">
            <div className="relative">
            <Avatar className="w-20 h-20">
  <AvatarImage
    src={userData.avatar}
    alt={userData.name}
    className="w-full h-full object-cover rounded-full"
  />
  <AvatarFallback className="bg-gradient-to-r from-orange-500 to-red-600 text-white text-2xl">
    {userData.name.split(' ').map(n => n[0]).join('')}
  </AvatarFallback>
</Avatar>

              <Button
                size="sm"
                className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0 bg-orange-500 hover:bg-orange-600 shadow"
              >
                <Camera className="w-4 h-4" />
              </Button>
            </div>
            <div className="text-center xs:text-left md:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold">{userData.name}</h1>
              <p className="text-zinc-400 text-sm sm:text-base">Участник с {formatDate(userData.memberSince)}</p>
              <Badge className="mt-2 bg-gradient-to-r from-orange-500 to-red-600 text-xs sm:text-sm">
                План: {userData.currentPlan}
              </Badge>
            </div>
          </div>
          {/* Кнопка: на мобиле снизу и растягивается, на десктопе справа */}
          <Button
            variant="outline"
            className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 w-full md:w-auto mt-2 md:mt-0"
          >
            <Edit className="w-4 h-4 mr-2" />
            Редактировать профиль
          </Button>
        </div>
      </div>

      {/* Статистика */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 mb-8">
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-4 sm:p-6 text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-blue-500 mb-1">{userData.workoutStats.totalWorkouts}</div>
            <div className="text-xs sm:text-sm text-zinc-400">Всего тренировок</div>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-4 sm:p-6 text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-green-500 mb-1">{formatTime(userData.workoutStats.totalTime)}</div>
            <div className="text-xs sm:text-sm text-zinc-400">Время тренировок</div>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-4 sm:p-6 text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-orange-500 mb-1">{userData.workoutStats.caloriesBurned}</div>
            <div className="text-xs sm:text-sm text-zinc-400">Калорий сожжено</div>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-4 sm:p-6 text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-purple-500 mb-1">{userData.workoutStats.currentStreak}</div>
            <div className="text-xs sm:text-sm text-zinc-400">Дней подряд</div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs: только скролл на мобильных, структура не меняется */}
      <Tabs defaultValue="dashboard" className="space-y-8">
   <TabsList
  className="
    bg-zinc-900 border border-zinc-800 
    flex w-full p-0 overflow-x-auto scrollbar-none
    md:grid md:grid-cols-5 md:overflow-visible md:p-0
  "
>
  <TabsTrigger value="dashboard" className="flex-1 min-w-[110px] text-xs sm:text-base data-[state=active]:bg-orange-500">
    Обзор
  </TabsTrigger>
  <TabsTrigger value="workouts" className="flex-1 min-w-[110px] text-xs sm:text-base data-[state=active]:bg-orange-500">
    Тренировки
  </TabsTrigger>
  <TabsTrigger value="achievements" className="flex-1 min-w-[110px] text-xs sm:text-base data-[state=active]:bg-orange-500">
    Достижения
  </TabsTrigger>
  <TabsTrigger value="subscription" className="flex-1 min-w-[110px] text-xs sm:text-base data-[state=active]:bg-orange-500">
    Абонемент
  </TabsTrigger>
  <TabsTrigger value="settings" className="flex-1 min-w-[110px] text-xs sm:text-base data-[state=active]:bg-orange-500">
    Настройки
  </TabsTrigger>
</TabsList>


          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Workouts */}
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="w-5 h-5 text-orange-500 mr-3" />
                    Последние тренировки
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {userData.recentWorkouts.slice(0, 3).map((workout, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-zinc-800 rounded-lg">
                      <div>
                        <div className="font-semibold">{workout.workout}</div>
                        <div className="text-sm text-zinc-400">{workout.trainer}</div>
                        <div className="text-xs text-zinc-500">{formatDate(workout.date)}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">{workout.duration} мин</div>
                        <div className="text-xs text-orange-500">{workout.calories} ккал</div>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                    Посмотреть все
                  </Button>
                </CardContent>
              </Card>

              {/* Upcoming Bookings */}
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="w-5 h-5 text-orange-500 mr-3" />
                    Предстоящие тренировки
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {userData.upcomingBookings.map((booking, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-zinc-800 rounded-lg">
                      <div>
                        <div className="font-semibold">{booking.workout}</div>
                        <div className="text-sm text-zinc-400">{booking.trainer}</div>
                        <div className="text-xs text-zinc-500">
                          <MapPin className="w-3 h-3 inline mr-1" />
                          {booking.location}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">{formatDate(booking.date)}</div>
                        <div className="text-xs text-orange-500">{booking.time}</div>
                      </div>
                    </div>
                  ))}
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600">
                    Записаться на тренировку
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Progress Chart */}
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 text-orange-500 mr-3" />
                  Прогресс тренировок
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-zinc-400">
                  <div className="text-center">
                    <TrendingUp className="w-16 h-16 mx-auto mb-4" />
                    <p>График прогресса будет здесь</p>
                    <p className="text-sm mt-2">Диаграмма активности за последние 30 дней</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Workouts Tab */}
          <TabsContent value="workouts" className="space-y-8">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle>История тренировок</CardTitle>
              </CardHeader>
   <CardContent>
  <div className="space-y-4">
    {userData.recentWorkouts.map((workout, index) => (
      <div
        key={index}
        className="
          flex flex-col sm:flex-row sm:items-center sm:justify-between 
          p-4 bg-zinc-800 rounded-lg gap-2 sm:gap-0
        "
      >
        <div className="flex items-center gap-3 sm:gap-4 mb-1 sm:mb-0">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
            <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div>
            <div className="font-semibold text-base sm:text-lg">{workout.workout}</div>
            <div className="text-xs sm:text-sm text-zinc-400">{workout.trainer}</div>
            <div className="text-xs text-zinc-500">{formatDate(workout.date)}</div>
          </div>
        </div>
        <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-end gap-2">
          <div className="text-xs sm:text-sm font-medium">{workout.duration} мин</div>
          <div className="text-xs sm:text-sm text-orange-500">{workout.calories} ккал</div>
        </div>
      </div>
    ))}
  </div>
</CardContent>

            </Card>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-8">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="w-5 h-5 text-orange-500 mr-3" />
                  Ваши достижения
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {userData.achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className={`p-6 rounded-lg border-2 transition-all ${
                        achievement.unlocked
                          ? 'bg-zinc-800 border-orange-500 shadow-orange-500/20 shadow-lg'
                          : 'bg-zinc-900 border-zinc-700 opacity-50'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-4xl mb-4">{achievement.icon}</div>
                        <h3 className="font-bold mb-2">{achievement.title}</h3>
                        <p className="text-sm text-zinc-400 mb-4">{achievement.description}</p>
                        {achievement.unlocked ? (
                          <Badge className="bg-green-600">Получено</Badge>
                        ) : (
                          <Badge variant="outline" className="border-zinc-600 text-zinc-400">
                            Заблокировано
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Subscription Tab */}
          <TabsContent value="subscription" className="space-y-8">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="w-5 h-5 text-orange-500 mr-3" />
                  Ваш абонемент
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Текущий план: {userData.currentPlan}</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Действует до:</span>
                        <span>{formatDate(userData.planExpiry)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Статус:</span>
                        <Badge className="bg-green-600">Активен</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Автопродление:</span>
                        <span>Включено</span>
                      </div>
                    </div>
                    <div className="mt-6 space-y-3">
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600">
                        Продлить абонемент
                      </Button>
                      <Button variant="outline" className="w-full border-zinc-700 text-zinc-300">
                        Изменить план
                      </Button>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Включено в ваш план:</h3>
                    <div className="space-y-2">
                      {[
                        'Безлимитные групповые занятия',
                        '4 занятия с персональным тренером',
                        'Доступ во все залы сети',
                        'Программа питания',
                        'Сауна и раздевалки'
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Personal Info */}
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="w-5 h-5 text-orange-500 mr-3" />
                    Личная информация
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Имя</Label>
                      <Input id="firstName" defaultValue="Анна" className="bg-zinc-800 border-zinc-700" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Фамилия</Label>
                      <Input id="lastName" defaultValue="Петрова" className="bg-zinc-800 border-zinc-700" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue={userData.email} className="bg-zinc-800 border-zinc-700" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" defaultValue={userData.phone} className="bg-zinc-800 border-zinc-700" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="age">Возраст</Label>
                      <Input id="age" type="number" defaultValue={userData.age} className="bg-zinc-800 border-zinc-700" />
                    </div>
                    <div>
                      <Label htmlFor="height">Рост (см)</Label>
                      <Input id="height" type="number" defaultValue={userData.height} className="bg-zinc-800 border-zinc-700" />
                    </div>
                    <div>
                      <Label htmlFor="weight">Вес (кг)</Label>
                      <Input id="weight" type="number" defaultValue={userData.weight} className="bg-zinc-800 border-zinc-700" />
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600">
                    Сохранить изменения
                  </Button>
                </CardContent>
              </Card>

              {/* Notifications */}
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="w-5 h-5 text-orange-500 mr-3" />
                    Уведомления
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Напоминания о тренировках</div>
                        <div className="text-sm text-zinc-400">За 2 часа до занятия</div>
                      </div>
                      <input type="checkbox" defaultChecked className="toggle" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Email рассылка</div>
                        <div className="text-sm text-zinc-400">Новости и советы</div>
                      </div>
                      <input type="checkbox" defaultChecked className="toggle" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">SMS уведомления</div>
                        <div className="text-sm text-zinc-400">Важные обновления</div>
                      </div>
                      <input type="checkbox" className="toggle" />
                    </div>
                  </div>
                  <Button variant="outline" className="w-full border-zinc-700 text-zinc-300">
                    Сохранить настройки
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfilePage;
