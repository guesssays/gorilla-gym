export type Language = 'ru' | 'uz' | 'en';

interface TranslationMap {
  [key: string]: string;
}

export const translations: Record<Language, TranslationMap> = {
  ru: {
    // Navigation
    home: 'Главная',
    workouts: 'Направления',
    schedule: 'Расписание',
    membership: 'Абонементы',
    about: 'О нас',
    blog: 'Блог',
    contacts: 'Контакты',
    profile: 'Личный кабинет',

    // Hero Section
    heroTitle: 'GORILLA GYM',
    heroSubtitle: 'Твоя сила - наша гордость',
    heroDescription: 'Современная сеть спортивных залов в Ташкенте. Профессиональные тренеры, качественное оборудование, индивидуальный подход к каждому клиенту.',
    bookTrial: 'Записаться на пробную тренировку',

    // Workouts
    crossfit: 'Кроссфит',
    yoga: 'Йога',
    pilates: 'Пилатес',
    gym: 'Тренажёрный зал',
    womenFitness: 'Женский фитнес',

    crossfitDesc: 'Функциональные тренировки высокой интенсивности для развития силы, выносливости и гибкости.',
    yogaDesc: 'Гармоничное развитие тела и духа через древние практики йоги.',
    pilatesDesc: 'Система упражнений для укрепления мышц кора и улучшения осанки.',
    gymDesc: 'Классические силовые тренировки с профессиональным оборудованием.',
    womenFitnessDesc: 'Специально разработанные программы для женщин всех возрастов.',

    // Common
    learnMore: 'Подробнее',
    bookNow: 'Записаться',
    chooseTime: 'Выбрать время',
    price: 'Цена',
    duration: 'Длительность',
    trainer: 'Тренер',

    // Membership
    basicPlan: 'Базовый',
    premiumPlan: 'Премиум',
    vipPlan: 'VIP',

    // Contact
    address: 'Адрес',
    phone: 'Телефон',
    email: 'Email',
    workingHours: 'Время работы',

    // Forms
    name: 'Имя',
    phoneNumber: 'Номер телефона',
    email_field: 'Email',
    message: 'Сообщение',
    submit: 'Отправить',

    // Footer
    followUs: 'Следите за нами',
    allRightsReserved: 'Все права защищены',
  },

  uz: {
    // Navigation
    home: 'Bosh sahifa',
    workouts: 'Mashg\'ulotlar',
    schedule: 'Jadval',
    membership: 'Abonement',
    about: 'Biz haqimizda',
    blog: 'Blog',
    contacts: 'Aloqa',
    profile: 'Shaxsiy kabinet',

    // Hero Section
    heroTitle: 'GORILLA GYM',
    heroSubtitle: 'Sizning kuchingiz - bizning g\'ururumiz',
    heroDescription: 'Toshkentdagi zamonaviy sport zallari tarmog\'i. Professional murabbiylar, sifatli jihozlar, har bir mijozga individual yondashuv.',
    bookTrial: 'Sinov mashg\'ulotiga yozilish',

    // Workouts
    crossfit: 'Krossfit',
    yoga: 'Yoga',
    pilates: 'Pilates',
    gym: 'Sport zali',
    womenFitness: 'Ayollar fitnesi',

    crossfitDesc: 'Kuch, chidamlilik va moslashuvchanlikni rivojlantirish uchun yuqori intensivlikdagi funktsional mashqlar.',
    yogaDesc: 'Qadimiy yoga amaliyotlari orqali tana va ruhning uyg\'un rivojlanishi.',
    pilatesDesc: 'Asosiy mushaklar kuchini mustahkamlash va holatni yaxshilash uchun mashqlar tizimi.',
    gymDesc: 'Professional jihozlar bilan klassik kuch mashg\'ulotlari.',
    womenFitnessDesc: 'Barcha yoshdagi ayollar uchun maxsus ishlab chiqilgan dasturlar.',

    // Common
    learnMore: 'Batafsil',
    bookNow: 'Yozilish',
    chooseTime: 'Vaqtni tanlash',
    price: 'Narx',
    duration: 'Davomiyligi',
    trainer: 'Murabbiy',

    // Membership
    basicPlan: 'Asosiy',
    premiumPlan: 'Premium',
    vipPlan: 'VIP',

    // Contact
    address: 'Manzil',
    phone: 'Telefon',
    email: 'Email',
    workingHours: 'Ish vaqti',

    // Forms
    name: 'Ism',
    phoneNumber: 'Telefon raqami',
    email_field: 'Email',
    message: 'Xabar',
    submit: 'Jo\'natish',

    // Footer
    followUs: 'Bizni kuzatib boring',
    allRightsReserved: 'Barcha huquqlar himoyalangan',
  },

  en: {
    // Navigation
    home: 'Home',
    workouts: 'Workouts',
    schedule: 'Schedule',
    membership: 'Membership',
    about: 'About',
    blog: 'Blog',
    contacts: 'Contacts',
    profile: 'Profile',

    // Hero Section
    heroTitle: 'GORILLA GYM',
    heroSubtitle: 'Your strength is our pride',
    heroDescription: 'Modern gym network in Tashkent. Professional trainers, quality equipment, individual approach to each client.',
    bookTrial: 'Book a trial workout',

    // Workouts
    crossfit: 'CrossFit',
    yoga: 'Yoga',
    pilates: 'Pilates',
    gym: 'Gym',
    womenFitness: 'Women\'s Fitness',

    crossfitDesc: 'High-intensity functional training to develop strength, endurance and flexibility.',
    yogaDesc: 'Harmonious development of body and spirit through ancient yoga practices.',
    pilatesDesc: 'Exercise system to strengthen core muscles and improve posture.',
    gymDesc: 'Classic strength training with professional equipment.',
    womenFitnessDesc: 'Specially designed programs for women of all ages.',

    // Common
    learnMore: 'Learn more',
    bookNow: 'Book now',
    chooseTime: 'Choose time',
    price: 'Price',
    duration: 'Duration',
    trainer: 'Trainer',

    // Membership
    basicPlan: 'Basic',
    premiumPlan: 'Premium',
    vipPlan: 'VIP',

    // Contact
    address: 'Address',
    phone: 'Phone',
    email: 'Email',
    workingHours: 'Working hours',

    // Forms
    name: 'Name',
    phoneNumber: 'Phone number',
    email_field: 'Email',
    message: 'Message',
    submit: 'Submit',

    // Footer
    followUs: 'Follow us',
    allRightsReserved: 'All rights reserved',
  },
};

export const getTranslation = (lang: Language, key: string): string => {
  const langTranslations = translations[lang] as Record<string, string>;
  const ruTranslations = translations.ru as Record<string, string>;
  return langTranslations[key] || ruTranslations[key];
};
