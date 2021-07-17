import type { TopPageTranslationKeys } from '@/locales/ja/top';
import { useTranslationWrap } from '../wrapper';

/** トップページ翻訳用関数コンポーネント */
export function useTopPageTranslation() {
  return useTranslationWrap<TopPageTranslationKeys>('top');
}
