/** トップページ翻訳リソース ja */
export const jaTopPageTranslation = {
  '$top-page-title': '阿寒湖特別',
} as const;

/** トップページ翻訳キー */
export type TopPageTranslationKeys = keyof typeof jaTopPageTranslation;
/** トップページ翻訳リソース型 */
export type TopPageTranslationResource = Readonly<Record<TopPageTranslationKeys, string>>;

export default jaTopPageTranslation;
