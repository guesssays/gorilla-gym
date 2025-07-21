'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandTelegram,
  IconMapPin,
  IconPhone,
  IconMail,
  IconClock,
  IconArrowRight,
  IconHeart,
  IconUsers,
  IconAward,
  IconShieldCheck
} from '@tabler/icons-react';
import { AdjustmentsHorizontalIcon as IconBarbell } from '@heroicons/react/24/outline';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { key: 'workouts', href: '/workouts', icon: IconBarbell },
    { key: 'schedule', href: '/schedule', icon: IconClock },
    { key: 'membership', href: '/membership', icon: IconAward },
    { key: 'about', href: '/about', icon: IconUsers },
    { key: 'blog', href: '/blog', icon: IconHeart },
    { key: 'contacts', href: '/contacts', icon: IconMapPin },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      icon: IconBrandInstagram,
      href: 'https://instagram.com/gorillagym_uz',
      color: 'hover:text-pink-500',
      followers: '12.5K'
    },
    {
      name: 'YouTube',
      icon: IconBrandYoutube,
      href: 'https://youtube.com/@gorillagym',
      color: 'hover:text-red-500',
      followers: '8.2K'
    },
    {
      name: 'Telegram',
      icon: IconBrandTelegram,
      href: 'https://t.me/gorillagym_bot',
      color: 'hover:text-blue-500',
      followers: '5.1K'
    },
  ];

  const contactInfo = [
    {
      icon: IconMapPin,
      title: 'Адрес главного офиса',
      content: 'г. Ташкент, ул. Амира Темура, 123',
      link: 'https://maps.google.com'
    },
    {
      icon: IconPhone,
      title: 'Телефон',
      content: '+998 90 123 45 67',
      link: 'tel:+998901234567'
    },
    {
      icon: IconMail,
      title: 'Email',
      content: 'info@gorillagym.uz',
      link: 'mailto:info@gorillagym.uz'
    },
    {
      icon: IconClock,
      title: 'Время работы',
      content: '6:00 - 24:00 (ежедневно)',
      link: null
    },
  ];

  const features = [
    { icon: IconBarbell, text: 'Современное оборудование' },
    { icon: IconUsers, text: 'Опытные тренеры' },
    { icon: IconShieldCheck, text: 'Безопасность' },
    { icon: IconAward, text: 'Результат гарантирован' },
  ];

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center font-bold text-white text-xl shadow-glow">
                G
              </div>
              <div>
                <span className="text-xl font-bold font-heading text-white tracking-tight text-shadow-soft">
                  GORILLA
                </span>
                <span className="text-xl font-bold font-heading text-orange-500 ml-1 tracking-tight text-shadow-soft">
                  GYM
                </span>
              </div>
            </div>

            <p className="text-zinc-400 mb-6 leading-relaxed font-body">
              Современная сеть спортивных залов в Ташкенте.
              Профессиональные тренеры, качественное оборудование,
              индивидуальный подход к каждому клиенту.
            </p>

            {/* Features */}
            <div className="space-y-3 mb-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <feature.icon className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <span className="text-zinc-400 font-body">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white font-ui">Подписаться на новости</h4>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Ваш email"
                  className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 font-body text-sm"
                />
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 shadow-glow"
                >
                  <IconArrowRight className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-zinc-500 font-body">
                Получайте советы по тренировкам и специальные предложения
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 font-heading">
              Быстрые ссылки
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 text-zinc-400 hover:text-orange-500 transition-colors duration-300 group"
                  >
                    <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-body">{t(link.key)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 font-heading">
              Контакты
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <div className="flex items-start gap-3 group">
                    <contact.icon className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <div className="text-sm font-semibold text-zinc-300 font-ui mb-1">
                        {contact.title}
                      </div>
                      {contact.link ? (
                        <a
                          href={contact.link}
                          className="text-zinc-400 hover:text-orange-500 transition-colors duration-300 font-body text-sm"
                        >
                          {contact.content}
                        </a>
                      ) : (
                        <div className="text-zinc-400 font-body text-sm">{contact.content}</div>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 font-heading">
              Мы в соцсетях
            </h3>
            <div className="space-y-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg border border-zinc-700 hover:border-orange-500/50 transition-all duration-300 group ${social.color}`}
                >
                  <div className="flex items-center gap-3">
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <div className="font-semibold text-white font-ui text-sm">{social.name}</div>
                      <div className="text-xs text-zinc-400 font-body">{social.followers} подписчиков</div>
                    </div>
                  </div>
                  <IconArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-current group-hover:translate-x-1 transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Working Hours Banner */}
            <div className="bg-gradient-to-r from-orange-500/20 to-red-600/20 border border-orange-500/30 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <IconClock className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-semibold text-orange-400 font-ui">Работаем для вас</span>
              </div>
              <p className="text-xs text-zinc-300 font-body">
                6:00 - 24:00 ежедневно
                <br />
                Без выходных и праздников
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
            <div className="flex items-center gap-6 text-sm text-zinc-400">
              <span className="font-body">
                © 2024 GORILLA GYM. Все права защищены
              </span>
              <div className="hidden md:flex items-center gap-4">
                <Link href="/privacy" className="hover:text-orange-500 transition-colors font-body">
                  Политика конфиденциальности
                </Link>
                <Link href="/terms" className="hover:text-orange-500 transition-colors font-body">
                  Условия использования
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <span className="font-body">Создано с</span>
              <IconHeart className="w-4 h-4 text-red-500 animate-pulse" />
              <span className="font-body">в Ташкенте</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
