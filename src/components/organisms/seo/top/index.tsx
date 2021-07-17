import { NextSeo } from 'next-seo';
import { useTranslation } from 'react-i18next';

/** トップページSEO設定 */
export const TopPageSeo = (): JSX.Element => {
  const { t } = useTranslation('seo');
  const title = t`$site-names`;
  return <NextSeo title={title} />;
};
