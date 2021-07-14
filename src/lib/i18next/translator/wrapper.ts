import { TOptions } from 'i18next';
import { useTranslation } from 'react-i18next';
import type { NameSpace } from '../types';

/** useTranslationのラップ関数 */
export function useTranslationWrap<TranslationKey extends string>(nameSpace: NameSpace) {
  const { t: baseT, ...rest } = useTranslation(nameSpace);

  function t(key: TranslationKey, option: TOptions = {}): string {
    // tの引数の型チェックを有効にするため、元のt関数をラップする。空行が返却された場合、keyをそのまま使用する
    return baseT(key, { ns: nameSpace, ...option }) || key;
  }

  return { t, ...rest };
}
