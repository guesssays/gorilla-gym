'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { IconMenu2, IconUser, IconCalendar } from '@tabler/icons-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { key: 'home', href: '/' },
    { key: 'workouts', href: '/workouts' },
    { key: 'schedule', href: '/schedule' },
    { key: 'membership', href: '/membership' },
    { key: 'about', href: '/about' },
    { key: 'blog', href: '/blog' },
    { key: 'contacts', href: '/contacts' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-strong border-b border-zinc-800/50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center font-bold text-white text-xl shadow-glow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-glow">
              G
            </div>
            {/* Показываем текст GORILLA GYM на мобильных и на десктопе */}
            <div className="flex flex-row items-center">
              <span className="text-lg font-bold font-heading text-white tracking-tight text-shadow-medium leading-none block sm:hidden">
                GORILLA&nbsp;
                <span className="text-orange-500">GYM</span>
              </span>
              <span className="hidden sm:block text-2xl font-bold font-heading text-white tracking-tight text-shadow-medium leading-none">
                GORILLA
              </span>
              <span className="hidden sm:block text-2xl font-bold font-heading text-orange-500 ml-1 tracking-tight text-shadow-medium leading-none">
                GYM
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-10">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="relative text-zinc-300 hover:text-orange-500 transition-all duration-200 font-medium font-condensed text-lg group px-2 py-2"
              >
                {t(item.key)}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-600 rounded-full transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 sm:gap-3 justify-center">
{/* Profile Icon Only — скрыта на мобилках */}
<Link href="/profile" className="hidden md:inline-flex">
  <Button
    variant="outline"
    size="icon"
    className="w-10 h-10 border-zinc-700 text-zinc-300 hover:bg-zinc-800/50 hover:border-orange-500 font-ui transition-all duration-200 flex items-center justify-center p-0"
    aria-label={t('profile')}
  >
    <IconUser className="w-5 h-5" />
  </Button>
</Link>

{/* Trial Booking Button — скрыта на мобилках */}
<Button
  className="hidden md:flex h-10 px-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 font-ui font-medium shadow-glow-sm hover:shadow-glow transition-all duration-200 transform hover:scale-105 items-center justify-center"
>
  <IconCalendar className="w-4 h-4 mr-2" />
  Пробная тренировка
</Button>


            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden text-zinc-300 hover:text-orange-500 hover:bg-zinc-800/50 transition-all duration-200 px-2"
                >
                  <IconMenu2 className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-zinc-900/95 backdrop-blur-strong border-zinc-800 w-80 max-w-full"
              >
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex items-center gap-3 pb-4 border-b border-zinc-800">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center font-bold text-white shadow-glow-sm">
                      G
                    </div>
                    <span className="text-lg font-bold font-heading text-white text-shadow-soft">
                      GORILLA&nbsp;
                      <span className="text-orange-500">GYM</span>
                    </span>
                  </div>

                  <nav className="flex flex-col gap-3">
                    {navItems.map((item) => (
                      <Link
                        key={item.key}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-zinc-300 hover:text-orange-500 transition-all duration-200 font-medium font-condensed text-lg p-3 rounded-lg hover:bg-zinc-800/50"
                      >
                        {t(item.key)}
                      </Link>
                    ))}
                  </nav>
   {/* Профиль и пробная тренировка рядом, одинаковой высоты */}
                  <div className="pt-4 border-t border-zinc-800 flex flex-row gap-3 min-w-0">
                    <Link href="/profile" onClick={() => setIsOpen(false)} className="flex-shrink-0">
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-10 h-10 border-zinc-700 text-zinc-300 hover:bg-zinc-800/50 hover:border-orange-500 font-ui flex items-center justify-center p-0"
                        aria-label={t('profile')}
                      >
                        <IconUser className="w-5 h-5" />
                      </Button>
                    </Link>
                    <Button
                      className="h-10 flex-1 min-w-0 flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 font-ui shadow-glow-sm px-4"
                      onClick={() => setIsOpen(false)}
                    >
                      <IconCalendar className="w-4 h-4 mr-2" />
                      Пробная тренировка
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
