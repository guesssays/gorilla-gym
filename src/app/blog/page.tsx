'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Search,
  Clock,
  User,
  Eye,
  Heart,
  Bookmark,
  Share,
  MessageCircle,
  ArrowRight,
  TrendingUp,
  Apple,
  Brain,
  Target,
  Dumbbell,
  Flame,
  ThumbsUp,
  Tag,
  Coffee,
  Zap,
  Award,
  BookOpen
} from 'lucide-react';

const BlogPage = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все статьи', icon: <TrendingUp className="w-4 h-4" />, count: 24, color: 'text-orange-400' },
    { id: 'workouts', name: 'Тренировки', icon: <Dumbbell className="w-4 h-4" />, count: 12, color: 'text-red-400' },
    { id: 'nutrition', name: 'Питание', icon: <Apple className="w-4 h-4" />, count: 8, color: 'text-green-400' },
    { id: 'health', name: 'Здоровье', icon: <Heart className="w-4 h-4" />, count: 6, color: 'text-blue-400' },
    { id: 'motivation', name: 'Мотивация', icon: <Brain className="w-4 h-4" />, count: 4, color: 'text-purple-400' },
  ];

  const featuredArticles = [
    {
      id: 1,
      title: '10 лучших упражнений для домашних тренировок',
      excerpt: 'Эффективные упражнения, которые можно выполнять дома без специального оборудования. Идеально для начинающих и опытных спортсменов.',
      image: 'https://images.unsplash.com/photo-1602611000981-f9e33f0d1f39?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'workouts',
      author: 'Артём Волков',
      readTime: '8 мин',
      publishDate: '2024-01-15',
      views: 2547,
      likes: 89,
      comments: 23,
      tags: ['домашние тренировки', 'без оборудования', 'начинающие'],
      featured: true,
      trending: true
    },
    {
      id: 2,
      title: 'Правильное питание для набора мышечной массы',
      excerpt: 'Полное руководство по питанию для тех, кто хочет нарастить качественную мышечную массу. Рассмотрим БЖУ, калорийность и примеры меню.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'nutrition',
      author: 'Диетолог Анна',
      readTime: '12 мин',
      publishDate: '2024-01-12',
      views: 3241,
      likes: 156,
      comments: 34,
      tags: ['набор массы', 'белок', 'меню'],
      featured: true,
      trending: false
    }
  ];

  const allArticles = [
    {
      id: 3,
       title: 'Как восстановиться после интенсивной тренировки?',
    excerpt: 'Лучшие способы восстановления мышц, лайфхаки по питанию, гидратации и сну. Советы экспертов.',
    image: 'https://images.unsplash.com/photo-1734668484998-c943d1fcb48a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'health',
    author: 'Тренер Ксения',
    readTime: '9 мин',
    publishDate: '2024-01-02',
    views: 2120,
    likes: 77,
    comments: 14,
    tags: ['восстановление', 'лайфхаки', 'здоровье']
    },
    {
      id: 4,
 title: '5 ошибок новичков в фитнесе и как их избежать',
    excerpt: 'Распространённые ошибки на старте тренировок: техника, питание, режим. Как не потерять мотивацию и получать результат без вреда для здоровья.',
    image: 'https://images.unsplash.com/photo-1571388072750-31a921b3d900?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'workouts',
    author: 'Денис Эксперт',
    readTime: '8 мин',
    publishDate: '2024-01-01',
    views: 1943,
    likes: 65,
    comments: 11,
    tags: ['новички', 'ошибки', 'мотивация']
    },
    {
      id: 5,
     title: 'Как создать домашний спортзал: Полное руководство по выбору оборудования',
    excerpt: 'Практические советы по подбору оборудования для домашнего спортзала, бюджетные и профессиональные решения для любого уровня подготовки.',
    image: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=728&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'workouts',
    author: 'Артём Волков',
    readTime: '11 мин',
    publishDate: '2023-12-30',
    views: 1765,
    likes: 58,
    comments: 10,
    tags: ['домашний спортзал', 'оборудование', 'лайфхаки']
    },
    {
      id: 6,
      title: 'Кардио или силовые тренировки: Что выбрать для похудения?',
    excerpt: 'Объясняем разницу между кардио и силовыми тренировками для снижения веса. Аргументы, схемы, мнения тренеров и практические примеры.',
    image: 'https://images.unsplash.com/photo-1685633225009-9a612a71b945?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'workouts',
    author: 'Тренер Виталий',
    readTime: '10 мин',
    publishDate: '2023-12-28',
    views: 2050,
    likes: 73,
    comments: 12,
    tags: ['кардио', 'силовые', 'похудение']
    }
  ];

  const filteredArticles = allArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

