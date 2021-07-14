/** 汎用翻訳リソース ja */
export const jaCommonTranslation = {
  馬番: '',
  馬名: '',
} as const;

/** 汎用翻訳キー */
export type CommonTranslationKeys = keyof typeof jaCommonTranslation;
/** 汎用翻訳リソース型 */
export type CommonTranslationResource = Readonly<Record<CommonTranslationKeys, string>>;

export default jaCommonTranslation;
