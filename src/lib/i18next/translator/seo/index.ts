import type { SEOTranslationKeys } from '@/locales/ja/seo';
import { useTranslationWrap } from '../wrapper';

/** SEO翻訳用関数コンポーネント */
export function useSEOTranslation() {
  return useTranslationWrap<SEOTranslationKeys>('seo');
}
