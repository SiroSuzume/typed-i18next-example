import type { HorseNamesTranslationKeys } from '@/locales/ja/horse-names';
import { useTranslationWrap } from '../wrapper';

/** 馬名翻訳用関数コンポーネント */
export function useHorseNamesTranslation() {
  return useTranslationWrap<HorseNamesTranslationKeys>('horse-names');
}
