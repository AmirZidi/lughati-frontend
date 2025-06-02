'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

const I18nContext = createContext({
  locale: 'fr',
  setLocale: (_: string) => {}
});

export function LocaleProvider({ children, locale }: { children: ReactNode, locale: string }) {
  const [currentLocale, setCurrentLocale] = useState(locale);
  return (
    <I18nContext.Provider value={{ locale: currentLocale, setLocale: setCurrentLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useLocale() {
  return useContext(I18nContext);
}