const getCategoryInfo = (categoryId: string) => {
  return categories.find(cat => cat.id === categoryId);
};


const getCategoryColor = (category: string) => {
  switch (category) {
    case 'workouts': return 'bg-red-500/80';
    case 'nutrition': return 'bg-green-500/80';
    case 'health': return 'bg-blue-500/80';
    case 'motivation': return 'bg-purple-500/80';
    default: return 'bg-orange-500/80';
  }
};


  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white py-8 sm:py-12">
      <div className="container mx-auto px-2 sm:px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-3xl xs:text-4xl md:text-5xl lg:text-7xl font-bold font-heading mb-4 sm:mb-8">
            <span className="text-white">Блог</span>{' '}
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              GORILLA GYM
            </span>
          </h1>
          <p className="text-base xs:text-lg md:text-2xl lg:text-3xl text-zinc-300 max-w-3xl sm:max-w-5xl mx-auto leading-relaxed font-body">
            Экспертные статьи о фитнесе, питании и здоровом образе жизни от наших тренеров и специалистов
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-10 sm:mb-16">
          <div className="max-w-xl mx-auto mb-6 sm:mb-10">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-zinc-400" />
              <Input
                type="text"
                placeholder="Поиск статей, тегов, авторов..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 sm:pl-14 sm:pr-6 sm:py-5 bg-zinc-900/50 backdrop-blur-medium border border-zinc-700 text-white placeholder:text-zinc-400 text-base sm:text-lg font-body rounded-2xl focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 shadow-lg"
              />
            </div>
          </div>

{/* Categories */}
<div className="hidden sm:flex flex-wrap justify-center gap-3 xs:gap-4 md:gap-6">
  {categories.map((category) => (
    <Button
      key={category.id}
      variant={selectedCategory === category.id ? "default" : "outline"}
      onClick={() => setSelectedCategory(category.id)}
      className={`font-ui transition-all duration-300 flex items-center ${
        selectedCategory === category.id
          ? 'bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 shadow-glow text-white'
          : 'border-zinc-700 text-zinc-300 hover:bg-zinc-800/50 hover:border-orange-500 hover:text-orange-500'
      } px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-xs sm:text-base min-w-[92px]`}
    >
      <span className={category.color}>{category.icon}</span>
      <span className="ml-2 sm:ml-3 font-medium">{category.name}</span>
      <Badge
        className="ml-2 sm:ml-3 bg-zinc-700/80 text-zinc-300 font-body text-xs border-none rounded-full min-w-6 h-6 flex items-center justify-center px-0"
      >
        {category.count}
      </Badge>
    </Button>
  ))}
