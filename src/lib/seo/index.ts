import { buildLocalizedUrlFromLocale } from '@/lib/url';

/** NextSeoのlanguageAlternatesの型がexportされていないので同じものを定義 */
export type LanguageAlternate = {
  /** hrefLang属性 */
  hrefLang: string;
  /** hrefLang属性に対応したURL */
  href: string;
};

/** 現在のパス、指定の言語、オリジンからhrefLang用オブジェクトを生成 */
export function buildLanguageAlternate(
  bathPath: string,
  hrefLang: string,
  origin: string,
  defaultLocale: string,
): LanguageAlternate {
  return {
    hrefLang,
    href: buildLocalizedUrlFromLocale(bathPath, hrefLang, origin, defaultLocale),
  };
}

/** 現在のパス、指定の言語一覧、オリジンから、x-default設定を含むhrefLang用オブジェクトを生成 */
export function buildLanguageAlternates(
  bathPath: string,
  hrefLangs: string[],
  origin: string,
  defaultLocale: string,
): LanguageAlternate[] {
  const xDefault = {
    hrefLang: 'x-default',
    href: buildLocalizedUrlFromLocale(bathPath, defaultLocale, origin, defaultLocale),
  };
  return [...hrefLangs.map((hrefLang) => buildLanguageAlternate(bathPath, hrefLang, origin, defaultLocale)), xDefault];
}
