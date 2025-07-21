'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Filter,
  ChevronLeft,
  ChevronRight,
  Star,
  User
} from 'lucide-react';

interface WorkoutClass {
  id: string;
  name: string;
  trainer: string;
  time: string;
  duration: number;
  location: string;
  capacity: number;
  enrolled: number;
  level: 'Начинающий' | 'Средний' | 'Продвинутый';
  type: 'crossfit' | 'yoga' | 'pilates' | 'gym' | 'women-fitness';
  price?: number;
}

const SchedulePage = () => {
  const { t } = useLanguage();
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  const currentWeek = [
    { date: '21 окт', day: 'Пн' },
    { date: '22 окт', day: 'Вт' },
    { date: '23 окт', day: 'Ср' },
    { date: '24 окт', day: 'Чт' },
    { date: '25 окт', day: 'Пт' },
    { date: '26 окт', day: 'Сб' },
    { date: '27 окт', day: 'Вс' },
  ];

  const locations = [
    { id: 'all', name: 'Все залы' },
    { id: 'center', name: 'Центр (Амира Темура)' },
    { id: 'chilanzar', name: 'Чиланзар' },
    { id: 'yunusabad', name: 'Юнусабад' },
  ];

  const workoutTypes = [
    { id: 'all', name: 'Все направления', color: 'bg-gray-500' },
    { id: 'crossfit', name: 'Кроссфит', color: 'bg-red-500' },
    { id: 'yoga', name: 'Йога', color: 'bg-green-500' },
    { id: 'pilates', name: 'Пилатес', color: 'bg-purple-500' },
    { id: 'gym', name: 'Тренажёрный зал', color: 'bg-blue-500' },
    { id: 'women-fitness', name: 'Женский фитнес', color: 'bg-pink-500' },
  ];

  // Sample schedule data
  const schedule: Record<number, WorkoutClass[]> = {
    0: [ // Monday
      {
        id: '1',
        name: 'Утренний кроссфит',
        trainer: 'Артём Волков',
        time: '07:00',
        duration: 60,
        location: 'Центр',
        capacity: 15,
        enrolled: 12,
        level: 'Продвинутый',
        type: 'crossfit',
        price: 50000,
      },
      {
        id: '2',
        name: 'Хатха йога',
        trainer: 'Мария Светлакова',
        time: '09:00',
        duration: 75,
        location: 'Чиланзар',
        capacity: 20,
        enrolled: 8,
        level: 'Начинающий',
        type: 'yoga',
        price: 40000,
      },
      {
        id: '3',
        name: 'Силовая тренировка',
        trainer: 'Дмитрий Железняк',
        time: '18:00',
        duration: 90,
        location: 'Центр',
        capacity: 12,
        enrolled: 12,
        level: 'Средний',
        type: 'gym',
        price: 60000,
      },
      {
        id: '4',
        name: 'Женский фитнес',
        trainer: 'Анна Фитнесова',
        time: '19:30',
        duration: 55,
        location: 'Юнусабад',
        capacity: 25,
        enrolled: 18,
        level: 'Начинающий',
        type: 'women-fitness',
        price: 45000,
      },
    ],
    1: [ // Tuesday
      {
        id: '5',
        name: 'Виньяса йога',
        trainer: 'Елена Медитация',
        time: '08:00',
        duration: 75,
        location: 'Центр',
        capacity: 18,
        enrolled: 15,
        level: 'Средний',
        type: 'yoga',
        price: 45000,
      },
      {
        id: '6',
        name: 'Функциональный тренинг',
        trainer: 'Максим Сила',
        time: '17:00',
        duration: 60,
        location: 'Чиланзар',
        capacity: 16,
        enrolled: 10,
        level: 'Продвинутый',
        type: 'crossfit',
        price: 55000,
      },
    ],
    // Add more days...
  };

  const getTypeColor = (type: string) => {
    const typeInfo = workoutTypes.find(t => t.id === type);
    return typeInfo?.color || 'bg-gray-500';
  };

  const filteredClasses = (schedule[selectedDay] || []).filter(cls => {
    if (selectedFilter !== 'all' && cls.type !== selectedFilter) return false;
    if (selectedLocation !== 'all' && cls.location !== locations.find(l => l.id === selectedLocation)?.name.split(' ')[0]) return false;
    return true;
  });

  const isClassFull = (cls: WorkoutClass) => cls.enrolled >= cls.capacity;

return (
  <div className="min-h-screen bg-black text-white py-8">
    <div className="container mx-auto px-2 sm:px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {t('schedule')}
        </h1>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
          Выберите удобное время для тренировок. Все занятия проводятся опытными тренерами в современно оборудованных залах.
        </p>
      </div>

{/* Filters */}
<div className="mb-8">
  <Card className="bg-zinc-900 border-zinc-800">
    <CardContent className="p-4 sm:p-6">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-orange-500" />
          <span className="font-semibold">Фильтры:</span>
        </div>
        <div className="flex flex-col w-full gap-3 md:flex-row md:w-auto md:gap-4">
          <Select value={selectedFilter} onValueChange={setSelectedFilter}>
            <SelectTrigger className="bg-zinc-800 border-zinc-700 w-full md:w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-zinc-800 border-zinc-700">
              {workoutTypes.map(type => (
                <SelectItem key={type.id} value={type.id}>
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${type.color}`}></div>
                    <span>{type.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger className="bg-zinc-800 border-zinc-700 w-full md:w-56">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-zinc-800 border-zinc-700">
              {locations.map(location => (
                <SelectItem key={location.id} value={location.id}>
                  {location.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </CardContent>
  </Card>
</div>


      {/* Week Navigation */}
      <div className="mb-8">
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center mb-4">
              <Button variant="ghost" size="sm" className="w-full sm:w-auto text-zinc-400 hover:text-white mb-2 sm:mb-0">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Предыдущая неделя
              </Button>
              <div className="text-center w-full sm:w-auto">
                <div className="text-lg font-semibold">21 - 27 октября 2024</div>
                <div className="text-sm text-zinc-400">Текущая неделя</div>
              </div>
              <Button variant="ghost" size="sm" className="w-full sm:w-auto text-zinc-400 hover:text-white">
                Следующая неделя
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="flex overflow-x-auto gap-2 pb-1 -mx-2 px-2 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-7 sm:gap-2">
              {currentWeek.map((day, index) => (
                <Button
                  key={index}
                  variant={selectedDay === index ? "default" : "ghost"}
                  onClick={() => setSelectedDay(index)}
                  className={`
                    flex flex-col items-center p-2 min-w-[54px] sm:min-w-0
                    h-auto text-xs sm:text-base
                    ${selectedDay === index
                      ? 'bg-gradient-to-r from-orange-500 to-red-600'
                      : 'hover:bg-zinc-800'
                    }
                  `}
                >
                  <div className="font-medium">{day.day}</div>
                  <div className="mt-1">{day.date}</div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Schedule */}
      <div className="space-y-4">
        {filteredClasses.length === 0 ? (
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-8 text-center">
              <Calendar className="w-16 h-16 text-zinc-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Нет тренировок</h3>
              <p className="text-zinc-400">
                На выбранный день и фильтры тренировки не найдены.
              </p>
            </CardContent>
          </Card>
        ) : (
          filteredClasses.map((cls) => (
            <Card key={cls.id} className="bg-zinc-900 border-zinc-800 hover:border-orange-500/50 transition-colors">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  {/* Инфо о классе */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <div className={`w-3 h-3 rounded-full ${getTypeColor(cls.type)}`}></div>
                      <h3 className="text-base sm:text-xl font-bold">{cls.name}</h3>
                      <Badge
                        variant="outline"
                        className={`${
                          cls.level === 'Начинающий' ? 'border-green-500 text-green-500' :
                          cls.level === 'Средний' ? 'border-yellow-500 text-yellow-500' :
                          'border-red-500 text-red-500'
                        }`}
                      >
                        {cls.level}
                      </Badge>
                      {isClassFull(cls) && (
                        <Badge variant="destructive">Группа заполнена</Badge>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-xs sm:text-sm text-zinc-400 mb-2">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{cls.trainer}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{cls.time} ({cls.duration} мин)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{cls.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{cls.enrolled}/{cls.capacity} участников</span>
                      </div>
                    </div>
                    {cls.price && (
                      <div className="mt-1">
                        <span className="text-base sm:text-lg font-bold text-orange-500">
                          {cls.price.toLocaleString()} сум
                        </span>
                        <span className="text-zinc-400 ml-1 sm:ml-2 text-xs sm:text-base">за занятие</span>
                      </div>
                    )}
                  </div>
                  {/* Кнопки: одна под другой на мобиле, в строку на lg+ */}
                  <div className="flex flex-col w-full lg:w-auto lg:flex-row lg:gap-3 gap-2 lg:mt-0">
                    <Button
                      variant="outline"
                      className="border-zinc-600 text-zinc-300 hover:bg-zinc-800 w-full lg:w-auto"
                    >
                      Подробнее
                    </Button>
                    <Button
                      disabled={isClassFull(cls)}
                      className={`w-full lg:w-auto ${isClassFull(cls)
                        ? 'bg-zinc-600 cursor-not-allowed'
                        : 'bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700'
                      }`}
                    >
                      {isClassFull(cls) ? 'Нет мест' : 'Записаться'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Additional Info */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-orange-500" />
              <span>Время работы</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Пн-Пт:</span>
                <span>6:00 - 24:00</span>
              </div>
              <div className="flex justify-between">
                <span>Сб-Вс:</span>
                <span>8:00 - 22:00</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-orange-500" />
              <span>Отмена записи</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-zinc-400">
              Отменить запись можно за 2 часа до начала тренировки без штрафа.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-orange-500" />
              <span>Абонементы</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-zinc-400 mb-3">
              Экономьте до 40% с абонементами на месяц и больше.
            </p>
            <Button size="sm" variant="outline" className="border-orange-500 text-orange-500">
              Выбрать абонемент
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
);
};

export default SchedulePage;
