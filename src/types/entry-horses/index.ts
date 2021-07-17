import type { HorseNamesTranslationKeys } from '@/locales/ja/horse-names';

/** 出走馬情報 */
export type EntryHorse = {
  /** ID(JRA) */
  id: number;
  /** 馬番 */
  horseNumber: number;
  /** 馬名 */
  horseName: HorseNamesTranslationKeys;
};
