import i18n, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { defaultLocale } from '@/lib/env';

/** i18nモジュールの初期化。ネームスペースとデフォルトの言語設定を行う */
export function initializeI18n(resources: Resource, lng: string) {
  return i18n.use(initReactI18next).init({
    resources,
    fallbackLng: defaultLocale,
    lng,
  });
}
