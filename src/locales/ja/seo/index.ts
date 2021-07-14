/** SEO翻訳リソース ja */
export const jaSEOTranslation = {
  '$site-name': '型安全なi18nextのExample',
  '$site-description':
    'Next + i18next + typescriptで型安全に翻訳リソースを管理するexample. https://github.com/SiroSuzume/typed-i18next-example',
} as const;

/** SEO翻訳キー */
export type SEOTranslationKeys = keyof typeof jaSEOTranslation;
/** SEO翻訳リソース型 */
export type SEOTranslationResource = Readonly<Record<SEOTranslationKeys, string>>;

export default jaSEOTranslation;
