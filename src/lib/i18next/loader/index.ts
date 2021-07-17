import i18next, { ResourceKey } from 'i18next';
import { NameSpace } from '../types';

/** 指定された言語の指定されたネームスペースのリソースを取得する */
export async function dynamicImportTranslationResource(lng: string, ns: NameSpace): Promise<ResourceKey> {
  return (await import(`@/locales/${lng}/${ns}`)).default as ResourceKey;
}

export type ImportedResource = { locale: string; nameSpace: NameSpace; resource: ResourceKey };

export async function importResourceByLocaleAndNameSpace(
  locale: string,
  nameSpace: NameSpace,
): Promise<ImportedResource> {
  return {
    nameSpace,
    locale,
    resource: await dynamicImportTranslationResource(locale, nameSpace),
  };
}

/** 辞書をdynamic importする */
export async function importI18nextResource(
  currentLocales: string[],
  defaultLocale: string,
  nameSpaces: NameSpace[],
): Promise<ImportedResource[]> {
  const requiredLocales = Array.from(new Set([...currentLocales, defaultLocale]));
  const requiredResources = requiredLocales.flatMap((locale) => nameSpaces.map((nameSpace) => ({ nameSpace, locale })));
  return Promise.all(
    requiredResources.map(async ({ locale, nameSpace }) => importResourceByLocaleAndNameSpace(locale, nameSpace)),
  );
}

export function addImportedResources(resources: ImportedResource[]) {
  resources.forEach(({ locale, nameSpace, resource }) =>
    i18next.addResourceBundle(locale, nameSpace, resource, true, false),
  );
}