</div>

        </div>

        {/* Featured Articles */}
        {selectedCategory === 'all' && !searchQuery && (
          <div className="mb-12 sm:mb-20">
            <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-12 flex items-center font-heading">
              <Target className="w-8 h-8 xs:w-10 xs:h-10 text-orange-500 mr-3 sm:mr-4" />
              Рекомендуемые статьи
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-10">
              {featuredArticles.map((article) => (
             <Card
  key={article.id}
  className="group bg-zinc-900/60 backdrop-blur-medium border-zinc-800 overflow-hidden hover:border-orange-500/50 transition-transform duration-500 hover:scale-[1.02] shadow-2xl"
>
  <div className="relative h-40 xs:h-52 sm:h-60 lg:h-96">
    {/* Image and fade */}
    <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-110 will-change-transform">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${article.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
    </div>
    {/* Badges */}
<div className="absolute top-2 xs:top-3 sm:top-6 left-2 xs:left-3 sm:left-6 right-2 xs:right-3 sm:right-6 flex flex-col xs:flex-row gap-1 xs:gap-2 items-start z-10">
  <div className="flex gap-1 xs:gap-2 sm:gap-3">
    <Badge className={`
      ${getCategoryColor(article.category)} text-white border-none font-ui
      px-2 py-0.5 text-[11px] xs:text-xs sm:px-4 sm:py-2 sm:text-base max-w-[85px] xs:max-w-[140px] sm:max-w-none truncate
    `}>
      {/* иконка — только на md+ */}
      <span className="hidden sm:inline-block align-middle mr-1">{getCategoryInfo(article.category)?.icon}</span>
      {getCategoryInfo(article.category)?.name}
    </Badge>
    {article.trending && (
      <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white border-none font-ui
        px-2 py-0.5 text-[11px] xs:text-xs sm:px-4 sm:py-2 sm:text-base max-w-[95px] xs:max-w-[140px] sm:max-w-none truncate flex items-center
      ">
        <span className="hidden sm:inline-block mr-1"><Flame className="w-4 h-4" /></span>
        <span>Популярно</span>
      </Badge>
    )}
  </div>
  <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white border-none font-ui
    px-2 py-0.5 text-[11px] xs:text-xs sm:px-4 sm:py-2 sm:text-base max-w-[100px] xs:max-w-[150px] sm:max-w-none truncate flex items-center
  ">
    <span className="hidden sm:inline-block mr-1"><Award className="w-4 h-4" /></span>
    <span>Рекомендуем</span>
  </Badge>
</div>


    {/* Article Info Overlay */}
<div className="absolute bottom-0 left-0 right-0 p-2 xs:p-3 sm:p-8">
  <h3 className="text-sm xs:text-base sm:text-xl lg:text-3xl font-bold mb-1 sm:mb-4 text-white font-heading group-hover:text-orange-400 transition-colors duration-300 line-clamp-2 sm:line-clamp-2 leading-tight">
    {article.title}
  </h3>
  <p className="text-zinc-200 mb-1 sm:mb-6 font-body line-clamp-2 sm:line-clamp-2 leading-relaxed text-xs xs:text-sm sm:text-lg">
    {article.excerpt}
  </p>
</div>

  </div>

  <CardContent className="p-3 xs:p-4 sm:p-8">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-zinc-500 mb-3 sm:mb-6 gap-3 sm:gap-0">
      <div className="flex items-center space-x-3 sm:space-x-4">
        <div className="flex items-center space-x-1 sm:space-x-2">
          <User className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="font-body font-medium">{article.author}</span>
        </div>
        <div className="flex items-center space-x-1 sm:space-x-2">
          <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="font-body">{article.readTime}</span>
        </div>
      </div>
      <div className="flex items-center space-x-2 sm:space-x-4">
        <div className="flex items-center space-x-1 sm:space-x-2">
          <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="font-body">{article.views.toLocaleString()}</span>
        </div>
        <div className="flex items-center space-x-1 sm:space-x-2">
          <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
          <span className="font-body">{article.likes}</span>
        </div>
        <div className="flex items-center space-x-1 sm:space-x-2">
          <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="font-body">{article.comments}</span>
        </div>
      </div>
    </div>

    <div className="flex flex-wrap gap-2 sm:gap-3 mb-2 sm:mb-6">
      {article.tags.slice(0, 3).map((tag, idx) => (
        <Badge key={idx} variant="outline" className="text-xs border-zinc-600 text-zinc-400 font-body hover:border-orange-500 hover:text-orange-500 transition-all cursor-pointer">
          <Tag className="w-3 h-3 mr-1" />
          {tag}
        </Badge>
      ))}
    </div>

    <div className="flex items-center justify-between gap-2">
      <Link href={`/blog/${article.id}`}>
        <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 font-ui shadow-glow hover:shadow-glow-lg transition-all duration-300 group px-3 xs:px-4 sm:px-8 py-1.5 xs:py-2 sm:py-3 text-xs xs:text-sm sm:text-base">
          <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          Читать статью
          <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </Link>
      <div className="flex space-x-2 sm:space-x-3">
        <Button size="sm" variant="outline" className="border-zinc-700 text-zinc-400 hover:bg-zinc-800/50 hover:border-orange-500 hover:text-orange-500 transition-all duration-300">
          <Bookmark className="w-4 h-4" />
        </Button>
        <Button size="sm" variant="outline" className="border-zinc-700 text-zinc-400 hover:bg-zinc-800/50 hover:border-blue-500 hover:text-blue-500 transition-all duration-300">
          <Share className="w-4 h-4" />
        </Button>
      </div>
    </div>
  </CardContent>
</Card>

              ))}
            </div>
          </div>
        )}

        {/* All Articles */}
        <div>
          <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 font-heading">
            {selectedCategory === 'all' ? 'Все статьи' : getCategoryInfo(selectedCategory)?.name}
            {searchQuery && (
              <span className="block text-lg sm:text-xl font-normal text-zinc-400 mt-2 sm:mt-0 sm:ml-6 font-body">
                Результаты поиска: "{searchQuery}"
              </span>
            )}
          </h2>

          {filteredArticles.length === 0 ? (
            <Card className="bg-zinc-900/50 backdrop-blur-medium border-zinc-800">
              <CardContent className="p-8 sm:p-16 text-center">
                <Search className="w-16 h-16 sm:w-20 sm:h-20 text-zinc-600 mx-auto mb-4 sm:mb-6" />
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 font-heading">Статьи не найдены</h3>
                <p className="text-zinc-400 font-body text-base sm:text-lg">
                  Попробуйте изменить поисковый запрос или выберите другую категорию.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-8">
              {filteredArticles.map((article, index) => (
                <Card
                  key={article.id}
                  className="group bg-zinc-900/60 backdrop-blur-medium border-zinc-800 overflow-hidden hover:border-orange-500/50 transition-transform duration-500 hover:scale-105 shadow-xl"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 xs:h-56">
                    <div className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-110 will-change-transform">
                      <div
                        className="absolute inset-0 w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${article.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    </div>
                    <div className="absolute top-3 left-3">
                      <Badge className={`${getCategoryColor(article.category)} text-white border-none font-ui text-xs px-3 py-1`}>
                        {getCategoryInfo(article.category)?.name}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-xl font-bold mb-2 sm:mb-4 font-heading group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-zinc-400 mb-3 sm:mb-5 text-xs sm:text-sm font-body line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-zinc-500 mb-2 sm:mb-4">
                      <div className="flex items-center space-x-2 sm:space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span className="font-body">{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span className="font-body">{article.readTime}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3 sm:mb-5">
                      {article.tags.slice(0, 2).map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs border-zinc-600 text-zinc-400 font-body hover:border-orange-500 hover:text-orange-500 transition-all cursor-pointer">
                          #{tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <Link href={`/blog/${article.id}`}>
                        <Button size="sm" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 font-ui px-4 sm:px-6 py-2">
                          <BookOpen className="w-4 h-4 mr-2" />
                          Читать
                        </Button>
                      </Link>
                      <div className="flex items-center space-x-2 sm:space-x-4 text-xs text-zinc-500">
                        <div className="flex items-center space-x-1 hover:text-red-400 transition-colors cursor-pointer">
                          <ThumbsUp className="w-4 h-4" />
                          <span className="font-body">{article.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1 hover:text-blue-400 transition-colors cursor-pointer">
                          <MessageCircle className="w-4 h-4" />
                          <span className="font-body">{article.comments}</span>
                        </div>
                        <div className="flex items-center space-x-1 hover:text-zinc-300 transition-colors cursor-pointer">
                          <Eye className="w-4 h-4" />
                          <span className="font-body">{article.views}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 sm:mt-20">
          <Card className="bg-gradient-to-r from-orange-500/20 to-red-600/20 border-orange-500/30 backdrop-blur-medium shadow-glow">
            <CardContent className="p-6 sm:p-12 md:p-16 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 font-heading">
                <Coffee className="w-10 h-10 sm:w-12 sm:h-12 text-orange-500 mx-auto mb-2 sm:mb-4" />
                Подпишитесь на наш блог
              </h2>
              <p className="text-base sm:text-xl md:text-2xl text-zinc-300 mb-6 sm:mb-10 font-body leading-relaxed max-w-2xl sm:max-w-3xl mx-auto">
                Получайте новые статьи о фитнесе и питании прямо на почту.
                Никакого спама, только качественный контент!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-xs sm:max-w-lg mx-auto">
                <Input
                  type="email"
                  placeholder="Ваш email"
                  className="bg-zinc-900/50 border-zinc-700 text-white placeholder:text-zinc-400 font-body backdrop-blur-medium rounded-xl py-3 sm:py-4"
                />
                <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 font-ui shadow-glow px-6 sm:px-8 py-3 sm:py-4">
                  <Zap className="w-5 h-5 mr-2" />
                  Подписаться
                </Button>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 mt-4 sm:mt-6 font-body">
                Уже подписались 2,500+ читателей. Отписаться можно в любой момент.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
