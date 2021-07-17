import i18next, { Resource, ResourceLanguage } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { NameSpace } from '../types';

/** 空のリソースを作成する */
export function initI18nextResource(supportedLocales: string[], nameSpaces: NameSpace[]): Resource {
  return supportedLocales.reduce((resource, locale) => {
    // eslint-disable-next-line no-param-reassign
    resource[locale] = nameSpaces.reduce((resourceKey, nameSpace) => {
      // eslint-disable-next-line no-param-reassign
      resourceKey[nameSpace] = {};
      return resourceKey;
    }, {} as ResourceLanguage);
    return resource;
  }, {} as Resource);
}

/** i18nモジュールの初期化。ネームスペースとデフォルトの言語設定を行う */
export function initializeI18n(supportedLocales: string[], nameSpaces: NameSpace[], defaultLocale: string) {
  const resources = initI18nextResource(supportedLocales, nameSpaces);
  return i18next.use(initReactI18next).init({
    ns: nameSpaces,
    supportedLngs: supportedLocales,
    fallbackLng: defaultLocale,
    lng: defaultLocale,
    // NOTE: addResourceBundleを使用し、リソースを追加する際に必要
    resources,
  });
}
