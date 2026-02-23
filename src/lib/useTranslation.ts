import { useState, useEffect } from 'react';
import en from '../i18n/en.json';
import es from '../i18n/es.json';

const translations = { en, es };

export function useTranslation() {
  const [lang, setLang] = useState<'en' | 'es'>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') as 'en' | 'es' | null;
    if (savedLang) setLang(savedLang);

    const handleLanguageChange = (e: CustomEvent) => {
      setLang(e.detail);
    };

    window.addEventListener('languageChange', handleLanguageChange as EventListener);
    return () => window.removeEventListener('languageChange', handleLanguageChange as EventListener);
  }, []);

  return { t: translations[lang], lang };
}
