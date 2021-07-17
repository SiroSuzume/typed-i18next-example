import { useTopPageTranslation } from '@/lib/i18next/translator/top';
import { NextSeo } from 'next-seo';

/** トップページSEO設定 */
export const TopPageSeo = (): JSX.Element => {
  const { t } = useTopPageTranslation();
  return <NextSeo title={t('$top-page-title')} />;
};
