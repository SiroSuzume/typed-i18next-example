import React, { Suspense } from 'react';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { i18n as i18nextConfig } from '../next-i18next.config';
import { withI18next } from 'storybook-addon-i18next';

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    whitelist: i18nextConfig.locales,
    lng: i18nextConfig.defaultLocale,
    supportedLngs: i18nextConfig.locales,
    fallbackLng: i18nextConfig.defaultLocale,
    interpolation: {
      escapeValue: false,
    },
  });

export const decorators = [
  withI18next({
    i18n: i18next,
    languages: {
      ja: '日本語',
      en: 'English',
      zh: '中文',
    },
  }),
  (Story) => (
    <Suspense fallback="loading...">
      <Story />
    </Suspense>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
