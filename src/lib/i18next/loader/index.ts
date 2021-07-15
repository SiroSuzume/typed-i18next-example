import type { Resource, ResourceLanguage, ResourceKey } from 'i18next';
import { NameSpace } from '../types';

/** 指定された言語の指定されたネームスペースのリソースを取得する */
export async function dynamicImportTranslationResource(lng: string, ns: NameSpace): Promise<ResourceKey> {
  return (await import(`@/locales/${lng}/${ns}`)).default as ResourceKey;
}

/** 指定された言語の指定されたネームスペース一覧のリソースを取得する */
export async function loadResourceLanguageByLocale(locale: string, nameSpaces: NameSpace[]): Promise<ResourceLanguage> {
  const resourceLanguages = await Promise.all<[string, ResourceKey]>(
    nameSpaces.map(async (ns) => [ns, await dynamicImportTranslationResource(locale, ns)]),
  );

  return resourceLanguages.reduce((result, [namespace, resource]) => {
    // eslint-disable-next-line no-param-reassign
    result[namespace] = resource;
    return result;
  }, {} as ResourceLanguage);
}

/** 辞書オブジェクトを読み込む */
export async function loadI18nextResource(
  currentLocales: string[],
  defaultLocale: string,
  nameSpaces: NameSpace[],
): Promise<Resource> {
  const locales = Array.from(new Set([...currentLocales, defaultLocale]));
  const rawResources = await Promise.all<[string, ResourceLanguage]>(
    locales.map(async (locale) => [locale, await loadResourceLanguageByLocale(locale, nameSpaces)]),
  );
  return rawResources.reduce((result, [lng, resource]) => {
    // eslint-disable-next-line no-param-reassign
    result[lng] = resource;
    return result;
  }, {} as Resource);
}
