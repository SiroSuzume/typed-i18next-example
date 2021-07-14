import type { SEOTranslationResource } from '@/locales/ja/seo';

/** SEO翻訳リソース en */
export const enSEOTranslation: SEOTranslationResource = {
  '$site-name': 'Example of type-safe i18next',
  '$site-description':
    'Next + i18next + typescript. An example of managing translation resources in a type-safe. https://github.com/SiroSuzume/typed-i18next-example',
} as const;

export default enSEOTranslation;
