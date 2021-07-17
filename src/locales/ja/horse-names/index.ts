/** 馬名翻訳リソース ja */
export const jaHorseNamesTranslation = {
  ゴールドシップ: '',
  ステイゴールド: '',
  オルフェーヴル: '',
  カワカミプリンセス: '',
  ナカヤマフェスタ: '',
  スイープトウショウ: '',
  エアシャカール: '',
  ドリームジャーニー: '',
} as const;

/** 馬名翻訳キー */
export type HorseNamesTranslationKeys = keyof typeof jaHorseNamesTranslation;
/** 馬名翻訳リソース型 */
export type HorseNamesTranslationResource = Readonly<Record<HorseNamesTranslationKeys, string>>;

export default jaHorseNamesTranslation;
