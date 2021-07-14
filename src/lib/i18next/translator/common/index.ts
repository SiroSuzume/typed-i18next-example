import type { CommonTranslationKeys } from '@/locales/ja/common';
import { useTranslationWrap } from '../wrapper';

/** 汎用翻訳用関数コンポーネント */
export function useCommonTranslation() {
  return useTranslationWrap<CommonTranslationKeys>('common');
}
