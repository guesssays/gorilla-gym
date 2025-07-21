'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Clock,
  User,
  Eye,
  Heart,
  Share,
  Bookmark,
  MessageCircle,
  ArrowLeft,
  ThumbsUp,
  ThumbsDown,
  Flag,
  Calendar,
  Tag,
  TrendingUp,
  Quote,
  Code,
  Image as ImageIcon,
  Video,
  Headphones,
  Download,
  Printer,
  Check,
  Star,
  Zap,
  Target,
  Award,
  BookOpen,
  Coffee,
  Activity,
  Dumbbell,
  Apple,
  Brain
} from 'lucide-react';

interface Comment {
  id: number;
  author: string;
  avatar?: string;
  content: string;
  date: string;
  likes: number;
  dislikes: number;
  replies?: Comment[];
  verified?: boolean;
}

interface ArticleData {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  authorAvatar: string;
  authorBio: string;
  readTime: string;
  publishDate: string;
  views: number;
  likes: number;
  bookmarks: number;
  tags: string[];
  relatedArticles: number[];
  seoTitle: string;
  seoDescription: string;
}

const BlogArticlePage = () => {
  const { t } = useLanguage();
  const params = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [commentAuthor, setCommentAuthor] = useState('');
  const [commentEmail, setCommentEmail] = useState('');
  const [readingProgress, setReadingProgress] = useState(0);

  // Comprehensive article database
  const articlesData: Record<string, ArticleData> = useMemo(() => ({
    '1': {
      id: 1,
      title: '10 лучших упражнений для домашних тренировок: Полное руководство',
      seoTitle: 'Домашние тренировки: 10 эффективных упражнений без оборудования',
      seoDescription: 'Изучите 10 самых эффективных упражнений для домашних тренировок. Подробные инструкции, видео и советы от профессиональных тренеров GORILLA GYM.',
      excerpt: 'Эффективные упражнения, которые можно выполнять дома без специального оборудования. Идеально для начинающих и опытных спортсменов.',
      content: `
        <div class="prose prose-invert max-w-none">
          <div class="bg-gradient-to-r from-orange-500/10 to-red-600/10 border border-orange-500/20 backdrop-blur-sm p-8 mb-10 rounded-2xl">
            <h3 class="text-2xl font-bold mb-4 text-orange-400 flex items-center font-heading">
              <svg class="w-7 h-7 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Ключевые преимущества домашних тренировок
            </h3>
            <ul class="text-zinc-200 space-y-3 text-lg font-body">
              <li class="flex items-center"><span class="text-green-400 mr-3">✓</span> Экономия времени на дорогу в спортзал</li>
              <li class="flex items-center"><span class="text-green-400 mr-3">✓</span> Возможность заниматься в любое удобное время</li>
              <li class="flex items-center"><span class="text-green-400 mr-3">✓</span> Не требует дорогостоящего оборудования</li>
              <li class="flex items-center"><span class="text-green-400 mr-3">✓</span> Комфортная обстановка для начинающих</li>
              <li class="flex items-center"><span class="text-green-400 mr-3">✓</span> Гибкость в выборе интенсивности</li>
            </ul>
          </div>

          <h2 class="text-4xl font-bold mb-8 text-orange-400 font-heading flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl mr-4">1</span>
            Отжимания (Push-ups)
          </h2>

          <div class="grid lg:grid-cols-2 gap-8 mb-12">
            <div class="space-y-6">
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80"
                   alt="Отжимания техника"
                   class="rounded-2xl w-full h-80 object-cover shadow-2xl"/>
              <div class="bg-zinc-900/80 backdrop-blur-sm p-6 rounded-xl border border-zinc-700">
                <h4 class="text-xl font-semibold mb-4 text-white font-heading">Работающие мышцы:</h4>
                <div class="grid grid-cols-2 gap-3 text-zinc-300 font-body">
                  <div class="flex items-center"><span class="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>Грудные</div>
                  <div class="flex items-center"><span class="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>Трицепсы</div>
                  <div class="flex items-center"><span class="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>Передние дельты</div>
                  <div class="flex items-center"><span class="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>Кор</div>
                </div>
              </div>
            </div>
            <div class="space-y-6">
              <h4 class="text-2xl font-semibold mb-4 text-white font-heading">Техника выполнения:</h4>
              <ol class="text-zinc-200 space-y-4 text-lg font-body">
                <li class="flex items-start"><span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4 mt-1 flex-shrink-0">1</span>Примите упор лёжа, руки на ширине плеч, пальцы направлены вперед</li>
                <li class="flex items-start"><span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4 mt-1 flex-shrink-0">2</span>Тело должно составлять прямую линию от головы до пяток</li>
                <li class="flex items-start"><span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4 mt-1 flex-shrink-0">3</span>Опускайтесь медленно до касания груди пола</li>
                <li class="flex items-start"><span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4 mt-1 flex-shrink-0">4</span>Отжимайтесь мощно до полного выпрямления рук</li>
              </ol>
              <div class="bg-gradient-to-r from-orange-500/20 to-red-600/20 border border-orange-500/30 p-6 rounded-xl">
                <h5 class="font-semibold text-orange-400 mb-3 font-heading">Рекомендации:</h5>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div class="bg-zinc-800/50 p-4 rounded-lg">
                    <p class="text-2xl font-bold text-white">3</p>
                    <p class="text-sm text-zinc-400 font-body">Подхода</p>
                  </div>
                  <div class="bg-zinc-800/50 p-4 rounded-lg">
                    <p class="text-2xl font-bold text-white">8-15</p>
                    <p class="text-sm text-zinc-400 font-body">Повторений</p>
                  </div>
                  <div class="bg-zinc-800/50 p-4 rounded-lg">
                    <p class="text-2xl font-bold text-white">60сек</p>
                    <p class="text-sm text-zinc-400 font-body">Отдых</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 class="text-4xl font-bold mb-8 text-orange-400 font-heading flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl mr-4">2</span>
            Приседания (Squats)
          </h2>

          <p class="text-zinc-200 mb-8 leading-relaxed text-lg font-body">
            Приседания — это базовое упражнение для развития мышц ног и ягодиц.
            Правильная техника критически важна для эффективности и безопасности.
            Это упражнение задействует самые крупные мышечные группы организма.
          </p>

          <div class="bg-red-500/10 border border-red-500/20 backdrop-blur-sm p-8 rounded-2xl mb-10">
            <h4 class="text-2xl font-semibold mb-6 text-red-400 font-heading flex items-center">
              <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
              </svg>
              Частые ошибки и как их избежать
            </h4>
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h5 class="text-lg font-semibold text-white mb-4 font-heading">❌ Что НЕ делать:</h5>
                <ul class="text-zinc-200 space-y-3 font-body">
                  <li class="flex items-start"><span class="text-red-400 mr-3 text-xl">×</span>Колени заворачиваются внутрь</li>
                  <li class="flex items-start"><span class="text-red-400 mr-3 text-xl">×</span>Недостаточная глубина приседания</li>
                  <li class="flex items-start"><span class="text-red-400 mr-3 text-xl">×</span>Перенос веса на носки</li>
                  <li class="flex items-start"><span class="text-red-400 mr-3 text-xl">×</span>Округление спины</li>
                </ul>
              </div>
              <div>
                <h5 class="text-lg font-semibold text-white mb-4 font-heading">✅ Правильная техника:</h5>
                <ul class="text-zinc-200 space-y-3 font-body">
                  <li class="flex items-start"><span class="text-green-400 mr-3 text-xl">✓</span>Колени направлены по линии стоп</li>
                  <li class="flex items-start"><span class="text-green-400 mr-3 text-xl">✓</span>Бедра параллельны полу</li>
                  <li class="flex items-start"><span class="text-green-400 mr-3 text-xl">✓</span>Вес на пятках</li>
                  <li class="flex items-start"><span class="text-green-400 mr-3 text-xl">✓</span>Прямая спина</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 class="text-4xl font-bold mb-8 text-orange-400 font-heading flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl mr-4">3</span>
            Планка (Plank)
          </h2>

          <p class="text-zinc-200 mb-8 leading-relaxed text-lg font-body">
            Планка — лучшее изометрическое упражнение для укрепления мышц кора.
            Развивает стабильность, выносливость и силу глубоких мышц живота.
            Это фундаментальное упражнение для любого уровня подготовки.
          </p>

          <div class="grid md:grid-cols-3 gap-6 mb-12">
            <div class="bg-gradient-to-br from-green-500/20 to-emerald-600/20 border border-green-500/30 p-6 rounded-xl text-center backdrop-blur-sm">
              <div class="text-4xl mb-3">🟢</div>
              <h5 class="font-semibold text-green-400 mb-3 font-heading">Начинающие</h5>
              <p class="text-3xl font-bold text-white mb-2">30 сек</p>
              <p class="text-sm text-zinc-300 font-body">3 подхода</p>
            </div>
            <div class="bg-gradient-to-br from-yellow-500/20 to-orange-600/20 border border-yellow-500/30 p-6 rounded-xl text-center backdrop-blur-sm">
              <div class="text-4xl mb-3">🟡</div>
              <h5 class="font-semibold text-yellow-400 mb-3 font-heading">Средний уровень</h5>
              <p class="text-3xl font-bold text-white mb-2">60 сек</p>
              <p class="text-sm text-zinc-300 font-body">3 подхода</p>
            </div>
            <div class="bg-gradient-to-br from-red-500/20 to-purple-600/20 border border-red-500/30 p-6 rounded-xl text-center backdrop-blur-sm">
              <div class="text-4xl mb-3">🔴</div>
              <h5 class="font-semibold text-red-400 mb-3 font-heading">Продвинутые</h5>
              <p class="text-3xl font-bold text-white mb-2">90+ сек</p>
              <p class="text-sm text-zinc-300 font-body">3-4 подхода</p>
            </div>
          </div>

          <h2 class="text-4xl font-bold mb-8 text-orange-400 font-heading">Полная программа тренировок</h2>

          <div class="bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 border border-zinc-700 backdrop-blur-sm p-8 rounded-2xl mb-12">
            <h4 class="text-2xl font-semibold mb-8 text-white font-heading flex items-center">
              <svg class="w-8 h-8 mr-3 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Недельный план тренировок
            </h4>
            <div class="grid lg:grid-cols-2 gap-8">
              <div class="bg-zinc-800/50 p-6 rounded-xl border border-zinc-600">
                <h5 class="font-semibold text-orange-400 mb-6 text-lg font-heading">Понедельник, Среда, Пятница</h5>
                <ul class="text-zinc-200 space-y-4 font-body">
                  <li class="flex justify-between items-center border-b border-zinc-700 pb-2"><span>Отжимания</span><span class="text-orange-400">3×10-15</span></li>
                  <li class="flex justify-between items-center border-b border-zinc-700 pb-2"><span>Приседания</span><span class="text-orange-400">3×15-20</span></li>
                  <li class="flex justify-between items-center border-b border-zinc-700 pb-2"><span>Планка</span><span class="text-orange-400">3×30-60с</span></li>
                  <li class="flex justify-between items-center border-b border-zinc-700 pb-2"><span>Выпады</span><span class="text-orange-400">3×10/нога</span></li>
                  <li class="flex justify-between items-center"><span>Подъемы на носки</span><span class="text-orange-400">3×20</span></li>
                </ul>
              </div>
              <div class="bg-zinc-800/50 p-6 rounded-xl border border-zinc-600">
                <h5 class="font-semibold text-orange-400 mb-6 text-lg font-heading">Вторник, Четверг, Суббота</h5>
                <ul class="text-zinc-200 space-y-4 font-body">
                  <li class="flex justify-between items-center border-b border-zinc-700 pb-2"><span>Берпи</span><span class="text-orange-400">3×8-12</span></li>
                  <li class="flex justify-between items-center border-b border-zinc-700 pb-2"><span>Горные альпинисты</span><span class="text-orange-400">3×20</span></li>
                  <li class="flex justify-between items-center border-b border-zinc-700 pb-2"><span>Боковая планка</span><span class="text-orange-400">2×30с/сторона</span></li>
                  <li class="flex justify-between items-center border-b border-zinc-700 pb-2"><span>Прыжки на месте</span><span class="text-orange-400">3×30с</span></li>
                  <li class="flex justify-between items-center"><span>Растяжка</span><span class="text-orange-400">10 мин</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-orange-500 to-red-600 p-8 rounded-2xl text-center mb-12">
            <h4 class="text-2xl font-bold mb-4 text-white font-heading">Готовы к следующему уровню?</h4>
            <p class="text-orange-100 mb-6 text-lg font-body leading-relaxed">
              Запишитесь на бесплатную тренировку в GORILLA GYM и получите персональную программу от наших тренеров
            </p>
            <button class="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-300 text-lg shadow-lg transform hover:scale-105">
              Записаться на пробную тренировку
            </button>
          </div>
        </div>
      `,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'workouts',
      author: 'Артём Волков',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      authorBio: 'Сертифицированный персональный тренер с 8-летним опытом. Специализируется на функциональном тренинге и кроссфите.',
      readTime: '8 мин',
      publishDate: '2024-01-15',
      views: 2547,
      likes: 89,
      bookmarks: 34,
      tags: ['домашние тренировки', 'без оборудования', 'начинающие', 'фитнес'],
      relatedArticles: [2, 3, 4]
    },
    '2': {
      id: 2,
      title: 'Правильное питание для набора мышечной массы: Научный подход',
      seoTitle: 'Питание для набора мышечной массы: полное руководство по БЖУ',
      seoDescription: 'Узнайте все о правильном питании для набора качественной мышечной массы. Расчет калорий, БЖУ, примеры меню и рекомендации экспертов.',
      excerpt: 'Полное руководство по питанию для тех, кто хочет нарастить качественную мышечную массу. Рассмотрим БЖУ, калорийность и примеры меню.',
      content: `
        <div class="prose prose-invert max-w-none">
          <div class="bg-gradient-to-r from-green-500/20 to-emerald-600/20 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
            <h3 class="text-xl font-bold mb-2 text-green-400">Основные принципы питания для массонабора</h3>
            <p class="text-zinc-300">
              Набор мышечной массы невозможен без правильно организованного питания.
              Это 70% успеха в достижении ваших целей.
            </p>
          </div>

          <h2 class="text-3xl font-bold mb-6 text-green-400">Расчет калорийности</h2>

          <p class="text-zinc-300 mb-6 leading-relaxed">
            Первый шаг к набору мышечной массы — создание калорийного профицита.
            Вам необходимо потреблять больше калорий, чем тратите.
          </p>

          <div class="bg-zinc-900 p-6 rounded-lg mb-8">
            <h4 class="text-lg font-semibold mb-4 text-green-400">Формула расчета базового метаболизма (BMR):</h4>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-zinc-800 p-4 rounded-lg">
                <h5 class="font-semibold text-white mb-2">Для мужчин:</h5>
                <code class="text-green-400 text-sm">BMR = 88.362 + (13.397 × вес в кг) + (4.799 × рост в см) - (5.677 × возраст)</code>
              </div>
              <div class="bg-zinc-800 p-4 rounded-lg">
                <h5 class="font-semibold text-white mb-2">Для женщин:</h5>
                <code class="text-green-400 text-sm">BMR = 447.593 + (9.247 × вес в кг) + (3.098 × рост в см) - (4.330 × возраст)</code>
              </div>
            </div>
          </div>

          <h2 class="text-3xl font-bold mb-6 text-green-400">Макронутриенты (БЖУ)</h2>

          <div class="grid md:grid-cols-3 gap-6 mb-8">
            <div class="bg-gradient-to-br from-red-900/30 to-red-800/30 p-6 rounded-lg border border-red-500/30">
              <h4 class="text-xl font-bold mb-3 text-red-400">Белки</h4>
              <p class="text-2xl font-bold text-white mb-2">2-2.5г/кг</p>
              <p class="text-sm text-zinc-300 mb-3">веса тела в день</p>
              <ul class="text-sm text-zinc-400 space-y-1">
                <li>• Курица, индейка</li>
                <li>• Говядина, телятина</li>
                <li>• Рыба, морепродукты</li>
                <li>• Яйца, творог</li>
                <li>• Протеиновые коктейли</li>
              </ul>
            </div>

            <div class="bg-gradient-to-br from-blue-900/30 to-blue-800/30 p-6 rounded-lg border border-blue-500/30">
              <h4 class="text-xl font-bold mb-3 text-blue-400">Углеводы</h4>
              <p class="text-2xl font-bold text-white mb-2">4-6г/кг</p>
              <p class="text-sm text-zinc-300 mb-3">веса тела в день</p>
              <ul class="text-sm text-zinc-400 space-y-1">
                <li>• Рис, гречка, овсянка</li>
                <li>• Макароны из твердых сортов</li>
                <li>• Картофель, батат</li>
                <li>• Фрукты, овощи</li>
                <li>• Хлеб цельнозерновой</li>
              </ul>
            </div>

            <div class="bg-gradient-to-br from-yellow-900/30 to-yellow-800/30 p-6 rounded-lg border border-yellow-500/30">
              <h4 class="text-xl font-bold mb-3 text-yellow-400">Жиры</h4>
              <p class="text-2xl font-bold text-white mb-2">1-1.5г/кг</p>
              <p class="text-sm text-zinc-300 mb-3">веса тела в день</p>
              <ul class="text-sm text-zinc-400 space-y-1">
                <li>• Оливковое масло</li>
                <li>• Орехи, семечки</li>
                <li>• Авокадо</li>
                <li>• Рыбий жир</li>
                <li>• Жирная рыба</li>
              </ul>
            </div>
          </div>

          <h2 class="text-3xl font-bold mb-6 text-green-400">Примерное меню на день</h2>

          <div class="space-y-6 mb-8">
            <div class="bg-zinc-900 p-6 rounded-lg">
              <h4 class="text-lg font-semibold mb-4 text-green-400 flex items-center">
                <span class="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">1</span>
                Завтрак (7:00)
              </h4>
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <ul class="text-zinc-300 space-y-2">
                    <li>• Овсянка на молоке - 100г</li>
                    <li>• Банан - 1 шт</li>
                    <li>• Яйца - 3 шт</li>
                    <li>• Хлеб цельнозерновой - 2 ломтика</li>
                  </ul>
                </div>
                <div class="bg-zinc-800 p-4 rounded-lg">
                  <p class="text-sm text-zinc-400">Примерная пищевая ценность:</p>
                  <p class="text-white"><strong>Калории:</strong> ~650 ккал</p>
                  <p class="text-white"><strong>Белки:</strong> 35г | <strong>Углеводы:</strong> 75г | <strong>Жиры:</strong> 18г</p>
                </div>
              </div>
            </div>

            <div class="bg-zinc-900 p-6 rounded-lg">
              <h4 class="text-lg font-semibold mb-4 text-green-400 flex items-center">
                <span class="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">2</span>
                Перекус (10:00)
              </h4>
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <ul class="text-zinc-300 space-y-2">
                    <li>• Творог 5% - 150г</li>
                    <li>• Орехи грецкие - 30г</li>
                    <li>• Яблоко - 1 шт</li>
                  </ul>
                </div>
                <div class="bg-zinc-800 p-4 rounded-lg">
                  <p class="text-sm text-zinc-400">Примерная пищевая ценность:</p>
                  <p class="text-white"><strong>Калории:</strong> ~400 ккал</p>
                  <p class="text-white"><strong>Белки:</strong> 25г | <strong>Углеводы:</strong> 20г | <strong>Жиры:</strong> 20г</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-orange-500/10 border border-orange-500/30 p-6 rounded-lg mb-8">
            <h4 class="text-lg font-semibold mb-3 text-orange-400">Важные принципы питания:</h4>
            <ul class="text-zinc-300 space-y-2">
              <li>• Ешьте каждые 2-3 часа для поддержания анаболизма</li>
              <li>• Выпивайте 2.5-3 литра воды в день</li>
              <li>• Принимайте пищу в течение часа после тренировки</li>
              <li>• Последний прием пищи за 2-3 часа до сна</li>
              <li>• Ведите дневник питания первые 2-3 недели</li>
            </ul>
          </div>
        </div>
      `,
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'nutrition',
      author: 'Диетолог Анна Петрова',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      authorBio: 'Сертифицированный диетолог и нутрициолог. Специализируется на спортивном питании и коррекции веса.',
      readTime: '12 мин',
      publishDate: '2024-01-12',
      views: 3241,
      likes: 156,
      bookmarks: 89,
      tags: ['набор массы', 'белок', 'меню', 'БЖУ', 'калории'],
      relatedArticles: [1, 3, 4]
    },
    // You can add more articles here for a more complete system
    '3': {
      id: 3,
      title: 'Как восстановиться после интенсивной тренировки: Советы и лайфхаки',
      seoTitle: 'Восстановление после тренировки: лучшие методы и лайфхаки',
      seoDescription: 'Узнайте, как быстро и эффективно восстановиться после тяжелых тренировок. Советы по питанию, сну, массажу и растяжке.',
      excerpt: 'Восстановление — ключ к прогрессу. Разбираем лучшие методы восстановления после тренировки: питание, сон, массаж, растяжка.',
      content: `
        <div class="prose prose-invert max-w-none">
          <h2 class="text-3xl font-bold mb-6 text-blue-400">Почему важно восстановление?</h2>
          <p class="text-zinc-300 mb-4 leading-relaxed">
            Без качественного восстановления мышцы не растут, а риск травм увеличивается. Восстановление — неотъемлемая часть тренировочного процесса.
          </p>
          <h3 class="text-2xl font-bold mb-4 text-blue-300">Топ-5 советов для быстрого восстановления:</h3>
          <ol class="list-decimal pl-6 text-zinc-200 space-y-2">
            <li><span class="font-semibold text-blue-400">Сон:</span> 7-9 часов — залог роста и восстановления.</li>
            <li><span class="font-semibold text-blue-400">Питание:</span> Белки и углеводы после тренировки ускоряют регенерацию.</li>
            <li><span class="font-semibold text-blue-400">Растяжка:</span> Снимает мышечное напряжение и улучшает гибкость.</li>
            <li><span class="font-semibold text-blue-400">Массаж:</span> Улучшает кровообращение и уменьшает крепатуру.</li>
            <li><span class="font-semibold text-blue-400">Гидратация:</span> Вода необходима для всех восстановительных процессов.</li>
          </ol>
          <div class="bg-blue-500/10 border border-blue-500/30 p-6 rounded-lg mt-8">
            <h4 class="text-lg font-semibold mb-2 text-blue-400">Лайфхак:</h4>
            <p class="text-zinc-200">Используйте контрастный душ после тренировки для ускорения восстановления.</p>
          </div>
        </div>
      `,
      image: 'https://images.unsplash.com/photo-1591311630200-ffa9120a540f?q=80&w=1110&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'recovery',
      author: 'Ирина Кузнецова',
      authorAvatar: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      authorBio: 'Фитнес-эксперт, специалист по восстановлению и реабилитации.',
      readTime: '6 мин',
      publishDate: '2024-01-10',
      views: 1872,
      likes: 67,
      bookmarks: 22,
      tags: ['восстановление', 'сон', 'массаж', 'stretching'],
      relatedArticles: [1, 2, 4]
    },
    '4': {
      id: 4,
      title: '5 ошибок новичков в фитнесе и как их избежать',
      seoTitle: 'Ошибки новичков в фитнесе: как тренироваться правильно',
      seoDescription: 'Разбираем самые частые ошибки новичков в тренажерном зале и домашних тренировках. Советы по технике, мотивации и безопасности.',
      excerpt: 'Начинаете заниматься фитнесом? Узнайте, какие ошибки совершают новички и как их избежать для быстрого прогресса.',
      content: `
        <div class="prose prose-invert max-w-none">
          <h2 class="text-3xl font-bold mb-6 text-red-400">Топ-5 ошибок новичков</h2>
          <ol class="list-decimal pl-6 text-zinc-200 space-y-2">
            <li><span class="font-semibold text-red-400">Отсутствие разминки:</span> увеличивает риск травм.</li>
            <li><span class="font-semibold text-red-400">Слишком большие нагрузки:</span> ведут к перетренированности.</li>
            <li><span class="font-semibold text-red-400">Неправильная техника:</span> снижает эффективность и может привести к травмам.</li>
            <li><span class="font-semibold text-red-400">Пропуск восстановления:</span> мышцы не успевают восстановиться.</li>
            <li><span class="font-semibold text-red-400">Отсутствие цели:</span> без плана сложно отслеживать прогресс.</li>
          </ol>
          <div class="bg-red-500/10 border border-red-500/30 p-6 rounded-lg mt-8">
            <h4 class="text-lg font-semibold mb-2 text-red-400">Совет:</h4>
            <p class="text-zinc-200">Составьте индивидуальный план тренировок и следите за техникой выполнения упражнений.</p>
          </div>
        </div>
      `,
      image: 'https://images.unsplash.com/photo-1675910516854-5bb63390d162?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'workouts',
      author: 'Алексей Иванов',
      authorAvatar: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      authorBio: 'Тренер по фитнесу, специализация — работа с новичками.',
      readTime: '5 мин',
      publishDate: '2024-01-08',
      views: 1420,
      likes: 54,
      bookmarks: 18,
      tags: ['ошибки', 'новички', 'мотивация', 'техника'],
      relatedArticles: [1, 2, 3]
    },
    '5': {
      id: 5,
      title: 'Как создать домашний спортзал: Полное руководство по выбору оборудования',
      seoTitle: 'Домашний спортзал: гид по выбору оборудования 2024',
      seoDescription: 'Создайте идеальный домашний спортзал с нашим подробным руководством. Обзор оборудования, планирование пространства и бюджет.',
      excerpt: 'Пошаговое руководство по созданию функционального домашнего спортзала. От выбора места до покупки оборудования.',
      content: `
        <div class="prose prose-invert max-w-none">
          <div class="bg-gradient-to-r from-blue-500/10 to-cyan-600/10 border border-blue-500/20 backdrop-blur-sm p-8 mb-10 rounded-2xl">
            <h3 class="text-2xl font-bold mb-4 text-blue-400 flex items-center font-heading">
              <svg class="w-7 h-7 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
              Преимущества домашнего спортзала
            </h3>
            <ul class="text-zinc-200 space-y-3 text-lg font-body">
              <li class="flex items-center"><span class="text-green-400 mr-3">✓</span> Экономия на абонементе в долгосрочной перспективе</li>
              <li class="flex items-center"><span class="text-green-400 mr-3">✓</span> Тренировки в любое время без очередей</li>
              <li class="flex items-center"><span class="text-green-400 mr-3">✓</span> Персональная музыка и атмосфера</li>
              <li class="flex items-center"><span class="text-green-400 mr-3">✓</span> Гигиена и безопасность</li>
              <li class="flex items-center"><span class="text-green-400 mr-3">✓</span> Возможность тренироваться всей семьёй</li>
            </ul>
          </div>

          <h2 class="text-4xl font-bold mb-8 text-blue-400 font-heading">Планирование пространства</h2>

          <p class="text-zinc-200 mb-8 leading-relaxed text-lg font-body">
            Первый шаг к созданию домашнего спортзала — правильное планирование пространства.
            Даже в небольшой квартире можно организовать функциональную тренировочную зону.
          </p>

          <div class="grid lg:grid-cols-2 gap-8 mb-12">
            <div class="bg-zinc-900/80 backdrop-blur-sm p-8 rounded-2xl border border-zinc-700">
              <h4 class="text-2xl font-semibold mb-6 text-blue-400 font-heading">Минимальные требования:</h4>
              <ul class="text-zinc-200 space-y-4 font-body text-lg">
                <li class="flex items-start">
                  <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4 mt-1 flex-shrink-0">1</span>
                  Площадь: от 6-8 кв. метров
                </li>
                <li class="flex items-start">
                  <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4 mt-1 flex-shrink-0">2</span>
                  Высота потолков: минимум 2.5 метра
                </li>
                <li class="flex items-start">
                  <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4 mt-1 flex-shrink-0">3</span>
                  Хорошая вентиляция или окно
                </li>
                <li class="flex items-start">
                  <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4 mt-1 flex-shrink-0">4</span>
                  Ровный пол, желательно нескользящий
                </li>
              </ul>
            </div>
            <div class="space-y-6">
              <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80"
                   alt="Домашний спортзал"
                   class="rounded-2xl w-full h-80 object-cover shadow-2xl"/>
              <div class="bg-gradient-to-r from-blue-500/20 to-cyan-600/20 border border-blue-500/30 p-6 rounded-xl">
                <h5 class="font-semibold text-blue-400 mb-3 font-heading">💡 Совет от экспертов:</h5>
                <p class="text-zinc-200 font-body">
                  Зеркало увеличивает визуальное пространство и помогает контролировать технику упражнений.
                </p>
              </div>
            </div>
          </div>

          <h2 class="text-4xl font-bold mb-8 text-blue-400 font-heading">Базовое оборудование</h2>

          <div class="grid md:grid-cols-3 gap-8 mb-12">
            <div class="bg-gradient-to-br from-green-500/20 to-emerald-600/20 border border-green-500/30 p-8 rounded-2xl backdrop-blur-sm">
              <div class="text-4xl mb-4">💪</div>
              <h4 class="text-xl font-bold mb-4 text-green-400 font-heading">Бюджетный вариант</h4>
              <p class="text-white font-bold text-2xl mb-2">$200-500</p>
              <ul class="text-zinc-300 space-y-2 font-body">
                <li>• Набор гантелей</li>
                <li>• Коврик для йоги</li>
                <li>• Эспандеры</li>
                <li>• Скакалка</li>
                <li>• Турник настенный</li>
              </ul>
            </div>

            <div class="bg-gradient-to-br from-yellow-500/20 to-orange-600/20 border border-yellow-500/30 p-8 rounded-2xl backdrop-blur-sm">
              <div class="text-4xl mb-4">🏋️</div>
              <h4 class="text-xl font-bold mb-4 text-yellow-400 font-heading">Средний уровень</h4>
              <p class="text-white font-bold text-2xl mb-2">$500-1500</p>
              <ul class="text-zinc-300 space-y-2 font-body">
                <li>• Регулируемые гантели</li>
                <li>• Скамья для жима</li>
                <li>• Штанга с блинами</li>
                <li>• Многофункциональный тренажёр</li>
                <li>• Беговая дорожка</li>
              </ul>
            </div>

            <div class="bg-gradient-to-br from-red-500/20 to-purple-600/20 border border-red-500/30 p-8 rounded-2xl backdrop-blur-sm">
              <div class="text-4xl mb-4">🔥</div>
              <h4 class="text-xl font-bold mb-4 text-red-400 font-heading">Профессиональный</h4>
              <p class="text-white font-bold text-2xl mb-2">$1500+</p>
              <ul class="text-zinc-300 space-y-2 font-body">
                <li>• Силовая рама</li>
                <li>• Профессиональные тренажёры</li>
                <li>• Кардио-зона</li>
                <li>• Зеркальная стена</li>
                <li>• Качественное покрытие</li>
              </ul>
            </div>
          </div>

          <h2 class="text-4xl font-bold mb-8 text-blue-400 font-heading">Пошаговый план создания</h2>

          <div class="space-y-8 mb-12">
            <div class="bg-zinc-900/80 backdrop-blur-sm p-8 rounded-2xl border border-zinc-700">
              <h4 class="text-2xl font-semibold mb-6 text-blue-400 font-heading flex items-center">
                <span class="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl mr-4">1</span>
                Определите бюджет и цели
              </h4>
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 class="text-lg font-semibold text-white mb-3 font-heading">Вопросы для размышления:</h5>
                  <ul class="text-zinc-200 space-y-2 font-body">
                    <li>• Какой максимальный бюджет?</li>
                    <li>• Какие виды тренировок планируете?</li>
                    <li>• Сколько времени будете заниматься?</li>
                    <li>• Кто ещё будет пользоваться залом?</li>
                  </ul>
                </div>
                <div class="bg-blue-500/10 p-6 rounded-xl border border-blue-500/20">
                  <h5 class="font-semibold text-blue-400 mb-3 font-heading">Приоритизация:</h5>
                  <p class="text-zinc-200 font-body">
                    Начните с базового оборудования для ваших основных целей.
                    Расширяйте арсенал постепенно.
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-zinc-900/80 backdrop-blur-sm p-8 rounded-2xl border border-zinc-700">
              <h4 class="text-2xl font-semibold mb-6 text-blue-400 font-heading flex items-center">
                <span class="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl mr-4">2</span>
                Выберите и подготовьте место
              </h4>
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 class="text-lg font-semibold text-white mb-3 font-heading">Подготовка помещения:</h5>
                  <ul class="text-zinc-200 space-y-2 font-body">
                    <li>• Освободите пространство</li>
                    <li>• Проверьте электропроводку</li>
                    <li>• Установите дополнительные розетки</li>
                    <li>• Рассмотрите звукоизоляцию</li>
                  </ul>
                </div>
                <div>
                  <h5 class="text-lg font-semibold text-white mb-3 font-heading">Покрытие пола:</h5>
                  <ul class="text-zinc-200 space-y-2 font-body">
                    <li>• Резиновые маты (лучший выбор)</li>
                    <li>• Спортивный линолеум</li>
                    <li>• Пазловые коврики</li>
                    <li>• Специальное покрытие для залов</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-blue-500 to-cyan-600 p-8 rounded-2xl text-center mb-12">
            <h4 class="text-2xl font-bold mb-4 text-white font-heading">Нужна помощь в планировании?</h4>
            <p class="text-blue-100 mb-6 text-lg font-body leading-relaxed">
              Наши эксперты помогут создать идеальный домашний спортзал под ваши потребности и бюджет
            </p>
            <button class="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 text-lg shadow-lg transform hover:scale-105">
              Получить консультацию
            </button>
          </div>
        </div>
      `,
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'equipment',
      author: 'Денис Строев',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      authorBio: 'Специалист по спортивному оборудованию, консультант по домашним спортзалам.',
      readTime: '15 мин',
      publishDate: '2024-01-20',
      views: 3854,
      likes: 127,
      bookmarks: 89,
      tags: ['домашний зал', 'оборудование', 'планирование', 'бюджет'],
      relatedArticles: [1, 6, 7]
    },
    '6': {
      id: 6,
      title: 'Кардио или силовые тренировки: Что выбрать для похудения?',
      seoTitle: 'Кардио vs силовые тренировки для похудения: научный подход',
      seoDescription: 'Узнайте, что эффективнее для сжигания жира: кардио или силовые тренировки. Научные исследования и практические рекомендации.',
      excerpt: 'Разбираем мифы о кардио и силовых тренировках. Что действительно работает для жиросжигания?',
      content: `
        <div class="prose prose-invert max-w-none">
          <div class="bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/20 backdrop-blur-sm p-8 mb-10 rounded-2xl">
            <h3 class="text-2xl font-bold mb-4 text-purple-400 flex items-center font-heading">
              <svg class="w-7 h-7 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              Главный секрет похудения
            </h3>
            <p class="text-zinc-200 text-lg font-body leading-relaxed">
              Похудение происходит только при дефиците калорий. И кардио, и силовые тренировки могут помочь создать этот дефицит, но работают они по-разному.
            </p>
          </div>

          <h2 class="text-4xl font-bold mb-8 text-purple-400 font-heading">Кардиотренировки: плюсы и минусы</h2>

          <div class="grid lg:grid-cols-2 gap-8 mb-12">
            <div class="bg-green-500/10 border border-green-500/20 p-8 rounded-2xl backdrop-blur-sm">
              <h4 class="text-2xl font-semibold mb-6 text-green-400 font-heading">✅ Преимущества кардио:</h4>
              <ul class="text-zinc-200 space-y-3 font-body text-lg">
                <li class="flex items-start">
                  <span class="text-green-400 mr-3">•</span>
                  Высокий расход калорий во время тренировки
                </li>
                <li class="flex items-start">
                  <span class="text-green-400 mr-3">•</span>
                  Улучшение сердечно-сосудистой системы
                </li>
                <li class="flex items-start">
                  <span class="text-green-400 mr-3">•</span>
                  Быстрые видимые результаты на весах
                </li>
                <li class="flex items-start">
                  <span class="text-green-400 mr-3">•</span>
                  Не требует сложного оборудования
                </li>
                <li class="flex items-start">
                  <span class="text-green-400 mr-3">•</span>
                  Снижение стрессса и улучшение настроения
                </li>
              </ul>
            </div>
            <div class="bg-red-500/10 border border-red-500/20 p-8 rounded-2xl backdrop-blur-sm">
              <h4 class="text-2xl font-semibold mb-6 text-red-400 font-heading">❌ Недостатки кардио:</h4>
              <ul class="text-zinc-200 space-y-3 font-body text-lg">
                <li class="flex items-start">
                  <span class="text-red-400 mr-3">•</span>
                  Потеря мышечной массы при длительных сессиях
                </li>
                <li class="flex items-start">
                  <span class="text-red-400 mr-3">•</span>
                  Адаптация организма и снижение эффективности
                </li>
                <li class="flex items-start">
                  <span class="text-red-400 mr-3">•</span>
                  Не влияет на метаболизм в покое
                </li>
                <li class="flex items-start">
                  <span class="text-red-400 mr-3">•</span>
                  Риск перетренированности
                </li>
                <li class="flex items-start">
                  <span class="text-red-400 mr-3">•</span>
                  Может повышать аппетит
                </li>
              </ul>
            </div>
          </div>

          <h2 class="text-4xl font-bold mb-8 text-purple-400 font-heading">Силовые тренировки: почему они эффективны</h2>

          <div class="bg-zinc-900/80 backdrop-blur-sm p-8 rounded-2xl border border-zinc-700 mb-12">
            <h4 class="text-2xl font-semibold mb-6 text-purple-400 font-heading">🔥 Эффект "дожигания"</h4>
            <p class="text-zinc-200 mb-6 leading-relaxed text-lg font-body">
              После силовой тренировки организм продолжает тратить энергию на восстановление мышц в течение 24-48 часов. Это называется EPOC (избыточное потребление кислорода после тренировки).
            </p>

            <div class="grid md:grid-cols-3 gap-6">
              <div class="bg-purple-500/20 p-6 rounded-xl text-center">
                <div class="text-3xl font-bold text-white mb-2">+15%</div>
                <p class="text-purple-300 font-body">Ускорение метаболизма после тренировки</p>
              </div>
              <div class="bg-purple-500/20 p-6 rounded-xl text-center">
                <div class="text-3xl font-bold text-white mb-2">48ч</div>
                <p class="text-purple-300 font-body">Длительность эффекта дожигания</p>
              </div>
              <div class="bg-purple-500/20 p-6 rounded-xl text-center">
                <div class="text-3xl font-bold text-white mb-2">+30%</div>
                <p class="text-purple-300 font-body">Дополнительные калории</p>
              </div>
            </div>
          </div>

          <h2 class="text-4xl font-bold mb-8 text-purple-400 font-heading">Научные исследования</h2>

          <div class="bg-blue-500/10 border border-blue-500/20 p-8 rounded-2xl mb-12">
            <h4 class="text-xl font-semibold mb-4 text-blue-400 font-heading">Исследование Duke University (2012)</h4>
            <div class="grid md:grid-cols-3 gap-6 mb-6">
              <div class="text-center">
                <h5 class="font-semibold text-white mb-2 font-heading">Только кардио</h5>
                <p class="text-2xl font-bold text-red-400 mb-1">-3.5 кг</p>
                <p class="text-sm text-zinc-400 font-body">жировой массы</p>
              </div>
              <div class="text-center">
                <h5 class="font-semibold text-white mb-2 font-heading">Только силовые</h5>
                <p class="text-2xl font-bold text-yellow-400 mb-1">-1.8 кг</p>
                <p class="text-sm text-zinc-400 font-body">жировой массы</p>
              </div>
              <div class="text-center">
                <h5 class="font-semibold text-white mb-2 font-heading">Комбинированно</h5>
                <p class="text-2xl font-bold text-green-400 mb-1">-4.2 кг</p>
                <p class="text-sm text-zinc-400 font-body">жировой массы</p>
              </div>
            </div>
            <p class="text-zinc-300 font-body leading-relaxed">
              <strong>Вывод:</strong> Комбинация кардио и силовых тренировок показала лучшие результаты для жиросжигания.
            </p>
          </div>

          <h2 class="text-4xl font-bold mb-8 text-purple-400 font-heading">Оптимальная стратегия</h2>

          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-gradient-to-br from-purple-500/20 to-pink-600/20 border border-purple-500/30 p-8 rounded-2xl">
              <h4 class="text-2xl font-bold mb-6 text-purple-400 font-heading">💪 Приоритет: силовые</h4>
              <div class="space-y-4">
                <div class="border-l-4 border-purple-500 pl-4">
                  <h5 class="font-semibold text-white mb-2 font-heading">3-4 раза в неделю</h5>
                  <p class="text-zinc-300 font-body">Полнотелые силовые тренировки</p>
                </div>
                <div class="border-l-4 border-pink-500 pl-4">
                  <h5 class="font-semibold text-white mb-2 font-heading">2-3 раза в неделю</h5>
                  <p class="text-zinc-300 font-body">HIIT кардио по 20-30 минут</p>
                </div>
                <div class="border-l-4 border-purple-300 pl-4">
                  <h5 class="font-semibold text-white mb-2 font-heading">Ежедневно</h5>
                  <p class="text-zinc-300 font-body">Лёгкая активность (ходьба, лестница)</p>
                </div>
              </div>
            </div>
            <div class="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 border border-blue-500/30 p-8 rounded-2xl">
              <h4 class="text-2xl font-bold mb-6 text-blue-400 font-heading">📋 Недельный план</h4>
              <ul class="space-y-3 text-zinc-200 font-body">
                <li class="flex justify-between border-b border-zinc-700 pb-2">
                  <span>Понедельник</span>
                  <span class="text-purple-400">Силовая (верх)</span>
                </li>
                <li class="flex justify-between border-b border-zinc-700 pb-2">
                  <span>Вторник</span>
                  <span class="text-pink-400">HIIT 25 мин</span>
                </li>
                <li class="flex justify-between border-b border-zinc-700 pb-2">
                  <span>Среда</span>
                  <span class="text-purple-400">Силовая (низ)</span>
                </li>
                <li class="flex justify-between border-b border-zinc-700 pb-2">
                  <span>Четверг</span>
                  <span class="text-pink-400">Кардио 30 мин</span>
                </li>
                <li class="flex justify-between border-b border-zinc-700 pb-2">
                  <span>Пятница</span>
                  <span class="text-purple-400">Силовая (всё тело)</span>
                </li>
                <li class="flex justify-between border-b border-zinc-700 pb-2">
                  <span>Суббота</span>
                  <span class="text-blue-400">Активный отдых</span>
                </li>
                <li class="flex justify-between">
                  <span>Воскресенье</span>
                  <span class="text-zinc-500">Отдых</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="bg-gradient-to-r from-purple-500 to-pink-600 p-8 rounded-2xl text-center mb-12">
            <h4 class="text-2xl font-bold mb-4 text-white font-heading">Хотите персональный план?</h4>
            <p class="text-purple-100 mb-6 text-lg font-body leading-relaxed">
              Составим индивидуальную программу тренировок под ваши цели и возможности
            </p>
            <button class="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-300 text-lg shadow-lg transform hover:scale-105">
              Получить план тренировок
            </button>
          </div>
        </div>
      `,
      image: 'https://images.unsplash.com/photo-1687184144779-51a366352458?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'workouts',
      author: 'Анна Фитнес',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      authorBio: 'Сертифицированный тренер по фитнесу, специалист по жиросжиганию и композиции тела.',
      readTime: '12 мин',
      publishDate: '2024-01-18',
      views: 4287,
      likes: 198,
      bookmarks: 156,
      tags: ['кардио', 'силовые', 'похудение', 'жиросжигание'],
      relatedArticles: [1, 2, 4]
    }
  }), []);

  const article = articlesData[params.id as string];

  // Mock comments data with enhanced structure
  const mockComments: Comment[] = useMemo(() => [
    {
      id: 1,
      author: 'Максим Петров',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'Отличная статья! Особенно понравилась детальная программа тренировок. Уже начал заниматься по ней дома и вижу результаты уже через неделю!',
      date: '2024-01-16',
      likes: 12,
      dislikes: 0,
      verified: true
    },
    {
      id: 2,
      author: 'Анна Смирнова',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'Спасибо за подробные объяснения техники! Раньше делала отжимания неправильно, теперь исправила ошибки. Чувствую, что упражнения стали намного эффективнее.',
      date: '2024-01-17',
      likes: 8,
      dislikes: 0
    },
    {
      id: 3,
      author: 'Дмитрий Волков',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'Можете ли вы добавить упражнения для спины? В статье их немного, а хочется комплексную программу.',
      date: '2024-01-18',
      likes: 5,
      dislikes: 1,
      replies: [
        {
          id: 4,
          author: 'Артём Волков',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
          content: 'Отличная идея! Планирую написать отдельную статью об упражнениях для спины без оборудования. Следите за обновлениями!',
          date: '2024-01-18',
          likes: 3,
          dislikes: 0,
          verified: true
        }
      ]
    }
  ], []);

  useEffect(() => {
    setComments(mockComments);

    // Reading progress tracking with throttling
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = (window.scrollY / totalHeight) * 100;
          setReadingProgress(Math.min(progress, 100));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mockComments]);

  const handleSubmitComment = () => {
    if (newComment.trim() && commentAuthor.trim()) {
      const comment: Comment = {
        id: comments.length + 1,
        author: commentAuthor,
        content: newComment,
        date: new Date().toISOString().split('T')[0],
        likes: 0,
        dislikes: 0
      };
      setComments([...comments, comment]);
      setNewComment('');
      setCommentAuthor('');
      setCommentEmail('');
    }
  };

  const handleLikeComment = (commentId: number) => {
    setComments(comments.map(comment =>
      comment.id === commentId
        ? { ...comment, likes: comment.likes + 1 }
        : comment
    ));
  };

   if (!article) {
    return (
      <div className="min-h-screen bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 font-heading">Статья не найдена</h1>
          <Link href="/blog">
            <Button className="bg-gradient-to-r from-orange-500 to-red-600 font-ui">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Вернуться к блогу
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-zinc-800/50 z-50 backdrop-blur-sm">
        <div
          className="h-full bg-gradient-to-r from-orange-500 to-red-600 transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <article className="py-6 sm:py-8">
        <div className="container mx-auto px-2 sm:px-4 max-w-4xl">
          {/* Navigation */}
          <div className="mb-6 sm:mb-8">
            <Link href="/blog">
              <Button variant="ghost" className="text-zinc-400 hover:text-white mb-4 font-ui">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Назад к блогу
              </Button>
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-8 sm:mb-12">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-ui">
                {article.category === 'workouts' ? 'Тренировки' :
                  article.category === 'nutrition' ? 'Питание' : 'Здоровье'}
              </Badge>
              <div className="flex items-center text-xs sm:text-sm text-zinc-400 gap-2 sm:gap-4 font-body">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(article.publishDate).toLocaleDateString('ru-RU')}
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {article.readTime}
                </span>
                <span className="flex items-center">
                  <Eye className="w-4 h-4 mr-1" />
                  {article.views.toLocaleString()}
                </span>
              </div>
            </div>

            <h1 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 sm:mb-8 text-shadow-strong leading-tight">
              {article.title}
            </h1>
            <p className="text-base sm:text-xl text-zinc-300 mb-6 sm:mb-10 font-body leading-relaxed">
              {article.excerpt}
            </p>

            {/* Author Info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6 mb-8 sm:mb-10">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <Avatar className="w-12 h-12 sm:w-16 sm:h-16 ring-2 ring-orange-500/30">
                  <AvatarImage src={article.authorAvatar} alt={article.author} />
                  <AvatarFallback className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold">
                    {article.author[0]}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <p className="font-semibold text-white text-base sm:text-lg font-heading">{article.author}</p>
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 font-body max-w-md">{article.authorBio}</p>
                </div>
              </div>
              {/* Action Buttons */}
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsLiked(!isLiked)}
                  className={`border-zinc-700 font-ui transition-all ${isLiked ? 'text-red-500 border-red-500 bg-red-500/10' : 'text-zinc-400 hover:border-red-500 hover:text-red-500'}`}
                >
                  <Heart className={`w-4 h-4 mr-1 ${isLiked ? 'fill-current' : ''}`} />
                  {article.likes + (isLiked ? 1 : 0)}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`border-zinc-700 font-ui transition-all ${isBookmarked ? 'text-orange-500 border-orange-500 bg-orange-500/10' : 'text-zinc-400 hover:border-orange-500 hover:text-orange-500'}`}
                >
                  <Bookmark className={`w-4 h-4 mr-1 ${isBookmarked ? 'fill-current' : ''}`} />
                  {article.bookmarks + (isBookmarked ? 1 : 0)}
                </Button>
                <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-400 hover:border-blue-500 hover:text-blue-500 font-ui">
                  <Share className="w-4 h-4 mr-1" />
                  Поделиться
                </Button>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-52 xs:h-64 sm:h-80 md:h-[420px] rounded-2xl overflow-hidden mb-8 sm:mb-12 shadow-2xl">
              <div
                className="w-full h-full bg-cover bg-center transform hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url(${article.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </header>

          {/* Article Content */}
          <div
            className="mb-12 sm:mb-16 text-shadow-soft prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Tags */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center font-heading">
              <Tag className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-orange-500" />
              Теги статьи
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {article.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="border-zinc-600 text-zinc-300 hover:border-orange-500 hover:text-orange-500 transition-all cursor-pointer font-body px-3 py-2">
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Comments Section */}
          <section className="mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center font-heading">
              <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 mr-3 sm:mr-4 text-orange-500" />
              Комментарии ({comments.length})
            </h3>

            {/* Comment Form */}
            <Card className="bg-zinc-900/50 border-zinc-800 mb-7 sm:mb-10 backdrop-blur-sm">
              <CardContent className="p-4 sm:p-8">
                <h4 className="text-base sm:text-xl font-semibold mb-4 sm:mb-6 font-heading">Оставить комментарий</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <Label htmlFor="name" className="text-white font-body font-medium">Имя *</Label>
                    <Input
                      id="name"
                      value={commentAuthor}
                      onChange={(e) => setCommentAuthor(e.target.value)}
                      className="bg-zinc-800/50 border-zinc-700 text-white font-body mt-1 sm:mt-2"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white font-body font-medium">Email (опционально)</Label>
                    <Input
                      id="email"
                      type="email"
                      value={commentEmail}
                      onChange={(e) => setCommentEmail(e.target.value)}
                      className="bg-zinc-800/50 border-zinc-700 text-white font-body mt-1 sm:mt-2"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="mb-4 sm:mb-6">
                  <Label htmlFor="comment" className="text-white font-body font-medium">Комментарий *</Label>
                  <Textarea
                    id="comment"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="bg-zinc-800/50 border-zinc-700 text-white font-body min-h-[120px] sm:min-h-[150px] mt-1 sm:mt-2"
                    placeholder="Поделитесь своими мыслями о статье..."
                  />
                </div>
                <Button
                  onClick={handleSubmitComment}
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 font-ui"
                  disabled={!newComment.trim() || !commentAuthor.trim()}
                >
                  Опубликовать комментарий
                </Button>
              </CardContent>
            </Card>

            {/* Comments List */}
            <div className="space-y-6 sm:space-y-8">
              {comments.map((comment) => (
                <Card key={comment.id} className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
                  <CardContent className="p-4 sm:p-8">
                    <div className="flex items-start space-x-2 sm:space-x-4">
                      <Avatar className="w-8 h-8 sm:w-12 sm:h-12 ring-2 ring-zinc-700">
                        <AvatarImage src={comment.avatar} alt={comment.author} />
                        <AvatarFallback className="bg-gradient-to-r from-zinc-700 to-zinc-600 text-white font-bold">
                          {comment.author[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 sm:space-x-3 mb-1 sm:mb-3">
                          <span className="font-semibold text-white text-xs sm:text-base font-heading">{comment.author}</span>
                          {comment.verified && <Check className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />}
                          <span className="text-[10px] sm:text-xs text-zinc-400 font-body">{comment.date}</span>
                        </div>
                        <p className="text-zinc-200 mb-2 sm:mb-4 leading-relaxed font-body text-xs sm:text-lg">{comment.content}</p>
                        <div className="flex items-center space-x-3 sm:space-x-6">
                          <button
                            onClick={() => handleLikeComment(comment.id)}
                            className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-zinc-400 hover:text-green-400 transition-colors font-body"
                          >
                            <ThumbsUp className="w-4 h-4" />
                            <span>{comment.likes}</span>
                          </button>
                          <button className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-zinc-400 hover:text-red-400 transition-colors font-body">
                            <ThumbsDown className="w-4 h-4" />
                            <span>{comment.dislikes}</span>
                          </button>
                          <button className="text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors font-body">
                            Ответить
                          </button>
                          <button className="text-xs sm:text-sm text-zinc-400 hover:text-red-400 transition-colors">
                            <Flag className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Replies */}
                    {comment.replies && comment.replies.length > 0 && (
                      <div className="ml-5 sm:ml-16 mt-4 sm:mt-6 space-y-4 sm:space-y-6">
                        {comment.replies.map((reply) => (
                          <div key={reply.id} className="flex items-start space-x-2 sm:space-x-4 bg-zinc-800/30 p-2 sm:p-6 rounded-xl backdrop-blur-sm">
                            <Avatar className="w-7 h-7 sm:w-10 sm:h-10 ring-2 ring-zinc-600">
                              <AvatarImage src={reply.avatar} alt={reply.author} />
                              <AvatarFallback className="bg-gradient-to-r from-zinc-600 to-zinc-500 text-white font-bold">
                                {reply.author[0]}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center space-x-1 sm:space-x-2 mb-1 sm:mb-2">
                                <span className="font-semibold text-white text-xs sm:text-sm font-heading">{reply.author}</span>
                                {reply.verified && <Check className="w-3 h-3 text-blue-500" />}
                                <span className="text-[9px] sm:text-xs text-zinc-400 font-body">{reply.date}</span>
                              </div>
                              <p className="text-zinc-200 text-xs sm:text-sm leading-relaxed font-body">{reply.content}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Related Articles */}
          <section>
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center font-heading">
              <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-4 text-orange-500" />
              Похожие статьи
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-8">
              {article.relatedArticles.map((relatedId) => {
                const relatedArticle = articlesData[relatedId.toString()];
                if (!relatedArticle) return null;

                return (
                  <Card key={relatedId} className="bg-zinc-900/50 border-zinc-800 overflow-hidden hover:border-orange-500/50 transition-all group backdrop-blur-sm">
                    <div className="relative h-28 xs:h-36 sm:h-48">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url(${relatedArticle.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    </div>
                    <CardContent className="p-3 sm:p-6">
                      <h4 className="font-bold mb-1 sm:mb-3 line-clamp-2 group-hover:text-orange-500 transition-colors font-heading text-xs xs:text-sm sm:text-lg leading-tight">
                        {relatedArticle.title}
                      </h4>
                      <p className="text-[11px] xs:text-xs sm:text-sm text-zinc-400 mb-2 sm:mb-4 line-clamp-2 font-body leading-relaxed">{relatedArticle.excerpt}</p>
                      <Link href={`/blog/${relatedId}`}>
                        <Button size="sm" className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 font-ui">
                          Читать статью
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>
        </div>
      </article>
    </div>
  );
};

export default BlogArticlePage;