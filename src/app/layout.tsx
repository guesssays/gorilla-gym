import type { Metadata } from 'next';
import { Inter, Poppins, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: 'GORILLA GYM - Современная сеть спортивных залов в Ташкенте',
  description:
    'Профессиональные тренеры, качественное оборудование, индивидуальный подход к каждому клиенту. Записывайтесь на пробную тренировку!',
  keywords: [
    'спортзал',
    'фитнес',
    'тренировки',
    'Ташкент',
    'тренажерный зал',
    'crossfit',
    'йога',
    'пилатес',
  ],
  authors: [{ name: 'GORILLA GYM Team' }],
  creator: 'GORILLA GYM',
  publisher: 'GORILLA GYM',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://gorillagym.uz'),
  alternates: {
    canonical: '/',
    languages: {
      ru: '/ru',
      uz: '/uz',
      en: '/en',
    },
  },
  openGraph: {
    title: 'GORILLA GYM - Современная сеть спортивных залов',
    description:
      'Профессиональные тренеры, качественное оборудование, индивидуальный подход к каждому клиенту.',
    url: 'https://gorillagym.uz',
    siteName: 'GORILLA GYM',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GORILLA GYM - Спортивные залы в Ташкенте',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GORILLA GYM - Современная сеть спортивных залов',
    description: 'Профессиональные тренеры, качественное оборудование, индивидуальный подход.',
    images: ['/twitter-image.jpg'],
    creator: '@gorillagym_uz',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#ea580c" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className={`${inter.className} font-body bg-black text-white antialiased`}>
        <LanguageProvider>
          <Header />
          {/* Централизованный контейнер для всех страниц */}
         
            <main className="flex-1 pt-16 md:pt-20">{children}</main>
            <Footer />
    
        </LanguageProvider>
      </body>
    </html>
  );
}
