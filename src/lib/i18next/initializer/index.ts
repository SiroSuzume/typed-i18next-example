import i18n, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';

/** i18nモジュールの初期化。ネームスペースとデフォルトの言語設定を行う */
export function initializeI18n(resources: Resource, locale: string, defaultLocale: string) {
  return i18n.use(initReactI18next).init({
    resources,
    fallbackLng: defaultLocale,
    lng: locale,
  });
}
