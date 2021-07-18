import { NextSeo } from 'next-seo';
import { useTranslation } from 'react-i18next';

/** トップページSEO設定 */
export const TopPageSeo = (): JSX.Element => {
  const { t } = useTranslation('top');
  const title = t('$top-page-title');
  return <NextSeo title={title} openGraph={{ title }} />;
};
