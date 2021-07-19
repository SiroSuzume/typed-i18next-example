import { buildLocalizedUrlFromLocale } from '@/lib/url';
import type { DefaultSeoProps } from 'next-seo';

/** NextSeoのlanguageAlternatesの型がexportされていないため型計算 */
export type LanguageAlternate = Exclude<DefaultSeoProps['languageAlternates'], undefined>[number];

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
