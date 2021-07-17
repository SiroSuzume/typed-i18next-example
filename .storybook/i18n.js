import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { defaultLocale, supportedLocales } from '../src/lib/env';
import { loadI18nextResource } from '../src/lib/i18next/loader';
import { nameSpaces } from '../src/lib/i18next/types';

i18n.use(initReactI18next).init({
  fallbackLng: defaultLocale,
  supportedLocales,
  debug: true,
});
loadI18nextResource(supportedLocales, defaultLocale, nameSpaces).then((resources) => {
  i18n.addResource(resources);
});
export default i18n;
