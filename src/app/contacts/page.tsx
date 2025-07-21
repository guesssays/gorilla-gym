'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Car,
  Train,
  Users,
  Calendar,
  Instagram,
  Youtube,
  Star,
  Navigation,
  Building,
  Dumbbell,
} from 'lucide-react';

const ContactsPage = () => {
  const { t } = useLanguage?.() ?? {};
  const [selectedLocation, setSelectedLocation] = useState('center');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    subject: '',
    message: '',
  });

  const locations = [
    {
      id: 'center',
      name: 'GORILLA GYM Центр',
      address: 'г. Ташкент, ул. Амира Темура, 123',
      coordinates: '41.2995, 69.2401',
      phone: '+998 90 123 45 67',
      email: 'center@gorillagym.uz',
      workingHours: {
        weekdays: '6:00 - 24:00',
        weekends: '8:00 - 22:00',
      },
      features: ['Кроссфит зона', 'Тренажёрный зал', 'Групповые занятия', 'VIP зона', 'Парковка', 'Сауна'],
      transport: ['Метро: Космонавтов (5 мин пешком)', 'Автобусы: 32, 45, 67', 'Парковка: 50 мест'],
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      rating: 4.9,
      reviews: 124,
    },
    {
      id: 'chilanzar',
      name: 'GORILLA GYM Чиланзар',
      address: 'г. Ташкент, ул. Бунёдкор, 45',
      coordinates: '41.2756, 69.2122',
      phone: '+998 90 123 45 68',
      email: 'chilanzar@gorillagym.uz',
      workingHours: {
        weekdays: '6:00 - 24:00',
        weekends: '8:00 - 22:00',
      },
      features: ['Женский фитнес', 'Йога студия', 'Детская зона', 'Кафе', 'Магазин спортпита'],
      transport: ['Метро: Чиланзар (3 мин пешком)', 'Автобусы: 12, 28, 55', 'Парковка: 30 мест'],
      image: 'https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.8,
      reviews: 89,
    },
    {
      id: 'yunusabad',
      name: 'GORILLA GYM Юнусабад',
      address: 'г. Ташкент, ул. Шахрисабз, 78',
      coordinates: '41.3235, 69.2890',
      phone: '+998 90 123 45 69',
      email: 'yunusabad@gorillagym.uz',
      workingHours: {
        weekdays: '6:00 - 24:00',
        weekends: '8:00 - 22:00',
      },
      features: ['Бассейн', 'Сауна', 'Массажный кабинет', 'Спа-зона', 'Кардио зал'],
      transport: ['Метро: Юнусабад (7 мин пешком)', 'Автобусы: 18, 41, 73', 'Парковка: 40 мест'],
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.7,
      reviews: 67,
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '@gorillagym_uz',
      url: 'https://instagram.com/gorillagym_uz',
      color: 'text-pink-500',
    },
    {
      icon: Youtube,
      name: 'YouTube',
      handle: '@gorillagym',
      url: 'https://youtube.com/@gorillagym',
      color: 'text-red-500',
    },
    {
      icon: MessageCircle,
      name: 'Telegram',
      handle: '@gorillagym_bot',
      url: 'https://t.me/gorillagym_bot',
      color: 'text-blue-500',
    },
  ];

  const currentLocation = locations.find((loc) => loc.id === selectedLocation) || locations[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Обработка формы
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold font-oswald mb-5">Контакты</h1>
          <p className="text-base xs:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
            Мы всегда рады ответить на ваши вопросы и помочь выбрать подходящую программу тренировок
          </p>
        </div>

        {/* Quick Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14">
          <Card className="bg-zinc-900 border-zinc-800 hover:border-orange-500/50 transition-colors">
            <CardContent className="p-5 xs:p-6 text-center flex flex-col items-center">
              <div className="w-14 h-14 xs:w-16 xs:h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 xs:w-8 xs:h-8 text-white" />
              </div>
              <h3 className="text-base xs:text-lg font-bold mb-1 xs:mb-2">Позвонить</h3>
              <p className="text-zinc-400 text-xs xs:text-sm mb-3 xs:mb-4">Быстрая связь с администратором</p>
              <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 font-ui">
                +998 90 123 45 67
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-zinc-800 hover:border-orange-500/50 transition-colors">
            <CardContent className="p-5 xs:p-6 text-center flex flex-col items-center">
              <div className="w-14 h-14 xs:w-16 xs:h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="w-7 h-7 xs:w-8 xs:h-8 text-white" />
              </div>
              <h3 className="text-base xs:text-lg font-bold mb-1 xs:mb-2">Telegram</h3>
              <p className="text-zinc-400 text-xs xs:text-sm mb-3 xs:mb-4">Чат-бот для записи на тренировки</p>
              <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 font-ui">
                @gorillagym_bot
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-zinc-800 hover:border-orange-500/50 transition-colors">
            <CardContent className="p-5 xs:p-6 text-center flex flex-col items-center">
              <div className="w-14 h-14 xs:w-16 xs:h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-7 h-7 xs:w-8 xs:h-8 text-white" />
              </div>
              <h3 className="text-base xs:text-lg font-bold mb-1 xs:mb-2">Онлайн запись</h3>
              <p className="text-zinc-400 text-xs xs:text-sm mb-3 xs:mb-4">Выберите время и тренера</p>
              <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 font-ui">
                Записаться
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Locations */}
        <div className="mb-10 sm:mb-14">
          <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold font-oswald mb-6 xs:mb-8 text-center">Наши залы</h2>
          {/* Location Selector */}
          <div className="flex flex-wrap justify-center gap-2 xs:gap-3 mb-7 xs:mb-8">
            {locations.map((location) => (
              <Button
                key={location.id}
                variant={selectedLocation === location.id ? 'default' : 'outline'}
                onClick={() => setSelectedLocation(location.id)}
                className={`text-xs xs:text-sm md:text-base font-ui transition-all ${
                  selectedLocation === location.id
                    ? 'bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700'
                    : 'border-zinc-700 text-zinc-300 hover:bg-zinc-800'
                }`}
              >
                <MapPin className="w-4 h-4 mr-2" />
                {location.name.split(' ')[2]}
              </Button>
            ))}
          </div>
          {/* Selected Location Details */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-5 xs:p-8">
              <div className="flex flex-col lg:flex-row gap-7 lg:gap-10">
                {/* Location Info */}
                <div className="flex-1">
                  <div className="flex items-center space-x-2 xs:space-x-3 mb-3 xs:mb-4">
                    <h3 className="text-lg xs:text-2xl font-bold font-oswald">{currentLocation.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      <span className="text-xs xs:text-sm font-medium">{currentLocation.rating}</span>
                      <span className="text-xs text-zinc-400">({currentLocation.reviews})</span>
                    </div>
                  </div>
                  <div className="space-y-3 xs:space-y-4 mb-5 xs:mb-6">
                    <div className="flex items-start space-x-2 xs:space-x-3">
                      <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium">{currentLocation.address}</div>
                        <div className="text-xs xs:text-sm text-zinc-400">{currentLocation.coordinates}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 xs:space-x-3">
                      <Phone className="w-5 h-5 text-orange-500" />
                      <div>{currentLocation.phone}</div>
                    </div>
                    <div className="flex items-center space-x-2 xs:space-x-3">
                      <Mail className="w-5 h-5 text-orange-500" />
                      <div>{currentLocation.email}</div>
                    </div>
                    <div className="flex items-start space-x-2 xs:space-x-3">
                      <Clock className="w-5 h-5 text-orange-500 mt-1" />
                      <div>
                        <div>Пн-Пт: {currentLocation.workingHours.weekdays}</div>
                        <div>Сб-Вс: {currentLocation.workingHours.weekends}</div>
                      </div>
                    </div>
                  </div>
                  {/* Features */}
                  <div className="mb-4 xs:mb-6">
                    <h4 className="font-semibold mb-2 xs:mb-3 flex items-center">
                      <Dumbbell className="w-4 h-4 text-orange-500 mr-2" />
                      Услуги и удобства
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentLocation.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="border-zinc-600 text-zinc-300 font-body">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {/* Transport */}
                  <div>
                    <h4 className="font-semibold mb-2 xs:mb-3 flex items-center">
                      <Navigation className="w-4 h-4 text-orange-500 mr-2" />
                      Как добраться
                    </h4>
                    <div className="space-y-1 xs:space-y-2">
                      {currentLocation.transport.map((transport, idx) => (
                        <div key={idx} className="text-xs xs:text-sm text-zinc-400 flex items-center">
                          {transport.includes('Метро') ? (
                            <Train className="w-4 h-4 mr-2 text-blue-500" />
                          ) : transport.includes('Парковка') ? (
                            <Car className="w-4 h-4 mr-2 text-green-500" />
                          ) : (
                            <Building className="w-4 h-4 mr-2 text-orange-500" />
                          )}
                          {transport}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Location Image and Actions */}
                <div className="flex-1 flex flex-col gap-4">
                  <div
                    className="w-full h-44 xs:h-64 bg-cover bg-center rounded-lg mb-3"
                    style={{ backgroundImage: `url(${currentLocation.image})` }}
                  />
                  <div className="grid grid-cols-2 gap-3">
  <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 font-ui flex items-center justify-center">
  <MapPin className="w-4 h-4 mr-2" />
  <span className="block sm:hidden">Маршрут</span>
  <span className="hidden sm:block">Построить маршрут</span>
</Button>


                    <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 font-ui">
                      <Calendar className="w-4 h-4 mr-2" />
                      Записаться
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10 sm:mb-14">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Send className="w-5 h-5 text-orange-500 mr-3" />
                Написать нам
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Имя *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="bg-zinc-800 border-zinc-700 font-body"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="bg-zinc-800 border-zinc-700 font-body"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-zinc-800 border-zinc-700 font-body"
                  />
                </div>
                <div>
                  <Label htmlFor="location">Предпочитаемый зал</Label>
                  <Select value={formData.location} onValueChange={(value) => handleInputChange('location', value)}>
                    <SelectTrigger className="bg-zinc-800 border-zinc-700 font-body">
                      <SelectValue placeholder="Выберите зал" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-800 border-zinc-700">
                      {locations.map((location) => (
                        <SelectItem key={location.id} value={location.id}>
                          {location.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="subject">Тема обращения</Label>
                  <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                    <SelectTrigger className="bg-zinc-800 border-zinc-700 font-body">
                      <SelectValue placeholder="Выберите тему" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-800 border-zinc-700">
                      <SelectItem value="membership">Абонементы и цены</SelectItem>
                      <SelectItem value="schedule">Расписание тренировок</SelectItem>
                      <SelectItem value="personal">Персональные тренировки</SelectItem>
                      <SelectItem value="trial">Пробная тренировка</SelectItem>
                      <SelectItem value="complaint">Жалоба или предложение</SelectItem>
                      <SelectItem value="other">Другое</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message">Сообщение *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="bg-zinc-800 border-zinc-700 min-h-[110px] font-body"
                    placeholder="Опишите ваш вопрос подробнее..."
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 font-ui">
                  <Send className="w-4 h-4 mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
          {/* Доп. информация: соцсети + FAQ */}
          <div className="flex flex-col gap-6">
            {/* Social Media */}
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle>Следите за нами</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 xs:space-y-4">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="flex items-center justify-between p-3 xs:p-4 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors cursor-pointer">
                      <div className="flex items-center space-x-2 xs:space-x-3">
                        <social.icon className={`w-6 h-6 ${social.color}`} />
                        <div>
                          <div className="font-medium">{social.name}</div>
                          <div className="text-xs xs:text-sm text-zinc-400">{social.handle}</div>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="border-zinc-600 text-zinc-300 font-ui">
                        Перейти
                      </Button>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>
            {/* FAQ */}
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle>Часто задаваемые вопросы</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 xs:space-y-4">
                <div>
                  <h4 className="font-semibold mb-1 xs:mb-2">Можно ли прийти на пробную тренировку?</h4>
                  <p className="text-xs xs:text-sm text-zinc-400">Да! Первая тренировка абсолютно бесплатная для всех новых клиентов.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 xs:mb-2">Есть ли парковка?</h4>
                  <p className="text-xs xs:text-sm text-zinc-400">Во всех наших залах есть бесплатная парковка для клиентов.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 xs:mb-2">Работаете ли вы в праздники?</h4>
                  <p className="text-xs xs:text-sm text-zinc-400">Да, мы работаем в праздничные дни по сокращенному графику 9:00-21:00.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Placeholder */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="w-5 h-5 text-orange-500 mr-3" />
              Расположение залов на карте
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-60 xs:h-80 bg-zinc-800 rounded-lg flex items-center justify-center">
              <div className="text-center text-zinc-400">
                <MapPin className="w-12 h-12 xs:w-16 xs:h-16 mx-auto mb-4" />
                <p className="text-base xs:text-lg font-medium mb-2">Интерактивная карта</p>
                <p className="text-xs xs:text-base">Здесь будет отображена карта с расположением всех наших залов</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactsPage;
